import React, { useState } from "react";
import axios from "axios";

export default function App() {
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);
  const [mode, setMode] = useState("submit"); // "submit" or "search"

  // TODO: Implement handleSubmit

  // TODO: Implement handleSearch

  return (
    <div style={{ padding: 20, fontFamily: "sans-serif" }}>
      <h1>Embedding Search Demo</h1>

      <div style={{ marginBottom: 10 }}>
        <button onClick={() => setMode("submit")} disabled={mode === "submit"}>
          Submit Message
        </button>
        <button onClick={() => setMode("search")} disabled={mode === "search"}>
          Search
        </button>
      </div>

      <input
        type="text"
        style={{ width: "300px", padding: "5px" }}
        placeholder={mode === "submit" ? "Enter a message" : "Search query"}
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button
        style={{ marginLeft: "10px" }}
        onClick={
          mode === "submit"
            ? /* TODO: call handleSubmit */ undefined
            : /* TODO: call handleSearch */ undefined
        }
      >
        {mode === "submit" ? "Submit" : "Search"}
      </button>

      {mode === "search" && results.length > 0 && (
        <div style={{ marginTop: 20 }}>
          <h3>Top Results</h3>
          {results.map((r, i) => (
            <div key={i} style={{ marginBottom: 8 }}>
              <strong>{r.text}</strong> — Score: {r.score.toFixed(3)}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
