import { Link } from "react-router-dom";

const Product = ({ name, price, sub, description, id }) => {
  return (
    <Link to={`/detail/${id}`}>
      <div className="flex p-4 bg-white items-center max-h-[200px] justify-between w-[100%] rounded-md overflow-hidden shadow-lg hover:scale-105 transition duration-500 cursor-pointer">
        {" "}
        <div className="flex justify-between space-x-4 items-center">
          <div className="max-w-xs">
            <img
              src="/cover.jpeg"
              alt=""
            />
          </div>
          <div className="text-start">
            <h1 className="text-lg font-light">{name}</h1>
            <h3 className="font-semibold">{sub}</h3>
            <p className="font-light">{description}</p>
          </div>
        </div>
        <div className="space-y-2">
          <h2 className="text-lg text-red-600">US ${price}</h2>
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Detail
          </button>
        </div>
      </div>
    </Link>
  );
};

export default Product;
