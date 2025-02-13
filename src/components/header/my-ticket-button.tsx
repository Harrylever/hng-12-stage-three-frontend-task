interface MyTicketButtonProps {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const MyTicketButton = ({ onClick }: MyTicketButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="bg-white border border-[hsla(65,100%,46%,0.1)] flex items-center gap-2 py-4 px-6 rounded-xl"
    >
      <span className="text-black text-base font-normal leading-5 font-jejumyeongjo uppercase">
        My Tickets
      </span>
      <img
        src="/my-ticket-right-link-icon.svg"
        alt="Right Link Icon"
        width={20}
        height={20}
      />
    </button>
  )
}

export default MyTicketButton
