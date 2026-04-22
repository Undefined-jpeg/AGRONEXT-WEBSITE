import { setRequestLocale } from "next-intl/server"
import { useTranslations } from "next-intl"
import { Eye, Heart, Target } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { FadeInSection } from "@/components/landing/motion-section"

interface PageProps {
  params: { locale: string }
}

export default function AboutPage({ params: { locale } }: PageProps) {
  setRequestLocale(locale)
  const t = useTranslations("about")

  const values = [
    {
      icon: Heart,
      title: t("values.items.one.title"),
      description: t("values.items.one.description"),
    },
    {
      icon: Target,
      title: t("values.items.two.title"),
      description: t("values.items.two.description"),
    },
    {
      icon: Eye,
      title: t("values.items.three.title"),
      description: t("values.items.three.description"),
    },
  ]

  return (
    <div className="container py-16 md:py-24">
      <FadeInSection className="max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
          {t("title")}
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">{t("subtitle")}</p>
      </FadeInSection>

      <div className="mt-16 grid gap-8 md:grid-cols-2 max-w-4xl">
        <FadeInSection>
          <h2 className="text-2xl font-semibold text-earth mb-3">
            {t("mission.title")}
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            {t("mission.body")}
          </p>
        </FadeInSection>
        <FadeInSection delay={0.1}>
          <h2 className="text-2xl font-semibold text-earth mb-3">
            {t("vision.title")}
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            {t("vision.body")}
          </p>
        </FadeInSection>
      </div>

      <div className="mt-20">
        <FadeInSection>
          <h2 className="text-2xl md:text-3xl font-semibold mb-8">
            {t("values.title")}
          </h2>
        </FadeInSection>
        <div className="grid gap-6 md:grid-cols-3">
          {values.map((value, i) => {
            const Icon = value.icon
            return (
              <FadeInSection key={value.title} delay={i * 0.1}>
                <Card className="h-full">
                  <CardContent className="pt-6">
                    <div className="h-10 w-10 rounded-md bg-primary/10 text-primary flex items-center justify-center mb-4">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-semibold mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </FadeInSection>
            )
          })}
        </div>
      </div>
    </div>
  )
}
