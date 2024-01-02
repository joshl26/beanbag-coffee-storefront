import { Metadata } from "next"
import StoreTemplate from "@modules/store/templates"

export const metadata: Metadata = {
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_BASE_URL}`),
  title: "Store",
  description: "Explore all of our products.",
}

export default function StorePage() {
  return <StoreTemplate />
}
