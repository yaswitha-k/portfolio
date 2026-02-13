const Hero = () => {
  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="min-h-screen flex items-center justify-center relative px-6 pt-20">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center gap-8">
        {/* Profile Photo */}
        <img
          src="/cognizant.jpg"
          alt="Profile"
          className="w-32 h-32 rounded-full object-cover"


        />

        {/* Text Section */}
        <div className="text-center sm:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4">
            Yaswitha Reddy.K
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg max-w-md mb-4">
            Data Analyst Fresher skilled in Python, MySQL, Power BI, and Advanced Excel.
            Passionate about extracting insights, solving business problems, and enabling data-driven decisions.
          </p>

          {/* Links */}
          <div className="flex flex-wrap gap-4">
            <a
              href="https://github.com/yaswitha-k"
              target="_blank"
              className="px-6 py-2 rounded-lg bg-gray-800 text-white font-medium hover:scale-105 transition-transform"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/yaswitha-k-19653927a/"
              target="_blank"
              className="px-6 py-2 rounded-lg border border-gray-600 text-gray-800 font-medium hover:bg-gray-200 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
