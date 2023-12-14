import { fetchProducts } from "@/app/lib/data";
import { DeleteProductBtn, UpdateProductBtn } from "./buttons";
const Card = async () => {
  const prods = await fetchProducts();
  return (
    <div className="grid sm:gap-4 sm:grid-cols-3">
      {prods?.map((prod) => (
        <div
          key={prod.id}
          className="min-h-screen bg-gray-100 flex items-center justify-center py-50"
        >
          <div className="max-w-md bg-white rounded-xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-500">
            <div className="p-4">
              <img
                className="rounded-xl"
                src="https://images.unsplash.com/photo-1599839575945-a9e5af0c3fa5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1049&q=80"
                alt="Dog"
              />
            </div>
            <div className="flex justify-between p-6">
              <div className="flex items-center space-x-4">
                <img
                  className="h-10 rounded-full"
                  src="https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                  alt=""
                />
                <h1 className="text-lg text-gray-900 font-bold">
                  {" "}
                  {prod.name}{" "}
                </h1>
              </div>
              <div className="flex space-x-6 items-center">
                <div className="flex space-x-2 items-center">
                  <DeleteProductBtn id={prod.id.toString()} />
                </div>
                <div className="flex space-x-2 items-center pr-4">
                  <div className="flex space-x-2 items-center">
                    <UpdateProductBtn id={prod.id.toString()} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
