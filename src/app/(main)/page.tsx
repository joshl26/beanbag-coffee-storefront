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
    title: "Beanbag Coffee Co. Online Storefront",
    description:
      "A performant ecommerce store built with Next.js 14 and Medusa.",
    url: "https://storefront-git-main-joshl26.vercel.app/",
    siteName: "Beanbag Coffee Co.",
    images: [
      {
        url: `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_PUBLIC_CLOUD_ID}/image/upload/v1704851738/BeanbagCoffee/beanbag-coffee-1_w4gcxv.png`,
        width: 1885,
        height: 965,
        alt: "Beanbag Coffee Co. Drink Menu",
      },
      {
        url: `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_PUBLIC_CLOUD_ID}/image/upload/v1704851736/BeanbagCoffee/beanbag-coffee-3_sk8qso.png`,
        width: 1887,
        height: 965,
        alt: "Beanbag Coffee Co. Cart",
      },
    ],
    locale: "en_US",
    type: "website",
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
