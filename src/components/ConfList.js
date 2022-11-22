import React, { Component } from 'react';
import ConfService from '../service/conferenceService';

export default class ConfList extends Component {
  constructor(props){
    super(props);
    this.state = {
        conferences : []
    }
  }
    componentDidMount(){
        ConfService.getAllConf().then((res) => {
            this.setstate ({ conferences : res.data});
        });
    }
    render() {
    return (
      
    <div class="overflow-x-auto relative">
        <table class="w-full text-sm text-left text-gray-500 ">
            <thead class="text-xs text-gray-700 uppercase bg-indigo-200 ">
                <tr>
                    <th scope="col" class="py-3 px-6">
                        Title
                    </th>
                    <th scope="col" class="py-3 px-6">
                        Description
                    </th>
                    <th scope="col" class="py-3 px-6">
                        Location
                    </th>
                    <th scope="col" class="py-3 px-6">
                        Guest
                    </th>
                    <th scope="col" class="py-3 px-6">
                        Date
                    </th>
                    <th scope="col" class="py-3 px-6">
                        Nombre de places
                    </th>
                </tr>
            </thead>
            <tbody>
                {
                    this.state.conferences.map(
                        conf =>
                        <tr key = {conf.id} class="bg-indigo-100 border-b ">
                            <td class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap"> {conf.title} </td>
                            <td class="py-4 px-6"> {conf.description} </td>
                            <td class="py-4 px-6"> {conf.location} </td>
                            <td class="py-4 px-6"> {conf.guest} </td>
                            <td class="py-4 px-6"> {conf.date} </td>
                            <td class="py-4 px-6"> {conf.nbPlace} </td>
                        </tr>
                    )
                }
                
            </tbody>
        </table>
    </div>

    )
  }
}
