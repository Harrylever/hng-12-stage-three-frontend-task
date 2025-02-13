import React from "react"
import { Link, LinkProps } from "react-router-dom"

interface CustomLinkProps extends LinkProps {
  external?: boolean
}

const NavLink = React.forwardRef<HTMLAnchorElement, CustomLinkProps>(
  ({ external, to, children, ...props }, ref) => {
    if (external && typeof to === "string") {
      return (
        <div className="p-[10px]">
          <a
            href={to}
            ref={ref}
            target="_blank"
            rel="noopener noreferrer"
            {...props}
          >
            {children}
          </a>
        </div>
      )
    }

    return (
      <div className="p-[10px]">
        <Link to={to} ref={ref} {...props}>
          {children}
        </Link>
      </div>
    )
  }
)

export default NavLink
