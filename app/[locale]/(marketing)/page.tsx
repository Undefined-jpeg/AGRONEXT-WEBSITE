import {
  ArrowRight,
  Cpu,
  BrainCircuit,
  Cloud,
  Smartphone,
  Droplets,
  DollarSign,
  Layers,
  Radio,
  Sparkles,
  Bell,
  CircleCheck,
  Mail,
  Linkedin,
  Twitter,
  Instagram,
} from "lucide-react"
import { setRequestLocale } from "next-intl/server"
import { useTranslations } from "next-intl"
import { Link } from "@/lib/i18n/routing"
import { Button } from "@/components/ui/button"
import { FadeInSection } from "@/components/landing/motion-section"
import { DemoForm } from "@/components/landing/demo-form"

interface PageProps {
  params: { locale: string }
}

export default function LandingPage({ params: { locale } }: PageProps) {
  setRequestLocale(locale)
  const t = useTranslations("landing")

  const stats = [
    {
      value: t("stats.accuracy_value"),
      label: t("stats.accuracy_label"),
      sub: t("stats.accuracy_sub"),
    },
    {
      value: t("stats.speed_value"),
      label: t("stats.speed_label"),
      sub: t("stats.speed_sub"),
    },
    {
      value: t("stats.water_value"),
      label: t("stats.water_label"),
      sub: t("stats.water_sub"),
    },
  ]

  const problemCards = [
    {
      icon: Droplets,
      tone: "text-accent2",
      value: t("problem.cards.water.value"),
      label: t("problem.cards.water.label"),
      description: t("problem.cards.water.description"),
    },
    {
      icon: DollarSign,
      tone: "text-amber-400",
      value: t("problem.cards.cost.value"),
      label: t("problem.cards.cost.label"),
      description: t("problem.cards.cost.description"),
    },
    {
      icon: Layers,
      tone: "text-indigo-400",
      value: t("problem.cards.market.value"),
      label: t("problem.cards.market.label"),
      description: t("problem.cards.market.description"),
    },
  ]

  const productLayers = [
    {
      num: "01",
      icon: Cpu,
      title: t("product.layers.hardware.title"),
      short: t("product.layers.hardware.short"),
      detail: t("product.layers.hardware.detail"),
      highlighted: true,
    },
    {
      num: "02",
      icon: BrainCircuit,
      title: t("product.layers.ai.title"),
      short: t("product.layers.ai.short"),
      detail: t("product.layers.ai.detail"),
    },
    {
      num: "03",
      icon: Cloud,
      title: t("product.layers.cloud.title"),
      short: t("product.layers.cloud.short"),
      detail: t("product.layers.cloud.detail"),
    },
    {
      num: "04",
      icon: Smartphone,
      title: t("product.layers.app.title"),
      short: t("product.layers.app.short"),
      detail: t("product.layers.app.detail"),
    },
  ]

  const steps = [
    {
      icon: Radio,
      title: t("howItWorks.steps.one.title"),
      description: t("howItWorks.steps.one.description"),
    },
    {
      icon: Sparkles,
      title: t("howItWorks.steps.two.title"),
      description: t("howItWorks.steps.two.description"),
    },
    {
      icon: Bell,
      title: t("howItWorks.steps.three.title"),
      description: t("howItWorks.steps.three.description"),
    },
    {
      icon: CircleCheck,
      title: t("howItWorks.steps.four.title"),
      description: t("howItWorks.steps.four.description"),
    },
  ]

  const whyCards = [
    {
      tag: t("why.cards.price.tag"),
      tagTone: "bg-amber-400/10 text-amber-300",
      value: t("why.cards.price.value"),
      valueTone: "text-amber-400",
      title: t("why.cards.price.title"),
      description: t("why.cards.price.description"),
    },
    {
      tag: t("why.cards.academic.tag"),
      tagTone: "bg-indigo-400/10 text-indigo-300",
      value: t("why.cards.academic.value"),
      valueTone: "text-indigo-400",
      title: t("why.cards.academic.title"),
      description: t("why.cards.academic.description"),
    },
    {
      tag: t("why.cards.efficiency.tag"),
      tagTone: "bg-accent2/10 text-accent2",
      value: t("why.cards.efficiency.value"),
      valueTone: "text-accent2",
      title: t("why.cards.efficiency.title"),
      description: t("why.cards.efficiency.description"),
    },
  ]

  const quarters = (["q1", "q2", "q3", "q4"] as const).map((q, i) => ({
    key: q,
    label: t(`roadmap.quarters.${q}.label`),
    title: t(`roadmap.quarters.${q}.title`),
    items: t.raw(`roadmap.quarters.${q}.items`) as string[],
    state: i === 0 ? "done" : i === 1 ? "active" : "upcoming",
  }))

  return (
    <>
      {/* Hero — light */}
      <section className="relative overflow-hidden bg-background text-foreground">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(45,106,79,0.9) 1px, transparent 1px), linear-gradient(90deg, rgba(45,106,79,0.9) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage:
              "radial-gradient(ellipse 80% 60% at 50% 35%, black 55%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 60% at 50% 35%, black 55%, transparent 100%)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(82,183,136,0.22), transparent 70%)",
          }}
        />

        <div className="container relative flex flex-col items-center py-24 pb-40 text-center md:py-32 md:pb-56">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium text-primary/90 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            {t("hero.badge")}
          </span>

          <h1 className="mt-8 max-w-4xl text-4xl font-black leading-[1.05] tracking-tight text-balance md:text-6xl lg:text-7xl">
            {t("hero.title_start")}{" "}
            <span className="font-serif italic font-normal text-accent2">
              {t("hero.title_italic")}
            </span>{" "}
            {t("hero.title_middle")}{" "}
            <span className="font-black text-accent2">
              {t("hero.title_highlight")}
            </span>{" "}
            {t("hero.title_end")}
          </h1>

          <p className="mt-6 max-w-2xl text-base text-muted-foreground md:text-lg">
            {t("hero.subtitle")}
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground shadow-lg shadow-primary/25 hover:bg-primary/90"
            >
              <Link href="#demo">
                {t("hero.cta_demo")}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-border bg-card/60 text-foreground backdrop-blur hover:bg-card"
            >
              <Link href="#how-it-works">{t("hero.cta_how")} →</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats band */}
      <section className="relative -mt-24 md:-mt-32">
        <div className="container">
          <div className="mx-auto max-w-5xl rounded-2xl border border-border bg-card/95 shadow-xl backdrop-blur">
            <div className="grid grid-cols-1 divide-y divide-border sm:grid-cols-3 sm:divide-x sm:divide-y-0">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="flex flex-col items-center px-6 py-8 text-center"
                >
                  <div className="text-3xl font-bold tracking-tight text-primary md:text-4xl">
                    {s.value}
                  </div>
                  <div className="mt-2 text-sm font-semibold text-foreground">
                    {s.label}
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground">
                    {s.sub}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="relative mt-24 bg-[#0B1120] text-white md:mt-32">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage:
              "radial-gradient(ellipse 80% 60% at 30% 30%, black 45%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 60% at 30% 30%, black 45%, transparent 100%)",
          }}
        />

        <div className="container relative py-24 md:py-32">
          <FadeInSection>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent2">
              {t("problem.eyebrow")}
            </p>
            <h2 className="mt-4 max-w-3xl text-4xl font-black leading-[1.1] tracking-tight md:text-5xl lg:text-6xl">
              {t("problem.title_a")}{" "}
              <span className="block font-serif text-5xl italic font-normal text-accent2 md:text-6xl lg:text-7xl">
                {t("problem.title_b")}
              </span>
            </h2>
            <p className="mt-6 max-w-xl text-sm text-white/70 md:text-base">
              {t("problem.description")}
            </p>
          </FadeInSection>

          <div className="mt-16 grid gap-4 md:grid-cols-3">
            {problemCards.map((c, i) => {
              const Icon = c.icon
              return (
                <FadeInSection key={c.label} delay={i * 0.08}>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
                    <div className={`${c.tone} mb-4`}>
                      <Icon className="h-7 w-7" strokeWidth={1.5} />
                    </div>
                    <div className={`text-5xl font-black tracking-tight ${c.tone} md:text-6xl`}>
                      {c.value}
                    </div>
                    <div className="mt-4 text-sm font-semibold text-white">
                      {c.label}
                    </div>
                    <p className="mt-3 text-xs text-white/60 md:text-sm">
                      {c.description}
                    </p>
                  </div>
                </FadeInSection>
              )
            })}
          </div>
        </div>
      </section>

      {/* Product */}
      <section className="relative bg-[#0B1120] text-white">
        <div className="container relative py-24 md:py-32">
          <div className="grid items-start gap-12 lg:grid-cols-[1.15fr_1fr]">
            <FadeInSection>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent2">
                {t("product.eyebrow")}
              </p>
              <h2 className="mt-4 text-4xl font-black leading-[1.1] tracking-tight md:text-5xl lg:text-6xl">
                {t("product.title_a")}{" "}
                <span className="block font-serif italic font-normal text-accent2">
                  {t("product.title_b")}
                </span>
              </h2>
              <p className="mt-6 max-w-lg text-sm text-white/70 md:text-base">
                {t("product.description")}
              </p>

              <div className="mt-10 space-y-3">
                {productLayers.map((layer, i) => {
                  const Icon = layer.icon
                  return (
                    <FadeInSection key={layer.num} delay={i * 0.06}>
                      <div
                        className={`group flex items-start gap-4 rounded-xl border p-4 transition-colors md:p-5 ${
                          layer.highlighted
                            ? "border-accent2/40 bg-accent2/5"
                            : "border-white/10 bg-white/[0.03] hover:border-white/20"
                        }`}
                      >
                        <div
                          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-xs font-mono ${
                            layer.highlighted
                              ? "bg-accent2 text-accent2-foreground"
                              : "bg-white/5 text-white/50"
                          }`}
                        >
                          {layer.num}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <Icon
                              className={`h-4 w-4 ${
                                layer.highlighted ? "text-accent2" : "text-white/60"
                              }`}
                              strokeWidth={1.5}
                            />
                            <h3 className="font-semibold text-white">
                              {layer.title}
                            </h3>
                          </div>
                          <p className="mt-1 text-xs text-white/60 md:text-sm">
                            {layer.short}
                          </p>
                          {layer.highlighted ? (
                            <p className="mt-3 text-xs leading-relaxed text-white/70 md:text-sm">
                              {layer.detail}
                            </p>
                          ) : null}
                        </div>
                        {layer.highlighted ? (
                          <span className="mt-1 h-2 w-2 rounded-full bg-accent2 shadow-[0_0_12px_theme(colors.accent2.DEFAULT)]" />
                        ) : null}
                      </div>
                    </FadeInSection>
                  )
                })}
              </div>
            </FadeInSection>

            {/* Phone mockup */}
            <FadeInSection delay={0.15}>
              <div className="relative mx-auto max-w-sm lg:ml-auto lg:mr-0">
                <div className="absolute -right-2 -top-2 z-10 rounded-md bg-accent2 px-2.5 py-1 text-[10px] font-semibold text-accent2-foreground shadow-lg">
                  {t("product.phone.badge")}
                </div>
                <div className="rounded-[2.5rem] border border-white/10 bg-gradient-to-b from-[#1a2040] to-[#0B1120] p-3 shadow-2xl shadow-accent2/10">
                  <div className="rounded-[2rem] border border-white/5 bg-[#0f1630] p-5">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="text-[10px] text-white/50">
                          {t("product.phone.greeting")}
                        </div>
                        <div className="text-lg font-bold text-white">
                          {t("product.phone.user")}{" "}
                          <span className="text-yellow-400">👋</span>
                        </div>
                      </div>
                      <span className="rounded-full bg-accent2/10 px-2 py-0.5 text-[10px] font-medium text-accent2">
                        {t("product.phone.live")}
                      </span>
                    </div>

                    <div className="mt-4 rounded-xl border border-accent2/30 bg-accent2/5 p-3">
                      <p className="text-[11px] leading-relaxed text-white/85">
                        <span className="mr-1 inline-block h-1.5 w-1.5 rounded-full bg-accent2 align-middle" />
                        {t("product.phone.alert")}
                      </p>
                    </div>

                    <div className="mt-4 grid grid-cols-2 gap-2.5">
                      {[
                        {
                          k: "humidity",
                          v: "72",
                          u: "%",
                          tone: "text-white",
                        },
                        {
                          k: "temperature",
                          v: "24",
                          u: "°c",
                          tone: "text-white",
                        },
                        {
                          k: "soil",
                          v: "38",
                          u: "%",
                          tone: "text-amber-400",
                        },
                        {
                          k: "savings",
                          v: "41",
                          u: "%",
                          tone: "text-accent2",
                        },
                      ].map((m) => (
                        <div
                          key={m.k}
                          className="rounded-lg bg-white/[0.03] p-3"
                        >
                          <div className="text-[10px] text-white/50">
                            {t(`product.phone.${m.k}` as never)}
                          </div>
                          <div className={`mt-1 text-xl font-bold ${m.tone}`}>
                            {m.v}
                            <span className="ml-0.5 text-xs text-white/50">
                              {m.u}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 rounded-xl bg-white/[0.03] p-3">
                      <div className="text-[10px] text-white/50">
                        {t("product.phone.weeklyTitle")}
                      </div>
                      <div className="mt-2 flex h-1.5 gap-1">
                        {[60, 75, 80, 70, 90, 85, 95].map((w, i) => (
                          <div
                            key={i}
                            className="flex-1 rounded-full bg-accent2/70"
                            style={{ opacity: w / 100 }}
                          />
                        ))}
                      </div>
                    </div>

                    <div className="mt-3 flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.02] p-3">
                      <div>
                        <div className="text-[10px] text-white/50">
                          {t("product.phone.model")}
                        </div>
                        <div className="text-[11px] font-semibold text-white">
                          {t("product.phone.accuracyLabel")}
                        </div>
                        <div className="text-xl font-bold text-accent2">94.2%</div>
                      </div>
                      <div className="rounded-md bg-accent2 px-3 py-2 text-[11px] font-semibold text-accent2-foreground">
                        ✓ {t("product.phone.cta")}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section
        id="how-it-works"
        className="relative scroll-mt-24 bg-[#0B1120] text-white"
      >
        <div className="container relative py-24 md:py-32">
          <FadeInSection className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent2">
              {t("howItWorks.eyebrow")}
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
              {t("howItWorks.title")}
            </h2>
            <p className="mt-4 text-sm text-white/70 md:text-base">
              {t("howItWorks.subtitle")}
            </p>
          </FadeInSection>

          <div className="relative mt-16">
            <div
              aria-hidden
              className="absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-transparent via-accent2/40 to-transparent md:block"
            />
            <div className="grid gap-10 md:grid-cols-4">
              {steps.map((step, i) => {
                const Icon = step.icon
                return (
                  <FadeInSection key={step.title} delay={i * 0.08}>
                    <div className="relative flex flex-col items-center text-center">
                      <div className="relative">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]">
                          <Icon
                            className="h-5 w-5 text-white/80"
                            strokeWidth={1.5}
                          />
                        </div>
                        <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-accent2 text-[10px] font-bold text-accent2-foreground">
                          {i + 1}
                        </span>
                      </div>
                      <h3 className="mt-6 text-base font-semibold text-white">
                        {step.title}
                      </h3>
                      <p className="mt-2 max-w-[14rem] text-xs text-white/60 md:text-sm">
                        {step.description}
                      </p>
                    </div>
                  </FadeInSection>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Why AgroNext */}
      <section className="relative bg-[#0B1120] text-white">
        <div className="container relative py-24 md:py-32">
          <FadeInSection className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent2">
              {t("why.eyebrow")}
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
              {t("why.title_a")}{" "}
              <span className="font-serif italic font-normal text-accent2">
                {t("why.title_b")}
              </span>
              {t("why.title_c")}
            </h2>
          </FadeInSection>

          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {whyCards.map((c, i) => (
              <FadeInSection key={c.title} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
                  <span
                    className={`inline-flex rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-wider ${c.tagTone}`}
                  >
                    {c.tag}
                  </span>
                  <div
                    className={`mt-6 text-4xl font-black tracking-tight md:text-5xl ${c.valueTone}`}
                  >
                    {c.value}
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-white md:text-lg">
                    {c.title}
                  </h3>
                  <p className="mt-3 text-xs leading-relaxed text-white/65 md:text-sm">
                    {c.description}
                  </p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="relative bg-[#0B1120] text-white">
        <div className="container relative py-24 md:py-32">
          <FadeInSection>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent2">
              {t("roadmap.eyebrow")}
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
              {t("roadmap.title_a")}{" "}
              <span className="block font-serif italic font-normal text-accent2">
                {t("roadmap.title_b")}
              </span>
            </h2>
          </FadeInSection>

          <div className="mt-16">
            <div className="relative">
              <div
                aria-hidden
                className="absolute left-0 right-0 top-2 h-px bg-white/10"
              />
              <div
                aria-hidden
                className="absolute left-0 top-2 h-px bg-gradient-to-r from-accent2 to-amber-400"
                style={{ width: "40%" }}
              />
              <div className="grid gap-10 md:grid-cols-4">
                {quarters.map((q) => (
                  <div key={q.key} className="relative pt-6">
                    <span
                      aria-hidden
                      className={`absolute left-0 top-0 h-4 w-4 rounded-full border-2 ${
                        q.state === "done"
                          ? "border-accent2 bg-accent2 shadow-[0_0_14px_theme(colors.accent2.DEFAULT)]"
                          : q.state === "active"
                            ? "border-amber-400 bg-amber-400"
                            : "border-white/20 bg-[#0B1120]"
                      }`}
                    />
                    <div className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/50">
                      {q.label}
                    </div>
                    <div className="mt-2 text-base font-semibold text-white">
                      {q.title}
                    </div>
                    <ul className="mt-3 space-y-1.5 text-xs text-white/60 md:text-sm">
                      {q.items.map((it) => (
                        <li key={it}>→ {it}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo / Contact */}
      <section id="demo" className="relative scroll-mt-24 bg-[#0B1120] text-white">
        <div className="container relative py-24 md:py-32">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
            <FadeInSection>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent2">
                {t("demo.eyebrow")}
              </p>
              <h2 className="mt-4 text-4xl font-black leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
                {t("demo.title_a")}{" "}
                <span className="block font-serif italic font-normal text-accent2">
                  {t("demo.title_b")}
                </span>
              </h2>
              <p className="mt-6 max-w-md text-sm text-white/70 md:text-base">
                {t("demo.description")}
              </p>

              <a
                href={`mailto:${t("demo.email")}`}
                className="mt-10 inline-flex items-center gap-3 text-sm text-white/80 transition-colors hover:text-accent2"
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-white/5">
                  <Mail className="h-4 w-4 text-accent2" strokeWidth={1.5} />
                </span>
                {t("demo.email")}
              </a>

              <div className="mt-8 flex gap-2">
                {[
                  { href: "https://linkedin.com", Icon: Linkedin, label: "LinkedIn" },
                  { href: "https://x.com", Icon: Twitter, label: "X" },
                  { href: "https://instagram.com", Icon: Instagram, label: "Instagram" },
                ].map(({ href, Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/10 bg-white/[0.03] text-white/70 transition-colors hover:border-accent2/40 hover:text-accent2"
                  >
                    <Icon className="h-4 w-4" strokeWidth={1.5} />
                  </a>
                ))}
              </div>
            </FadeInSection>

            <FadeInSection delay={0.1}>
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-8">
                <DemoForm />
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>
    </>
  )
}
