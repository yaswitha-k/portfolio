import { useParams, Link } from "react-router-dom";

interface Project {
  title: string;
  description: string;
  detailed: string;
  tech: string[];
  github: string;
  images: string[]; // multiple images
}

const projects: Record<string, Project> = {
  "hr-dashboard": {
    title: "Insights and Trends: An HR Analysis Dashboard with Power BI",
    description: "HR dashboard for turnover analysis.",
    detailed:
      "This project focuses on analyzing HR attrition trends using Power BI. Built interactive dashboards using DAX measures, KPI cards, drill-through reports, and slicers to analyze department-wise turnover, employee demographics, and performance metrics.",
    tech: ["Power BI", "DAX", "Business Analysis", "Data Visualization"],
    github: "https://github.com/yaswitha-k/HR-Analytics-Dashboard",
    images: [
      "/Snapshot of dashboard.png",
    ],

  },

  "atliq-analysis": {
    title: "AtliQ Hotel Data Analysis",
    description: "Exploratory data analysis on Netflix content using MySQL.",
    detailed:
      " Performed exploratory data analysis using Pandas and NumPy to uncover seasonal booking patterns, revenue trends, occupancy rates, and customer insights. Used Matplotlib for visualizations and improved pricing insights through feature engineering.",
    tech: ["Python", "Pandas", "NumPy", "Matplotlib"],
    github:
      "https://github.com/yaswitha-k/Atliq-Hotels-data-analysis-project-using-python",
    images: [
      "/atliq-1.png",
      "/atliq-2.png"

    ],
  },
  "netflix-analysis": {
    title: "Netflix Content Analysis",
    description: "Analyzed Netflix data using MySQL to uncover content distribution and rating insight.",
    detailed:
      " Analyzed 3,000 Netflix records using MySQL. Compared distribution of Movies vs TV Shows using aggregation queries.Identified most common content ratings using GROUP BY, COUNT(), and window functions.",
    tech: ["MySQL"],
    github:
      "https://github.com/yaswitha-k/Netflix_sql_project",
    images: [
      "/netflix-1.png",
      "/netflix-2.png"

    ],
  },
};

const ProjectDetail = () => {
  const { id } = useParams();
  const project = id ? projects[id] : null;

  if (!project) {
    return <div className="text-center mt-20 text-xl">Project not found</div>;
  }

  return (
    <div className="min-h-screen px-6 py-16 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">{project.title}</h1>

      <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
        {project.detailed}
      </p>

      {/* Image Gallery */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {project.images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`${project.title} ${index + 1}`}
            className="w-full rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
          />
        ))}
      </div>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-3 mb-10">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="px-4 py-2 text-sm rounded-full bg-primary/10 text-primary border border-primary/20"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex gap-4">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 rounded-lg bg-primary text-white hover:opacity-90 transition"
        >
          View on GitHub
        </a>
        <Link
          to="/#projects"
          className="px-6 py-3 rounded-lg border border-primary text-primary hover:bg-primary hover:text-white transition"
        >
          Back to Projects
        </Link>



      </div>
    </div>
  );
};

export default ProjectDetail;

