import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ShowTiles = ({ tiles }) => {
  // console.log(tiles);
  return (
    <div className="group relative overflow-hidden rounded-2xl shadow-lg">
      {/* Image */}
      
      <Image
        src={tiles.image}
        alt={tiles.title}
        width={300}
        height={300}
        className="h-64 w-full object-cover transform group-hover:scale-110 transition duration-500"></Image>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition"></div>

      {/* Content */}
      <div className="absolute bottom-0 p-4 text-white">
        <h2 className="text-xl font-bold">{tiles.title}</h2>
        <p className="text-sm opacity-80">${tiles.price}</p>

        <Link href={`/tiles/${tiles.id}`}>
          <button className="btn btn-sm btn-primary mt-2">View Details</button>
        </Link>
      </div>
    </div>
  );
};

export default ShowTiles;