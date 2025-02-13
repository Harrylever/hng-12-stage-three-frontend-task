import { useLocation } from "react-router-dom"
import { cn } from "../../lib/utils"
import NavLink from "../ui/nav-link"

const NavLinks = () => {
  const { pathname } = useLocation()

  return (
    <div className="flex items-center justify-center gap-4">
      {NAV_LINKS.map((nav_link) => (
        <NavLink
          key={nav_link.id}
          to={nav_link.href}
          className={cn(
            "font-jejumyeongjo text-lg font-normal leading-none duration-300",
            pathname === nav_link.href ? "text-white" : "hover:text-white"
          )}
        >
          {nav_link.label}
        </NavLink>
      ))}
    </div>
  )
}

export default NavLinks

const NAV_LINKS = [
  {
    id: 1,
    label: "Events",
    href: "/events",
  },
  {
    id: 2,
    label: "My Tickets",
    href: "/my-tickets",
  },
  {
    id: 3,
    label: "About Project",
    href: "/about-project",
  },
]

// Form Make it sit on a card
