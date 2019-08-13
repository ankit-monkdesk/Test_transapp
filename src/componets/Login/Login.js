import React from 'react';
import { Link } from 'react-router-dom';
import '../Login/Login.css';
import axios from 'axios';
import FlashMessage from 'react-flash-message'




class Login extends React.Component{
  constructor(props){   
    super(props);

    this.state = {
         fields: {},
         errors: {},
         email:'',
         password:'',
         msgdata:'',
         msgcode:'',
         redirectToReferrer: false
    };
    this.login = this.login.bind(this);
    this.onChange = this.onChange.bind(this);
 }

 

 login(e){
  
   e.preventDefault();
   if(this.handleValidation()){
      //alert("Form submitted");
      if(this.state.email && this.state.password){
        let init = {
           method: 'POST',
           headers: { 'content-type': 'multipart/form-data' },
           mode: 'cors',
           cache: 'default',
           dataType: 'json',
           type:     'POST',
           async:    true,
         };
  
         const email= this.state.email
         const password= this.state.password
         
         
         let formData = new FormData();
  
         formData.append('loginid', email);
         formData.append('pass', password);
       
         axios.post('https://idea.truebook.in/tps_api/index.php?view=login', formData,init)
         .then(response => {
           console.log(response.data);
           sessionStorage.setItem('formData',JSON.stringify(response));
           localStorage.setItem('formData',JSON.stringify(response));
          //  const company_id = response.data.data.tpsData.company_id;
            // alert( response.data.data.tpsData.email);
            this.setState({
              msgcode:response.data.msgcode
            });

           if(response.data.msgcode === 0){
            // alert(response.data.msgcode);
            this.props.history.push("/dashboard");
           }else{
              // alert("Invalid username or Password");
          }
           
         })

         .catch(err => {
           console.log(err);
           this.setState({
             loading:false,
           })
         })
        
        
        }

   }
  
   else{ 
     // alert("Form has errors.")
   }

   
      
 }
 
     
 handleValidation(){
  let fields = this.state.fields;
  let errors = {};
  let formIsValid = true;

  //Name
  
   if(!fields["password"]){
      formIsValid = false;
      errors["password"] = "*Password is required";
   }


  //Email
  if(!fields["email"]){
     formIsValid = false; 
     errors["email"] = "*Email is required";
  }
  if(typeof fields["email"] !== "undefined"){
    let lastAtPos = fields["email"].lastIndexOf('@');
    let lastDotPos = fields["email"].lastIndexOf('.');

    if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') === -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2) && (!fields["email"].match(/^[0-9]+$/))) {
       formIsValid = false;
       errors["email"] = "*Email is not valid";
     }
} 

  
  

 this.setState({errors: errors});
 return formIsValid;
}


contactSubmit(e){
  e.preventDefault();
  if(this.handleValidation()){
     alert("Form submitted");
  }else{ 
     alert("Form has errors.")
  }

}

onChange(field, e){         
  let fields = this.state.fields;
  fields[field] = e.target.value;        
  this.setState({fields});
  this.setState({[e.target.name]:e.target.value});
}



     
    render() {

        const loginerror =  <FlashMessage duration={4000} persistOnHover={true}>
        <span className="errorlogin"><strong>Opps!</strong> Invalid Username or Password..!!</span>
          </FlashMessage>;
            
        const login_success =  <FlashMessage duration={5000}>
        <span className="sendmsg">sussessfully login</span>
          </FlashMessage>; 

       const Loader =  <div className="spinner-border text-primary" role="status">
                      <span className="sr-only">Loading...</span>
                      </div>

        const Login =  <button 
                            onClick={this.login} type="button" className="buttonui1 "> 
                            <span> Login </span>
                          
                            <div className="ripples buttonRipples"><span className="ripplesCircle"></span></div>
                      </button>  
              
            return (
            <div className="login_main">  
           
              <div className="login">
                    <div className="flsmsg">
                  
                       {this.state.msgcode === 1 ? loginerror :''} 
                       {this.state.msgcode === 0 ?login_success : '' }     
                   </div>
                   <div className="loginForm"> 
                        <hgroup>
                        <div className="text-center">
                        <span className="icon novi-icon icon-circle icon-bordered icon-lg icon-default fa fa-user"></span>
                        <div>
                            <div className="offset-top-24 text-darker big font-weight-bold">Login to your account</div>
                            <p className="text-extra-small text-dark offset-top-4">Enter your credentials below</p>
                        </div>
                    </div>
                        </hgroup>
                        <form name="login">
                        <div className="group">
                    <input ref="email" type="text" name="email" className="temail" placeholder="Enter Email or Phone No" 
                    value={this.state.fields["email"]} onChange={this.onChange.bind(this, "email")}  />
                     <span style={{color: "red"}}>{this.state.errors["email"]}</span>
             
                        </div>


                        <div className="group">
                            <input ref="password" type="password" name="password" className="tpass" placeholder="Enter Password"
               value={this.state.fields["password"]} onChange={this.onChange.bind(this, "password")} /><span className="highlight"></span><span className="bar"></span>
                          <span style={{color: "red"}}>{this.state.errors["password"]}</span>
                          
                        </div>
                        {this.state.msgcode === 0 ? Loader:Login}
                         {/* <button 
                            onClick={this.login} type="button" className="buttonui1 "> 
                            <span> Login </span>
                           
                            <div className="ripples buttonRipples"><span className="ripplesCircle"></span></div>
                         </button>     */}
                       
               
                        </form>
                        <div className="powered">
                        Create New ? <Link to="/register" > Register</Link>
                        </div>
                    </div>
              </div>
            </div>
            );
          }
}


 
export default Login;