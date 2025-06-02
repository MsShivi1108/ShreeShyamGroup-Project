import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "../ui/button";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "../../lib/utils";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Properties", path: "/properties" },
    { name: "About Us", path: "/about" },
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-1 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-white shadow-md py-3" : "bg-transparent py-4"
      )}
    >
      <div className="mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center" onClick={closeMenu}>
          <h1 className="text-2xl font-bold font-playfair">
            <span className="text-red-800">Shree Shyam Group</span>
            <span className="text-estate-secondary"></span>
          </h1>
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={cn(
                "font-bold text-sm transition-colors md:px-[10px] hover:text-red-800",
                location.pathname === item.path
                  ? "text-estate-primary"
                  : "text-gray-700"
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <a href="tel:+919277101677">
            <Button className="bg-red-800 text-white cursor-pointer hover:bg-white hover:border-1 hover:text-black mt-2">
              <Phone className="mr-2 h-4 w-4" />
              <span>+91 9277101677</span>
            </Button>
          </a>
        </div>

        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-700 focus:outline-none"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-lg">
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={cn(
                  "font-medium text-sm transition-colors p-1 hover:bg-gray-100 rounded",
                  location.pathname === item.path
                    ? "text-estate-primary"
                    : "text-gray-700"
                )}
                onClick={closeMenu}
              >
                {item.name}
              </Link>
            ))}
            <a href="tel:+919277101677">
              <Button className="bg-red-800 hover:bg-estate-primary/90 mt-2">
                <Phone className="mr-2 h-4 w-4" />
                <span>+91 9277101677</span>
              </Button>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
