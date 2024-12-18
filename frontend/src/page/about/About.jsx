import React from "react";

const About = () => {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>About Our To-Do List Application</h1>
      <p>
        Welcome to our To-Do List application! This platform is designed to help you stay organized, increase productivity, and never miss a task again. Whether you're planning
        your day, managing work projects, or keeping track of personal goals, this app is here to make your life easier.
      </p>

      <h2>Key Features</h2>
      <ul>
        <li>
          <strong>Add Tasks:</strong> Quickly create new tasks with a title and optional details.
        </li>
        <li>
          <strong>Mark as Completed:</strong> Track your progress by marking tasks as done.
        </li>
        <li>
          <strong>Edit Tasks:</strong> Need to make a change? Edit tasks anytime with ease.
        </li>
        <li>
          <strong>Delete Tasks:</strong> Clean up your list by removing tasks you no longer need.
        </li>
        <li>
          <strong>Responsive Design:</strong> Use it on your desktop, tablet, or mobile device seamlessly.
        </li>
      </ul>

      <h2>Why Use This App?</h2>
      <p>
        We believe that staying organized should be simple and stress-free. Our To-Do List app is built with user-friendliness in mind, offering a clean and intuitive interface
        powered by the latest technologies like the
        <strong> MERN stack (MongoDB, Express, React, and Node.js)</strong>.
      </p>

      <p>Start organizing your tasks today and experience the simplicity and efficiency of our To-Do List application!</p>
    </div>
  );
};

export default About;
