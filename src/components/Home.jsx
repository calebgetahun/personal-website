export default function Home() {
  return (
    <section id="home" className="space-y-12">
      <p>
        Hey, I'm Caleb — I like to code, lift heavy circles, and solve puzzles
        (among many other things)
      </p>
      <p>
        I recently graduated from Duke University where I studied Computer
        Science + Math. While there, I tutored Data Structures & Algorithms and
        Linear Algebra, and served as a TA for a graduate-level course in iOS
        Mobile Programming.
      </p>
      <section className="space-y-4">
        <p className="text-white">
          During the summertime away from school, I've worked at {""}
          <a
            href="https://www.linkedin.com/blog/engineering/infrastructure"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 underline hover:text-blue-300"
          >
            LinkedIn
          </a>{" "}
          (on iOS mobile infrastructure and developer productivity), studied
          Ordinary and Partial Differential Equations abroad in {""}
          <a
            href="https://my.globaled.duke.edu/_portal/tds-program-brochure?programid=10229"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 underline hover:text-blue-300"
          >
            Costa Rica
          </a>
          , and made an {""}
          <a
            href="https://codeplus.duke.edu/project/augmented-reality-app-duke-basketball-museum/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 underline hover:text-blue-300"
          >
            AR app for the Duke Basketball Museum
          </a>{" "}
          for fans around the world to enjoy.
        </p>
      </section>
    </section>
  );
}
