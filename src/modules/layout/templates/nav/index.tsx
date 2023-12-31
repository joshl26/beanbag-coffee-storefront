"use client"

import { useMobileMenu } from "@lib/context/mobile-menu-context"
import useToggleState from "@lib/hooks/use-toggle-state"
import Hamburger from "@modules/common/components/hamburger"
import CartDropdown from "@modules/layout/components/cart-dropdown"
import DropdownMenu from "@modules/layout/components/dropdown-menu"
import SideMenu from "@modules/layout/components/side-menu"
import MobileMenu from "@modules/mobile-menu/templates"
import DesktopSearchModal from "@modules/search/templates/desktop-search-modal"
import Link from "next/link"
import Button from "@modules/common/components/button"
import InteractiveLink from "@modules/common/components/interactive-link"
import RoundButtonLink from "@modules/common/components/round-button-link"

const Nav = () => {
  const { toggle } = useMobileMenu()
  const {
    state: searchModalState,
    close: searchModalClose,
    open: searchModalOpen,
  } = useToggleState()

  return (
    <div className="sticky top-0 inset-x-0 z-50 group">
      <header className="relative h-16 px-8 mx-auto border-b duration-200 bg-white border-ui-border-base">
        <nav className="txt-xsmall-plus text-ui-fg-subtle flex items-center justify-between max-w-screen-2xl m-0 m-auto h-full text-small-regular">
          <div className="flex-1 basis-0 h-full flex items-center">
            <div className="block small:hidden">
              <Hamburger setOpen={toggle} />
            </div>
            <div className="hidden small:block h-full">
              <SideMenu searchModalOpen={searchModalOpen} />
            </div>
          </div>
          <div className="flex items-center h-full">
            {/* <Link
              href="/"
              className="txt-compact-xlarge-plus hover:text-ui-fg-base uppercase"
            >
              Beanbag Coffee Co.
            </Link> */}
          </div>
          <div className="flex items-center gap-x-6 h-full flex-1 basis-0 justify-end">
            <div className="hidden small:flex items-center gap-x-6 h-full">
              {process.env.FEATURE_SEARCH_ENABLED && (
                <DesktopSearchModal
                  state={searchModalState}
                  close={searchModalClose}
                  open={searchModalOpen}
                />
              )}
              {/* <Link href="/account">Account</Link> */}
              <RoundButtonLink
                className="hover:text-ui-fg-base"
                href="/account"
              >
                Account
              </RoundButtonLink>
            </div>
            <CartDropdown />
          </div>
        </nav>
        <MobileMenu />
      </header>
    </div>
  )
}

export default Nav
