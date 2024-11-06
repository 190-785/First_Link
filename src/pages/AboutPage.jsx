import React from 'react';

const AboutPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-palePurple text-darkPurple">
      <section className="text-center max-w-xl p-6 bg-lightPurple rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-4">About This Project</h1>
        <p className="text-lg mb-4">
          This project was created to showcase the journey of building a fully functional web application.
        </p>
        <p className="text-lg mb-4">
          From the initial stages of planning to the final touches, the project highlights key development
          phases, technology choices, and the challenges overcome along the way.
        </p>
        <p className="text-lg">
          It is not just about the end result, but the learning experience and growth that came with it.
        </p>
      </section>
    </div>
  );
};

export default AboutPage;
