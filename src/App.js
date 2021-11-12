import "./App.css";
import Dictionary from "./Dictionary";
import dictionary from "./dictionary.png";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <img src={dictionary} className="logo" alt="logo" />
        <h1 className="App-header">Dictionary</h1>
        <main>
          <Dictionary />
        </main>
        <footer>Coded by Caro Ahn</footer>
      </div>
    </div>
  );
}
