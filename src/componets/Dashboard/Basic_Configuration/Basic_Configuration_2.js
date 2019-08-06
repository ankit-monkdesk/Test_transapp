import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Basic_Configuration_1 from './Basic_Configuration_1';

import Basic_Configuration_3 from './Basic_Configuration_3';
import Basic_Configuration_4 from './Basic_Configuration_4';

// import Popup from "reactjs-popup";

class Basic_Configuration_2 extends Component{

    constructor() {
        super();
        this.handleData = this.handleData.bind(this);
        this.handleData_s = this.handleData_s.bind(this);
        this.state = {
           
            owned_trucks: "owned_trucks_yes",
            manage_branches:"manage_branches_yes",
            manage_cost_center:"manage_cost_center_yes",
            showPopup_C: false,
            showPopup_S: false,
            fromChild_c: [],
            fromChild_s:[]
        };
      
      }

      handleData(data) {
        this.setState({
          fromChild_c:[...this.state.fromChild_c, data]
        });
       
      }
      handleData_s(data) {
        this.setState({
          fromChild_s: [...this.state.fromChild_s, data]
        });
      
      }
     
      togglePopup_C() {
        this.setState({
          showPopup_C: !this.state.showPopup_C
        });
      }

      togglePopup_S() {
        this.setState({
            showPopup_S: !this.state.showPopup_S
        });
      }


