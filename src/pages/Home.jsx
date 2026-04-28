function Home() {
  return (
    <div className="min-h-screen bg-blue-100 font-sans">

      {/* Header */}
      <header className="bg-red-700 shadow-md py-6">
        <h1 className="text-5xl font-bold text-center text-yellow-500 drop-shadow-md">
          Krusty Krab
        </h1>
        <p className="text-center text-lg text-white mt-2">
          Home of the Legendary Krabby Patty!
        </p>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-center mt-12 px-4 md:px-20">
        <img
          src="public/images/KrustyKrab.webp"
          alt="Krusty Krab"
          className="w-64 h-64 md:w-80 md:h-80 rounded-lg shadow-lg"
        />
        <div className="mt-6 md:mt-0 md:ml-12 text-center md:text-left">
          <h2 className="text-3xl font-bold text-blue-800 mb-4">
            Welcome to the Krusty Krab!
          </h2>
          <p className="text-gray-700 text-lg mb-4">
            Serving the juiciest Krabby Patties in Bikini Bottom. Join SpongeBob
            and the crew for a meal you’ll never forget!
          </p>
          <button className="bg-red-600 text-white px-6 py-2 rounded-lg shadow hover:bg-red-700 transition">
            See the Menu
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="mt-16 px-4 md:px-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="bg-white p-6 rounded-lg shadow hover:scale-105 transform transition">
          <h3 className="text-xl font-bold mb-2">Krabby Patty</h3>
          <p className="text-gray-600">The legendary burger loved by everyone!</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow hover:scale-105 transform transition">
          <h3 className="text-xl font-bold mb-2">Friendly Staff</h3>
          <p className="text-gray-600">SpongeBob and Squidward are always ready to serve!</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow hover:scale-105 transform transition">
          <h3 className="text-xl font-bold mb-2">Underwater Fun</h3>
          <p className="text-gray-600">A unique dining experience under the sea!</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-yellow-400 mt-20 py-6 text-center text-white shadow-inner">
        <p className="text-lg">© 2026 Krusty Krab. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
