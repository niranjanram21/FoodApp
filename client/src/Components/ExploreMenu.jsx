import { menu_list } from "../assets/assets";

const ExploreMenu = () => {
  return (
    <div className="py-4 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="mb-3 md:mb-16">
          <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Explore our menu</h2>
          <p className="mx-auto text-sm max-w-screen-md text-center text-gray-500 md:text-lg">&quot;Explore endless tastes, delivered to your door. Food, friends, and fun—it&apos;s what we&apos;re here for&quot;</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8 ">
          {menu_list.map((item, index) => (
            <div key={index} className="flex flex-col items-center transition duration-300 transform hover:scale-105">
              <div className="mb-2 h-24 w-24 md:h-32 md:w-32 overflow-hidden rounded-full bg-gray-100 shadow-lg cursor-pointer">
                <img
                  src={item.menu_image}
                  loading="lazy"
                  alt={item.menu_name}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="text-center font-bold text-red-500 text-sm md:text-base cursor-pointer">{item.menu_name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExploreMenu;
