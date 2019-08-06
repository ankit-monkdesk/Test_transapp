import React, { Component } from 'react';
// import { HashRouter as Router,Link } from 'react-router-dom';
import axios from 'axios';
class List_company extends Component {
    componentWillMount() {
        axios.get('APIKEY HERE')
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
      }
    render(){
        return(
            <div className="list_company">
                <h1>list company</h1>
                <table className="pure-table">
                    <thead>
                        <tr>
                            <th>Sr</th>
                            <th>CompanyName</th>
                            <th>City</th>
                            <th>Email</th>
                            <th>PanNo</th>
                            <th>GstNo</th>
                            <th>CinNo</th>
                            <th>Mobile</th>
                            <th>Address</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr className="pure-table-odd">
                            <td>1</td>
                            <td>Test</td>
                            <td>Bhavnagar</td>
                            <td>ax@gmail.com</td>
                            <td>PAN NO</td>
                            <td>GST NO</td>
                            <td>CIN NO</td>
                            <td>722770130</td>
                            <td>HI THIS MY ADDRESS</td>
                            <td>
                                <a href="#">Edit</a>
                            </td>
                        </tr>

                        
                    </tbody>
                </table>
            </div>
        );
    }
}
export default List_company;