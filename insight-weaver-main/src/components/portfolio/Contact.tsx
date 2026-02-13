const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-8">

          <div className="max-w-xl">
            <h2 className="text-4xl font-bold mb-6">Contact.</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Feel free to get in touch with me. I am always open to discussing
              new projects, creative ideas or opportunities to be part of your visions.
            </p>
          </div>

          <a
            href="/my_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-black text-white font-medium flex items-center gap-2 hover:opacity-90 transition"
          >
            Download CV
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 16l4-5h-3V4h-2v7H8l4 5zm-7 2h14v2H5v-2z" />
            </svg>
          </a>

        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Email */}
          <div className="bg-muted p-8 flex items-start gap-4">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
              <path d="M2 4h20v16H2V4zm18 2H4v12h16V6zm-8 5l8-5H4l8 5z" />
            </svg>
            <div>
              <p className="text-sm font-semibold mb-1">EMAIL</p>
              <a
                href="mailto:yaswithareddy77@gmail.com"
                className="text-lg hover:underline"
              >
                yaswithareddy77@gmail.com
              </a>
            </div>
          </div>

          {/* LinkedIn */}
          <div className="bg-muted p-8 flex items-start gap-4">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
              <path d="M4.98 3.5C4.98 4.88 3.87 6 2.49 6S0 4.88 0 3.5 1.12 1 2.49 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7.5 0h4.8v2.3h.1c.67-1.3 2.3-2.7 4.73-2.7 5.06 0 6 3.3 6 7.6V24h-5v-7.4c0-1.8-.03-4.1-2.5-4.1-2.5 0-2.9 2-2.9 4V24h-5V8z" />
            </svg>
            <div>
              <p className="text-sm font-semibold mb-1">LinkedIn</p>
              <a
                href="https://www.linkedin.com/in/yaswitha-k-19653927a/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg break-all hover:underline"
              >
                https://www.linkedin.com/in/yaswitha-k-19653927a/
              </a>
            </div>
          </div>

          {/* GitHub */}
          <div className="bg-muted p-8 flex items-start gap-4">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.4 9.8 8.2 11.38.6.1.82-.26.82-.58 0-.28-.01-1.02-.02-2-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.34-1.77-1.34-1.77-1.1-.75.08-.74.08-.74 1.22.09 1.86 1.25 1.86 1.25 1.08 1.85 2.84 1.32 3.53 1.01.11-.79.42-1.32.76-1.63-2.66-.31-5.46-1.34-5.46-5.95 0-1.31.47-2.38 1.25-3.22-.13-.31-.54-1.56.12-3.25 0 0 1.02-.33 3.35 1.23A11.67 11.67 0 0112 6.8c1.02 0 2.05.14 3.01.41 2.33-1.56 3.35-1.23 3.35-1.23.66 1.69.25 2.94.12 3.25.78.84 1.25 1.91 1.25 3.22 0 4.62-2.8 5.63-5.48 5.93.43.37.81 1.1.81 2.22 0 1.6-.01 2.9-.01 3.29 0 .32.22.69.83.57C20.6 21.8 24 17.3 24 12 24 5.37 18.63 0 12 0z" />
            </svg>
            <div>
              <p className="text-sm font-semibold mb-1">GitHub</p>
              <a
                href="https://github.com/yaswitha-k"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg break-all hover:underline"
              >
                https://github.com/yaswitha-k
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
