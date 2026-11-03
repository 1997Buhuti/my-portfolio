"use client";

import { Send } from "lucide-react";
import {
  startTransition,
  useActionState,
  useEffect,
  useRef,
  type FormEvent,
} from "react";

import {
  sendContactMessage,
  type ContactState,
} from "@/app/actions/contact";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const initialState: ContactState = { status: "idle" };

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, formAction, pending] = useActionState(
    sendContactMessage,
    initialState,
  );

  // Submit through the action manually so the fields keep their values when
  // sending fails. React resets uncontrolled forms after every form action.
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    startTransition(() => formAction(formData));
  }

  useEffect(() => {
    if (state.status === "success") formRef.current?.reset();
  }, [state]);

  const errors = state.fieldErrors ?? {};

  return (
    <form
      ref={formRef}
      className="flex flex-col gap-4"
      onSubmit={handleSubmit}
      noValidate
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <Label
            htmlFor="name"
            className="font-mono text-[11px] tracking-wide text-on-surface-variant"
          >
            <span className="text-primary lg:hidden">$ </span>
            <span className="hidden lg:inline">{"// "}</span>
            Name
          </Label>
          <Input
            id="name"
            name="name"
            required
            placeholder="Your name"
            aria-invalid={Boolean(errors.name)}
            className="border-hairline bg-surface-container-high font-mono text-sm text-on-surface placeholder:text-outline focus-visible:border-primary focus-visible:ring-primary/40"
          />
          {errors.name && (
            <p className="font-mono text-[11px] text-error">{errors.name}</p>
          )}
        </div>
        <div className="flex flex-col gap-1.5">
          <Label
            htmlFor="email"
            className="font-mono text-[11px] tracking-wide text-on-surface-variant"
          >
            <span className="text-primary lg:hidden">$ </span>
            <span className="hidden lg:inline">{"// "}</span>
            Email
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            aria-invalid={Boolean(errors.email)}
            className="border-hairline bg-surface-container-high font-mono text-sm text-on-surface placeholder:text-outline focus-visible:border-primary focus-visible:ring-primary/40"
          />
          {errors.email && (
            <p className="font-mono text-[11px] text-error">{errors.email}</p>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-1.5">
        <Label
          htmlFor="message"
          className="font-mono text-[11px] tracking-wide text-on-surface-variant"
        >
          <span className="text-primary lg:hidden">$ </span>
          <span className="hidden lg:inline">{"// "}</span>
          Project scope &amp; timeline
        </Label>
        <Textarea
          id="message"
          name="body"
          required
          rows={4}
          placeholder="Architecture needs, team size, and target start date…"
          aria-invalid={Boolean(errors.body)}
          className="resize-none border-hairline bg-surface-container-high font-mono text-sm text-on-surface placeholder:text-outline focus-visible:border-primary focus-visible:ring-primary/40"
        />
        {errors.body && (
          <p className="font-mono text-[11px] text-error">{errors.body}</p>
        )}
      </div>
      <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="hidden font-mono text-[11px] text-on-surface-variant sm:block">
          Encrypted via TLS 1.3
        </p>
        <div className="flex flex-col gap-3 sm:items-end">
          {state.status === "success" && (
            <p role="status" className="font-mono text-xs text-primary">
              {state.message}
            </p>
          )}
          {state.status === "error" && state.message && (
            <p role="alert" className="font-mono text-xs text-error">
              {state.message}
            </p>
          )}
          <button
            type="submit"
            disabled={pending}
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 font-mono text-xs font-semibold tracking-wider text-on-primary shadow-[0_0_24px_rgba(45,212,191,0.25)] transition-all hover:bg-primary-fixed active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto sm:rounded-lg"
          >
            <Send className="size-4" />
            {pending ? "Sending…" : "Dispatch message"}
          </button>
        </div>
      </div>
    </form>
  );
}
