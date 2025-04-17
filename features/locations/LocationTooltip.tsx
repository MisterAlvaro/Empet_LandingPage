interface LocationTooltipProps {
  name: string
  address: string
}

export default function LocationTooltip({ name, address }: LocationTooltipProps) {
  return (
    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-48 bg-white p-3 rounded-md shadow-lg tooltip-fade-in">
      <h4 className="font-bold text-[#002e2f]">{name}</h4>
      <p className="text-sm">{address}</p>
    </div>
  )
}
