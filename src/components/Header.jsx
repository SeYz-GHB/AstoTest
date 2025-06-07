import ASTO from '../assets/LOGOES/ASTO LOGO.jpg'
import { IoSearchOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { data } from '../data/datas';
import Carts from './Carts';
const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const searchRef = useRef(null);
  const navigate = useNavigate();

  const searchCategories = [
    {
      title: "TRENDING SEARCHES",
      items: ["mouses", "keyboards", "headphones"],
    },
    {
      title: 'PARTNERSHIP & ABOUT-US',
      items: ['Partnership', 'About-Us']
    }
  ];

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleItemClick = (item) => {
    setIsSearchOpen(false);
    setSearchTerm('');

    // Convert to lowercase and remove special characters for consistent routing
    const routePath = item.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    switch (routePath) {
      case 'mouses':
        navigate('/mouses');
        break;
      case 'keyboards':
        navigate('/keyboards'); 
        break;
      case 'headphones':
        navigate('/headphones'); 
        break;
      case 'partnership':
        navigate('/partnership');
        break;
      case 'aboutus':
        navigate('/about-us');
        break; 
      default:
        // Check if this is a product name
        const product = (data).find(p => 
          p.name.toLowerCase() === item.toLowerCase()
        );
        
        if (product) {
          navigate(`/product/${product.id}`);
        }
        break;
    }
  };

  const getFilteredItems = () => {
    if (!searchTerm || searchTerm.trim() === '') {
      return searchCategories;
    }

    const term = searchTerm.toLowerCase().trim();
    
    // Make sure data is properly structured before filtering
    if (data && typeof data === 'object') {
      const filteredProducts = Object.values(data).filter(item =>
        (item.name && item.name.toLowerCase().includes(term)) ||
        (item.type && item.type.toLowerCase().includes(term))
      );
          
      if (filteredProducts.length > 0) {
        return [{
          title: "SEARCH RESULTS",
          items: filteredProducts.map(item => item.name)
        }];
      }
    }

    return [{
      title: "SEARCH RESULTS",
      items: ["No products found"]
    }];
  };

  // Close search dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearchOpen(false);
      }
    };

    const handleScroll = () => {
      if (isSearchOpen) {
        setIsSearchOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isSearchOpen]);


  const [quantity, setQuantity] = useState(0);
  const updateQuantity = () =>{
      setQuantity( pre => pre + 1)
  }

  return (
    <div className="flex justify-center w-full sticky top-0 z-100 ">
      <header className="flex flex-row justify-between items-center px-5 py-3 h-12 w-full max-w-[1920px]  z-50 bg-white border-b-2 border-green-600">
        <div className="flex flex-row gap-10 items-center">
          <Link to="/">
            <img src={ASTO} alt="ASTO's logo" className="w-[40px] md:w-[80px] scale-x-[1] cursor-pointer" />
          </Link>

          <ul className="flex-row gap-10 items-center text-b font-[400] hidden md:inline-flex cursor-pointer">
            <Link to="/partnership">
              <li>Partnership</li>
            </Link>
            <Link to="/about-us">
              <li>About Us</li>
            </Link>
          </ul>        
        </div>

        <div className="flex flex-row items-center gap-5 relative" ref={searchRef}>
          <IoSearchOutline
            className="text-[25px] cursor-pointer border-none outline-none"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            aria-label="Search"
            role="button"
            tabIndex={0}
          />

          {isSearchOpen && (
            <div className="fixed left-0 right-0 top-12 flex justify-center w-full z-10">
              <div className="bg-white shadow-lg rounded-b-md p-4 transition-all duration-300 ease-in-out w-full md:max-w-[1920px]">
                <div className="flex flex-row items-center gap-2 border-b pb-2">
                  <IoSearchOutline className="text-gray-400 text-xl" />
                  <input
                    value={searchTerm}
                    onChange={handleSearch}
                    type="text"
                    className="w-full text-gray-600 focus:outline-none font-semibold"
                    placeholder="Search"
                    autoFocus
                  />
                </div>

                <div className="overflow-y-auto max-h-80">
                  {getFilteredItems().map((category, index) => (
                    <div key={index} className="mt-2">
                      <p className="font-semibold text-gray-700 text-sm">{category.title}</p>
                      <ul>
                        {category.items.map((item, itemIndex) => (
                          <li
                            key={itemIndex}
                            className="py-1 text-sm text-gray-600 hover:text-black cursor-pointer"
                            onClick={() => handleItemClick(item)}
                            onKeyDown={(e) => e.key === 'Enter' && handleItemClick(item)}
                            tabIndex={0}
                            role="button"
                          >
                            <div className="flex flex-row items-center gap-2">
                              {(category.title === "TRENDING SEARCHES" || category.title === "SEARCH RESULTS") && (
                                <IoSearchOutline />

                              )}
                              {item}
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

     
          <Carts />
          
      
        </div>
      </header>
    </div>
  );
};

export default Header;