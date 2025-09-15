import React, { useState } from "react";
import "./styles/style.css";

interface ReportData {
  date: string ;
  work: string;
  sport: string;
  book: string;
  audiobook: string;
  steps: string;
  sleepstart: string;
  sleepend: string;
  thoughts: string;
}

export default function App() {
  const [formData, setFormData] = useState<ReportData>({
    date : new Date().toISOString().split("T")[0],
    work: "",
    sport: "",
    book: "",
    audiobook: "",
    steps: "",
    sleepstart: "",
    sleepend: "",
    thoughts: "",
  });

  const [savedData, setSavedData] = useState<ReportData | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setSavedData(formData);
  };

  return (
    <div className="container">
      <header className="header">
        Hello! This web application is designed to create a daily report in JSON format after filling out a simple form.
      </header>

      <main className="main">
        <form className="form" onSubmit={(e) => e.preventDefault()}>
          {["work", "sport", "book", "audiobook", "steps", "sleepstart", "sleepend", "thoughts"].map((field) => (
            <div className="input-group" key={field}>
              <input
                type="text"
                name={field}
                value={formData[field as keyof ReportData]}
                onChange={handleChange}
                required
              />
              <label>{field.charAt(0).toUpperCase() + field.slice(1)}</label>
            </div>
          ))}
          <button type="button" onClick={handleSave}>Save</button>
        </form>

        {savedData && (
          <div className="json-output">
            <h3>Saved Report (JSON):</h3>
            <pre>{JSON.stringify(savedData, null, 2)}</pre>
          </div>
        )}
      </main>

      <footer className="footer">
        <p>Contacts: <a href="https://t.me/yourtelegram">Telegram</a> | <a href="https://github.com/yourgithub">GitHub</a></p>
      </footer>
    </div>
  );
}
