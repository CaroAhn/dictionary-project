import "./App.css";
import Dictionary from "./Dictionary";
import Yoshi from "./Yoshi";
import Font from "./Font";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Yoshi />
        <Font />
        <main>
          <Dictionary />
        </main>
        <footer>
          Coded by Caro Ahn and is{" "}
          <a
            href="https://github.com/CaroAhn/dictionary-project"
            rel="noreferrer"
            target="_blank"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
