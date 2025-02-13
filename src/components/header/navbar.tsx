import MyTicketButton from "./my-ticket-button"
import NavLinks from "./nav-links"

const Navbar = () => {
  return (
    <div className="w-full flex items-center justify-between">
      <div>
        <img src="/ticz-logo.png" alt="Ticz Logo" width={92} height={36} />
      </div>

      <NavLinks />

      <MyTicketButton />
    </div>
  )
}

export default Navbar
