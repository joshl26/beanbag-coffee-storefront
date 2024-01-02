import { Text } from "@medusajs/ui"
// import Medusa from "../../../common/icons/medusa"
import NextJs from "../../../common/icons/nextjs"

const BeanbagCTA = () => {
  return (
    <Text className="flex gap-x-2 txt-compact-small-plus items-center">
      Powered by
      <a href="https://nextjs.org" target="_blank" rel="noreferrer">
        <NextJs fill="#9ca3af" />
      </a>
    </Text>
  )
}

export default BeanbagCTA
