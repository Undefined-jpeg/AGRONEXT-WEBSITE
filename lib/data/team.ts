export interface TeamMember {
  name: string
  title: string
  linkedinUrl: string
  avatarInitials: string
  avatarImage: string | null
}

/**
 * Replace these entries with the real team data.
 * Add `avatarImage: "/team/firstname.jpg"` and drop the file under `public/team/`
 * to show a photo; otherwise the initials will be rendered inside a circle.
 */
export const teamMembers: TeamMember[] = [
  {
    name: "Yusuf Kaan",
    title: "Kurucu & CEO",
    linkedinUrl: "https://www.linkedin.com/",
    avatarInitials: "YK",
    avatarImage: null,
  },
  {
    name: "Ada Demir",
    title: "CTO",
    linkedinUrl: "https://www.linkedin.com/",
    avatarInitials: "AD",
    avatarImage: null,
  },
  {
    name: "Mert Aksoy",
    title: "AI / ML Lead",
    linkedinUrl: "https://www.linkedin.com/",
    avatarInitials: "MA",
    avatarImage: null,
  },
]
