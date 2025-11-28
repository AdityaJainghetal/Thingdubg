import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart, increaseQty, decreaseQty } from "../redux/CardSlice";
import { FaHeart, FaTrash } from "react-icons/fa";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.cartItems);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(saved);
  }, []);

  const toggleWishlist = (product) => {
    let updated = [...wishlist];

    const exists = wishlist.find((item) => item.id === product.id);

    if (exists) {
      updated = updated.filter((item) => item.id !== product.id);
    } else {
      updated.push(product);
    }

    setWishlist(updated);
    localStorage.setItem("wishlist", JSON.stringify(updated));

    window.dispatchEvent(new Event("wishlistUpdate"));
  };

  const getCartItem = (id) => {
    return cartItems.find((item) => item.id === id);
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Special Products For You</h2>

      <div className="grid grid-cols-4 gap-6">
        {products.map((product) => {
          const inCart = getCartItem(product.id);

          return (
            <div key={product.id} className="border rounded-lg p-4 shadow hover:shadow-lg transition">

              <img src={product.image} alt={product.title} className="h-40 mx-auto object-contain" />
   <button
                onClick={() => toggleWishlist(product)}
                className={`mt-2 text-xl ${
                  wishlist.some((item) => item.id === product.id)
                    ? "text-red-500"
                    : "text-gray-500"
                }`}
              >
                <FaHeart />
              </button>
              <h3 className="text-sm font-semibold mt-2 line-clamp-2">{product.title}</h3>

              <p className="font-bold text-lg mt-1">${product.price}</p>

             
           

              {!inCart && (
                <button
                  onClick={() => dispatch(addToCart(product))}
                  className="w-full mt-4 bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600"
                >
                  ADD TO CART
                </button>
              )}

              {inCart && (
                <div className="flex items-center justify-between mt-4 bg-gray-100 p-2 rounded-lg">

                  <button
                    onClick={() => dispatch(decreaseQty(product.id))}
                    className="px-3 py-1 bg-gray-300 rounded"
                  >
                    -
                  </button>

                 
                  <span className="font-semibold text-lg">{inCart.quantity}</span>

                 
                  <button
                    onClick={() => dispatch(increaseQty(product.id))}
                    className="px-3 py-1 bg-gray-300 rounded"
                  >
                    +
                  </button>

                  <button
                    onClick={() => dispatch(removeFromCart(product.id))}
                    className="text-red-500 text-xl ml-2"
                  >
                    <FaTrash />
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
