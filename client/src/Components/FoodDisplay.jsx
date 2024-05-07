import { useContext, useState } from "react";
import { StoreContext } from "../context/StoreContext";
import assets from "../assets/assets";

const FoodDisplay = () => {
    const { food_list } = useContext(StoreContext);
    const [itemCounts, setItemCounts] = useState(() =>
        food_list.map(() => 0) // Initialize itemCounts array with zeros for each item
    );

    const handleIncrement = (index) => {
        const newCounts = [...itemCounts];
        newCounts[index] += 1;
        setItemCounts(newCounts);
    };

    const handleDecrement = (index) => {
        const newCounts = [...itemCounts];
        if (newCounts[index] > 0) {
            newCounts[index] -= 1;
            setItemCounts(newCounts);
        }
    };

    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <h1 className="text-center mb-2 font-bold text-2xl text-yellow-800">Top Dishes near you!</h1>
                    <div className="flex flex-wrap -m-2">
                        {food_list.map((item, index) => (
                            <div key={item.id} className=" lg:w-1/5 md:w-1/2 p-4 w-full transition duration-300 transform hover:scale-105" style={{ borderRadius: '2rem' }}>
                                <a className="block relative h-54 rounded overflow-hidden">
                                    <img alt="ecommerce" className="object-cover object-center w-full h-full block cursor-pointer" src={item.image} />
                                </a>
                                <div className="foodItemCounter flex flex-row p-1 gap-2 mt-2">
                                    <img onClick={() => handleDecrement(index)} src={assets.remove_icon_red} alt="decrement" />
                                    <p className=" mt-2">{itemCounts[index]}</p>
                                    <img onClick={() => handleIncrement(index)} src={assets.add_icon_green} alt="increment" />
                                </div>
                                <div className="mt-3">
                                    <h2 className="text-black title-font text-lg font-semibold cursor-pointer mb-2">{item.name}</h2>
                                    <p className="text-slate-600 cursor-pointer text-sm">{item.description}</p>
                                    <p className="text-red-500 mt-1 text-xl font-bold cursor-pointer">${item.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FoodDisplay;
