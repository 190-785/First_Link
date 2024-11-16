import React, { useState } from "react";
import axios from "axios";

// Helper function to clean and format the search term
const formatSearchTerm = (term) => {
  let formattedTerm = term.trim();
  if (formattedTerm.startsWith("https://en.wikipedia.org/wiki/")) {
    formattedTerm = formattedTerm.replace("https://en.wikipedia.org/wiki/", "");
  } else if (formattedTerm.startsWith("http://en.wikipedia.org/wiki/")) {
    formattedTerm = formattedTerm.replace("http://en.wikipedia.org/wiki/", "");
  }
  return formattedTerm.replace(/^\/+/, ""); // Clean up leading slashes
};

// Result Display Component
const ResultDisplay = ({ result }) => (
  <div className="mt-4 p-6 bg-lightPurple rounded-lg shadow-md">
    <h2 className="text-2xl font-semibold mb-4">Scraping Results</h2>
    {result.error ? (
      <>
        <p className="text-red-500">{result.error}</p>
        <p>
          <strong>Link Path:</strong>
        </p>
        <ul className="list-disc pl-5">
          {result.path.map((item, index) => (
            <li key={index}>
              <a
                href={item}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </>
    ) : (
      <>
        <p>
          <strong>Original Link:</strong>
          <a
            href={result.path[0]}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            {result.path[0]}
          </a>
        </p>
        <p>
          <strong>Steps Taken:</strong> {result.steps}
        </p>
        <p>
          <strong>Last Link (Philosophy):</strong>
          {result.last_link && (
            <a
              href={result.last_link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              {result.last_link}
            </a>
          )}
        </p>
      </>
    )}
  </div>
);

// Loading Spinner Component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center">
    <div className="spinner"></div> {/* Custom spinner class */}
    <p className="ml-4 text-lg text-darkPurple">Processing...</p>
  </div>
);

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [result, setResult] = useState(null); // State for storing backend response
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const [isFullTraversalAvailable, setIsFullTraversalAvailable] =
    useState(false); // State to show full traversal button
  const [showFullPath, setShowFullPath] = useState(false); // State to toggle full path visibility

  const BACKEND_URL =
    import.meta.env.VITE_BACKEND_URL || "http://localhost:5000"; // Default for local dev

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!searchTerm) {
      setError("Please enter a Wikipedia page.");
      return;
    }

    setError("");
    setSuccess("");
    setResult(null); // Clear previous results
    setIsLoading(true); // Start loading

    const cleanSearchTerm = formatSearchTerm(searchTerm);
    const wikiUrl = `https://en.wikipedia.org/wiki/${encodeURIComponent(
      cleanSearchTerm
    )}`;

    try {
      const response = await axios.post(`${BACKEND_URL}/start-traversal`, {
        start_url: wikiUrl,
      });

      if (response.status === 200) {
        setSuccess("Successfully sent to the backend!");
        setResult(response.data); // Store the response data in state
        setIsFullTraversalAvailable(true); // Enable full traversal button
      } else {
        setError("Unexpected response from the backend.");
      }
    } catch (err) {
      console.error(err);
      const errorMessage =
        err.response?.data?.message ||
        err.message ||
        "An error occurred while sending the URL to the backend.";
      setError(errorMessage);
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  const handleShowEntirePath = () => {
    if (result?.path) {
      setShowFullPath((prev) => !prev); // Toggle the visibility of the full path
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-palePurple text-darkPurple p-4 overflow-hidden">
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <h1 className="text-5xl font-bold mb-6 mt-6">
            Welcome to Link Rule!
          </h1>
          <p className="text-center max-w-xl text-lg p-6 bg-lightPurple rounded-lg shadow-md mb-4">
            Enter a Wikipedia page below to submit it for processing.
          </p>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col md:flex-row mb-4 w-full max-w-lg"
          >
            <input
              type="text"
              className="border border-mediumPurple p-2 rounded-lg mb-2 md:mb-0 md:mr-2 flex-grow"
              placeholder="Search Wikipedia..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              disabled={isLoading} // Disable input while loading
            />
            <button
              type="submit"
              className="bg-mediumPurple text-white px-4 py-2 rounded-lg hover:bg-darkPurple transition duration-200"
              disabled={isLoading} // Disable button while loading
            >
              Start Traversal
            </button>
          </form>
          {error && <p className="text-red-500 mt-4">{error}</p>}
          {success && <p className="text-green-500 mt-4">{success}</p>}

          {result && <ResultDisplay result={result} />}

          {/* Full traversal button (appears after the first result) */}
          {isFullTraversalAvailable && (
            <button
              onClick={handleShowEntirePath}
              className="bg-darkPurple text-white px-6 py-2 rounded-lg mt-4 hover:bg-mediumPurple transition duration-200"
              disabled={isLoading}
            >
              {showFullPath ? "Hide Entire Path" : "Show Entire Path"}
            </button>
          )}

          {/* Show Full Path Toggle Button */}
          {showFullPath && (
            <div className="mt-4 p-6 bg-lightPurple rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4">
                Full Path Traversed
              </h2>
              <ul className="list-disc pl-5">
                {result.path.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default HomePage;
