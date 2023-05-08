import { RiSendPlaneLine } from "react-icons/ri";

export const Chat = () => {
   return (
      <div className="col-span-3 relative h-[calc(100vh-148px)] flex flex-col overflow-y-auto">
         <div className="flex-1 overflow-y-auto p-4">
            <p className="text-center border px-3 py-1 my-6 text-xs rounded-full w-fit mx-auto">Yesterday</p>

            {/* Message 1 */}
            <div className="flex gap-2">
               <p className="bg-blue-100 text-blue-900 font-semibold p-2 rounded-full h-fit text-xs">SG</p>
               <div className="flex flex-col gap-2 w-4/6">
                  <p className="text-gray-500 text-sm border p-4 rounded-guess">
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi laboriosam, earum quisquam molestias
                     fugit asperiores assumenda voluptatibus nulla quia fuga.
                  </p>
                  <span className="text-xs text-gray-400">09 mayo 2023 15:50hrs</span>
               </div>
            </div>

            <p className="text-center border px-3 py-1 my-6 text-xs rounded-full w-fit mx-auto">Today</p>

            {/* Message 2 */}
            <div className="flex gap-2 flex-row-reverse">
               <p className="bg-blue-100 text-blue-900 font-semibold p-2 rounded-full h-fit text-xs">SG</p>
               <div className="flex flex-col gap-2 w-max-4/6">
                  <p className="text-sm bg-blue-600 text-white p-4 rounded-my-messages">
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi laboriosam.
                  </p>
                  <span className="text-xs text-gray-400 text-right">10 mayo 2023 15:50hrs</span>
               </div>
            </div>
         </div>

         {/* Send mensages */}
         <div className="bg-gray-100 p-6">
            <div className="relative">
               <RiSendPlaneLine className="absolute right-2 top-1/2 -translate-y-1/2 text-lg hover:cursor-pointer" />
               <input
                  type="text"
                  className="bg-white w-full outline-none py-2 pl-8 pr-10 rounded-full text-gray-600 text-md"
               />
            </div>
         </div>
      </div>
   );
};
