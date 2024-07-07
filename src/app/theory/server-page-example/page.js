import { fetchListOfProducts } from "@/actions";
import React from "react";

async function ServerActionExample() {
  const products = await fetchListOfProducts();
  console.log(products);

  return (
    <div>
      <h1>Server action exampe - server components </h1>
      <div className="p-6 mt-10 flex flex-col gap-3">
        {products && products.length > 0
          ? products.map((item) => (
              <div
                className="text-xl w-max px-6 py-3 bg-gray-500 text-white font-extrabold rounded-lg"
                key={item.id}
              >
                {item.title}
              </div>
            ))
          : null}
      </div>
    </div>
  );
}

export default ServerActionExample;
