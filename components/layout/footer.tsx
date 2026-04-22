import { useTranslations } from "next-intl"
import { Link } from "@/lib/i18n/routing"
import { Logo } from "./logo"

export function Footer() {
  const t = useTranslations()
  const year = new Date().getFullYear()

  return (
    <footer className="border-t bg-muted/30">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="space-y-3">
            <Logo />
            <p className="text-sm text-muted-foreground max-w-xs">
              {t("common.tagline")}
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-3">{t("footer.product")}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/" className="hover:text-foreground">{t("nav.home")}</Link></li>
              <li><Link href="/pricing" className="hover:text-foreground">{t("nav.pricing")}</Link></li>
              <li><Link href="/blog" className="hover:text-foreground">{t("nav.blog")}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-3">{t("footer.company")}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/about" className="hover:text-foreground">{t("nav.about")}</Link></li>
              <li><Link href="/contact" className="hover:text-foreground">{t("nav.contact")}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-3">{t("footer.legal")}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><span className="hover:text-foreground">{t("footer.privacy")}</span></li>
              <li><span className="hover:text-foreground">{t("footer.terms")}</span></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t pt-6 text-xs text-muted-foreground">
          © {year} AgroNext. {t("footer.rights")}
        </div>
      </div>
    </footer>
  )
}
