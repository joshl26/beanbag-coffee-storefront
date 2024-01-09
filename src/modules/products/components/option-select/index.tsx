import { onlyUnique } from "@lib/util/only-unique"
import { ProductOption } from "@medusajs/medusa"
import clsx from "clsx"
import React, { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

type OptionSelectProps = {
  option: ProductOption
  current: string
  updateOption: (option: Record<string, string>) => void
  title: string
}

const OptionSelect: React.FC<OptionSelectProps> = ({
  option,
  current,
  updateOption,
  title,
}) => {
  const filteredOptions = option.values.map((v) => v.value).filter(onlyUnique)

  const [size, setSize] = useState("")
  const [distance, setDistance] = useState(-50)

  const onClickHandler = (e: any) => {
    setSize(e.target.alt)
    if (e.target.alt === "S") {
      setDistance(0)
    } else if (e.target.alt === "M") {
      setDistance(65)
    } else if (e.target.alt === "L") {
      setDistance(130)
    } else if (e.target.alt === "XL") {
      setDistance(195)
    }
    // console.log(e.target.alt)
  }

  const spring = {
    type: "spring",
    damping: 25,
    stiffness: 300,
  }

  const ternary = (v: String) => {
    let x = 0

    if (v === "S") {
      x = 40
    } else if (v === "M") {
      x = 45
    } else if (v === "L") {
      x = 55
    } else if (v === "XL") {
      x = 65
    }

    return x
  }

  return (
    <div className="flex flex-col gap-y-3">
      <span className="text-sm">Select {title}</span>
      <div className="flex flex-wrap justify-between gap-2">
        <div className="relative flex flex-row items-end">
          <motion.div
            transition={spring}
            animate={{
              x: distance,
              position: "absolute",
            }}
            className={clsx(
              "absolute left-[2px] top-[12px] flex w-[60px] h-[60px] border-2 bg-yellow-200 bg-opacity-20  border-yellow-600 border-solid rounded-[50%] pointer-events-none",
              size === "" ? "hidden" : ""
            )}
          />

          {title === "Size"
            ? filteredOptions.map((v) => {
                return (
                  <div key={v} className="flex flex-col w-[65px] items-center">
                    <Image
                      className="button"
                      src={clsx(
                        size === v
                          ? "/beanbag-coffee-cup-sizes_colored.svg"
                          : "/beanbag-coffee-cup-sizes_blank.svg"
                      )}
                      width={ternary(v)}
                      height={0}
                      alt={v}
                      onClick={(e) => {
                        updateOption({ [option.id]: v })
                        onClickHandler(e)
                      }}
                    />
                    <h3>
                      {clsx(
                        v === "S"
                          ? "Small"
                          : v === "M"
                          ? "Medium"
                          : v === "L"
                          ? "Large"
                          : v === "XL"
                          ? "XLarge"
                          : ""
                      )}
                    </h3>
                  </div>
                )
              })
            : filteredOptions.map((v) => {
                return (
                  <button
                    onClick={() => updateOption({ [option.id]: v })}
                    key={v}
                    className={clsx(
                      "border-ui-border-base bg-ui-bg-subtle border text-small-regular h-10 rounded-rounded p-2 flex-1 ",
                      {
                        "border-ui-border-interactive": v === current,
                        "hover:shadow-elevation-card-rest transition-shadow ease-in-out duration-150":
                          v !== current,
                      }
                    )}
                  >
                    {v}
                  </button>
                )
              })}

          {/* {filteredOptions.map((v) => {
            return (
              <div key={v} className="flex flex-col w-[65px] items-center">
                <Image
                  src={clsx(
                    size === v
                      ? "/beanbag-coffee-cup-sizes_colored.svg"
                      : "/beanbag-coffee-cup-sizes_blank.svg"
                  )}
                  width={ternary(v)}
                  height={0}
                  alt={v}
                  onClick={(e) => {
                    updateOption({ [option.id]: v })
                    onClickHandler(e)
                  }}
                />
                <h3>
                  {clsx(
                    v === "S"
                      ? "Small"
                      : v === "M"
                      ? "Medium"
                      : v === "L"
                      ? "Large"
                      : v === "XL"
                      ? "XLarge"
                      : ""
                  )}
                </h3>
              </div>
              // <button
              //   onClick={() => updateOption({ [option.id]: v })}
              //   key={v}
              //   className={clsx(
              //     "border-ui-border-base bg-ui-bg-subtle border text-small-regular h-10 rounded-rounded p-2 flex-1 ",
              //     {
              //       "border-ui-border-interactive": v === current,
              //       "hover:shadow-elevation-card-rest transition-shadow ease-in-out duration-150":
              //         v !== current,
              //     }
              //   )}
              // >
              //   {v}
              // </button>
            )
          })} */}
        </div>
      </div>
    </div>
  )
}

export default OptionSelect