    render(){

       var values = this.state.fromChild_c;
       var values_S = this.state.fromChild_s;
     
     
      
        return(
            <div className="basic_configuration">
            
          
           

        

          
    
            <div id="sc-add-company">
          
            <h1>Basic Configuration 2 </h1>
                <div className="sc-container">
                    <form encType="multipart/form-data" className="add_company_form">
      
                      
                {/* <h5>Received by parent:<br />{this.state.fromChild}</h5> */}

                        <div className="radio_configration">
                            <label>Owned Trucks :</label>
                            <input type="radio" name="owned_trucks" value="owned_trucks_yes"
                              checked={this.state.owned_trucks === 'owned_trucks_yes'} onChange={(e) => this.setState({ owned_trucks:e.target.value })} /> Yes 
                            <input type="radio" name="owned_trucks" value="owned_trucks_no"
                             checked={this.state.owned_trucks === 'owned_trucks_no'} onChange={(e) => this.setState({ owned_trucks:e.target.value })}   />  No
                                {/* <div>
                                   { this.state.owned_trucks}
                                </div> */}
                            
                        </div>
                
                        <div className="radio_configration">
                            <label>Manage Branches  :</label>
                                <input type="radio" name="manage_branches" value="manage_branches_yes"
                                checked={this.state.manage_branches === 'manage_branches_yes'} onChange={(e) => this.setState({ manage_branches: e.target.value })} /> Yes 
                                <input type="radio" name="manage_branches" value="manage_branches_no"
                               checked={this.state.manage_branches === 'manage_branches_no'}  onChange={(e) => this.setState({ manage_branches: e.target.value })}   />  No
                        </div>
      
                        <div className="radio_configration">
                            <label>Manage Cost Center  :</label>
                                <input type="radio" name="manage_cost_center" value="manage_cost_center_yes"
                                checked={this.state.manage_cost_center === 'manage_cost_center_yes'} onChange={(e) => this.setState({ manage_cost_center: e.target.value })}/> Yes
                                <input type="radio" name="manage_cost_center" value="manage_cost_center_no"
                                checked={this.state.manage_cost_center === 'manage_cost_center_no'} onChange={(e) => this.setState({ manage_cost_center: e.target.value })}/>  No
                               
                        </div>

                <div className="row">
                    <div className="col md-6">
                        <div className="radio_configration">
                            <div className="dropdown">
                               <label>Customer Label :  </label>
                                <select>
                                {values.map(function (value) {
                                   return <option >{value}</option>
                                  
                                  })}
                                  <option>Options</option>
                                   {/* <option >1.{Customer_data}</option> */}
                                   {/* <option >1.{this.state.fromChild_c}</option> */}
                                 
                                 </select>
                                 <button className="btn btn-info"  onClick={this.togglePopup_C.bind(this)}>+Add new</button>
                            </div>
                         </div>
                    </div>

                    <div className="col md-6">
                         <div className="radio_configration">
                         <div className="dropdown">
                           <label>Supplier Label :</label>
                            
                            <select>
                            {values_S.map(function (value) {
                                   return <option >{value}</option>
                                  
                                  })}
                            
                              <option >Options</option>
                            </select>
                            <button className="btn btn-info"  onClick={this.togglePopup_S.bind(this)}>+Add new</button>
                            </div>
                         </div> 
                    </div>
                </div>
               
                {this.state.showPopup_C ? 
                    <Popup_C
                        handlerFromParant={this.handleData}
                        closePopup={this.togglePopup_C.bind(this)}
                    />
                    : null
                    }

                {this.state.showPopup_S ? 
                    <Popup_S
                        handlerFromParant={this.handleData_s}
                        closePopup={this.togglePopup_S.bind(this)}
                    />
                    : null
                    }
                    

                    </form>
                    <div className="btn_config">
                        <input type="submit"  className="save" value="Save" />
                        <input type="submit" className="save_close" value="Save & Next" />
                     <Link to="/basic_configuration_3"><input type="submit"  className="save" value="Skip" /></Link>
                    </div>
                </div>
            </div>
            
        </div>
          );
        }
       
      }
        
  class Popup_C extends React.Component {

    constructor() {
      super();
      this.handleChange = this.handleChange.bind(this);
      this.submitHandler = this.submitHandler.bind(this);
      this.state = {
        inputField: ''
      };
    }
    
    submitHandler(evt) {
      evt.preventDefault();
      // pass the input field value to the event handler passed
      // as a prop by the parent (App)
       this.props.handlerFromParant(this.state.inputField);
      
      this.setState({
        inputField: ''
      });
    }
    
    handleChange(event) {
      this.setState({
        inputField: event.target.value
      });
    }

  render() {
    
    return (
      <div className='popup'>
        <form encType="multipart/form-data"  onSubmit={this.submitHandler}>

        <div className='popup_inner'>
          <h1>Add new Customer  label</h1>
          <div className="customer_label">
            <label>Customer Label : </label> 
            <input type="text" name="customer_label"  id="theInput" 
                 value={this.state.inputField} 
                 onChange={this.handleChange}   placeholder="Customer Label" />
          
          </div>
          
            <button className="btn btn-danger" onClick={this.props.closePopup}>Cancel</button>
            <button className="btn btn-success" type="submit" >+ Add new</button>
            <a onClick={this.props.closePopup}> <i className="fa fa-times-circle"></i></a>
            {/* <h5>Visible in child:<br />{this.state.inputField}</h5> */}
        </div>
        </form>
        
      </div>
    );
  }
}


class Popup_S extends React.Component {


  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
    this.state = {
      inputField: ''
    };
  }
  
  submitHandler(evt) {
    evt.preventDefault();
    // pass the input field value to the event handler passed
    // as a prop by the parent (App)
     this.props.handlerFromParant(this.state.inputField_s);
    
    this.setState({
      inputField_s: ''
    });
  }
  
  handleChange(event) {
    this.setState({
      inputField_s: event.target.value
    });
  }
  render() {
    return (
      <div className='popup'>
        <form encType="multipart/form-data"  onSubmit={this.submitHandler} >

        <div className='popup_inner'>
          <h1>Add new Supplier label</h1>
          <div className="customer_label">
            <label>Supplier Label : </label> 
            <input type="text"  value={this.state.inputField_s} 
                 onChange={this.handleChange}   name="Supplier_label"   placeholder="Supplier Label " />
            
          </div>
          
            <button className="btn btn-danger" onClick={this.props.closePopup}>Cancel</button>
            <button className="btn btn-success" type="submit">+ Add new</button>
          <a onClick={this.props.closePopup}> <i className="fa fa-times-circle"></i></a>

        </div>
        </form>
      </div>
    );
  }
}


export default Basic_Configuration_2;
