import React, { Component } from 'react';
import Basic_Configuration_1 from './Basic_Configuration_1';
import Basic_Configuration_2 from './Basic_Configuration_2';
import Basic_Configuration_3 from './Basic_Configuration_3';
import Basic_Configuration_4 from './Basic_Configuration_4';
import {Route,HashRouter as Router,Link,Switch} from 'react-router-dom';





class Basic_Configuration extends Component{

   
    
  render(){

      return(
      <div>
        

            <div  className="container">

              <ul className="nav nav-tabs">
                <li className="active"><a data-toggle="tab" href="#home">Basic_Configuration_1</a></li>
                <li><a data-toggle="tab" href="#menu1">Basic_Configuration_2</a></li>
                <li><a data-toggle="tab" href="#menu2">Basic_Configuration_3</a></li>
                <li><a data-toggle="tab" href="#menu3">Basic_Configuration_4</a></li>
                
              </ul>
             
              
              <div className="tab-content">
               
                    <div id="home" className="tab-pane in active">
                    <Basic_Configuration_1 />
                    </div>
                    <div id="menu1" className="tab-pane ">
                    <Basic_Configuration_2 />
                    </div>
                    <div id="menu2" className="tab-pane ">
                    <Basic_Configuration_3 />
                    </div>
                    <div id="menu3" className="tab-pane ">
                    <Basic_Configuration_4 />
                    </div>
                  
            </div>
          
           
      </div>
           </div>
              
      );
  }
}






// class Basic_Configuration_1 extends Component {
    
//     constructor() {
//         super();
        
//         this.state = {
           
//             lr: "auto_number",
//             challan:"challan_auto_number",
//             invoice:"invoice_auto_number",
//             receipt:"receipt_auto_number",
//             payment:"payment_auto_number",
          
           
//         };
//       }
    
  

//     render() {
      

//       return (
       
//         <div className="basic_configuration">
            
      
//         <div id="sc-add-company">
//         <h1>Basic Configuration </h1>
//             <div className="sc-container">
//                 <form encType="multipart/form-data" className="add_company_form">

             
//                     <div className="radio_configration">
//                         <label><strong>LR:</strong></label>
//                         <input type="radio" name="lr" value="auto_number"
//                           checked={this.state.lr === 'auto_number'} onChange={(e) => this.setState({ lr:e.target.value })} /> Auto number 
//                         <input type="radio" name="lr" value="manual"
//                          checked={this.state.lr === 'manual'} onChange={(e) => this.setState({ lr:e.target.value })}   />  Manual

//                         <div className="radio_input">
//                         {this.state.lr === "manual" ?  <Manual />: <Auto_number />}
//                         </div>
//                     </div>
            
//                     <div className="radio_configration">
//                         <label><strong>Challan :</strong></label>
//                             <input type="radio" name="challan" value="challan_auto_number"
//                             checked={this.state.challan === 'challan_auto_number'} onChange={(e) => this.setState({ challan: e.target.value })} /> Auto number 
//                             <input type="radio" name="challan" value="challan_manual"
//                            checked={this.state.challan === 'challan_manual'}  onChange={(e) => this.setState({ challan: e.target.value })}   />  Manual

//                         <div className="radio_input">
//                         {this.state.challan === "challan_manual" ?  <Manual /> :<Auto_number />}
//                         </div>
//                     </div>
 
//                     <div className="radio_configration">
//                         <label><strong>Invoice :</strong></label>
//                             <input type="radio" name="invoice" value="invoice_auto_number"
//                             checked={this.state.invoice === 'invoice_auto_number'} onChange={(e) => this.setState({ invoice: e.target.value })}/> Auto number 
//                             <input type="radio" name="invoice" value="invoice_manual"
//                             checked={this.state.invoice === 'invoice_manual'} onChange={(e) => this.setState({ invoice: e.target.value })}/>  Manual

//                         <div className="radio_input">
//                             {this.state.invoice === "invoice_auto_number" ?  <Auto_number />:<Manual />}
//                         </div>
//                     </div>

//                     <div className="radio_configration">
//                         <label><strong>Receipt:</strong></label>
//                             <input type="radio" name="receipt" value="receipt_auto_number"
//                             checked={this.state.receipt === 'receipt_auto_number'} onChange={(e) => this.setState({ receipt: e.target.value })}/> Auto number 
//                             <input type="radio" name="receipt" value="receipt_manual"
//                             checked={this.state.receipt === 'receipt_manual'} onChange={(e) => this.setState({ receipt: e.target.value })}/>  Manual

//                         <div className="radio_input">
//                             {this.state.receipt === "receipt_auto_number" ?  <Auto_number />:<Manual />}
//                         </div>
//                     </div>

//                     <div className="radio_configration">
//                         <label><strong>Payment:</strong></label>
//                             <input type="radio" name="payment" value="payment_auto_number"
//                             checked={this.state.payment === 'payment_auto_number'} onChange={(e) => this.setState({ payment: e.target.value })}/> Auto number 
//                             <input type="radio" name="payment" value="payment_manual"
//                             checked={this.state.payment === 'payment_manual'} onChange={(e) => this.setState({ payment: e.target.value })}/>  Manual

//                         <div className="radio_input">
//                             {this.state.payment === "payment_auto_number" ?  <Auto_number />:<Manual />}
//                         </div>
//                     </div>
                
//                 </form>
//                 <div className="btncompany">
//                     <input type="submit"  className="save" value="Save" />
//                     <input type="submit" className="save_close" value="Save & Next" />
//                     <input type="submit"  className="save" value="Skip" />
//                 </div>
//             </div>
//         </div>
//     </div>
//       );
//     }
   
//   }

//   class Auto_number extends Component {
//       render(){
//           return(
//             <div>
//                 <div className="auto_number">
//                     <label>Prefix: </label> 
//                     <input type="text" name="prefix"  placeholder="prefix" />
//                 </div>
//                 <div className="auto_number">
//                     <label>Number Start with:</label> 
//                     <input type="number" name="number" placeholder="Number Start with " />
//                 </div>
//                 <div className="auto_number">
//                     <label>Suffix:</label>
//                     <input type="text" name="suffix"  placeholder="Suffix  " />
//                 </div>
//                 <div className="check_number">
//                     <input type="checkbox" /><label>Duplication check condition</label>
//                 </div>
//             </div>
//           );
//       }
//   }

  

//   class Manual  extends Component {
//     render(){ 
//         return(
//             <div>
//                 <div className="auto_number">
//                     <label>Prefix: </label> 
//                     <input type="text" placeholder="prefix" />
//                 </div>

//                 <div className="auto_number">
//                     <label>Suffix:</label>
//                     <input type="text" placeholder="Suffix  " />
//                 </div>

//                 <div className="check_number">
//                     <input type="checkbox" /><label> Warn if duplicate number is selected</label>
//                 </div>

//           </div>
//         );
//     }
// }
     

 export default Basic_Configuration;