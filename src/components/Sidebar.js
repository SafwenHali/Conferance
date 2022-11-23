import React from "react";

const Sidebar =() => {
    return(
    <aside
      class="flex relative flex-col py-4 px-6 w-80 border-r border-gray-200 bg-gray-50 rounded"
    >
        <a href="/Home" class="py-20">
            <span class="self-center ml-10 text-xl font-semibold whitespace-nowrap text-indigo-500 ">WE CONFERENCE</span>
         </a>
         <ul class="space-y-2">
    
    <li>
        <a href="/admin" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg  hover:bg-gray-100 ">
            <svg class="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
            <span class="ml-3">Dashboard</span>
            </a>
    </li>

      <div class="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg group" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
        <svg class="flex-shrink-0 w-6 h-6 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
        <span class="flex-1 ml-3 text-left whitespace-nowrap" sidebar-toggle-item>Conferences</span>
        </div>
  <ul id="dropdown-example" class=" py-2 space-y-2">
        <li>
           <a href="/admin/addConf" class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-purple-100-700">
               Ajouter Conference
            </a>
        </li>
        <li>
           <a href="/admin/conf" class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-purple-100-700">
            Gérer Conferences
            </a>
        </li>
  </ul>
    
   
    <li>
    <a href="/login" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg  hover:bg-gray-100 ">
    <svg class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clip-rule="evenodd"></path></svg>
    <span class="flex-1 ml-3 whitespace-nowrap">Déconnexion</span>
    </a>
    </li>
    
    </ul>
      
    </aside>               
    )

}
export default Sidebar;