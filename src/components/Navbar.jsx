import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='bg-yellow-400'>

    <nav className="w-[90vw] mx-auto bg-yellow-400 p-4 flex justify-between items-center">
      

      <div>
        <h1 className="p-2 bg-red-600 text-white rounded-2xl font-bold text-xl drop-shadow-md">
          Krusty Krab
        </h1>
      </div>

      <div>
        <Link
          className="mx-2 text-white font-semibold hover:text-red-600 transition"
          to="/"
          >
          Home
        </Link>
        <Link
          className="mx-2 text-white font-semibold hover:text-red-600 transition"
          to="/about"
          >
          About
        </Link>
      </div>
    </nav>
    </div>
  );
}

export default Navbar;
