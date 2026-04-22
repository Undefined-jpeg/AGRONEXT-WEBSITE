import Image from "next/image"
import { Linkedin } from "lucide-react"
import { useTranslations } from "next-intl"
import { teamMembers } from "@/lib/data/team"
import { Card, CardContent } from "@/components/ui/card"

export function TeamSection() {
  const t = useTranslations("contact")

  return (
    <section className="mb-16">
      <div className="mb-8 max-w-2xl">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
          {t("team_title")}
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          {t("team_subtitle")}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {teamMembers.map((member) => (
          <Card
            key={member.name}
            className="transition-shadow hover:shadow-md"
          >
            <CardContent className="flex flex-col items-center pt-6 text-center">
              <div className="mb-4 flex h-20 w-20 items-center justify-center overflow-hidden rounded-full bg-primary/10 text-primary">
                {member.avatarImage ? (
                  <Image
                    src={member.avatarImage}
                    alt={member.name}
                    width={80}
                    height={80}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <span className="text-xl font-semibold">
                    {member.avatarInitials}
                  </span>
                )}
              </div>
              <div className="font-semibold">{member.name}</div>
              <div className="mt-0.5 text-sm text-muted-foreground">
                {member.title}
              </div>
              <a
                href={member.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${member.name} · ${t("team_linkedin")}`}
                className="mt-4 inline-flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
