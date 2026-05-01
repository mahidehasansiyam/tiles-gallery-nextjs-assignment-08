import Marquee from 'react-fast-marquee';

const Marque = () => {
  return (
    <div className="bg-slate-100 py-3 my-2 md:px-10 px-3  flex ">
      <button className="btn bg-slate-100 border-none ">
        New Arrivals:
      </button>
      <Marquee>
        Obsidian Grid Tile | Weekly Feature: Modern Geometric Patterns | Join
        the Community: TilesProject | System Status: All Cores Online | Limited
        Edition: Cyan Flux Tiles Now Available | Upgrade Your Space with
        Geometric Precision
      </Marquee>
    </div>
  );
};

export default Marque;
