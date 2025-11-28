import { useState, useEffect } from "react";
import { FaSearch, FaHeart, FaShoppingCart, FaUser } from "react-icons/fa";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [searchText, setSearchText] = useState("");
  const [allProducts, setAllProducts] = useState([]);
  const [searchedProducts, setSearchedProducts] = useState([]);


const [wishlistCount, setWishlistCount] = useState(0);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlistCount(saved.length);

    window.addEventListener("wishlistUpdate", () => {
      const updated = JSON.parse(localStorage.getItem("wishlist")) || [];
      setWishlistCount(updated.length);
    });

  }, []);

  const cartCount = useSelector((state) =>
    state.cart.cartItems.reduce((total, item) => total + item.quantity, 0)
  );

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setAllProducts(data));
  }, []);


  useEffect(() => {
    if (!searchText) {
      setSearchedProducts([]);
      return;
    }




    const results = allProducts.filter((p) =>
      p.title.toLowerCase().includes(searchText.toLowerCase())
    );

    setSearchedProducts(results);
  }, [searchText, allProducts]);

  return (
    <nav className="bg-white shadow-md w-full">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        <h1 className="text-2xl font-bold cursor-pointer">
          <span className="text-green-600">e</span>
          <span className="text-orange-500">-commerce</span>
        </h1>

        
        <div className="relative w-1/2">
          <div className="flex border rounded-md overflow-hidden">
            <input
              type="text"
              className="w-full px-4 py-2 outline-none text-gray-700"
              placeholder="Search for Products, Brands and More"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button className="bg-orange-500 px-4 text-white flex items-center justify-center">
              <FaSearch size={18} />
            </button>
          </div>

       
          {searchedProducts.length > 0 && (
            <div className="absolute w-full bg-white border rounded-md shadow-lg mt-2 max-h-64 overflow-y-auto z-50">
              {searchedProducts.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center px-3 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  <img
                    src={item.image}
                    alt=""
                    className="w-10 h-10 object-contain mr-3"
                  />
                  <p className="text-gray-700">{item.title}</p>
                </div>
              ))}
            </div>
          )}
        </div>

       
        <div className="flex items-center gap-8">

         
          <div className="flex items-center gap-2 cursor-pointer">
            <FaUser size={20} className="text-gray-700" />
            <span className="font-medium text-gray-700">Tim</span>
          </div>

          <div className="relative cursor-pointer flex items-center">
            <FaHeart size={20} className="text-gray-700" />
            <span className="text-gray-700 ml-2">Wishlist</span>
            <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs rounded-full px-2">
              {wishlistCount}
            </span>
          </div>

        
          <div className="relative cursor-pointer flex items-center">
            <FaShoppingCart size={22} className="text-gray-700" />
            <span className="text-gray-700 ml-2">Cart</span>

            {cartCount > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs rounded-full px-2">
                {cartCount}
              </span>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


