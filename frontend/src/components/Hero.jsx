import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="container mx-auto bg-gray-200 rounded-xl mt-16 text-center">
      <p className="text-3xl text-gray-700 font-bold py-10">
        MERN Practice App
      </p>
      <p className="text-gray-500 text-lg">
        This is a practice MERN app that uses JWT HTTP authentication. The
        app also implements Redux Toolkit and Tailwind CSS.
      </p>
      <div className="pb-16 pt-10">
        <Link to='/sign-in'>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-3">Sign In</button>
        </Link>
        <Link to='/sign-up'>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-3">Sign Up</button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
