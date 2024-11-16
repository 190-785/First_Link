import React from 'react';

const AboutPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-palePurple text-darkPurple">
      <section className="text-center max-w-xl p-6 bg-lightPurple rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6">About This Project</h1>
        <p className="text-lg mb-4">
          Wikipedia's First Link Rule is a fascinating phenomenon where, when starting from any Wikipedia page, following the first link on each subsequent page (while avoiding any disambiguation pages), eventually leads you to the "Philosophy" page. This chain of links creates an interesting and unexpected journey through Wikipedia articles, and is the foundation of the project that I built.
        </p>
        <p className="text-lg mb-4">
          The idea behind this project is to automate that journey through Wikipedia using a web scraper. The goal is to start with a given Wikipedia page, find the first link on that page, follow that link, and continue the process until reaching the "Philosophy" page. My project allows users to input any Wikipedia page, and it will trace the entire path of links, showing them how the First Link Rule works.
        </p>
        <p className="text-lg mb-4">
          A key feature of this project is its ability to detect whether a link traversal ends in a loop. If the traversal encounters a cycle, the tool will notify the user, helping them understand whether the First Link Rule applies or if the journey is stuck in a loop. This ensures that users can better track and understand how Wikipedia pages link together.
        </p>
        <p className="text-lg mb-4">
          This project was heavily inspired by a YouTube video by <a href="https://www.youtube.com/@not_David" className="text-mediumPurple hover:text-darkPurple" target="_blank" rel="noopener noreferrer">Not David</a>, which explains the First Link Rule and its implications in an interesting and entertaining way. I highly recommend checking out the video to understand the concept better and see the rule in action. You can watch it here: <a href="https://youtu.be/-llumS2rA8I?feature=shared" className="text-mediumPurple hover:text-darkPurple" target="_blank" rel="noopener noreferrer">Not David's Video on YouTube</a>.
        </p>
        <p className="text-lg mb-4">
          Throughout the development of this project, I built both the front-end and back-end to work seamlessly together. The front-end, built with React, allows users to enter a Wikipedia page and start the traversal. The back-end handles the scraping logic, tracks the path taken, and checks for loops. I also made sure to focus on user experience by designing a clean, intuitive interface that allows users to easily see the steps taken, including any errors and the full traversal path.
        </p>
        <p className="text-lg mb-4">
          This project is still evolving! While it currently offers the core functionality of Wikipedia link traversal, I am continually improving it, adding new features, and refining its performance. Future improvements will aim to make the project even more robust and user-friendly, so stay tuned for more updates!
        </p>
        <p className="text-lg">
          I invite you to explore the project and see for yourself how the First Link Rule works. Whether you're here to test the tool, learn about Wikipedia's fascinating first link chain, or discover if a link leads to a loop, I hope this project offers something interesting for you!
        </p>
      </section>
    </div>
  );
};

export default AboutPage;
