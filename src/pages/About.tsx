import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About - Your Name</title>
        <meta
          name="description"
          content="Learn more about Your Name - software engineer, open source contributor, and technology enthusiast."
        />
      </Helmet>

      <div className="container-narrow py-12 md:py-16">
        <div className="prose">
          <h1>About</h1>
          <p>
            I'm a software engineer with over 5 years of experience building web
            applications. I specialize in React, TypeScript, and Node.js, and I'm
            passionate about creating elegant solutions to complex problems.
          </p>

          <h2>Background</h2>
          <p>
            I started my journey in software development back in 2018. Since then,
            I've worked with startups and established companies to build products
            that make a difference. My focus has always been on writing clean,
            maintainable code and creating exceptional user experiences.
          </p>

          <h2>Skills</h2>
          <ul>
            <li>
              <strong>Frontend:</strong> React, TypeScript, Next.js, Tailwind CSS
            </li>
            <li>
              <strong>Backend:</strong> Node.js, Python, PostgreSQL, Redis
            </li>
            <li>
              <strong>Tools:</strong> Git, Docker, AWS, Vercel
            </li>
            <li>
              <strong>Other:</strong> System Design, API Design, Performance Optimization
            </li>
          </ul>

          <h2>Experience</h2>
          <div className="space-y-6 not-prose">
            <div className="border-l-2 pl-4 py-2">
              <p className="text-sm text-muted-foreground">2022 - Present</p>
              <h3 className="font-mono font-medium mt-1">
                Senior Software Engineer
              </h3>
              <p className="text-muted-foreground text-sm mt-1">
                Tech Company Inc.
              </p>
              <p className="text-sm mt-2">
                Leading frontend development for core product features. Mentoring
                junior developers and establishing best practices.
              </p>
            </div>

            <div className="border-l-2 pl-4 py-2">
              <p className="text-sm text-muted-foreground">2020 - 2022</p>
              <h3 className="font-mono font-medium mt-1">Software Engineer</h3>
              <p className="text-muted-foreground text-sm mt-1">Startup XYZ</p>
              <p className="text-sm mt-2">
                Built and maintained React applications. Implemented CI/CD
                pipelines and improved deployment processes.
              </p>
            </div>

            <div className="border-l-2 pl-4 py-2">
              <p className="text-sm text-muted-foreground">2018 - 2020</p>
              <h3 className="font-mono font-medium mt-1">
                Junior Developer
              </h3>
              <p className="text-muted-foreground text-sm mt-1">Agency ABC</p>
              <p className="text-sm mt-2">
                Developed websites and web applications for various clients.
                Learned fundamentals of web development and agile methodologies.
              </p>
            </div>
          </div>

          <h2>Education</h2>
          <p>
            B.S. in Computer Science from State University (2018). Focused on
            software engineering and distributed systems.
          </p>

          <h2>Get in touch</h2>
          <p>
            I'm always interested in hearing about new projects and opportunities.
            Feel free to reach out at{" "}
            <a href="mailto:hello@example.com">hello@example.com</a>.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
