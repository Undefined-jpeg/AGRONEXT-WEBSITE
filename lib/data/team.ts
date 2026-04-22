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
    name: "Tuna Özkan Yapıcı",
    title: "CEO",
    linkedinUrl: "https://www.linkedin.com/",
    avatarInitials: "TÖ",
    avatarImage: null,
  },
  {
    name: "Yusuf Mete Akınlı",
    title: "Kurucu Ortak",
    linkedinUrl: "https://www.linkedin.com/",
    avatarInitials: "YA",
    avatarImage: null,
  },
  {
    name: "Ali Kaan Kaya",
    title: "Kurucu Ortak",
    linkedinUrl: "https://www.linkedin.com/",
    avatarInitials: "AK",
    avatarImage: null,
  },
]
