import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { food_list, cartItems, addToCart, removeFromCart, getTotalAmount } = useContext(StoreContext);
  const navigate = useNavigate();
  return (
    <div className="py-4 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-lg px-4 md:px-8">
        <div className="mb-5 flex flex-col sm:mb-8 sm:divide-y sm:border-t sm:border-b">
          {food_list.map((item, index) => {
            if (cartItems[item._id] > 0) {
              return (
                <div key={index} className="bg-red-100 py-4 px-6 sm:py-8 rounded-lg">
                  <div className="flex flex-wrap gap-4 sm:py-2.5 lg:gap-6">
                    <div className="sm:-my-2.5">
                      <a href="#" className="group relative block h-24 w-24 overflow-hidden rounded-lg bg-gray-100 sm:h-40 sm:w-40">
                        <img
                          src={item.image}
                          loading="lazy"
                          alt="Product"
                          className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                        />
                      </a>
                    </div>

                    <div className="flex flex-1 flex-col justify-between">
                      <div>
                        <a href="#" className="mb-1 inline-block text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl">
                          {item.name}
                        </a>
                        <span className="block text-gray-500">Category: {item.category}</span>
                      </div>

                      <div className="flex flex-row gap-2">
                        <span className="block text-gray-800 md:text-md">Price:</span>
                        <span className="block font-bold text-gray-800 md:text-lg">${item.price}</span>
                      </div>
                    </div>

                    <div className="flex w-full justify-between border-t pt-4 sm:w-auto sm:border-none sm:pt-0">
                      <div className="flex flex-col items-start gap-2">
                        <div className="flex h-12 w-20 overflow-hidden rounded border">
                          <div className="bg-red-50 font-bold w-full px-4 py-2 outline-none ring-inset ring-indigo-300 transition duration-100 focus:ring">
                            {cartItems[item._id]}
                          </div>

                          <div className="flex flex-col divide-y border-l text-lg">
                            <button onClick={() => addToCart(item._id)} className="flex w-6 flex-1 select-none items-center justify-center bg-red-50 leading-none transition duration-100 hover:bg-gray-100 active:bg-gray-200">
                              +
                            </button>
                            <button onClick={() => removeFromCart(item._id)} className="flex w-6 flex-1 select-none items-center justify-center bg-red-50 leading-none transition duration-100 hover:bg-gray-100 active:bg-gray-200">
                              -
                            </button>
                          </div>
                        </div>
                        <button onClick={() => removeFromCart(item._id)} className="select-none text-sm font-semibold text-red-500 transition duration-100 hover:text-red-600 active:text-red-700">
                          Remove
                        </button>
                      </div>

                      <div className="flex flex-row gap-2 ml-4 pt-3 sm:pt-2 md:ml-8 lg:ml-16">
                        <span className="text-gray-600 md:text-md">Total: </span>
                        <span className=" font-bold text-gray-800 md:text-lg">${item.price * cartItems[item._id]}</span>
                      </div>
                    </div>
                  </div>
                  <hr className="mt-4" />

                </div>
              );
            }
            return null;
          })}
        </div>

        {
          getTotalAmount() === 0 ? <></> :

            <div className="flex flex-col items-end gap-4">
              <div className="w-full rounded-lg bg-red-50 p-4 sm:max-w-xs">
                <div className="space-y-1">
                  <div className="flex justify-between gap-4 text-gray-600">
                    <span>Subtotal</span>
                    <span>${getTotalAmount()}</span>
                  </div>
                  <div className="flex justify-between gap-4 text-gray-600">
                    <span>Delivery Fee</span>
                    <span>$1.99</span>
                  </div>
                </div>
                <div className="mt-4 border-t pt-4">
                  <div className="flex items-start justify-between gap-4 text-gray-800">
                    <span className="text-lg font-bold">Total</span>
                    <span className="flex flex-col items-end">
                      <span className="text-lg font-bold">${getTotalAmount() + 1.99}</span>
                      <span className="text-sm text-gray-500">including GST</span>
                    </span>
                  </div>
                </div>
              </div>
              <button onClick={() => navigate('/order')} className="inline-block rounded-lg bg-red-500 px-8 py-2 text-center text-sm font-semibold text-white outline-none ring-red-300 transition duration-100 hover:bg-red-600 focus-visible:ring active:bg-red-700 md:text-base">Proceed to checkout</button>
            </div>
        }

      </div>
    </div>
  );
};

export default Cart;
