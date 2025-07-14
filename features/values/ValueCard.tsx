import { Card } from "@/components/ui/card"
import { LucideIcon } from "lucide-react"

interface ValueCardProps {
  icon: LucideIcon
  title: string
  description: string[]
}

export default function ValueCard({ icon: Icon, title, description }: ValueCardProps) {
  return (
    <Card className="value-card p-6 hover:bg-[#eaf2e8] transition-all duration-300">
      <div className="mb-4 text-[#489e6e]">
        <Icon size={32} className="icon-rotate" />
      </div>
      <h3 className="text-xl font-bold mb-2 text-[#489e6e]">{title}</h3>
      <ul className="list-disc list-inside space-y-1">
        {description.map((point, idx) => (
          <li key={idx}>{point}</li>
        ))}
      </ul>
    </Card>
  )
}
