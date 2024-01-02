import OverviewTemplate from "@modules/account/templates/overview-template"
import { Metadata } from "next"

export const metadata: Metadata = {
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_BASE_URL}`),
  title: "Account",
  description: "Overview of your account activity.",
}

export default function Account() {
  return <OverviewTemplate />
}
