import React from "react";
import "./Testimonials.css";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      text: "Great experience!",
      image: "https://fhadeel-portfolio.netlify.app/img/fhadiil1.jpg",
    },
    {
      id: 2,
      name: "Jane Smith",
      text: "Loved the service!",
      image: "https://fhadeel-portfolio.netlify.app/img/fhadiil.png",
    },
    // Add more testimonials as needed
  ];

  return (
    <section id="testimonials">
      <div className="testimonials">
        <h2>What our clients are saying</h2>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <img src={testimonial.image} alt={testimonial.name} />
            <h4>{testimonial.name}</h4>
            <p>"{testimonial.text}"</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
