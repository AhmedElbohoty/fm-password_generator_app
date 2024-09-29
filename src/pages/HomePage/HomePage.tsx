import Password from "pages/HomePage/Password/Password";
import Form from "pages/HomePage/Form/Form";

// CSS prefix: .homepage-
import "./style.css";

function HomePage() {
  return (
    <main className="homepage">
      <section className="homepage-sect">
        <h1 className="homepage-h1">Password Generator</h1>

        <Password />

        <Form />
      </section>
    </main>
  );
}

export default HomePage;
