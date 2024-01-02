import LoginTemplate from "@modules/account/templates/login-template"
import { Metadata } from "next"

export const metadata: Metadata = {
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_BASE_URL}`),
  title: "Sign in",
  description: "Sign in to your Beanbag Coffee Co. account.",
}

export default function Login() {
  return <LoginTemplate />
}
