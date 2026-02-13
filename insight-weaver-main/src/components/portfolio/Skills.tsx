import { useScrollReveal } from "@/hooks/useScrollReveal";

const categories = [
  {
    title: "Programming",
    skills: [
      { name: "Python", level: 80 },
      { name: "Basic Machine Learning", level: 50 },
    ],
  },
  {
    title: "Databases",
    skills: [{ name: "MySQL", level: 75 }],
  },
  {
    title: "BI & Tools",
    skills: [
      { name: "Power BI (Advanced)", level: 85 },
      { name: "Tableau (Basic)", level: 45 },
      { name: "Excel (Advanced)", level: 90 },
    ],
  },
];

const SkillBar = ({ name, level, visible, delay }: { name: string; level: number; visible: boolean; delay: number }) => (
  <div className="mb-4">
    <div className="flex justify-between text-sm mb-1">
      <span className="text-foreground">{name}</span>
      <span className="text-muted-foreground">{level}%</span>
    </div>
    <div className="h-2 rounded-full bg-muted overflow-hidden">
      <div
        className="h-full rounded-full transition-all duration-1000 ease-out"
        style={{
          width: visible ? `${level}%` : "0%",
          transitionDelay: `${delay}ms`,
          background: "linear-gradient(90deg, hsl(var(--primary)), hsl(var(--accent)))",
        }}
      />
    </div>
  </div>
);

const Skills = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="skills" className="py-24 px-6">
      <div ref={ref} className="max-w-5xl mx-auto">
        <h2
          className={`text-3xl sm:text-4xl font-bold text-center mb-12 gradient-text transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Skills & Expertise
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat, ci) => (
            <div
              key={cat.title}
              className={`glass rounded-xl p-6 glass-hover transition-all duration-500 hover:scale-[1.02] hover:glow-blue ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${200 + ci * 150}ms` }}
            >
              <h3 className="text-lg font-semibold text-foreground mb-4 text-gradient-blue">{cat.title}</h3>
              {cat.skills.map((s, si) => (
                <SkillBar
                  key={s.name}
                  name={s.name}
                  level={s.level}
                  visible={isVisible}
                  delay={400 + ci * 150 + si * 200}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
