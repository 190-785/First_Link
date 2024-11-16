import React from "react";

const ContactPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-auto bg-palePurple text-darkPurple p-4 sm:p-6">
      <h1 className="text-4xl font-extrabold text-center text-darkPurple mb-6 sm:text-5xl">
        Contact Me
      </h1>

      <p className="text-center max-w-xl text-lg sm:text-xl p-6 bg-lightPurple rounded-lg shadow-md mb-8">
        I would love to hear from you! Feel free to reach out through any of my
        social media platforms or contact me directly via email.
      </p>

      <div className="mt-8 w-full max-w-3xl space-y-4">
        <h2 className="text-2xl font-semibold text-center sm:text-left mb-4">
          Connect with me:
        </h2>
        <ul className="space-y-4">
          <li className="flex items-center justify-center sm:justify-start">
            <span className="text-mediumPurple mr-2">Twitter:</span>
            <a
              href="https://x.com/190_785"
              className="text-mediumPurple hover:text-gray-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              @190_785
            </a>
          </li>

          <li className="flex items-center justify-center sm:justify-start">
            <span className="text-mediumPurple mr-2">LinkedIn:</span>
            <a
              href="https://in.linkedin.com/in/yash-agarwal-190e785"
              className="text-mediumPurple hover:text-gray-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              Yash Agarwal
            </a>
          </li>

          <li className="flex items-center justify-center sm:justify-start">
            <span className="text-mediumPurple mr-2">GitHub:</span>
            <a
              href="https://github.com/190-785"
              className="text-mediumPurple hover:text-gray-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              190-785
            </a>
          </li>

          <li className="flex items-center justify-center sm:justify-start">
            <span className="text-mediumPurple mr-2">Website:</span>
            <a
              href="https://190e785.wordpress.com/"
              className="text-mediumPurple hover:text-gray-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              190e785.wordpress.com
            </a>
          </li>

          <li className="flex items-center justify-center sm:justify-start">
            <span className="text-mediumPurple mr-2">Email:</span>
            <a
              href="mailto:190e785@gmail.com"
              className="text-mediumPurple hover:text-gray-700"
            >
              190e785@gmail.com
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContactPage;
