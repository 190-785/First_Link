import React from "react";

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-palePurple text-darkPurple">
      {/* Section to display the About Page content */}
      <section className="flex-grow max-w-3xl p-6 bg-lightPurple rounded-lg shadow-md w-full sm:w-10/12 md:w-8/12 lg:w-7/12 xl:w-6/12 mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">
          About This Project
        </h1>

        {/* Introduction to the First Link Rule */}
        <p className="text-lg mb-4">
          The "First Link Rule" is a fascinating phenomenon in Wikipedia, where
          if you start from any Wikipedia page and follow the first link on each
          subsequent page, you will eventually reach the "Philosophy" page. This
          unexpected journey through a series of Wikipedia articles inspired the
          creation of this project.
        </p>

        {/* Explanation of the project's functionality */}
        <p className="text-lg mb-4">
          This project automates the First Link Rule journey through Wikipedia
          using a web scraper. By entering any Wikipedia page URL, the project
          will trace the first link on each page and continue this process until
          it reaches the "Philosophy" page. The goal is to help users visualize
          how the First Link Rule operates.
        </p>

        {/* Explanation of loop detection feature */}
        <p className="text-lg mb-4">
          One important feature of this project is its ability to detect when a
          link traversal ends in a loop. If the scraper encounters a cycle or
          infinite loop in the links, it will notify the user. This ensures that
          the tool identifies whether the First Link Rule leads to the
          Philosophy page or if the link traversal is stuck in a loop.
        </p>

        {/* Acknowledgment of the inspiration */}
        <p className="text-lg mb-4">
          This project was inspired by{" "}
          <a
            href="https://www.youtube.com/@not_David"
            target="_blank"
            rel="noopener noreferrer"
            className="text-mediumPurple underline"
          >
            Not David's video
          </a>{" "}
          that explains the First Link Rule in an engaging and insightful way. I
          recommend watching the video for a deeper understanding of the concept
          and to see the rule in action. You can check it out{" "}
          <a
            href="https://youtu.be/-llumS2rA8I?feature=shared"
            target="_blank"
            rel="noopener noreferrer"
            className="text-mediumPurple underline"
          >
            here
          </a>
          .
        </p>

        {/* Details about the development process */}
        <p className="text-lg mb-4">
          I built this project with both front-end and back-end components
          working seamlessly together. The front-end, powered by React, provides
          a simple interface for users to enter a Wikipedia page and start the
          link traversal process. The back-end handles the web scraping, path
          tracking, and loop detection. The interface is designed for a clean,
          user-friendly experience, showing users the steps taken, any errors
          encountered, and the full traversal path.
        </p>

        {/* Future plans for the project */}
        <p className="text-lg mb-4">
          This project is a work in progress! While the core functionality of
          Wikipedia link traversal is complete, I continue to refine the project
          by adding new features, improving performance, and enhancing the user
          experience. Future updates will aim to make the tool even more robust
          and enjoyable to use.
        </p>

        {/* Invitation to explore the project */}
        <p className="text-lg mb-4">
          I invite you to explore the project yourself! Whether you're here to
          test the tool, learn more about the fascinating First Link Rule, or
          discover if a Wikipedia link leads to a loop, I hope this project
          offers something interesting and useful for you.
        </p>
      </section>
    </div>
  );
};

export default AboutPage;
