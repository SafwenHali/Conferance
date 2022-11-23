import React from "react";
import Sidebar from "../../components/Sidebar";

const Dashboard =() => {
    return(
        <div class="flex w-full h-screen font-sans text-gray-900 bg-white">
        <Sidebar/>
            <main class="overflow-y-scroll flex-1">
                <div id="0" class="flex flex-col flex-1 py-4 px-10">
                    Dashboard
                </div>
            </main>
        </div>
    )

}
export default Dashboard;