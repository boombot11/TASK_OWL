import React, { useEffect, useState } from 'react';

const TestimonialCard = ({ name, role, date, testimonial, rating }) => (
  <div className="min-w-[350px] bg-white rounded-lg shadow-md p-6 mx-4 transition-all hover:shadow-lg">
    <div className="flex items-center mb-4">
      <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
        <span className="text-xl font-bold text-gray-600">{name[0]}</span>
      </div>
      <div className="ml-4">
        <h3 className="font-bold text-lg text-gray-800">{name}</h3>
        <p className="text-sm text-gray-600">{role}</p>
      </div>
    </div>
    <div className="mb-4">
      {[...Array(rating)].map((_, i) => (
        <span key={i} className="text-yellow-400">★</span>
      ))}
    </div>
    <p className="text-gray-700 mb-4">{testimonial}</p>
    <p className="text-sm text-gray-500">{date}</p>
  </div>
);

const FrameComponent1 = ({ className = "" }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Product Manager",
      date: "March 15, 2024",
      rating: 5,
      testimonial: "TaskOwl has revolutionized our team's productivity. The intuitive interface and smart task prioritization features have helped us meet deadlines consistently."
    },
    {
      name: "Michael Rodriguez",
      role: "Startup Founder",
      date: "March 10, 2024",
      rating: 5,
      testimonial: "As a startup founder, I needed a tool that could scale with my team. TaskOwl's collaborative features and real-time updates have been game-changing."
    },
    {
      name: "Emily Thompson",
      role: "Marketing Director",
      date: "March 5, 2024",
      rating: 4,
      testimonial: "The automated workflow features in TaskOwl have saved our marketing team countless hours. It's like having an extra team member!"
    },
    {
      name: "David Kumar",
      role: "Software Engineer",
      date: "February 28, 2024",
      rating: 5,
      testimonial: "The integration capabilities with our existing tools made TaskOwl an easy choice. The API is well-documented and the support team is fantastic."
    },
    {
      name: "Lisa Washington",
      role: "Project Coordinator",
      date: "February 25, 2024",
      rating: 5,
      testimonial: "TaskOwl's timeline views and progress tracking features help me keep multiple projects on track effortlessly."
    },
    {
      name: "James Wilson",
      role: "Freelance Designer",
      date: "February 20, 2024",
      rating: 4,
      testimonial: "The customizable workspace and visual task boards help me organize my creative projects perfectly. Best task manager I've used!"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className={`self-stretch flex flex-col items-center justify-center p-8 max-w-full font-poppins ${className}`}>
      <div className="w-full max-w-7xl">
        <div className="mb-12">
          <button className="px-5 py-2 bg-emerald-400 text-green-800 rounded hover:bg-emerald-500 transition-colors font-poppins">
            Testimonials
          </button>
          <h1 className="text-4xl font-bold mt-6 mb-4">What Our Users Say</h1>
          <p className="text-gray-600 text-xl">Discover how TaskOwl is transforming task management for teams worldwide</p>
        </div>

        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / (window.innerWidth < 768 ? 1 : 3))}%)` }}
          >
            {testimonials.map((testimonial, index) => (
             <div className='p-1'> <div key={index} className={`flex-shrink-0 ${window.innerWidth < 768 ? 'w-full' : 'w-1/3'}`}>
                <TestimonialCard {...testimonial} />
              </div></div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 mx-1 rounded-full transition-colors ${
                currentIndex === index ? 'bg-emerald-500' : 'bg-gray-300'
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
