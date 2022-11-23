import React from "react";
import ConfList from "../../components/ConfList";
import Sidebar from "../../components/Sidebar";

const Gerer =() => {
    return(
        <div class="flex w-full h-screen font-sans text-gray-900 bg-white">
            <Sidebar/>
            <main class="overflow-y-scroll flex-1">
                <div id="0" class="flex flex-col flex-1 py-4 px-10">
                     <ConfList/>
                </div>
            </main>
        </div>
    )

}
export default Gerer;