import { useScrollReveal } from "@/hooks/useScrollReveal";

const GitHub = () => {
  const { ref, isVisible } = useScrollReveal();

  const highlights = [
    {
      title: "Advanced SQL Analysis Using CTEs & Window Functions",
      desc: "Applied joins, subqueries, CTEs and aggregation logic to solve multi-table analytical problems."
    },
    {
      title: "Version Control Discipline",
      desc: "Meaningful commits, organized branches and clear repository structure."
    },
    {
      title: "Readable Code",
      desc: "Modular Python scripts, reusable functions and proper documentation."
    },
    {
      title: "Business-Oriented Analysis",
      desc: "Every repository focuses on insights, KPIs and real-world decision impact."
    }
  ];

  const workflow = [
    "Data Collection",
    "Data Cleaning",
    "Insight Extraction",
    "Business Recommendation"
  ];

  return (
    <section id="github" className="py-28 px-6">
      <div ref={ref} className="max-w-6xl mx-auto text-center">

        {/* Title */}
        <h2
          className={`text-3xl sm:text-4xl font-bold mb-6 gradient-text transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          My GitHub Workflow
        </h2>

        <p
          className={`text-muted-foreground mb-16 transition-all duration-700 delay-200 ${isVisible ? "opacity-100" : "opacity-0"
            }`}
        >
          Beyond projects — structured development practices and analytical thinking reflected in every repository.
        </p>

        {/* Philosophy Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {highlights.map((item, i) => (
            <div
              key={item.title}
              className={`glass p-8 rounded-xl text-left transition-all duration-500 hover:scale-105 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              style={{ transitionDelay: `${300 + i * 150}ms` }}
            >
              <h3 className="text-lg font-semibold mb-3 text-primary">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Workflow Visualization */}
        <div
          className={`flex flex-wrap justify-center gap-6 mb-16 transition-all duration-700 ${isVisible ? "opacity-100" : "opacity-0"
            }`}
        >
          {workflow.map((step, index) => (
            <div
              key={step}
              className="glass px-6 py-4 rounded-full text-sm font-medium text-primary"
            >
              {index + 1}. {step}
            </div>
          ))}
        </div>

        {/* CTA */}
        <a
          href="https://github.com/yaswitha-k"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:glow-blue transition-all duration-300 hover:scale-105"
        >
          View Repositories
        </a>

      </div>
    </section>
  );
};

export default GitHub;


