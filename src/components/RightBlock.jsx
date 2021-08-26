import React from "react";

export default function RightBlock() {
  return (
    <div className="p-6 font-sans">
      <h1 className="text-4xl font-medium mb-6 text-gray-600">Piter Ivanov</h1>

      <div className="mb-4">
        <h3 className="text-xl font-medium mb-2 pb-2 border-b-2 text-gray-500">
          Junior FrontEnd developer
        </h3>
        <p>
          I would like to change my current occupation from an
          engineer-architect to a web application developer. Over the course of
          2 years I have been actively studying web development technologies
          HTML, CSS, JavaScript, React, NodeJs. I have experience in team
          development of React applications. Also I have basic knowledge of
          creating Node.js server with MongoDB. I am interested in PHP and
          jQuery library. I would like to obtain a position in a company that
          offers interesting projects with growth potencial in terms of
          individual and professional development.
        </p>
      </div>

      <div className="mb-4">
        <h3 className="text-xl font-medium mb-2 pb-2 border-b-2 text-gray-500">
          Project examples:
        </h3>
        <ul>
          <li>Team project :</li>
          <li>Personal project:</li>
        </ul>
      </div>

      <div className="mb-4">
        <h3 className="text-xl font-medium mb-2 pb-2 border-b-2 text-gray-500">
          Additional Education:
        </h3>
        <ul>
          <li>Duration: 1.5 years</li>
          <li>Courses: GO-IT academy</li>
          <li>Role: Full Stack Developer</li>
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-medium mb-2 pb-2 border-b-2 text-gray-500">
          Education:
        </h3>
        <ul>
          <li>Duration: 6 years</li>
          <li>University: National Academy of Art and Architecture</li>
          <li>Role: Architect</li>
        </ul>
      </div>
    </div>
  );
}
