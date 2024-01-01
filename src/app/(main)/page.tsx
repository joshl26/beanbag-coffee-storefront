import { getCollectionsList } from "@lib/data"
import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import SkeletonHomepageProducts from "@modules/skeletons/components/skeleton-homepage-products"
import { Metadata } from "next"
import { Suspense } from "react"
import { CardDataType } from "../../types/types"

import { CardData } from "../data/cardData"
import Loading from "./loading"
import styles from "./page.module.css"
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
      {/* <Suspense fallback={<Loading />}> */}
      <section className={styles.section_landing_card}>
        <div className={styles.spacer_small} />
        {CardData.map((card: CardDataType) => (
          <LandingCard key={card.id} card={card} />
        ))}
        <p className={styles.landing_info}>
          *Valid 11/17 - 11/30, enjoy 25% off your next Beanbag order of $20 or
          more, excluding taxes and fees, on DoorDash. Fees subject to change.
          Max value of discount is $10. Does not apply to pick up or dine-in
          orders. Valid only at participating Beanbag locations in Canada.
          Restricted delivery area. Menu items may be limited. Limit one
          redemption per person. All deliveries subject to availability. Prices
          for Beanbag items purchased through DoorDash may be higher than posted
          in stores or as marked. See the DoorDash app for availability and
          restrictions.
        </p>
        <div className={styles.spacer} />
      </section>
      {/* </Suspense> */}

      <Suspense fallback={<SkeletonHomepageProducts count={count} />}>
        <FeaturedProducts collections={collections} />
      </Suspense>
    </>
  )
}
