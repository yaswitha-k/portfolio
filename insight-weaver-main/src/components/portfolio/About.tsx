import { useScrollReveal } from "@/hooks/useScrollReveal";

const toolStats = [
  {
    name: "Power BI",
    count: 1,
    logo: "https://img.icons8.com/color/96/power-bi.png",
  },
  {
    name: "SQL",
    count: 1,
    logo: "https://img.icons8.com/color/96/mysql-logo.png",
  },
  {
    name: "Python",
    count: 1,
    logo: "https://img.icons8.com/color/96/python.png",
  },

];


const About = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="about" className="py-24 px-6">
      <div ref={ref} className="max-w-5xl mx-auto">
        <h2
          className={`text-3xl sm:text-4xl font-bold text-center mb-4 gradient-text transition-all duration-700 ${isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
            }`}
        >
          About Me
        </h2>

        <p
          className={`text-muted-foreground text-center max-w-3xl mx-auto mb-14 transition-all duration-700 delay-200 ${isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
            }`}
        >
          A highly motivated Data Analyst fresher based in Hyderabad, India,
          with hands-on experience in exploratory data analysis, dashboard
          development, and business intelligence reporting. Skilled in Python,
          SQL, Power BI, and Advanced Excel with foundational machine learning knowledge.
        </p>

        {/* Tool-wise Project Count */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          {toolStats.map((tool, i) => (
            <div
              key={tool.name}
              className={`glass rounded-xl p-6 text-center transition-all duration-500 hover:scale-105 ${isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
                }`}
              style={{ transitionDelay: `${300 + i * 150}ms` }}
            >
              <img
                src={tool.logo}
                alt={tool.name}
                className="h-12 mx-auto mb-4"
              />

              <div className="text-2xl font-bold text-primary">
                {tool.count}
              </div>

              <div className="text-muted-foreground text-sm mt-1">
                {tool.name} Project{tool.count > 1 ? "s" : ""}
              </div>
            </div>
          ))}
        </div>

        {/* Resume Button */}
        <div className="text-center mt-16">
          <a
            href="public/my_resume.pdf"
            target="_blank"
            className={`inline-block px-8 py-3 rounded-lg border border-primary text-primary font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300 ${isVisible ? "opacity-100" : "opacity-0"
              }`}
            style={{ transitionDelay: "700ms" }}
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;


