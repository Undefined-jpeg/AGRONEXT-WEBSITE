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
      {/* Hero — light, airy */}
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
            <span className="italic text-primary">
              {t("hero.title_italic")}
            </span>{" "}
            {t("hero.title_middle")}{" "}
            <span className="font-black text-primary">
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
              <Link href="/contact">
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

      {/* Stats band — its own section, sits under the hero with breathing room */}
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

      {/* Features */}
      <section className="bg-muted/30 mt-20 md:mt-28">
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

      {/* CTA — full-bleed band with soft top/bottom transitions */}
      <section className="relative w-full overflow-hidden bg-primary text-primary-foreground">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-background to-transparent"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage:
              "radial-gradient(ellipse 70% 60% at 50% 50%, black 50%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 70% 60% at 50% 50%, black 50%, transparent 100%)",
          }}
        />

        <FadeInSection>
          <div className="container relative flex flex-col items-center py-24 text-center md:py-32">
            <h2 className="text-3xl font-semibold md:text-5xl md:leading-tight max-w-3xl">
              {t("cta.title")}
            </h2>
            <p className="mt-5 max-w-xl text-primary-foreground/85 md:text-lg">
              {t("cta.subtitle")}
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Button asChild size="lg" variant="secondary">
                <Link href="/auth/register">
                  {t("cta.button")}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                <Link href="/contact">
                  {t("hero.cta_demo")}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
            <p className="mt-6 text-xs uppercase tracking-[0.18em] text-primary-foreground/70">
              {tCommon("tagline")}
            </p>
          </div>
        </FadeInSection>
      </section>
    </>
  )
}
