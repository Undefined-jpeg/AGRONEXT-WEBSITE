import { setRequestLocale } from "next-intl/server"
import { useTranslations } from "next-intl"
import { ContactForm } from "@/components/contact/contact-form"

interface PageProps {
  params: { locale: string }
}

export default function ContactPage({ params: { locale } }: PageProps) {
  setRequestLocale(locale)
  const t = useTranslations("contact")

  return (
    <div className="container py-16 md:py-24 max-w-2xl">
      <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
        {t("title")}
      </h1>
      <p className="mt-4 text-lg text-muted-foreground">{t("subtitle")}</p>

      <div className="mt-10">
        <ContactForm />
      </div>
    </div>
  )
}
