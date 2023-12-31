import Link from "next/link"
import { Text } from "@medusajs/ui"
import clsx from "clsx"

type RoundButtonLinkProps = {
  className: string
  href: string
  children?: React.ReactNode
  onClick?: () => void
  variant?: "primary" | "secondary"
}

const RoundButtonLink = ({
  className,
  variant = "primary",
  href,
  children,
  onClick,
  ...props
}: RoundButtonLinkProps) => {
  return (
    <Link
      href={href}
      onClick={onClick}
      {...props}
      className={clsx(
        "w-full uppercase flex items-center justify-center h-[30px] px-3 py-[10px] text-small-regular border transition-colors duration-200 disabled:opacity-50 rounded-full",
        {
          "text-white bg-gray-900 border-gray-900 hover:bg-white hover:text-gray-900 disabled:hover:bg-gray-900 disabled:hover:text-white rounded-full":
            variant === "primary",
          "text-gray-900 bg-transparent border-gray-920 hover:bg-gray-100 rounded-full":
            variant === "secondary",
        },
        className
      )}
    >
      <Text>{children}</Text>
    </Link>
  )
}

export default RoundButtonLink
