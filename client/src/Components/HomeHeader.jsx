import assets from "../assets/assets";

const HomeHeader = () => {
  return (
    <div>
      <section className="min-h-84 sm:min-h-80 relative flex items-center justify-center overflow-hidden rounded-lg bg-gray-100 py-8 sm:py-12 md:py-16 xl:py-24" style={{ maxWidth: '1200px', width: '100%', margin: '0 auto', minHeight: '450px', borderRadius: '1rem' }}>
        <img src={assets.bgImage} loading="lazy" alt="Photo by Fakurian Design" className="absolute inset-0 h-full w-full object-cover object-center opacity-95" />
        <div className="absolute inset-0 mix-blend-multiply"></div>
        <div className="relative flex flex-col items-center justify-center text-left sm:items-start sm:text-left px-4">
          <h1 className="mb-4 text-3xl font-bold text-amber-300 sm:text-4xl md:text-5xl">Order your favourite food here!</h1>
          <p className="bg-red-400 bg-opacity-20 px-4 py-2 my-2 rounded text-white font-bold max-w-md sm:max-w-lg md:max-w-xl">Discover, Order, Enjoy: Dive into a world of culinary delights with our app. Browse diverse menus, place orders effortlessly, and savor every bite from the comfort of your home.</p>
          <div className="flex justify-center sm:justify-start">
          <a href="#" className="bg-opacity-80 inline-block rounded-lg bg-yellow-200 px-4 py-2 text-center font-semibold text-black outline-none ring-red-300 transition duration-100 hover:bg-red-400 focus-visible:ring active:bg-red-700 md:text-base" style={{ borderRadius: '4rem', fontSize: '14px' }}>View Menu</a>          
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeHeader;
