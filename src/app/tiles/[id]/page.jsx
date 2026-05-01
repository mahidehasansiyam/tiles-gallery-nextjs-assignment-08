import { getData } from "@/lib/DataFetch";
import Image from "next/image";


const TilesDetails =async ({params}) => {
  const { id } = await params;
  // console.log(id);

  const AllData = await getData();
  // console.log(AllData);
  
  const tiles = AllData.find((i) => id == i.id)
  // console.log(tiles);


  return (
    <div className="min-h-screen bg-gray-100 p-6 md:p-12">
      <div className="grid md:grid-cols-2 gap-10 bg-white p-6 rounded-2xl shadow-lg">
        {/* Image */}
        <div className="overflow-hidden rounded-xl">
          <Image
            src={tiles.image}
            alt={tiles.title}
            width={900}
            height={900}
            className="w-full h-[400px] object-cover hover:scale-105 transition duration-500"
          ></Image>
        </div>

        {/* Details */}
        <div>
          <h1 className="text-3xl font-bold mb-4">{tiles.title}</h1>

          <p className="text-gray-600 mb-4">{tiles.description}</p>

          <div className="space-y-2 text-sm">
            <p>
              <span className="font-semibold">Category:</span> {tiles.category}
            </p>
            <p>
              <span className="font-semibold">Material:</span> {tiles.material}
            </p>
            <p>
              <span className="font-semibold">Size:</span> {tiles.dimensions}
            </p>
          </div>

          <p className="text-2xl font-bold text-primary mt-6">${tiles.price}</p>

          <button className="btn btn-primary mt-4 px-6">Buy Now</button>
        </div>
      </div>
    </div>
    
  );
};

export default TilesDetails;