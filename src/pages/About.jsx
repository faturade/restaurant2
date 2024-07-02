import React from 'react';
import aboutImage from '../assets/image/resto2.jpg';
import cardImage from '../assets/image/Food2.jpg';
import Button from '../components/Button';
import StyleGuild from '../components/StyleGuild';
import TestimonialSlider from '../components/Testimonial';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAppleAlt, faCarrot, faFish, faLeaf } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  const handleButtonClick = () => {
    alert('Button clicked!');
  };

  return (
    <div>
      <StyleGuild activeButton="About" />
      <div className="flex flex-col md:flex-row items-center justify-center bg-gray-100 min-h-screen p-6">
        <div className="content md:w-1/2 p-8" style={{ marginLeft: '4rem' }}>
          <h4 className="mb-4" style={{ borderBottom: '1px solid #3E3939', borderTop: '1px solid #3E3939', display: 'inline-block', fontSize: '20px', color: '#FF7517' }}>
            About Us
          </h4>
          <h1 style={{ fontSize: '2rem', color: '#FF7517', fontStyle: 'italic', fontWeight: '600' }}>Quality and Tradition</h1>
          <p className="mb-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Nullam ac erat ante.
          </p>
          <Button text="Learn More" onClick={handleButtonClick} />
        </div>
        <div className="flex flex-1 justify-center p-6 relative md:ml-4"> {/* Add margin-left for space between text and image */}
          <img src={aboutImage} alt="About Us" style={{ width: '330px', height: '400px', borderTopRightRadius: '30%' }} /> {/* Adjusted size */}
          <div className="absolute transform translate-x-10 translate-y-10 bg-white p-4 shadow-lg w-3/4 max-w-xs text-center flex flex-col items-center" style={{ bottom: '-2rem', right: '20rem' }}> {/* Adjusted bottom and right */}
            <img src={cardImage} alt="Card" className="w-16 h-16 rounded-full mb-4" />
            <h2 className="text-xl font-bold mb-2" style={{ color: '#FF7517' }}>Our Mission</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia.</p>
          </div>
        </div>
      </div>

      <div className="bg-cover bg-center w-full max-h-96 p-8" style={{ backgroundImage: `url(${aboutImage})`, backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
        <div className="flex justify-around items-center p-4">
          <div className="text-white mx-4 flex flex-col items-center border-r-2 border-white">
            <FontAwesomeIcon icon={faAppleAlt} className="text-4xl mb-2" />
            <h4 className="text-xl font-bold mb-2">Fresh Product</h4>
            <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, ipsum?</p>
          </div>
          <div className="text-white mx-4 flex flex-col items-center border-r-2 border-white">
            <FontAwesomeIcon icon={faFish} className="text-4xl mb-2" />
            <h4 className="text-xl font-bold mb-2">Fresh Product</h4>
            <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, ipsum?</p>
          </div>
          <div className="text-white mx-4 flex flex-col items-center border-r-2 border-white">
            <FontAwesomeIcon icon={faCarrot} className="text-4xl mb-2" />
            <h4 className="text-xl font-bold mb-2">Fresh Product</h4>
            <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, ipsum?</p>
          </div>
          <div className="text-white mx-4 flex flex-col items-center">
            <FontAwesomeIcon icon={faLeaf} className="text-4xl mb-2" />
            <h4 className="text-xl font-bold mb-2">Fresh Product</h4>
            <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, ipsum?</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center my-20">
        <div className="text-center mb-4">
          <h2 className="text-2xl font-bold">Team</h2>
          <p>Meet Our Professional Chefs</p>
        </div>
        <div className="flex justify-around flex-wrap">
          <div className="flex flex-col items-center m-4">
            <img src="https://via.placeholder.com/150" alt="Chef" className="mb-2" />
            <h2 className="text-xl font-bold">Olivia</h2>
            <p>Master Chef</p>
          </div>
          <div className="flex flex-col items-center m-4">
            <img src="https://via.placeholder.com/150" alt="Chef" className="mb-2" />
            <h2 className="text-xl font-bold">Olivia</h2>
            <p>Master Chef</p>
          </div>
          <div className="flex flex-col items-center m-4">
            <img src="https://via.placeholder.com/150" alt="Chef" className="mb-2" />
            <h2 className="text-xl font-bold">Olivia</h2>
            <p>Master Chef</p>
          </div>
          <div className="flex flex-col items-center m-4">
            <img src="https://via.placeholder.com/150" alt="Chef" className="mb-2" />
            <h2 className="text-xl font-bold">Olivia</h2>
            <p>Master Chef</p>
          </div>
        </div>
      </div>

      <TestimonialSlider />

      <div className="flex flex-col items-center p-8 my-20">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold">Gallery</h2>
          <p className="text-lg text-gray-600">Watch Me Make</p>
        </div>
        <div className="gap-4">
          <div className="flex justify-around items-center p-4">
            <div className="mb-4 md:mb-0">
              <img src="https://via.placeholder.com/150" alt="" className="m-1" />
              <img src="https://via.placeholder.com/150" alt="" className="m-1" />
            </div>
            <div className="md:col-span-2">
              <img src="https://via.placeholder.com/300" alt="" />
            </div>
            <div className="mb-4 md:mb-0">
              <img src="https://via.placeholder.com/150" alt="" className="m-1" />
              <img src="https://via.placeholder.com/150" alt="" className="m-1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
