import React from "react";
import Sidebar from "../../components/Sidebar";

const AddConf =() => {
    return(
        <div class="flex w-full h-screen font-sans text-gray-900 bg-white">
                    <Sidebar/>
                    <div class="overflow-y-scroll flex-1">
                        <div id="0" class="flex flex-col flex-1 py-4 px-10 bg-indigo-500">
                        <div class="px-4 sm:px-0 ">
                            <h3  class="uppercase text-white tracking-wide text-center md:self-start md:text-left">Conferences </h3>
                            <p  id="1" class="mt-1 text-sm text-white tracking-wide text-center md:self-start md:text-left">
                                Ajouter une Conferences
                            </p>
                        </div>
                        </div>

          <form>
            <div class="shadow overflow-hidden sm:rounded-md">
              <div class="px-4 py-5 bg-indigo-50 sm:p-6">
                <div class="grid grid-cols-6 gap-6">

                    <div class="col-span-6 sm:col-span-4">
                        <p class="block text-sm font-medium text-gray-700">Titre
                            <a class="text-red-500 text-xl">*</a>
                        </p>
                        <input type="text" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Titre Conference" required/>
                      </div>

                      <div class="col-span-6 sm:col-span-4">
                        <p class="block text-sm font-medium text-gray-700">Description
                            <a class="text-red-500 text-xl">*</a>
                        </p>
                        <input type="text" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Description" required/>
                      </div>
                    
                      <div class="col-span-6 sm:col-span-4">
                        <p class="block text-sm font-medium text-gray-700">Location
                            <a class="text-red-500 text-xl">*</a>
                        </p>
                        <input type="text" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Location" required/>
                      </div>

                      <div class="col-span-6 sm:col-span-4">
                        <p class="block text-sm font-medium text-gray-700">Guest
                            <a class="text-red-500 text-xl">*</a>
                        </p>
                        <input type="text" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Guest Name" required/>
                      </div>
                    
                  <div class="col-span-6 sm:col-span-4">
                    <p class="block text-sm font-medium text-gray-700">Date debut
                      <a class="text-red-500 text-xl">*</a>
                    </p>
                    <input type="date" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"  required/>
                  </div>
                        
                      <div class="col-span-6 sm:col-span-3">
                          <p class="block text-sm font-medium text-gray-700">Nombre de places
                              <a class="text-red-500 text-xl">*</a>
                          </p>
                          <input type="number" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Nombre de place disponible" required/>
                        </div> 
                    </div>
                </div>
            </div>
                        <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                            <a href="#2" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-purple-600 text-white hover:bg-white hover:text-purple-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition ease-out duration-500">
                              Ajouter
                            </a>
                          </div>
        </form>
                        </div>
                    </div>
                         
    )

}
export default AddConf;