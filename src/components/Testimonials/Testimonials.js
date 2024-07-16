import React from "react";
import StarRating from "../StarRating/StarRating";
import "./Testimonials.css";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Muhammad Fhadiil",
      text: "Great experience!",
      image: "https://fhadeel-portfolio.netlify.app/img/fhadiil1.jpg",
      rating: 4.5,
    },
    {
      id: 2,
      name: "Abdulkadir Abubakar Katagum",
      text: "Loved the service!",
      image: "https://fhadeel-portfolio.netlify.app/img/fhadiil.png",
      rating: 5,
    },
    {
      id: 3,
      name: "Maryam Shehu",
      text: "Loved the service!",
      image: "https://fhadeel-portfolio.netlify.app/img/fhadiil.png",
      rating: 4,
    },
    {
      id: 4,
      name: "Mustapha",
      text: "Loved the service!",
      image: "https://fhadeel-portfolio.netlify.app/img/fhadiil.png",
      rating: 4.5,
    },
    // Add more testimonials as needed
  ];

  return (
    <section id="testimonials">
      <h2 className="text-center">What our clients are saying</h2>
      <div className="testimonials">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <img src={testimonial.image} alt={testimonial.name} />
            <h4>{testimonial.name}</h4>
            <p>"{testimonial.text}"</p>
            <StarRating rating={testimonial.rating} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
