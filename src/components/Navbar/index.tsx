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
      className={`hidden md:block fixed top-0 left-0 w-full transition-all ease-in-out duration-200 z-20 ${
        scrolled ? "backdrop-blur-xl shadow-lg" : ""
      }`}
    >
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between py-4">
        <div className="flex items-center gap-3">
          <img src="/logo.png" width={40} />
          <h3 className="text-3xl font-bold font-poppins">KONGPOS</h3>
        </div>
        <div className="flex items-center gap-3">
          <Link to={"/login"}>
            <div className="font-semibold font-poppins h-12 rounded-lg border-2 border-kong bg-kong flex items-center justify-center px-8 hover:brightness-90">
              Login
            </div>
          </Link>
          <a
            href="https://play.google.com/store/apps/details?id=com.kong.pos"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 h-12 border-2 border-kong font-semibold font-poppins rounded-lg hover:bg-kong">
              Daftar
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
