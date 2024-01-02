import CheckoutTemplate from "@modules/checkout/templates"
import { Metadata } from "next"

export const metadata: Metadata = {
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_BASE_URL}`),
  title: "Checkout",
}

export default function Checkout() {
  return <CheckoutTemplate />
}
