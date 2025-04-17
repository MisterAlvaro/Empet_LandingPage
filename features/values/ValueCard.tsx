import { Card } from "@/components/ui/card"

interface ValueCardProps {
  icon: string
  title: string
  description: string
}

export default function ValueCard({ icon, title, description }: ValueCardProps) {
  return (
    <Card className="value-card p-6 hover:bg-[#eaf2e8] transition-all duration-300">
      <div className="text-4xl mb-4 icon-rotate">{icon}</div>
      <h3 className="text-xl font-bold mb-2 text-[#489e6e]">{title}</h3>
      <p>{description}</p>
    </Card>
  )
}
