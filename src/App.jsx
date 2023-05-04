import { useState } from "react";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";

import { Sidebar, Header, ContentMain } from "./components";

const App = () => {
   const [showMenu, setShowMenu] = useState(false);

   const toggleMenu = () => setShowMenu(!showMenu);

   return (
      <div className="min-h-screen">
         <Sidebar showMenu={showMenu} />
         <Header />
         <ContentMain />
         {/* Btn responsivde */}
         <button
            className={`lg:hidden fixed  border p-3 bg-white rounded-full z-40 bottom-2 right-2`}
            onClick={toggleMenu}
         >
            {showMenu ? <RiCloseLine /> : <RiMenu3Line />}
         </button>
      </div>
   );
};

export default App;
