import React, { Component } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

class Basic_Configuration_3 extends Component{

    constructor() {
        super();
        
        this.state = {
           
            email: "email_yes",
            sms:"sms_yes",
           
           
        };
      }

  render(){
      return(
        <div className="basic_configuration">
          
    
        <div id="sc-add-company">
        <h1>Basic Configuration 3 </h1>
            <div className="sc-container">
                <form encType="multipart/form-data" className="add_company_form">
  
             
                    <div className="radio_configration">
                    <i className="fa fa-envelope" aria-hidden="true"></i>
                        <label>Email :</label>
                        <input type="radio" name="email" value="email_yes"
                          checked={this.state.email === 'email_yes'} onChange={(e) => this.setState({ email:e.target.value })} /> Yes 
                        <input type="radio" name="email" value="email_no"
                         checked={this.state.email === 'email_no'} onChange={(e) => this.setState({ email:e.target.value })}   />  No
                            <div>
                               { this.state.email === "email_yes" ? <Emails /> : ""}
                            </div>
                        
                    </div>
            
                    <div className="radio_configration">
                    <i className="fa fa-comment" aria-hidden="true"></i>
                        <label>SMS :</label>
                            <input type="radio" name="sms" value="sms_yes"
                            checked={this.state.sms === 'sms_yes'} onChange={(e) => this.setState({ sms: e.target.value })} /> Yes 
                            <input type="radio" name="sms" value="sms_no"
                           checked={this.state.sms === 'sms_no'}  onChange={(e) => this.setState({ sms: e.target.value })}   />  No
                           <div>
                               {this.state.sms === "sms_yes" ?<Sms /> : ""}
                           </div>
                    </div>
  
                   
                </form>

                <div className="btncompany">
                  <input type="submit"  className="save" value="Save" />
                  <input type="submit" className="save_close" value="Save & Next" />
                 
                </div>

            </div>
        </div>
    </div>
          
      );
  }
    
    
}

class Emails extends Component{
    

   

   
    render(){
      
   

        return(
            <div>
                <form encType="multipart/form-data" className="email_form" >
               
                <Editor
                    //editorState={editorState}
                    toolbarClassName="toolbarClassName"
                    wrapperClassName="wrapperClassName"
                    editorClassName="editorClassName"
                    onEditorStateChange={this.onEditorStateChange}
                    >
                      
                    </Editor>
               
                </form>
            </div>
        );
    }
}

class Sms extends Component{
    render(){
        return(
            <div>
                <textarea  placeholder="Type SMS...."/>
            </div>
        );
    }
}

export default Basic_Configuration_3;


 
