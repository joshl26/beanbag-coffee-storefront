import AddressesTemplate from "@modules/account/templates/addresses-template"
import { Metadata } from "next"

export const metadata: Metadata = {
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_BASE_URL}`),
  title: "Addresses",
  description: "View your addresses",
}

export default function Addresses() {
  return <AddressesTemplate />
}
