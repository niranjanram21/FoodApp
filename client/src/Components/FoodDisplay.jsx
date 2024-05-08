import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import assets from "../assets/assets";

const FoodDisplay = () => {
    const { food_list } = useContext(StoreContext);

    const {cartItems, addToCart, removeFromCart}= useContext(StoreContext);

    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <h1 className="text-center mb-2 font-bold text-2xl text-yellow-800">Top Dishes near you!</h1>
                    <div className="flex flex-wrap -m-2">
                        {food_list.map((item) => (
                            <div key={item.id} className=" lg:w-1/4 md:w-1/2 p-4 w-full transition duration-300 transform hover:scale-105" style={{ borderRadius: '2rem' }}>
                                <a className="block relative h-54 rounded overflow-hidden">
                                    <img alt="ecommerce" className="object-cover object-center w-full h-full block cursor-pointer" src={item.image} />
                                </a>
                               {!cartItems[item.id]
                                ?<img className="add" onClick={() => addToCart(item.id)} src={assets.add_icon_white} />
                                :<div className="foodItemCounter flex flex-row gap-2 mt-2">
                                    <img onClick={() => removeFromCart(item.id)} src={assets.remove_icon_red} alt="" />
                                    <p className="mt-2">{cartItems[item.id]}</p>
                                    <img onClick={() => addToCart(item.id)} src={assets.add_icon_green} alt="" />
                                </div>
                               }
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
