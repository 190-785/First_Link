import React from 'react';

const AboutPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-palePurple text-darkPurple">
      <section className="text-center max-w-xl p-6 bg-lightPurple rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6">About This Project</h1>
        <p className="text-lg mb-4">
          Building this project has been a journey of learning, experimenting, and overcoming challenges. From day one, I set out to create an intuitive, fully functional web application that showcases the intersection of web development, backend processing, and data retrieval techniques. The goal was not only to build a tool that works but to create a seamless experience that users can easily interact with.
        </p>
        <p className="text-lg mb-4">
          This project started as a simple idea, inspired by a YouTube video by <a href="https://www.youtube.com/@not_David" className="text-mediumPurple hover:text-darkPurple" target="_blank" rel="noopener noreferrer">Not David</a>, which fueled my passion for taking on complex projects and solving real-world problems with code. The video served as a catalyst for the development of this tool, which started as a simple idea and evolved into a robust platform capable of traversing Wikipedia pages to find meaningful connections.
        </p>
        <p className="text-lg mb-4">
          Throughout the process, I encountered several obstacles—from fine-tuning the backend to handling edge cases in the scraping algorithm. However, these challenges have shaped the way I approach problem-solving and have helped me grow as a developer. The final product is not just a tool, but a reflection of my journey through learning modern web technologies, experimenting with new techniques, and embracing the iterative process of development.
        </p>
        <p className="text-lg mb-4">
          One of the most rewarding parts of this project has been integrating the frontend and backend seamlessly. With React at the heart of the frontend, paired with powerful backend technologies, I’ve been able to create a user-friendly interface that responds in real time while handling complex data retrieval tasks behind the scenes. I also took great care in designing an accessible, visually appealing UI that reflects my personal taste, using my favorite color palette.
        </p>
        <p className="text-lg mb-4">
          But this project is more than just code—it’s about the journey. It’s about how I’ve evolved as a developer, learning new skills in real-world applications, tackling challenges head-on, and improving my understanding of both front-end and back-end technologies. It's about sharing the learning process, and I hope this project inspires others as much as it has inspired me.
        </p>
      </section>
    </div>
  );
};

export default AboutPage;
