import ProfileTemplate from "@modules/account/templates/profile-template"
import { Metadata } from "next"

export const metadata: Metadata = {
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_BASE_URL}`),
  title: "Profile",
  description: "View and edit your Bean Coffee Co. profile.",
}

export default function Profile() {
  return <ProfileTemplate />
}
