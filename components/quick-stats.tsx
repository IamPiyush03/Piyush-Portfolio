const stats = [
  {
    number: "3+",
    label: "Internships Completed",
    icon: "💼",
  },
  {
    number: "4+",
    label: "Projects Deployed",
    icon: "🚀",
  },
  {
    number: "80%+",
    label: "AI Model Accuracy",
    icon: "🤖",
  },
  {
    number: "8.6",
    label: "CGPA",
    icon: "🎓",
  },
]

export default function QuickStats() {
  return (
    <section className="py-16 px-4 bg-white border-y-4 border-dark-green">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-pixel text-2xl text-center text-vibrant-orange mb-12">QUICK STATS</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="pixel-card text-center hover:pixel-pulse cursor-pointer">
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="font-pixel text-2xl text-vibrant-orange mb-2">{stat.number}</div>
              <div className="font-mono text-sm text-dark-green">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
