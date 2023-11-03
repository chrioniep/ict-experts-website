import Navbar from "../components/navbar";

const Checkout = () => {
  return (
    <div>
      <Navbar />
      <br />
      <br />
      <div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
        <div className="px-4 pt-8">
          <div className="mt-8 space-y-3 rounded-lg border bg-white px-2 py-2 sm:px-6">
            <div className="flex flex-col rounded-lg bg-white sm:flex-row">
              <div className="flex w-full flex-col px-4 py-4">
                <span className="font-normal">
                  you are logged as{" "}
                  <span className="font-semibold">joembiye@gmail.com</span>
                </span>
              </div>
            </div>
          </div>

          <p className="mt-8 text-lg font-medium">Payment information</p>
          <form className="mt-5 grid gap-6">
            <div className="relative">
              <input
                className="peer hidden"
                id="radio_1"
                type="radio"
                name="radio"
                checked
              />
              <span className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
              <label
                className="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
                htmlFor="radio_1"
              >
                <img
                  className="w-14 object-contain"
                  src="/images/naorrAeygcJzX0SyNI4Y0.png"
                  alt=""
                />
                <div className="ml-5">
                  <span className="mt-2 font-semibold">Card</span>
                  <p className="text-slate-500 text-sm leading-6">
                    Joel mbiye visa ****2370 expire 9/25
                  </p>
                  <p className="text-blue-500 underline">
                    change payment method
                  </p>
                </div>
              </label>
            </div>
          </form>
          <p className="mt-8 text-lg font-medium">Billing address</p>
          <div className="mt-8 space-y-3 rounded-lg border bg-white px-2 py-2 sm:px-6">
            <div className="flex flex-col rounded-lg bg-white sm:flex-row">
              <div className="flex w-full flex-col px-4 py-4">
                <span className="font-normal">Joel Mbiye </span>
                <span>
                  602 Normandie 125, Lynnwood Road Brooklyn Pretoria, 0181
                </span>
                <p className="text-blue-500 underline">Edit address</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
          <div className="px-4 pt-8">
            <p className="text-xl font-medium">Order Summary</p>
            <p className="text-gray-400">
              Check your items. And select a suitable shipping method.
            </p>
            <div className="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
              <div className="flex flex-col rounded-lg bg-white sm:flex-row">
                <img
                  className="m-2 h-24 w-28 rounded-md border object-cover object-center"
                  src="/cover.jpeg"
                  alt=""
                />
                <div className="flex w-full flex-col px-4 py-4">
                  <span className="font-semibold">LIC-CUCM-12X-ENH</span>
                  <span className="float-right text-gray-400">
                    UC Manager-12.x Enhanced Single User License
                  </span>
                  <p className="text-lg font-bold">$138.99</p>
                </div>
              </div>
            </div>
          </div>
          <button className="mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white">
            Buy now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
