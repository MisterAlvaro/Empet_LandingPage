import { Card } from "@/components/ui/card"

interface AboutCardProps {
  title: string
  content: string
}

export default function AboutCard({ title, content }: AboutCardProps) {
  return (
    <Card className="about-card p-6">
      <h3 className="text-xl font-bold mb-4 text-[#489e6e]">{title}</h3>
      <p>{content}</p>
    </Card>
  )
}
