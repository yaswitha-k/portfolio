import { useScrollReveal } from "@/hooks/useScrollReveal";

const articles = [
  {
    title: "How I Built My First Power BI Dashboard",
    excerpt: "A walkthrough of the process, challenges, and insights gained from building an HR analytics dashboard.",
    date: "Coming Soon",
  },
  {
    title: "EDA Best Practices for Beginners",
    excerpt: "Key steps and Python libraries every aspiring data analyst should know for exploratory data analysis.",
    date: "Coming Soon",
  },
];

const Blog = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="blog" className="py-24 px-6">
      <div ref={ref} className="max-w-5xl mx-auto">
        <h2
          className={`text-3xl sm:text-4xl font-bold text-center mb-4 gradient-text transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Insights & Data Stories
        </h2>
        <p
          className={`text-muted-foreground text-center mb-12 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          Sharing learnings from my data journey
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {articles.map((a, i) => (
            <div
              key={a.title}
              className={`glass rounded-xl p-6 glass-hover transition-all duration-500 hover:scale-[1.02] hover:glow-violet ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${300 + i * 150}ms` }}
            >
              <span className="text-xs text-accent font-medium">{a.date}</span>
              <h3 className="text-lg font-semibold text-foreground mt-2 mb-3">{a.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{a.excerpt}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
