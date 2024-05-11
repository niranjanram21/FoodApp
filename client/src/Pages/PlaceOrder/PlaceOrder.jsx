import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";


const PlaceOrder = () => {
  const { getTotalAmount } = useContext(StoreContext)
  return (
    <>
      <div className="text-center mb-2 font-bold text-2xl sm:text-md text-slate-800">Complete your Payment!</div>
      <div className="flex flex-col items-center justify-center pb-4">
        <div className="bg-white rounded-lg py-6 sm:py-8 lg:py-12 mx-auto max-w-screen-xl px-4 md:px-8">

          <form className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-screen-md">
            <div>
              <input
                name="first-name"
                placeholder="First Name"
                className="w-full rounded border bg-gray-100 px-3 py-2 text-gray-800 outline-none focus:ring focus:ring-indigo-300 transition duration-100"
              />
            </div>
            <div>
              <input
                name="last-name"
                placeholder="Last Name"
                className="w-full rounded border bg-gray-100 px-3 py-2 text-gray-800 outline-none focus:ring focus:ring-indigo-300 transition duration-100"
              />
            </div>
            <div>
              <input
                name="email"
                placeholder="Email"
                className="w-full rounded border bg-gray-100 px-3 py-2 text-gray-800 outline-none focus:ring focus:ring-indigo-300 transition duration-100"
              />
            </div>
            <div>
              <input
                name="street"
                placeholder="Street"
                className="w-full rounded border bg-gray-100 px-3 py-2 text-gray-800 outline-none focus:ring focus:ring-indigo-300 transition duration-100"
              />
            </div>
            <div>
              <input
                name="city"
                placeholder="City"
                className="w-full rounded border bg-gray-100 px-3 py-2 text-gray-800 outline-none focus:ring focus:ring-indigo-300 transition duration-100"
              />
            </div>
            <div>
              <input
                name="state"
                placeholder="State"
                className="w-full rounded border bg-gray-100 px-3 py-2 text-gray-800 outline-none focus:ring focus:ring-indigo-300 transition duration-100"
              />
            </div>
            <div>
              <input
                name="zip-code"
                placeholder="Zip Code"
                className="w-full rounded border bg-gray-100 px-3 py-2 text-gray-800 outline-none focus:ring focus:ring-indigo-300 transition duration-100"
              />
            </div>
            <div>
              <input
                name="country"
                placeholder="Country"
                className="w-full rounded border bg-gray-100 px-3 py-2 text-gray-800 outline-none focus:ring focus:ring-indigo-300 transition duration-100"
              />
            </div>
            <div>
              <input
                name="phone"
                placeholder="Phone"
                className="w-full rounded border bg-gray-100 px-3 py-2 text-gray-800 outline-none focus:ring focus:ring-indigo-300 transition duration-100"
              />
            </div>
          </form>

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
            <button className="inline-block rounded-lg bg-red-500 px-8 py-2 text-center text-sm font-semibold text-white outline-none ring-red-300 transition duration-100 hover:bg-red-600 focus-visible:ring active:bg-red-700 md:text-base">Proceed to pay</button>
          </div>

        </div>
      </div>
    </>
  );
};

export default PlaceOrder;
