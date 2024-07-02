import React, { useState, useEffect } from 'react';
import image from '../assets/image/Food2.jpg';

const testimonials = [
    {
        name: "John Doe",
        text: "Pengembang Perangkat Lunak Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed esse magnam ipsa repellat consequatur",
        image: image
    },
    {
        name: "Jane Doe",
        text: "Designer Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed esse magnam ipsa repellat consequatur",
        image: image
    },
    {
        name: "Jim Doe",
        text: "Project Manager Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed esse magnam ipsa repellat consequatur",
        image: image
    },
    {
        name: "Jake Doe",
        text: "Analyst Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed esse magnam ipsa repellat consequatur",
        image: image
    },
    {
        name: "Jill Doe",
        text: "Marketer Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed esse magnam ipsa repellat consequatur",
        image: image
    },
    {
        name: "Janet Doe",
        text: "Content Creator Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed esse magnam ipsa repellat consequatur",
        image: image
    },
];

function TestimonialSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 3 : prevIndex - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 3 ? 0 : prevIndex + 1));
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-orange-500">
            <div className="max-w-6xl p-4 overflow-hidden">
             <h2 className="mb-8 " style={{ borderBottom: '1px solid #3E3939', borderTop: '1px solid #3E3939', display: 'inline-block', fontSize: '20px', color: '#ffffff' }}>Testimonial</h2>
                <p className="text-white text-center mb-2 font-extralight">See what our customers are saying</p>
                <p className="text-white text-center mb-8 font-extralight">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos nam debitis aliquid saepe dolorem. Provident, sapiente maiores! Dolorum asperiores quas necessitatibus porro. Eius officiis voluptas possimus quidem. Quis, delectus impedit.</p>
                <div className="relative w-full max-w-6xl p-4 overflow-hidden">
                    <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100 / 3}%)` }}>
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="w-1/3 flex-shrink-0 p-4">
                                <div className="flex flex-col items-center bg-black p-6 shadow-lg h-full">
                                    <img src={testimonial.image} alt="Foto Profil" className="rounded-full w-24 h-24 mb-4 object-cover" />
                                    <h4 className="text-white text-lg mb-2">{testimonial.name}</h4>
                                    <p className="text-white text-sm text-center">{testimonial.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button onClick={prevSlide} className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black text-white p-2 rounded-full">‹</button>
                    <button onClick={nextSlide} className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black text-white p-2 rounded-full">›</button>
                </div>
            </div>
        </div>
    );
    
}

export default TestimonialSlider;