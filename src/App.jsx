import { useState } from "react";
import { Sidebar } from "./components";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";

const App = () => {
   const [showMenu, setShowMenu] = useState(false);

   const toggleMenu = () => setShowMenu(!showMenu);
   return (
      <div className="min-h-screen">
         <Sidebar showMenu={showMenu} />
         {/*  */}
         {/* Btn responsivde */}
         <button
            className={`md:hidden fixed  border p-3 bg-white rounded-full z-40 ${
               showMenu ? "top-2 right-2" : "bottom-2 right-2"
            }`}
            onClick={toggleMenu}
         >
            {showMenu ? <RiCloseLine /> : <RiMenu3Line />}
         </button>
      </div>
   );
};

export default App;
