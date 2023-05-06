import { RiSendPlaneLine, RiSearch2Line, RiFileCopyLine } from "react-icons/ri";

export const Header = () => {
   return (
      <div className="fixed lg:pl-72 w-full z-10">
         <header className=" bg-white py-6 px-4 border-b-2  flex justify-between ">
            <h2 className="text-2xl font-semibold">Messages</h2>
            <button className="flex items-center gap-4 border text-sky-900 font-medium py-2 px-3 text-sm rounded-lg">
               <RiSendPlaneLine />
               New Message
            </button>
         </header>
         <div className="bg-blue-100 grid grid-cols-1 md:grid-cols-4">
            <div className="col-span-1 border-r-2 p-4">
               <div className="relative">
                  <RiSearch2Line className="absolute top-1/2 -translate-y-1/2 left-1 text-md text-blue-900" />
                  <input
                     type="text"
                     className="bg-white w-full pl-6 px-4 py-1 outline-none rounded-md text-sm focus:border focus:border-blue-900"
                     placeholder="Search"
                  />
               </div>
            </div>
            <div className="col-span-3 p-4 flex justify-between items-center">
               <p className="text-xs md:text-sm">Error code CR045</p>
               <p className="flex items-center gap-2 text-blue-900 text-xs md:text-sm">
                  <span className="text-gray-500">Transaction:</span> 123456
                  <RiFileCopyLine className="hover:cursor-pointer text-sm md:text-lg" />
               </p>
            </div>
         </div>
      </div>
   );
};
