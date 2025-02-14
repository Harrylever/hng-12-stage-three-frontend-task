import MyTicketButton from "./my-ticket-button"
import NavLinks from "./nav-links"

const Navbar = () => {
  return (
    <div className="w-full flex items-center justify-between">
      <div>
        <img src="/ticz-logo.png" alt="Ticz Logo" width={0} height={0} className="w-[80px] md:w-[90px] h-auto" />
      </div>

      <NavLinks />

      <MyTicketButton />
    </div>
  )
}

export default Navbar
