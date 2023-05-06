import { RiSendPlaneLine } from "react-icons/ri";

export const Chat = () => {
   return (
      <div className="col-span-3 relative h-[calc(100vh-148px)] overflow-y-auto">
         <p className="text-center border px-3 py-1 my-6 text-xs rounded-full w-fit mx-auto">Yesterday</p>

         {/* Send mensages */}
         <div className="bg-gray-100 absolute w-full right-0 bottom-0  h-16 p-6 pb-16">
            <div className="relative">
               <RiSendPlaneLine className="absolute right-2 top-1/2 -translate-y-1/2 text-lg" />
               <input type="text" className="bg-white w-full outline-none py-2 px-8 rounded-full" />
            </div>
         </div>
      </div>
   );
};
