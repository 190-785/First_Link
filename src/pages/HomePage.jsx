import React, { useState } from "react";
import axios from "axios";

// Helper function to clean and format the search term
const formatSearchTerm = (term) => {
  let formattedTerm = term.trim();
  // Remove the Wikipedia URL prefix if present
  if (formattedTerm.startsWith("https://en.wikipedia.org/wiki/")) {
    formattedTerm = formattedTerm.replace("https://en.wikipedia.org/wiki/", "");
  } else if (formattedTerm.startsWith("http://en.wikipedia.org/wiki/")) {
    formattedTerm = formattedTerm.replace("http://en.wikipedia.org/wiki/", "");
  }
  return formattedTerm.replace(/^\/+/, ""); // Clean up leading slashes
};

// Result Display Component to show results after traversal
const ResultDisplay = ({ result, onToggleFullPath }) => (
  <div className="mt-4 p-6 bg-lightPurple rounded-lg shadow-md">
    <h2 className="text-2xl font-semibold mb-4">Traversal Results</h2>
    {result.error ? (
      <>
        {/* Show error message if there was an issue during traversal */}
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
        {/* If successful, display traversal information */}
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
          <strong>Final Link (Philosophy):</strong>
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

        {/* Show a button to toggle full path visibility */}
        <button
          onClick={onToggleFullPath}
          className="bg-darkPurple text-white px-6 py-2 rounded-lg mt-4 hover:bg-mediumPurple transition duration-200"
        >
          {result.showFullPath ? "Hide Entire Path" : "Show Entire Path"}
        </button>

        {/* Full Path Toggle */}
        {result.showFullPath && (
          <div className="mt-4 p-6 bg-lightPurple rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Full Path Traversed</h2>
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

  const BACKEND_URL =
    import.meta.env.VITE_BACKEND_URL || "http://localhost:5000"; // Default for local dev

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!searchTerm) {
      setError("Please enter a Wikipedia page link.");
      return;
    }

    setError("");
    setSuccess("");
    setResult(null); // Clear previous results
    setIsLoading(true); // Start loading state

    const cleanSearchTerm = formatSearchTerm(searchTerm);
    const wikiUrl = `https://en.wikipedia.org/wiki/${encodeURIComponent(
      cleanSearchTerm
    )}`;

    try {
      const response = await axios.post(`${BACKEND_URL}/start-traversal`, {
        start_url: wikiUrl,
      });

      if (response.status === 200) {
        setSuccess("Traversal completed successfully!");
        setResult({
          ...response.data,
          showFullPath: false, // Default to not show full path
        });
      } else {
        setError("Unexpected response from the backend.");
      }
    } catch (err) {
      console.error(err);
      const errorMessage =
        err.response?.data?.message || err.message || "An error occurred";
      setError(errorMessage);
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  // Toggle the visibility of the full path traversed
  const handleToggleFullPath = () => {
    setResult((prevResult) => ({
      ...prevResult,
      showFullPath: !prevResult.showFullPath, // Toggle full path visibility
    }));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-palePurple text-darkPurple p-4">
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          {/* Main heading */}
          <h1 className="text-5xl font-bold mb-6 mt-6 text-center">
            Welcome to Link Rule!
          </h1>

          {/* Instruction text */}
          <p className="text-center max-w-xl text-lg p-6 bg-lightPurple rounded-lg shadow-md mb-4">
            Enter the name of a Wikipedia page below, and we'll help you find
            its path to the 'Philosophy' page.
          </p>

          {/* Form for submitting a Wikipedia link */}
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

          {/* Error and success messages */}
          {error && <p className="text-red-500 mt-4">{error}</p>}
          {success && <p className="text-green-500 mt-4">{success}</p>}

          {/* Display result */}
          {result && (
            <ResultDisplay
              result={result}
              onToggleFullPath={handleToggleFullPath}
            />
          )}
        </>
      )}
    </div>
  );
};

export default HomePage;
