import React from 'react';

const ContactPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-palePurple text-darkPurple p-4">
      <section className="text-center max-w-3xl p-6 bg-lightPurple rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-4">Contact</h1>
        <p className="text-lg mb-4">
          Feel free to get in touch with me through the following platforms:
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-4">
          <div className="flex flex-col items-center">
            <a
              href="https://github.com/190-785"
              target="_blank"
              rel="noopener noreferrer"
              className="text-mediumPurple text-lg mb-2"
            >
              GitHub
            </a>
            <span className="text-sm text-gray-500">https://github.com/190-785</span>
          </div>

          <div className="flex flex-col items-center">
            <a
              href="https://x.com/190_785"
              target="_blank"
              rel="noopener noreferrer"
              className="text-mediumPurple text-lg mb-2"
            >
              Twitter
            </a>
            <span className="text-sm text-gray-500">https://x.com/190_785</span>
          </div>

          <div className="flex flex-col items-center">
            <a
              href="https://in.linkedin.com/in/yash-agarwal-190e785"
              target="_blank"
              rel="noopener noreferrer"
              className="text-mediumPurple text-lg mb-2"
            >
              LinkedIn
            </a>
            <span className="text-sm text-gray-500">https://in.linkedin.com/in/yash-agarwal-190e785</span>
          </div>

          <div className="flex flex-col items-center">
            <a
              href="mailto:190e785@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-mediumPurple text-lg mb-2"
            >
              Email
            </a>
            <span className="text-sm text-gray-500">190e785@gmail.com</span>
          </div>

          <div className="flex flex-col items-center">
            <a
              href="https://190e785.wordpress.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-mediumPurple text-lg mb-2"
            >
              Website
            </a>
            <span className="text-sm text-gray-500">https://190e785.wordpress.com/</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
