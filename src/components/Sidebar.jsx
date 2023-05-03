import {
   RiHome6Line,
   RiArrowLeftRightFill,
   RiMoneyCnyBoxLine,
   RiArrowUpSLine,
   RiCheckboxBlankCircleFill,
   RiListSettingsLine,
   RiLogoutCircleRLine,
} from "react-icons/ri";

export const Sidebar = ({ showMenu }) => {
   return (
      <div
         className={`fixed md:left-0 w-full sm:w-4/6 md:w-72 h-full border-r-2  p-6 flex flex-col justify-between bg-white overflow-y-auto z-20 ${
            showMenu ? "left-0" : "-left-full"
         } transition-all`}
      >
         {/* Logo, infouser and menu */}
         <div>
            {/* Logo */}
            <h1 className="text-2xl uppercase font-semibold tracking-widest mb-8">Tu Logo</h1>
            {/* Info user */}
            <div className="flex items-center gap-4 mb-8">
               <span className="bg-blue-100 p-3 rounded-full text-blue-700 font-medium">SG</span>
               <div>
                  <p className="text-gray-500 text-xs">Desarrolador web</p>
                  <h5 className="font-semibold">Samuel González</h5>
               </div>
            </div>
            {/* Menu */}
            <nav>
               <ul>
                  <li>
                     <a href="#" className="flex gap-4 items-center text-gray-500 p-2">
                        <RiHome6Line /> Dasboard
                     </a>
                  </li>
                  <li>
                     <a href="#" className="flex gap-4 items-center text-gray-500 p-2">
                        <RiMoneyCnyBoxLine /> Trades
                     </a>
                  </li>
                  <li>
                     <a href="#" className="flex gap-4 items-center justify-between text-gray-500 p-2">
                        <span className="flex items-center gap-4">
                           <RiArrowLeftRightFill /> Transfers
                        </span>
                        <RiArrowUpSLine />
                     </a>
                     <ul className="pl-8 text-gray-500">
                        <li>
                           <a href="#" className="flex items-center gap-4 p-2">
                              <RiCheckboxBlankCircleFill className="text-[8px]" /> Overview
                           </a>
                        </li>
                        <li>
                           <a href="#" className="flex items-center gap-4 p-2">
                              <RiCheckboxBlankCircleFill className="text-[8px]" /> Beneficiaries
                           </a>
                        </li>
                        <li>
                           <a href="#" className="flex items-center gap-4 p-2 justify-between">
                              <span className="flex items-center gap-4">
                                 <RiCheckboxBlankCircleFill className="text-[8px]" /> Messages
                              </span>
                              <span className="py-1 px-2 box-content bg-yellow-300 rounded-full text-xs">2</span>
                           </a>
                        </li>
                     </ul>
                  </li>
                  <li>
                     <a href="#" className="flex gap-4 items-center text-gray-500 p-2">
                        <RiListSettingsLine /> System Settings
                     </a>
                  </li>
               </ul>
            </nav>
         </div>
         {/* Logout */}
         <div>
            <a href="#" className="flex items-center gap-4 text-gray-500 p-2">
               <RiLogoutCircleRLine /> Logout
            </a>
         </div>
      </div>
   );
};
