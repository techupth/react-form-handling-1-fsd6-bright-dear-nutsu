import "./App.css";
import { useState } from "react";

function App() {
  const [messageInput, setMessageInput] = useState("");
  const [message, setMessage] = useState("Greeting Message");
  return (
    <div className="App">
      <div className="greeting-container">{message}</div>
      <div className="input-container">
        <label htmlFor="greeting-message">New Greeting Message</label>
        <input
          id="greeting-message"
          type="text"
          onChange={(event) => {
            setMessageInput(event.target.value);
          }}
        />
      </div>

      <div className="buttons">
        <button
          onClick={(event) => {
            setMessage(messageInput);
          }}
        >
          Update text
        </button>
      </div>
    </div>
  );
}

export default App;
