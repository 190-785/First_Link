import React, { useState } from "react";
import axios from "axios";
import "./HomePage.css";

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Backend URL for the Flask API
  const BACKEND_URL =
    import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setResult(null);

    if (!searchTerm.trim()) {
      setError("Please enter a Wikipedia page.");
      return;
    }

    setIsLoading(true);

    // Clean and format search term
    let cleanSearchTerm = searchTerm.trim();
    if (cleanSearchTerm.startsWith("https://en.wikipedia.org/wiki/")) {
      cleanSearchTerm = cleanSearchTerm.replace(
        "https://en.wikipedia.org/wiki/",
        ""
      );
    }
    const formattedTerm = encodeURIComponent(cleanSearchTerm);
    const wikiUrl = `https://en.wikipedia.org/wiki/${formattedTerm}`;

    try {
      // Call backend API
      const response = await axios.post(`${BACKEND_URL}/start-traversal`, {
        start_url: wikiUrl,
      });

      if (response.status === 200) {
        setSuccess("Traversal completed successfully!");
        setResult(response.data);
      } else {
        setError("Unexpected response from the backend.");
      }
    } catch (err) {
      setError(
        err.response?.data?.error ||
          "An error occurred while processing your request."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="home-page">
      <h1>Wikipedia Traversal Tool</h1>
      <p>
        Enter the URL or name of a Wikipedia page to find its path to the
        Philosophy page.
      </p>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchTerm}
          placeholder="Enter Wikipedia URL or page name"
          onChange={(e) => setSearchTerm(e.target.value)}
          required
        />
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Processing..." : "Start Traversal"}
        </button>
      </form>

      {error && <div className="error-message">{error}</div>}
      {success && <div className="success-message">{success}</div>}

      {result && (
        <div className="result-container">
          <h2>Traversal Results</h2>
          <p>Steps taken: {result.steps}</p>
          <p>
            Last link visited:{" "}
            <a
              href={result.last_link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {result.last_link}
            </a>
          </p>
          <p>Traversal Path:</p>
          <ul>
            {result.path.map((link, index) => (
              <li key={index}>
                <a href={link} target="_blank" rel="noopener noreferrer">
                  {link}
                </a>
              </li>
            ))}
          </ul>
          {result.error && (
            <p className="error-message">Error: {result.error}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default HomePage;
