import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      setScrolled(() => (window.scrollY > 30 ? true : false));
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full transition-all ease-in-out duration-200 z-20 ${
        scrolled ? "bg-white shadow-lg" : ""
      }`}
    >
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between py-4">
        <h3 className="text-xl font-bold font-poppins">KONGPOS</h3>

        <div className="flex items-center gap-3">
          <Link to={"/login"}>
            <div className="font-medium font-poppins">Login</div>
          </Link>
          <a
            href="https://play.google.com/store/apps/details?id=com.kong.pos"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-5 py-2 border-2 border-black font-medium font-poppins rounded hover:bg-black hover:text-white ">
              Daftar
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
