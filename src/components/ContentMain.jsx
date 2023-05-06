import { Chat, ListChats } from "./";

export const ContentMain = () => {
   return (
      <div className="lg:pl-72 pt-[200px] md:pt-[148px] min-h-screen grid grid-cols-1 lg:grid-cols-4">
         <ListChats />
         <Chat />
      </div>
   );
};
