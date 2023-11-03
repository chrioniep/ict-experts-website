import { useState } from "react";
import Navbar from "../components/navbar";
import Product from "../components/product";

const fakeData = [
  {
    id: 1,
    name: "LIC-CUCM-12X-ENH",
    subTitle: "Condition: New Factory Sealed",
    description: "UC Manager-12.x Enhanced Single User License",
    price: "2300.3",
  },
  {
    id: 2,
    name: "LIC-CUCM-12X-ENH",
    subTitle: "Condition: New Factory Sealed",
    description: "UC Manager-12.x Enhanced Single User License",
    price: "2300",
  },
  {
    id: 3,
    name: "LIC-CUCM-12X-ENH",
    subTitle: "Condition: New Factory Sealed",
    description: "UC Manager-12.x Enhanced Single User License",
    price: "2300.3",
  },
  {
    id: 4,
    name: "LIC-CUCM-12X-ENH",
    subTitle: "Condition: New Factory Sealed",
    description: "UC Manager-12.x Enhanced Single User License",
    price: "2300",
  },
];

const Home = () => {
  const [data, setData] = useState(fakeData);
  return (
    <div>
      <Navbar />

      <div>
        <div className="px-32 py-20 bg-gray-100 grid  gap-10">
          {data.map((item) => (
            <Product
              id={item.id}
              key={item.id}
              name={item.name}
              sub={item.subTitle}
              price={item.price}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
