import { asc } from "drizzle-orm"
import { setRequestLocale, getTranslations } from "next-intl/server"
import dynamic from "next/dynamic"
import { db } from "@/lib/db"
import { pricingPlans } from "@/lib/db/schema"
import { PricingCards } from "@/components/pricing/pricing-cards"
import { ComparisonTable } from "@/components/pricing/comparison-table"

const AIChatDrawer = dynamic(
  () =>
    import("@/components/pricing/ai-chat-drawer").then((m) => m.AIChatDrawer),
  { ssr: false }
)

export const revalidate = 3600

interface PageProps {
  params: { locale: string }
}

export default async function PricingPage({ params: { locale } }: PageProps) {
  setRequestLocale(locale)
  const t = await getTranslations("pricing")

  const plans = await db.query.pricingPlans.findMany({
    where: (p, { eq }) => eq(p.active, true),
    orderBy: [asc(pricingPlans.sortOrder)],
  })

  return (
    <>
      <section className="container py-16 md:py-24">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">
            {t("title")}
          </h1>
          <p className="mt-4 text-muted-foreground">{t("subtitle")}</p>
        </div>

        <PricingCards plans={plans} />
      </section>

      <ComparisonTable locale={locale} />

      <AIChatDrawer />
    </>
  )
}
