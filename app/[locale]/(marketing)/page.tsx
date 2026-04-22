import {
  Brain,
  Gauge,
  Smartphone,
  Leaf,
  ArrowRight,
} from "lucide-react"
import { setRequestLocale } from "next-intl/server"
import { useTranslations } from "next-intl"
import { Link } from "@/lib/i18n/routing"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FadeInSection } from "@/components/landing/motion-section"

interface PageProps {
  params: { locale: string }
}

export default function LandingPage({ params: { locale } }: PageProps) {
  setRequestLocale(locale)
  const t = useTranslations("landing")
  const tCommon = useTranslations("common")

  const features = [
    {
      icon: Brain,
      title: t("features.items.ai.title"),
      description: t("features.items.ai.description"),
    },
    {
      icon: Gauge,
      title: t("features.items.sensors.title"),
      description: t("features.items.sensors.description"),
    },
    {
      icon: Smartphone,
      title: t("features.items.mobile.title"),
      description: t("features.items.mobile.description"),
    },
    {
      icon: Leaf,
      title: t("features.items.biopest.title"),
      description: t("features.items.biopest.description"),
    },
  ]

  const steps = [
    {
      num: "01",
      title: t("howItWorks.steps.one.title"),
      description: t("howItWorks.steps.one.description"),
    },
    {
      num: "02",
      title: t("howItWorks.steps.two.title"),
      description: t("howItWorks.steps.two.description"),
    },
    {
      num: "03",
      title: t("howItWorks.steps.three.title"),
      description: t("howItWorks.steps.three.description"),
    },
  ]

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

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0B1120] text-white">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage:
              "radial-gradient(ellipse 80% 60% at 50% 40%, black 50%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 60% at 50% 40%, black 50%, transparent 100%)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 45% at 50% 10%, rgba(34,197,94,0.22), transparent 70%)",
          }}
        />

        <div className="container relative flex flex-col items-center py-24 text-center md:py-32">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/80 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-[#22C55E]" />
            {t("hero.badge")}
          </span>

          <h1 className="mt-8 max-w-4xl text-4xl font-black leading-[1.05] tracking-tight text-balance md:text-6xl lg:text-7xl">
            {t("hero.title_start")}{" "}
            <span className="italic text-[#22C55E]">
              {t("hero.title_italic")}
            </span>{" "}
            {t("hero.title_middle")}{" "}
            <span className="font-black text-[#22C55E]">
              {t("hero.title_highlight")}
            </span>{" "}
            {t("hero.title_end")}
          </h1>

          <p className="mt-6 max-w-2xl text-base text-white/70 md:text-lg">
            {t("hero.subtitle")}
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Button
              asChild
              size="lg"
              className="bg-[#22C55E] text-white shadow-lg shadow-green-900/30 hover:bg-[#16A34A]"
            >
              <Link href="/contact">
                {t("hero.cta_demo")}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white"
            >
              <Link href="#how-it-works">{t("hero.cta_how")} →</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats band — sits at the dark→light boundary */}
      <section className="bg-background">
        <div className="container -mt-10 pb-12 md:-mt-14 md:pb-16">
          <div className="mx-auto max-w-5xl rounded-2xl border border-border bg-card shadow-lg">
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

      {/* Features */}
      <section className="border-t bg-muted/30">
        <div className="container py-20">
          <FadeInSection className="max-w-2xl mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              {t("features.title")}
            </h2>
            <p className="mt-3 text-muted-foreground">{t("features.subtitle")}</p>
          </FadeInSection>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, i) => {
              const Icon = feature.icon
              return (
                <FadeInSection key={feature.title} delay={i * 0.08}>
                  <Card className="h-full">
                    <CardContent className="pt-6">
                      <div className="h-10 w-10 rounded-md bg-primary/10 text-primary flex items-center justify-center mb-4">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="font-semibold mb-2">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                </FadeInSection>
              )
            })}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="scroll-mt-24">
        <div className="container py-20">
          <FadeInSection className="max-w-2xl mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              {t("howItWorks.title")}
            </h2>
            <p className="mt-3 text-muted-foreground">{t("howItWorks.subtitle")}</p>
          </FadeInSection>

          <div className="grid gap-6 md:grid-cols-3">
            {steps.map((step, i) => (
              <FadeInSection key={step.num} delay={i * 0.1}>
                <div className="relative border-l-2 border-primary/30 pl-6 py-2">
                  <div className="text-earth font-mono text-sm mb-2">{step.num}</div>
                  <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container py-20">
        <FadeInSection>
          <div className="rounded-2xl bg-primary text-primary-foreground p-10 md:p-14 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">{t("cta.title")}</h2>
            <p className="text-primary-foreground/85 mb-8 max-w-xl mx-auto">
              {t("cta.subtitle")}
            </p>
            <Button asChild variant="secondary" size="lg">
              <Link href="/auth/register">
                {t("cta.button")}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <p className="mt-4 text-xs text-primary-foreground/70">
              {tCommon("tagline")}
            </p>
          </div>
        </FadeInSection>
      </section>
    </>
  )
}
