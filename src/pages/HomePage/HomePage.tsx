import Password from "pages/HomePage/Password/Password";

// CSS prefix: .homepage-
import "./style.css";

function HomePage() {
  return (
    <main className="homepage">
      <section className="homepage-sect">
        <h1 className="homepage-h1">Password Generator</h1>

        <Password value="P4$5W0rD!" />
      </section>
    </main>
  );
}

export default HomePage;
