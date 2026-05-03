'use client';

import { useState } from 'react';
import ShowTiles from './ShowTiles';
import { BiSearch } from 'react-icons/bi';

const SearchTiles = () => {
  const [searchText, setSearchText] = useState('Search titles ...');
  const data = [
    {
      id: 'tile_001',
      title: 'Ceramic Blue Tile',
      description: 'Premium ceramic tile with glossy blue finish',
      image: 'https://images.unsplash.com/photo-1618220179428-22790b461013',
      category: 'ceramic',
      price: 45.99,
      currency: 'USD',
      dimensions: '60x60 cm',
      material: 'Ceramic',
      inStock: true,
    },
    {
      id: 'tile_002',
      title: 'Marble White Tile',
      description: 'Elegant marble tile with natural veins',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c',
      category: 'marble',
      price: 75.5,
      currency: 'USD',
      dimensions: '80x80 cm',
      material: 'Marble',
      inStock: true,
    },
    {
      id: 'tile_003',
      title: 'Wood Texture Tile',
      description: 'Wood-like ceramic tile for warm interiors',
      image:
        'https://www.edwardmartin.com/cdn/shop/articles/blog-which-color-is-best-for-bathroom-tiles-01-2000x1300_8d6d51ec-7794-4b9a-b116-777e658a1170.jpg?v=1747799882&width=1400',
      category: 'wood',
      price: 55.0,
      currency: 'USD',
      dimensions: '120x20 cm',
      material: 'Ceramic',
      inStock: true,
    },
    {
      id: 'tile_004',
      title: 'Black Granite Tile',
      description: 'Durable granite tile with black finish',
      image:
        'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800',
      category: 'granite',
      price: 85.0,
      currency: 'USD',
      dimensions: '60x60 cm',
      material: 'Granite',
      inStock: false,
    },
    {
      id: 'tile_005',
      title: 'Geometric Pattern Tile',
      description: 'Modern geometric design tile',
      image: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62',
      category: 'designer',
      price: 65.99,
      currency: 'USD',
      dimensions: '50x50 cm',
      material: 'Ceramic',
      inStock: true,
    },
    {
      id: 'tile_006',
      title: 'Classic Beige Tile',
      description: 'Simple beige tile for minimal interiors',
      image: 'https://images.unsplash.com/photo-1615874959474-d609969a20ed',
      category: 'ceramic',
      price: 40.0,
      currency: 'USD',
      dimensions: '60x60 cm',
      material: 'Ceramic',
      inStock: true,
    },
    {
      id: 'tile_007',
      title: 'Rustic Stone Tile',
      description: 'Natural stone look tile',
      image: 'https://images.unsplash.com/photo-1583845112239-97ef1341b271',
      category: 'stone',
      price: 70.0,
      currency: 'USD',
      dimensions: '45x45 cm',
      material: 'Stone',
      inStock: true,
    },
    {
      id: 'tile_008',
      title: 'Glossy Red Tile',
      description: 'Bright red glossy finish tile',
      image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92',
      category: 'ceramic',
      price: 48.5,
      currency: 'USD',
      dimensions: '60x60 cm',
      material: 'Ceramic',
      inStock: true,
    },
    {
      id: 'tile_009',
      title: 'Matte Grey Tile',
      description: 'Smooth matte grey surface tile',
      image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace',
      category: 'ceramic',
      price: 52.0,
      currency: 'USD',
      dimensions: '60x60 cm',
      material: 'Ceramic',
      inStock: false,
    },
    {
      id: 'tile_010',
      title: 'Luxury Gold Tile',
      description: 'Premium gold finish decorative tile',
      image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea',
      category: 'designer',
      price: 120.0,
      currency: 'USD',
      dimensions: '30x30 cm',
      material: 'Ceramic',
      inStock: true,
    },
    {
      id: 'tile_011',
      title: 'Ocean Blue Tile',
      description: 'Ocean-inspired deep blue tile',
      image:
        'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800',
      category: 'ceramic',
      price: 60.0,
      currency: 'USD',
      dimensions: '60x60 cm',
      material: 'Ceramic',
      inStock: true,
    },
    {
      id: 'tile_012',
      title: 'Terrazzo Tile',
      description: 'Colorful terrazzo pattern tile',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
      category: 'terrazzo',
      price: 68.0,
      currency: 'USD',
      dimensions: '60x60 cm',
      material: 'Composite',
      inStock: true,
    },
    {
      id: 'tile_013',
      title: 'Vintage Floral Tile',
      description: 'Floral vintage pattern tile',
      image: 'https://images.unsplash.com/photo-1588854337115-1c67d9247e4d',
      category: 'designer',
      price: 72.0,
      currency: 'USD',
      dimensions: '40x40 cm',
      material: 'Ceramic',
      inStock: true,
    },
    {
      id: 'tile_014',
      title: 'Dark Slate Tile',
      description: 'Natural slate dark finish tile',
      image: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c',
      category: 'stone',
      price: 78.0,
      currency: 'USD',
      dimensions: '60x60 cm',
      material: 'Slate',
      inStock: false,
    },
    {
      id: 'tile_015',
      title: 'Minimal White Tile',
      description: 'Clean and minimal white tile',
      image: 'https://images.unsplash.com/photo-1618221469555-7f3ad97540d6',
      category: 'ceramic',
      price: 42.0,
      currency: 'USD',
      dimensions: '60x60 cm',
      material: 'Ceramic',
      inStock: true,
    },
    {
      id: 'tile_016',
      title: 'Textured Wall Tile',
      description: '3D textured wall tile',
      image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d',
      category: 'wall',
      price: 58.0,
      currency: 'USD',
      dimensions: '30x60 cm',
      material: 'Ceramic',
      inStock: true,
    },
    {
      id: 'tile_017',
      title: 'Mosaic Tile',
      description: 'Small mosaic tile set',
      image: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45',
      category: 'mosaic',
      price: 90.0,
      currency: 'USD',
      dimensions: '30x30 cm',
      material: 'Glass',
      inStock: true,
    },
    {
      id: 'tile_018',
      title: 'Industrial Concrete Tile',
      description: 'Concrete-look industrial tile',
      image: 'https://images.unsplash.com/photo-1615873968403-89e068629265',
      category: 'concrete',
      price: 65.0,
      currency: 'USD',
      dimensions: '60x60 cm',
      material: 'Concrete',
      inStock: true,
    },
    {
      id: 'tile_019',
      title: 'Green Nature Tile',
      description: 'Nature-inspired green tile',
      image: 'https://images.unsplash.com/photo-1618221469555-7f3ad97540d6',
      category: 'ceramic',
      price: 50.0,
      currency: 'USD',
      dimensions: '60x60 cm',
      material: 'Ceramic',
      inStock: true,
    },
    {
      id: 'tile_020',
      title: 'Luxury Black Tile',
      description: 'Elegant black polished tile',
      image: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e',
      category: 'marble',
      price: 95.0,
      currency: 'USD',
      dimensions: '80x80 cm',
      material: 'Marble',
      inStock: true,
    },
  ];

  const filteredData = data.filter(
    item =>
      item.title.toLowerCase().includes(searchText.toLowerCase()) ||
      item.description.toLowerCase().includes(searchText.toLowerCase()) ||
      item.category.toLowerCase().includes(searchText.toLowerCase()),
    
    );
    // console.log(filteredData)
    
  return (
    <div>
      {' '}
      <div className="flex justify-center items-center m-4 relative">
        <input
          type="text"
          placeholder="Search tiles..."
          value={searchText}
          onChange={e => setSearchText(e.target.value)}
          className="input w-full max-w-xs"
        />
        <div className='absolute right-[10%] md:right-[32%] lg:right-[38%]'>
          <BiSearch></BiSearch>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {filteredData.map(tiles => {
          return (
            <div>
              <ShowTiles tiles={tiles}></ShowTiles>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SearchTiles;
