import { Link } from "react-router-dom";
import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  github: string;
  category: string;
}

const projects: Project[] = [
  {
    id: "hr-dashboard",
    title: "Insights and Trends: An HR Analysis Dashboard with Power BI",
    description:
      "HR dashboard for turnover analysis with interactive reporting.",
    tech: ["Power BI", "DAX", "Business Analysis", "Data Visualization"],
    github: "https://github.com/yaswitha-k/HR-Analytics-Dashboard",
    category: "Power BI",
  },
  {
    id: "atliq-analysis",
    title: "AtliQ Hotel Data Analysis",
    description:
      "Exploratory data analysis on hotel booking data using Python.",
    tech: ["Python", "Pandas", "NumPy", "Matplotlib"],
    github:
      "https://github.com/yaswitha-k/Atliq-Hotels-data-analysis-project-using-python",
    category: "Python",
  },
  {
    id: "netflix-analysis",
    title: "Netflix Data Analysis",
    description:
      "Exploratory data analysis on Netflix content using MySQL.",
    tech: ["MySQL", "EDA", "SQL Queries", "Window Functions"],
    github: "YOUR_NETFLIX_GITHUB_LINK_HERE",
    category: "MySQL",
  },
];

const filters = ["All", "Power BI", "Python", "MySQL"];

const Projects = () => {
  const [active, setActive] = useState("All");
  const { ref, isVisible } = useScrollReveal();

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="py-24 px-6">
      <div ref={ref} className="max-w-6xl mx-auto">
        <h2
          className={`text-3xl sm:text-4xl font-bold text-center mb-4 gradient-text transition-all duration-700 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          Projects
        </h2>

        <p
          className={`text-muted-foreground text-center mb-10 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          Real-world data projects showcasing analytical skills
        </p>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                active === f
                  ? "bg-primary text-primary-foreground glow-blue"
                  : "glass text-muted-foreground hover:text-foreground"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p, i) => (
            <div
              key={p.id}
              className={`glass rounded-xl p-6 flex flex-col justify-between transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 hover:glow-blue ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${300 + i * 150}ms` }}
            >
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {p.title}
                </h3>

                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {p.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-3 mt-4">
                <Link
                  to={`/project/${p.id}`}
                  className="text-sm px-4 py-2 rounded-lg bg-primary text-white hover:bg-accent transition"
                >
                  View Details
                </Link>

                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm px-4 py-2 rounded-lg border border-primary text-primary hover:bg-primary hover:text-white transition"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;


