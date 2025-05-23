import React from 'react';

const ContactPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-palePurple text-darkPurple p-4">
      {/* Section for the contact form and information */}
      <section className="text-center max-w-3xl p-6 bg-lightPurple rounded-lg shadow-md w-full sm:w-10/12 md:w-8/12 lg:w-7/12 xl:w-6/12">
        
        {/* Main title */}
        <h1 className="text-3xl font-bold mb-4">Contact</h1>
        
        {/* Brief introduction text */}
        <p className="text-lg mb-6">
          Feel free to get in touch with me through the following platforms:
        </p>

        {/* Grid Layout for Contact Links (GitHub, Twitter, LinkedIn) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* GitHub */}
          <div className="flex flex-col items-center">
            <a
              href="https://github.com/190-785"
              target="_blank"
              rel="noopener noreferrer"
              className="text-mediumPurple text-lg mb-2 hover:underline"
            >
              GitHub
            </a>
            {/* Displaying the actual GitHub link */}
            <span className="text-sm text-gray-500 break-words">
              https://github.com/190-785
            </span>
          </div>

          {/* Twitter */}
          <div className="flex flex-col items-center">
            <a
              href="https://x.com/190_785"
              target="_blank"
              rel="noopener noreferrer"
              className="text-mediumPurple text-lg mb-2 hover:underline"
            >
              Twitter
            </a>
            {/* Displaying the actual Twitter link */}
            <span className="text-sm text-gray-500 break-words">
              https://x.com/190_785
            </span>
          </div>

          {/* LinkedIn */}
          <div className="flex flex-col items-center">
            <a
              href="https://in.linkedin.com/in/yash-agarwal-190e785"
              target="_blank"
              rel="noopener noreferrer"
              className="text-mediumPurple text-lg mb-2 hover:underline"
            >
              LinkedIn
            </a>
            {/* Displaying the actual LinkedIn link */}
            <span className="text-sm text-gray-500 break-words">
              https://in.linkedin.com/in/yash-agarwal-190e785
            </span>
          </div>
        </div>

        {/* Bottom Row for Email & Website Links */}
        <div className="mt-6 flex justify-center space-x-8">
          {/* Email */}
          <div className="flex flex-col items-center">
            <a
              href="mailto:190e785@gmail.com"
              className="text-mediumPurple text-lg mb-2 hover:underline"
            >
              Email
            </a>
            {/* Displaying the actual Email address */}
            <span className="text-sm text-gray-500 break-words">
              190e785@gmail.com
            </span>
          </div>

          {/* Website */}
          <div className="flex flex-col items-center">
            <a
              href="https://190e785.wordpress.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-mediumPurple text-lg mb-2 hover:underline"
            >
              Website
            </a>
            {/* Displaying the actual Website link */}
            <span className="text-sm text-gray-500 break-words">
              https://190e785.wordpress.com/
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
