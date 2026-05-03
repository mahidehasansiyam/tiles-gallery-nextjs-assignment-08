
import { getData } from "@/lib/DataFetch";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import ShowTiles from "./components/ShowTiles";
import Link from "next/link";



export default async function Home() {
 
  const AllData = await getData();
  // console.log(AllData);
 
  

  return (
    <div className="max-w-7xl mx-auto">
      <Hero></Hero>
      <Marquee></Marquee>

      {/* Featured Tiles: */}

      <div>
        

        <h2 className="font-bold text-2xl">Featured Tiles:</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {AllData.slice(0, 8).map(tiles => {
            return (
              <div key={tiles.id}>
                <ShowTiles tiles={tiles}></ShowTiles>
              </div>
            );
          })}
        </div>
        <div></div>
        <div className="flex justify-center items-center m-4">
          <Link href="/all-tiles">
            <button className="btn btn-primary px-6">Show All</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
