import React from "react";

const ContactPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-palePurple text-darkPurple p-4">
      <h1 className="text-4xl font-bold mb-6 text-center">Contact Me</h1>
      <p className="text-center max-w-xl text-lg p-6 bg-lightPurple rounded-lg shadow-md mb-8">
        I would love to hear from you! Feel free to reach out through any of my
        social media platforms or contact me directly via email.
      </p>
      <div className="mt-8 w-full sm:w-3/4 lg:w-1/2">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Connect with me:
        </h2>
        <ul className="space-y-4">
          <li>
            <a
              href="https://x.com/190_785"
              className="text-mediumPurple hover:text-gray-700 block text-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              href="https://in.linkedin.com/in/yash-agarwal-190e785"
              className="text-mediumPurple hover:text-gray-700 block text-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://github.com/190-785"
              className="text-mediumPurple hover:text-gray-700 block text-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://190e785.wordpress.com/"
              className="text-mediumPurple hover:text-gray-700 block text-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              Website
            </a>
          </li>
          <li>
            <a
              href="mailto:190e785@gmail.com"
              className="text-mediumPurple hover:text-gray-700 block text-center"
            >
              Email
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContactPage;
