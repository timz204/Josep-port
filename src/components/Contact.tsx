"use client";

import { useState, type FormEvent } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { site } from "@/data/portfolio";
import { Reveal } from "@/components/Reveal";
import { useI18n } from "@/components/LanguageProvider";
import { Icons } from "@/lib/icons";
import { easeOut } from "@/lib/motion";
import { interpolate } from "@/i18n";

export function Contact() {
  const reduceMotion = useReducedMotion();
  const { m } = useI18n();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const channels = [
    {
      id: "email" as const,
      value: site.email,
      href: `mailto:${site.email}?subject=${encodeURIComponent(m.contact.subjectFallback)}`,
      icon: Icons.mail,
      external: false,
    },
    {
      id: "phone" as const,
      value: site.phoneDisplay,
      href: site.whatsapp,
      icon: Icons.zap,
      external: true,
    },
    {
      id: "linkedin" as const,
      value: "LinkedIn",
      href: site.linkedin,
      icon: Icons.linkedin,
      external: true,
    },
    {
      id: "resume" as const,
      value: m.contact.channels.resume.value,
      href: site.resumeUrl,
      icon: Icons.download,
      external: true,
    },
  ];

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const subject = encodeURIComponent(
      name.trim()
        ? interpolate(m.contact.subjectFrom, { name: name.trim() })
        : m.contact.subjectFallback,
    );
    const body = encodeURIComponent(
      [
        message.trim() || m.contact.noMessage,
        "",
        name.trim() ? `— ${name.trim()}` : "",
        email.trim() ? email.trim() : "",
      ]
        .filter(Boolean)
        .join("\n"),
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section-pad section-frame">
      <div className="section-shell">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl border border-line bg-surface/85 p-5 shadow-[var(--shadow-lg)] backdrop-blur-md sm:p-8 md:p-10 lg:p-12">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -right-10 top-0 h-56 w-56 rounded-full bg-[radial-gradient(circle,var(--glow-a),transparent_70%)] blur-2xl" />
              <div className="absolute -left-10 bottom-0 h-48 w-48 rounded-full bg-[radial-gradient(circle,var(--glow-b),transparent_70%)] blur-2xl" />
            </div>

            <div className="relative grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-12 xl:gap-16">
              <div className="min-w-0">
                <p className="section-eyebrow">
                  <Icons.mail size={12} />
                  {m.contact.eyebrow}
                </p>
                <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
                  {m.contact.title}
                </h2>
                <p className="mt-4 max-w-md text-muted">
                  {interpolate(m.contact.description, {
                    location: m.site.location,
                  })}
                </p>

                <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                  {channels.map((channel, index) => {
                    const Icon = channel.icon;
                    const copy = m.contact.channels[channel.id];
                    return (
                      <motion.li
                        key={channel.id}
                        className="min-w-0"
                        initial={reduceMotion ? false : { opacity: 0, y: 14 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{
                          delay: 0.08 + index * 0.06,
                          duration: 0.45,
                          ease: easeOut,
                        }}
                      >
                        <motion.a
                          href={channel.href}
                          target={channel.external ? "_blank" : undefined}
                          rel={channel.external ? "noopener noreferrer" : undefined}
                          className="group flex h-full min-h-[5.5rem] flex-col gap-1 rounded-xl border border-line bg-canvas/55 p-4 transition-colors hover:border-accent hover:bg-canvas/80"
                          whileHover={reduceMotion ? undefined : { y: -3 }}
                          whileTap={reduceMotion ? undefined : { scale: 0.985 }}
                          transition={{ duration: 0.22, ease: easeOut }}
                        >
                          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-teal">
                            <Icon size={14} className="text-accent" />
                            {copy.label}
                          </span>
                          <span className="truncate text-sm font-medium text-ink group-hover:text-accent">
                            {channel.value}
                          </span>
                          <span className="text-xs text-muted">{copy.hint}</span>
                        </motion.a>
                      </motion.li>
                    );
                  })}
                </ul>
              </div>

              <div className="min-w-0 rounded-xl border border-line bg-canvas/40 p-5 sm:p-6 md:p-7">
                <p className="font-display text-lg font-semibold text-ink">
                  {m.contact.formTitle}
                </p>
                <p className="mt-1.5 text-sm text-muted">{m.contact.formHint}</p>

                <form className="mt-6 space-y-4" onSubmit={onSubmit}>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="block min-w-0">
                      <span className="mb-1.5 block text-xs font-medium uppercase tracking-[0.1em] text-muted">
                        {m.contact.nameLabel}
                      </span>
                      <input
                        type="text"
                        name="name"
                        autoComplete="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder={m.contact.namePlaceholder}
                        className="contact-field w-full"
                      />
                    </label>
                    <label className="block min-w-0">
                      <span className="mb-1.5 block text-xs font-medium uppercase tracking-[0.1em] text-muted">
                        {m.contact.emailLabel}
                      </span>
                      <input
                        type="email"
                        name="email"
                        autoComplete="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder={m.contact.emailPlaceholder}
                        className="contact-field w-full"
                      />
                    </label>
                  </div>

                  <label className="block min-w-0">
                    <span className="mb-1.5 block text-xs font-medium uppercase tracking-[0.1em] text-muted">
                      {m.contact.messageLabel}
                    </span>
                    <textarea
                      name="message"
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder={m.contact.messagePlaceholder}
                      className="contact-field w-full resize-y min-h-[8rem]"
                    />
                  </label>

                  <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-xs text-muted">{m.contact.formAside}</p>
                    <button type="submit" className="btn-primary w-full justify-center sm:w-auto">
                      <Icons.mail size={16} />
                      {m.contact.submit}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
