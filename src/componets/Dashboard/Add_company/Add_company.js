import React, { Component } from 'react';
import axios from 'axios';


class Add_company extends Component {
    constructor(){
        super()
        this.state = {
            fields: {},
            errors: {}
        }
        this.handleChange = this.handleChange.bind(this);
        this.AddCompanySendDetails = this.AddCompanySendDetails.bind(this);
    }


    AddCompanySendDetails(e){
        e.preventDefault();
      if(this.handleValidation()){
        let init = {
          method: 'POST',
          headers: { 'content-type': 'multipart/form-data' },
          mode: 'cors',
          cache: 'default',
          dataType: 'json',
          type:     'POST',
          async:    true,
        };
         /**START GET LOCALSTORAGE DATA */

         const sessionData = localStorage.getItem('formData');
         const AllFormData = JSON.parse(sessionData);

        /**END GET LOCALSTORAGE DATA */

        const company_name = this.state.fields.legal_entity_name
        const email = this.state.fields.email
        const mobile_no = this.state.fields.mobile_no
        const city = this.state.fields.city
        const pan_no = this.state.fields.pan_no
        const cin_no = this.state.fields.cin_no
        const gst_no = this.state.fields.gst_no
        const address = this.state.fields.address
        const licence_id = AllFormData.data.data.tpsData.lid
        const company_id = AllFormData.data.data.tpsData.company_id
        alert(company_id);
        const token = AllFormData.data.data.tpsData.token

        let formData = new FormData();

        formData.append('company_name', company_name);
        formData.append('email', email);
        formData.append('phone', mobile_no);
        formData.append('city', city);
        formData.append('pan_no', pan_no);
        formData.append('cin_no', cin_no);
        formData.append('gst_no', gst_no);
        formData.append('address_line1', address);
        formData.append('lid', licence_id);
        formData.append('cid', company_id);
        formData.append('token', token);
      
      axios.post('https://idea.truebook.in/tps_api/index.php?view=companysetup',formData,init)
      .then(response => {
        
        this.props.history.push("/list_company");
      })
      .catch(err => {
        console.log(err);
      })
     }else{
    //    alert("Please Fill Up Fields");
  
     }
      
    }
     /**VALIDATION ADD COMPANY FORM HERE..... */
     handleValidation(){
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;
   
        //Name
        if(!fields["legal_entity_name"]){
           formIsValid = false;
           errors["legal_entity_name"] = "*Name is required";
        }
   
        //Email
        if(!fields["email"]){
           formIsValid = false;
           errors["email"] = "*Email is Required";
        }
   
        if(typeof fields["email"] !== "undefined"){
           let lastAtPos = fields["email"].lastIndexOf('@');
           let lastDotPos = fields["email"].lastIndexOf('.');
   
           if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') === -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
              formIsValid = false;
              errors["email"] = "*Email is not valid";
            }
       } 
      // mobileno
        if(!fields["mobile_no"]){
           formIsValid = false;
           errors["mobile_no"] = "*Only Digits Allow";
        }        
        if(!fields["pan_no"]){
            formIsValid = false;
            errors["pan_no"] = "*Pan Number Required";
         }   
          if(!fields["gst_no"]){
           formIsValid = false;
           errors["gst_no"] = "*Gst Number Required";
        }   
        if(!fields["cin_no"]){
            formIsValid = false;
            errors["cin_no"] = "*Cin Number Required";
         }   
         if(!fields["city"]){
            formIsValid = false;
            errors["city"] = "*City Is Requied";
         }  
         if(!fields["address"]){
            formIsValid = false;
            errors["address"] = "*Address Is Requied";
         }    
     
   
       this.setState({errors: errors});
       return formIsValid;
   }
   
  
    handleChange(field, e){         
        let fields = this.state.fields;
        fields[field] = e.target.value;        
        this.setState({fields});
    }
    render()
    {
    
        const field_eroor = <div className="alert alert-warning alert-dismissible fade show">
        <strong>oopps!..</strong> Please Fillup Fields
        <button type="button" className="close" data-dismiss="alert">&times;</button>
        </div>; 

        return(
            <div className="Add_company">
                <div id="sc-add-company">
                    <h1>Add Company Details </h1>
                    <div className="sc-container">
                   
                        <form encType="multipart/form-data" className="add_company_form">
                            <div className="field_company">
                                <div className="labelname">Name Of Legal Entity:</div>
                                <input type="text" name="legal_entity_name" value={this.state.fields["legal_entity_name"]} onChange={this.handleChange.bind(this, "legal_entity_name")} placeholder="Name of Legal entity" />
                                <span className="errorMsgcompany">{this.state.errors.legal_entity_name}</span>
                            </div>
                            
                            <div className="field_company">
                            <div className="labelname">City:</div>
                                <input type="text" name="city" value={this.state.fields["city"]} onChange={this.handleChange.bind(this, "city")} placeholder="City" />
                                <span className="errorMsgcompany">{this.state.errors.city}</span>
                            </div>
                            
                            <div className="field_company">
                            <div className="labelname">PAN NO:</div>
                                <input type="text" name="pan_no" value={this.state.fields["pan_no"]} onChange={this.handleChange.bind(this, "pan_no")} placeholder="PAN NO" />
                                <span className="errorMsgcompany">{this.state.errors.pan_no}</span>
                            </div>
                           
                            <div className="field_company">
                            <div className="labelname">GST NO:</div>
                                <input type="text" name="gst_no" value={this.state.fields["gst_no"]} onChange={this.handleChange.bind(this, "gst_no")} placeholder="GST NO" />
                                <span className="errorMsgcompany">{this.state.errors.gst_no}</span>
                            </div>
                            
                            <div className="field_company">
                            <div className="labelname">CIN NO:</div>
                                <input type="text" name="cin_no" value={this.state.fields["cin_no"]} onChange={this.handleChange.bind(this, "cin_no")} placeholder="CIN NO" />
                                <span className="errorMsgcompany">{this.state.errors.cin_no}</span>
                            </div>
                           
                            <div className="field_company">
                            <div className="labelname">Email:</div>
                                <input type="text" name="email" value={this.state.fields["email"]} onChange={this.handleChange.bind(this, "email")} placeholder="Email Id" />
                                <span className="errorMsgcompany">{this.state.errors.email}</span>
                            </div>
                           
                            <div className="field_company">
                            <div className="labelname">Mobile No:</div>
                                <input type="text" name="mobile_no" value={this.state.fields["mobile_no"]} onChange={this.handleChange.bind(this, "mobile_no")} placeholder="Contact Number" />
                                <span className="errorMsgcompany">{this.state.errors.mobile_no}</span>
                            </div>
                            
                            <div className="clr"></div>
                                <div className="labelname">&nbsp;&nbsp;Address:</div>
                                <textarea name="address" value={this.state.fields["address"]} onChange={this.handleChange.bind(this, "address")} placeholder="Address"></textarea>
                                <span className="errorMsgcompany">{this.state.errors.address}</span>
                           
                            <div className="btncompany">
                            <input type="submit" onClick={this.AddCompanySendDetails.bind(this)} className="save" value="Save" />
                            <input type="submit" className="save_close" value="Save & Next" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
export default Add_company;