import "./App.css";

export default function App() {
  return (
    <>
      <nav className="top-nav">
        <div className="nav-inner">
          <ul className="nav-list">
            <li><a className="nav-link" href="#about">About</a></li>
            <li><a className="nav-link" href="#research">Research</a></li>
            <li><a className="nav-link" href="#advisors">Advisors</a></li>
            <li><a className="nav-link" href="#background">Background</a></li>
            <li><a className="nav-link" href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      <div className="page">
        <header>
          <img src="/images/aya.jpg" alt="Photo of Aya Spira" className="headshot" />
          <div>
            <h1>Aya Spira</h1>
            <div className="tagline">M.Sc. Student · AI Security Researcher</div>
            <div className="meta">
              <span>Tel Aviv University</span>
              <span>LLM security · agentic systems · multimodal robustness</span>
            </div>
            <div className="meta" style={{ marginTop: "6px" }}>
              <span>
                <a href="mailto:aya.spira@mail.tau.ac.il">aya.spira@mail.tau.ac.il</a>
              </span>
              <span>Tel Aviv, Israel</span>
              <span>
                <a href="https://github.com/Aya168" target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </span>
            </div>
          </div>
        </header>

        <main>
          <section id="about">
            <h2>About</h2>
            <p>
              I'm an M.Sc. student at Tel Aviv University researching the security of
              large language model (LLM) systems, with a focus on real-world failure modes
              in agentic and multimodal settings.
            </p>
          </section>

          <section id="research">
            <h2>Research</h2>
            <p>
              My research centers on <em>non-deterministic weaknesses in LLM-driven systems</em>,
              studying how rare token-level deviations and embedding drift can be amplified
              into reliable system-level attacks.
            </p>
            <ul>
              <li>LLM and agentic system security</li>
              <li>Hallucination as an attack primitive</li>
              <li>Multimodal promptware and jailbreaks</li>
            </ul>
          </section>

                    <section id="advisors">
  <h2>Advisors</h2>
  <ul>
    <li>
      <strong>      <a
        href="https://www.nassiben.com/"
        target="_blank"
        rel="noreferrer"
      >
        Dr. Ben Nassi
      </a></strong>, Tel Aviv University<br />

    </li>
    <li>
      <strong>      <a
        href="https://www.avishaiwool.sites.tau.ac.il/"
        target="_blank"
        rel="noreferrer"
      >
       Prof. Avishai Wool
      </a></strong>, Tel Aviv University<br />

    </li>
  </ul>
</section>

          <section id="background">
  <h2>Background</h2>

  <p>
    B.Sc. in Computer Science from the Technion – Israel Institute of Technology
    (<em>cum laude, GPA 93</em>).

  Coursework emphasized computer vision and cybersecurity. Research conducted at the Geometric Image Processing
  Lab focused on{" "}
  <a href="https://gip.cs.technion.ac.il/lab-projects.php?id=287" target="_blank" rel="noreferrer">
    Visually Guided Object Insertion Using Diffusion Models
  </a>.
</p>

  <p>
  Former Research Scientist at IBM Research, where I studied security and privacy
  vulnerabilities in large language models (LLMs). My work involved designing and
  simulating attack strategies and developing tools for empirical evaluation. I also
  applied AI techniques to security problems, including managing access control in
  a vector DB project and automating access request approval using agentic systems.
</p>
</section>

          <section id="contact">
            <h2>Contact</h2>
            <p>
              <a href="mailto:aya.spira@mail.tau.ac.il">aya.spira@mail.tau.ac.il</a>
            </p>
          </section>
        </main>

        <footer>
          © {new Date().getFullYear()} Aya Spira
        </footer>
      </div>
    </>
  );
}
