import { expect, test } from "@playwright/test";

const pages = [
  { path: "/about", h1: /where ambition becomes identity/i },
  { path: "/services", h1: /expertise that builds influence/i },
  { path: "/services/brand-strategy", h1: /brand strategy/i },
  { path: "/packages", h1: /choose the level of support/i },
  { path: "/portfolio", h1: /brands shaped with intention/i },
  { path: "/growth-hub", h1: /your private platform/i },
  { path: "/academy", h1: /learn to build a brand/i },
  { path: "/insights", h1: /thinking on brand/i },
  { path: "/contact", h1: /let’s talk/i },
  { path: "/book", h1: /discover your growth potential/i },
  { path: "/privacy", h1: /privacy policy/i },
  { path: "/terms", h1: /terms & conditions/i },
];

test.describe("public pages", () => {
  for (const p of pages) {
    test(`${p.path} renders with metadata and no errors`, async ({ page }) => {
      const errors: string[] = [];
      page.on("pageerror", (e) => errors.push(e.message));
      page.on("console", (m) => m.type() === "error" && errors.push(m.text()));
      const res = await page.goto(p.path);
      expect(res?.status()).toBe(200);
      await expect(page.getByRole("heading", { level: 1 })).toHaveText(p.h1);
      await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", new RegExp(`${p.path}$`));
      expect(await page.locator('meta[name="description"]').getAttribute("content")).toBeTruthy();
      expect(await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth)).toBeLessThanOrEqual(0);
      expect(errors).toEqual([]);
    });
  }

  test("every main-nav link reaches a real page", async ({ page, isMobile }) => {
    test.skip(isMobile, "desktop nav");
    await page.goto("/");
    const hrefs = await page.getByRole("navigation", { name: "Main" }).getByRole("link").evaluateAll((as) => as.map((a) => a.getAttribute("href")!));
    expect(hrefs.length).toBe(7);
    for (const href of hrefs) {
      await page.goto(href);
      await expect(page.getByText("Coming soon", { exact: true })).toHaveCount(0);
      await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    }
  });

  test("unknown routes return a branded 404", async ({ page }) => {
    const res = await page.goto("/does-not-exist");
    expect(res?.status()).toBe(404);
    await expect(page.getByRole("heading", { level: 1 })).toHaveText("Page not found");
  });

  test("unknown service slugs show not-found and are kept out of search", async ({ page }) => {
    await page.goto("/services/does-not-exist");
    await expect(page.getByRole("heading", { level: 1 })).toHaveText("Page not found");
    const robots = await page.locator('meta[name="robots"]').evaluateAll((ms) => ms.map((m) => m.getAttribute("content") ?? ""));
    expect(robots.some((c) => c.includes("noindex"))).toBe(true);
  });

  test("packages show the owner's prices", async ({ page }) => {
    await page.goto("/packages");
    for (const price of ["£299", "£599", "£999"]) await expect(page.getByText(price, { exact: true }).first()).toBeVisible();
    await page.goto("/growth-hub");
    for (const price of ["£9.99", "£19.99", "£39.99"]) await expect(page.getByText(price, { exact: true })).toBeVisible();
  });

  test("about page shows the owner's story", async ({ page }) => {
    await page.goto("/about");
    await expect(page.getByText("GBC was created to bridge the gap between ambition and influence", { exact: false })).toBeVisible();
  });
});

test.describe("forms", () => {
  test("contact form validates and never fakes success", async ({ page }) => {
    await page.goto("/contact");
    await page.getByRole("button", { name: "Send message" }).click();
    await expect(page.getByText("Your name is required.")).toBeVisible();
    await expect(page.getByText("Email is required.")).toBeVisible();
    await expect(page.getByText("Please confirm you have read the privacy policy.")).toBeVisible();

    await page.getByLabel("Name *", { exact: true }).fill("Test Person");
    await page.getByLabel("Email *").fill("not-an-email");
    await page.getByLabel("Subject *").fill("Hello");
    await page.getByLabel("Message *").fill("I would like to know more about your services.");
    await page.getByRole("button", { name: "Send message" }).click();
    await expect(page.getByText("Please enter a valid email address.")).toBeVisible();
    await expect(page.getByLabel("Name *", { exact: true })).toHaveValue("Test Person"); // values kept

    await page.getByLabel("Email *").fill("test@example.com");
    await page.getByLabel(/I have read the/).check();
    await page.getByRole("button", { name: "Send message" }).click();
    await expect(page.getByText("Your message has not been sent.")).toBeVisible();
    await expect(page.getByRole("link", { name: /Email growthbureaucollective@gmail.com/ })).toHaveAttribute("href", /^mailto:growthbureaucollective@gmail\.com\?subject=Hello/);
    await expect(page.getByText(/we have received your message/i)).toHaveCount(0);
  });

  test("booking form validates services and date, and prefills the package", async ({ page }) => {
    await page.goto("/book?package=elevate");
    await expect(page.getByLabel("Package of interest")).toHaveValue("elevate");
    await page.getByLabel("Name *", { exact: true }).fill("Test Person");
    await page.getByLabel("Email *").fill("test@example.com");
    await page.getByLabel("Business name *").fill("Test Co");
    await page.getByLabel("Industry *").fill("Retail");
    await page.getByLabel("Business goals *").fill("Grow our Instagram audience and generate leads.");
    await page.getByLabel(/I have read the/).check();
    await page.getByRole("button", { name: "Request consultation" }).click();
    await expect(page.getByText("Please choose at least one service.")).toBeVisible();
    await expect(page.getByText("Please choose a preferred date.")).toBeVisible();

    await page.getByRole("checkbox", { name: "Brand Strategy" }).check();
    const d = new Date(Date.now() + 7 * 864e5).toISOString().slice(0, 10);
    await page.getByLabel("Preferred consultation date *").fill(d);
    await page.getByLabel("Website").fill("not a url");
    await page.getByRole("button", { name: "Request consultation" }).click();
    await expect(page.getByText("Please enter a valid website address.")).toBeVisible();
    await expect(page.getByRole("checkbox", { name: "Brand Strategy" })).toBeChecked();

    await page.getByLabel("Website").fill("testco.co.uk");
    await page.getByRole("button", { name: "Request consultation" }).click();
    await expect(page.getByText("Your message has not been sent.")).toBeVisible();
  });
});
