import Navbar from "./navbar"
import BottomSpacingDiv from "./spacing-div"

const Header = () => {
  return (
    <div className="w-full px-8 fixed z-[100] top-[24px] left-1/2 -translate-x-1/2">
      <header
        id="app-header"
        className="mx-auto w-full md:max-w-[1200px] border border-[#197686] py-3 px-4 bg-[rgba(5,37,44,0.4)] rounded-3xl h-fit backdrop-blur-sm"
      >
        <Navbar />
      </header>

      <BottomSpacingDiv />
    </div>
  )
}

export default Header
