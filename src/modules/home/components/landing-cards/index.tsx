"use client"

import React from "react"
import clsx from "clsx"
import { CardType } from "../../../../types/types"
import RoundButton from "@modules/common/components/round-button-link"
import Image from "next/image"
// import RoundButtonLink from "@modules/common/components/round-button-link"

const LandingCard = ({ card }: CardType) => {
  return (
    <div className="text-center text-white overflow-hidden flex-col 2xsmall:flex-col-reverse md:flex-row lg:flex mb-12 max-w-[1000px] m-auto">
      <div
        className={clsx("px-[15px] w-full md:w-1/2 lg:w-1/2 h-[500px]", {
          "bg-green-700": card.className === "landing_card_one",
          "bg-yellow-600": card.className === "landing_card_two",
          "bg-red-600": card.className === "landing_card_three",
        })}
      >
        <div className=" h-[80px] md:h-[90px] lg:h-[100px]" />
        <h2 className="text-3xl">{card.title}</h2>
        <div className="h-[50px] md:h-[75px] lg:h-[100px]" />
        <h4 className="text-xl">{card.textBody}</h4>
        <div className="h-[50px] md:h-[75px] lg:h-[100px]" />
        {/* <RoundButtonLink className="" href=""></RoundButtonLink> */}
        <div className="w-[fit-content] m-auto">
          <RoundButton
            className={clsx({
              "bg-green-700": card.className === "landing_card_one",
              "bg-yellow-600": card.className === "landing_card_two",
              "bg-red-600": card.className === "landing_card_three",
            })}
            href=""
          >
            {card.buttonText}
          </RoundButton>
        </div>
      </div>
      <div className="w-full md:w-1/2 h-[500px]">
        <Image src={card.imgUrl} alt="" width={500} height={500} />
      </div>
    </div>
  )
}

export default LandingCard
