import React, { useState } from "react";
import "../styles/style.css";


interface ReportData {
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
          <label>Working hours<input type="text" name="work" value={formData.work} onChange={handleChange} /></label>
          <label>Time for sport<input type="text" name="sport" value={formData.sport} onChange={handleChange} /></label>
          <label>Pages read<input type="text" name="book" value={formData.book} onChange={handleChange} /></label>
          <label>Minutes listened<input type="text" name="audiobook" value={formData.audiobook} onChange={handleChange} /></label>
          <label>Steps<input type="text" name="steps" value={formData.steps} onChange={handleChange} /></label>
          <label>Fell asleep<input type="text" name="sleepstart" value={formData.sleepstart} onChange={handleChange} /></label>
          <label>Wake up<input type="text" name="sleepend" value={formData.sleepend} onChange={handleChange} /></label>
          <label>Thoughts<input type="text" name="thoughts" value={formData.thoughts} onChange={handleChange} /></label>
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
