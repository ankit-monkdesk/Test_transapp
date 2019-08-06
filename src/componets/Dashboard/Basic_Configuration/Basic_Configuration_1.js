import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Basic_Configuration_2 from './Basic_Configuration_2';
import { hashHistory ,browserHistory} from 'react-router';
import Basic_Configuration from './Basic_Configuration';




class Basic_Configuration_1 extends Component {
    
  constructor(props) {
      super(props);
      this.routeChange = this.routeChange.bind(this);
      this.state = {
         
          lr: "auto_number",
          challan:"challan_auto_number",
          invoice:"invoice_auto_number",
          receipt:"receipt_auto_number",
          payment:"payment_auto_number",
        
      
      };
    }
  
    routeChange() {
       alert("hrllo");
    
       
          //this.props.history.push("/basic_configuration_2");
      
        //window.location.hash = "/basic_configuration_2";
     
       
      }

  render() {
    

    return (
     
      <div className="basic_configuration">
           {/* <div><Basic_Configuration /></div>  */}
    
      <div id="sc-add-company">
      <h1>Basic Configuration 1 </h1>
          <div className="sc-container">
              <form encType="multipart/form-data" className="add_company_form">

           
                  <div className="radio_configration">
                      <label><strong>LR:</strong></label>
                      <input type="radio" name="lr" value="auto_number"
                        checked={this.state.lr === 'auto_number'} onChange={(e) => this.setState({ lr:e.target.value })} /> Auto number 
                      <input type="radio" name="lr" value="manual"
                       checked={this.state.lr === 'manual'} onChange={(e) => this.setState({ lr:e.target.value })}   />  Manual

                      <div className="radio_input">
                      {this.state.lr === "manual" ?  <Manual />: <Auto_number />}
                      </div>
                  </div>
          
                  <div className="radio_configration">
                      <label><strong>Challan :</strong></label>
                          <input type="radio" name="challan" value="challan_auto_number"
                          checked={this.state.challan === 'challan_auto_number'} onChange={(e) => this.setState({ challan: e.target.value })} /> Auto number 
                          <input type="radio" name="challan" value="challan_manual"
                         checked={this.state.challan === 'challan_manual'}  onChange={(e) => this.setState({ challan: e.target.value })}   />  Manual

                      <div className="radio_input">
                      {this.state.challan === "challan_manual" ?  <Manual /> :<Auto_number />}
                      </div>
                  </div>

                  <div className="radio_configration">
                      <label><strong>Invoice :</strong></label>
                          <input type="radio" name="invoice" value="invoice_auto_number"
                          checked={this.state.invoice === 'invoice_auto_number'} onChange={(e) => this.setState({ invoice: e.target.value })}/> Auto number 
                          <input type="radio" name="invoice" value="invoice_manual"
                          checked={this.state.invoice === 'invoice_manual'} onChange={(e) => this.setState({ invoice: e.target.value })}/>  Manual

                      <div className="radio_input">
                          {this.state.invoice === "invoice_auto_number" ?  <Auto_number />:<Manual />}
                      </div>
                  </div>

                  <div className="radio_configration">
                      <label><strong>Receipt:</strong></label>
                          <input type="radio" name="receipt" value="receipt_auto_number"
                          checked={this.state.receipt === 'receipt_auto_number'} onChange={(e) => this.setState({ receipt: e.target.value })}/> Auto number 
                          <input type="radio" name="receipt" value="receipt_manual"
                          checked={this.state.receipt === 'receipt_manual'} onChange={(e) => this.setState({ receipt: e.target.value })}/>  Manual

                      <div className="radio_input">
                          {this.state.receipt === "receipt_auto_number" ?  <Auto_number />:<Manual />}
                      </div>
                  </div>

                  <div className="radio_configration">
                      <label><strong>Payment:</strong></label>
                          <input type="radio" name="payment" value="payment_auto_number"
                          checked={this.state.payment === 'payment_auto_number'} onChange={(e) => this.setState({ payment: e.target.value })}/> Auto number 
                          <input type="radio" name="payment" value="payment_manual"
                          checked={this.state.payment === 'payment_manual'} onChange={(e) => this.setState({ payment: e.target.value })}/>  Manual

                      <div className="radio_input">
                          {this.state.payment === "payment_auto_number" ?  <Auto_number />:<Manual />}
                      </div>
                  </div>
                  
              
              </form>
              <div className="btncompany">
                  <input type="submit"  className="save" value="Save" />
                  <input type="submit" className="save_close" value="Save & Next" />
                <Link to="/basic_configuration_2"> <button  className="save">Skip</button></Link>
              </div>
              
          </div>
      </div>
  </div>
    );
  }
 
}

class Auto_number extends Component {
    render(){
        return(
          <div>
              <div className="auto_number">
                  <label>Prefix: </label> 
                  <input type="text" name="prefix"  placeholder="prefix" />
              </div>
              <div className="auto_number">
                  <label>Number Start with:</label> 
                  <input type="number" name="number" placeholder="Number Start with " />
              </div>
              <div className="auto_number">
                  <label>Suffix:</label>
                  <input type="text" name="suffix"  placeholder="Suffix  " />
              </div>
              <div className="check_number">
                  <input type="checkbox" /><label>Duplication check condition</label>
              </div>
          </div>
        );
    }
}



class Manual  extends Component {
  render(){ 
      return(
          <div>
              <div className="auto_number">
                  <label>Prefix: </label> 
                  <input type="text" placeholder="prefix" />
              </div>

              <div className="auto_number">
                  <label>Suffix:</label>
                  <input type="text" placeholder="Suffix  " />
              </div>

              <div className="check_number">
                  <input type="checkbox" /><label> Warn if duplicate number is selected</label>
              </div>

        </div>
      );
  }
}
export default Basic_Configuration_1;