import { getCollectionsList } from "@lib/data"
import FeaturedProducts from "@modules/home/components/featured-products"
// import Hero from "@modules/home/components/hero"
import SkeletonHomepageProducts from "@modules/skeletons/components/skeleton-homepage-products"
import { Metadata } from "next"
import { Suspense } from "react"
import { CardDataType } from "../../types/types"
import { CardData } from "../data/cardData"
// import Loading from "./loading"
import LandingCard from "@modules/home/components/landing-cards"

export const metadata: Metadata = {
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_BASE_URL}`),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      "de-DE": "/de-DE",
    },
  },
  openGraph: {
    images: "/og-image.png",
  },
  title: "Beanbag Coffee Co. Online Storefront",
  description: "A performant ecommerce store built with Next.js 14 and Medusa.",
}

export default async function Home() {
  const { collections, count } = await getCollectionsList(0, 6)

  return (
    <>
      <div className="h-12" />
      {/* <Suspense fallback={<Loading />}>
       
      </Suspense> */}
      <Suspense fallback={<SkeletonHomepageProducts count={count} />}>
        {CardData.map((card: CardDataType) => (
          <LandingCard key={card.id} card={card} />
        ))}
        <FeaturedProducts collections={collections} />
      </Suspense>
    </>
  )
}
