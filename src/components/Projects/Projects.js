import React from "react";
import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      id: 1,
      image:
        "https://i.pinimg.com/originals/df/ca/f3/dfcaf3af1446d43717e5854de199bed3.jpg",
      location: "Location 1",
      price: "$1000",
      rating: 4.5,
    },
    {
      id: 2,
      image:
        "https://cdn.indesignlive.com/wp-content/uploads/Cortex-Shelter-by-Cutwork-6.jpg",
      location: "Location 2",
      price: "$2000",
      rating: 4.0,
    },
    // Add more projects as needed
  ];

  return (
    <section id="project">
      <div className="projects">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={project.location} />
            <div className="project-details">
              <h4>{project.location}</h4>
              <p>Price: {project.price}</p>
              <p>Rating: {project.rating}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
