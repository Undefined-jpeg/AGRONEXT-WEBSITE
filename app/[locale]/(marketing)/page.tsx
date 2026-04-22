import {
  Brain,
  Gauge,
  Smartphone,
  Leaf,
  ArrowRight,
  Quote,
} from "lucide-react"
import { setRequestLocale } from "next-intl/server"
import { useTranslations } from "next-intl"
import { Link } from "@/lib/i18n/routing"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
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

  const testimonials = [
    {
      name: t("testimonials.items.one.name"),
      role: t("testimonials.items.one.role"),
      quote: t("testimonials.items.one.quote"),
    },
    {
      name: t("testimonials.items.two.name"),
      role: t("testimonials.items.two.role"),
      quote: t("testimonials.items.two.quote"),
    },
    {
      name: t("testimonials.items.three.name"),
      role: t("testimonials.items.three.role"),
      quote: t("testimonials.items.three.quote"),
    },
  ]

  return (
    <>
      {/* Hero */}
      <section className="container pt-16 pb-20 lg:pt-24 lg:pb-28">
        <FadeInSection className="max-w-3xl">
          <Badge variant="secondary" className="mb-6">
            {t("hero.eyebrow")}
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-balance">
            {t("hero.title")}
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
            {t("hero.subtitle")}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link href="/auth/register">
                {t("hero.ctaPrimary")}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/pricing">{t("hero.ctaSecondary")}</Link>
            </Button>
          </div>
        </FadeInSection>
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
      <section>
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

      {/* Testimonials */}
      <section className="border-t bg-muted/30">
        <div className="container py-20">
          <FadeInSection className="max-w-2xl mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              {t("testimonials.title")}
            </h2>
            <p className="mt-3 text-muted-foreground">{t("testimonials.subtitle")}</p>
          </FadeInSection>

          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial, i) => (
              <FadeInSection key={testimonial.name} delay={i * 0.08}>
                <Card className="h-full">
                  <CardContent className="pt-6">
                    <Quote className="h-6 w-6 text-primary/40 mb-3" />
                    <p className="text-sm mb-4 leading-relaxed">{testimonial.quote}</p>
                    <div className="pt-4 border-t">
                      <div className="text-sm font-semibold">{testimonial.name}</div>
                      <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </CardContent>
                </Card>
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
