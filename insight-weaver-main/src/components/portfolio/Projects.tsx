import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface Project {
  title: string;
  description: string;
  detailed?: string;
  tech: string[];
  github: string;
  category: string;
  live?: string;
}

const projects: Project[] = [
  {
    title: "Insights and Trends: An HR Analysis Dashboard with Power BI",
    description:
      "HR dashboard for turnover analysis with interactive reporting.",
    detailed:
      "Built interactive Power BI dashboards using DAX measures, KPI cards, drill-through reports, and slicers to analyze attrition trends, employee performance, and department-wise turnover. Enabled leadership to improve data-driven retention strategies.",
    tech: ["Power BI", "DAX", "Business Analysis", "Data Visualization"], // ❌ Excel removed
    github: "https://github.com/yaswitha-k/HR-Analytics-Dashboard",
    category: "Power BI",
  },
  {
    title: "AtliQ Hotel Data Analysis",
    description:
      "Exploratory data analysis on hotel booking data using Python.",
    detailed:
      "Performed end-to-end EDA using Pandas and NumPy to uncover revenue trends, seasonal booking patterns, and occupancy rates. Applied feature engineering and visualizations using Matplotlib and Seaborn to extract pricing insights.",
    tech: ["Python", "Pandas", "NumPy", "Matplotlib"],
    github:
      "https://github.com/yaswitha-k/Atliq-Hotels-data-analysis-project-using-python",
    category: "Python",
  },
  {
    title: "Netflix Data Analysis",
    description:
      "Exploratory data analysis on Netflix content using MySQL.",
    detailed:
      "Performed exploratory data analysis on Netflix dataset using MySQL to analyze Movies vs TV Shows distribution, most common content ratings, and yearly content trends. Utilized aggregation functions, subqueries, GROUP BY, HAVING, and window functions to extract actionable insights.",
    tech: ["MySQL", "EDA", "SQL Queries", "Window Functions"],
    github: "YOUR_NETFLIX_GITHUB_LINK_HERE",
    category: "MySQL",
  },
];

const filters = ["All", "Power BI", "Python", "MySQL"]; // ❌ EDA removed

const Projects = () => {
  const [active, setActive] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const { ref, isVisible } = useScrollReveal();

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="py-24 px-6">
      <div ref={ref} className="max-w-6xl mx-auto">
        <h2
          className={`text-3xl sm:text-4xl font-bold text-center mb-4 gradient-text transition-all duration-700 ${isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
            }`}
        >
          Projects
        </h2>

        <p
          className={`text-muted-foreground text-center mb-10 transition-all duration-700 delay-200 ${isVisible ? "opacity-100" : "opacity-0"
            }`}
        >
          Real-world data projects showcasing analytical skills
        </p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${active === f
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
              key={p.title}
              className={`glass rounded-xl p-6 flex flex-col justify-between transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 hover:glow-blue ${isVisible
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
                <button
                  onClick={() => setSelectedProject(p)}
                  className="text-sm px-4 py-2 rounded-lg bg-primary text-white hover:bg-accent transition"
                >
                  View Details
                </button>

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

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4">
          <div className="bg-card max-w-lg w-full p-8 rounded-xl relative">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
            >
              ✕
            </button>

            <h3 className="text-xl font-bold mb-4">
              {selectedProject.title}
            </h3>

            <p className="text-muted-foreground mb-6 leading-relaxed">
              {selectedProject.detailed}
            </p>

            <div className="flex gap-4">
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-primary text-white rounded-lg"
              >
                View on GitHub
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;

