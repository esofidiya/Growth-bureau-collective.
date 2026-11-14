"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/cn";

/**
 * Accessible modal built on the native <dialog> element:
 * focus trapping, Escape to close and the backdrop come from the browser.
 */
export function Modal({
  open,
  onClose,
  title,
  description,
  children,
  className,
}: {
  open: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      onClick={(e) => {
        if (e.target === ref.current) onClose();
      }}
      aria-labelledby="modal-title"
      aria-describedby={description ? "modal-desc" : undefined}
      className={cn(
        "m-auto w-[calc(100%-2rem)] max-w-lg rounded-md border border-line-dark bg-charcoal p-0 text-cream shadow-gold backdrop:bg-ink/80 backdrop:backdrop-blur-sm",
        className,
      )}
    >
      <div className="p-6 sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <h2 id="modal-title" className="font-display text-2xl font-semibold">
            {title}
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close dialog"
            className="-mr-2 -mt-1 inline-flex size-11 items-center justify-center rounded-sm text-smoke transition-colors hover:text-gold"
          >
            <X className="size-5" aria-hidden />
          </button>
        </div>
        {description && (
          <p id="modal-desc" className="mt-2 text-sm text-smoke">
            {description}
          </p>
        )}
        <div className="mt-6">{children}</div>
      </div>
    </dialog>
  );
}
