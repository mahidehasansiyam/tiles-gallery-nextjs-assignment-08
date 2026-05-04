'use client';

import { useEffect, useState } from 'react';
import ShowTiles from './ShowTiles';
import { BiSearch } from 'react-icons/bi';
import { getData } from '@/lib/DataFetch';

const SearchTiles = () => {
  const [searchText, setSearchText] = useState('Search titles ...');
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getData();
      setData(result);
    };
    fetchData();
  }, []);

  const filteredData = data.filter(
    item =>
      item.title.toLowerCase().includes(searchText.toLowerCase()) ||
      item.description.toLowerCase().includes(searchText.toLowerCase()),
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
        <div className="absolute right-[10%] md:right-[32%] lg:right-[38%]">
          <BiSearch></BiSearch>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {filteredData.map(tiles => {
          return (
            <div key={tiles.id}>
              <ShowTiles tiles={tiles}></ShowTiles>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SearchTiles;
