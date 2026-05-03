import Link from 'next/link';
import 'animate.css';

const Hero = () => {
  return (
    <div
      className="hero min-h-[60vh] mt-2"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c')",
      }}
    >
      <div className="hero-overlay bg-black/60"></div>

      <div className="hero-content text-center text-white">
        <div className="max-w-xl">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight animate__animated animate__slideInDown ">
            Discover Your Perfect Tile Aesthetic
          </h1>

          <p className="py-6 text-gray-300 ">
            Explore modern, classic, and luxury tile collections designed to
            elevate your living space.
          </p>
          <Link href="/all-tiles">
            <button className="btn btn-primary px-6">Browse Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
