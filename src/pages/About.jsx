function About() {
  return (
    <div className="min-h-screen bg-blue-100 font-sans">

      {/* Header */}
      <header className="bg-yellow-400 shadow-md py-6">
        <h1 className="text-5xl font-bold text-center text-red-600 drop-shadow-md">
          About the Krusty Krab
        </h1>
        <p className="text-center text-lg text-white mt-2">
          Learn more about Bikini Bottom’s favorite restaurant
        </p>
      </header>

      {/* Story Section */}
      <section className="mt-12 px-6 md:px-20 text-center">
        <h2 className="text-3xl font-bold text-blue-800 mb-6">
          Our Story
        </h2>
        <p className="text-gray-700 text-lg mb-6">
          Founded by the legendary Mr. Krabs, the Krusty Krab has been serving
          the juiciest Krabby Patties in Bikini Bottom for years. With a team
          of dedicated staff including SpongeBob SquarePants and Squidward Tentacles,
          every meal is crafted with love and secret ingredients.
        </p>
        <p className="text-gray-700 text-lg">
          We pride ourselves on creating a fun, safe, and delicious environment
          for all underwater diners. Come for the food, stay for the laughter!
        </p>
      </section>

      {/* Staff Section */}

<section className="mt-16 px-4 md:px-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
  {/* SpongeBob Card */}
  <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transform transition">
    <img
      src="public/images/spongebob.png"
      alt="SpongeBob"
      className="w-full h-80 object-cover"
    />
    <div className="p-4 text-center">
      <h3 className="text-xl font-bold mb-2">SpongeBob SquarePants</h3>
      <p className="text-gray-600">
        Our enthusiastic fry cook, loves making Krabby Patties!
      </p>
    </div>
  </div>

  {/* Squidward Card */}
  <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transform transition">
    <img
      src="public/images/squidward.jpg"
      alt="Squidward"
      className="w-full h-80 object-cover"
    />
    <div className="p-4 text-center">
      <h3 className="text-xl font-bold mb-2">Squidward Tentacles</h3>
      <p className="text-gray-600">
        Our cashier with style, handling orders with flair!
      </p>
    </div>
  </div>

  {/* Mr. Krabs Card */}
  <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transform transition">
    <img
      src="public/images/krabs.jpg"
      alt="Mr. Krabs"
      className="w-full h-80 object-cover"
    />
    <div className="p-4 text-center">
      <h3 className="text-xl font-bold mb-2">Mr. Krabs</h3>
      <p className="text-gray-600">
        Owner of the Krusty Krab, always looking out for profits and quality!
      </p>
    </div>
  </div>
</section>


      {/* Footer */}
      <footer className="bg-yellow-400 mt-20 py-6 text-center text-white shadow-inner">
        <p className="text-lg">© 2026 Krusty Krab. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default About;
