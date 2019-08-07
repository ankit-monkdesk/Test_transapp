import React, { Component } from 'react';
import { Route,HashRouter as Router,Link,NavLink} from 'react-router-dom';


import styled from 'styled-components';
import true_trans from '../Dashboard/true_trans.png';
import Add_company from './Add_company/Add_company';
import Profile from './Profile/Profile';



const Dropbtn = styled.button`
    font-size: 16px;  
    border: none;
    outline: none;
    color: black;
    padding: 14px 16px;
    background-color: #ffffff;
    font-family: inherit;
    margin: 0;
    &:hover{
      background-color: #ddd;
     
      border-bottom: 3px solid #ff5722;
    }
`;

const Header = styled.div`
  width: 100%;
  position: fixed;
  overflow: hidden;
  background-color: #ffffff;
  padding: 15px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  top:0;
  z-index: 1;
  & a{
    float: right;
    font-size: 16px;
    color: black;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    border-bottom: 3px solid transparent;
    
  }
  & a:hover{
    background-color: #ddd;
    display:block;
    text-decoration: none;
    border-bottom: 3px solid #ff5722;
  
  }
  // &:hover ${Dropbtn} {
  //   background-color: #ddd;
  // }


`;
const DropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;

  & a{
    float: none;
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    text-align: left;
    cursor:pointer;
  }
`;

const Dropdown = styled.div`
    float: right;
    overflow: hidden;
    &:hover ${DropdownContent} {
      display: block;
      position:fixed;
      text-decoration: none;
    
    & a:hover{
      background-color: #ddd;
    }

`;

const Content = styled.div`
box-shadow: 0px 0px 5px 6px rgba(0,0,0,0.06);
padding: 10px;
display: block;
display: table;
vertical-align: middle;
width: 100%;
height: 100vh;
`;

const SubContent = styled.div`
    vertical-align: middle;
    display: table-cell;
    height: 100%;
    width: 100%;
`;

const HomepageTittle = styled.div`
    text-align: center;
    color: cornflowerblue;
`;
const CompanyButton = styled.button`
&a{
  text-decoration: none;
}
`;
const Addcompany = styled.div`
text-align: center;
`;

class Dashboard extends Component {

  constructor(props) {
  
    super(props);
    this.state = {
        company_id:'',
        user_type:''
    }

    this.logout=this.logout.bind(this);
  }
  logout(){
    sessionStorage.removeItem('formData');
    localStorage.removeItem('formData');
    this.props.history.push("/");
  }

 
    
  render() {
   
    return (
     
      <div className="main_dashboard">
      
     
         <Router >
           <div>
           <Header>
           <img src={true_trans} alt="true_trans" />
                <Dropdown>
                  <Dropbtn >Profile 
                    &nbsp;  <i className="fa fa-caret-down"></i>
                  </Dropbtn>
                  <DropdownContent>
                    <Link className="selected" to="/profile">Profile</Link>
                    <a onClick={this.logout}>Logout</a>
                    
                  </DropdownContent>
                </Dropdown> 
                <NavLink  exact className="selected"  activeStyle={{
                    fontWeight: "bold",
                    color: "red"
                  }} to="/home_page" >Home</NavLink >
               
            </Header>

            <Content>
         
              <SubContent>
               
                <Route exactly path="/home_page" component={HomePage}/> 
                <Route path="/add_company" component={Add_company}/>
                <Route path="/profile" component={Profile}/>
              </SubContent>
               
            </Content>


           </div> 
         </Router>
        </div>  
        

     
    );
  }
 
}

class AddCompany extends Component{
  constructor(props){
    super(props);
  }

  Add_company(){
    
      this.props.history.push('/hello');
  
  }


  render(){
 
    
    return(
      <Addcompany>
        
           <Link to='/add_company'><CompanyButton className="btn btn-success" >+ Add Company</CompanyButton></Link>
        
      </Addcompany>
    );
  }
}


class HomePage extends Component{
  render(){
    const sessionData = localStorage.getItem('formData');
    
    const AllFormData = JSON.parse(sessionData);
    
    const Company_id = AllFormData.data.data.tpsData.company_id;
      
    const User_type = AllFormData.data.data.tpsData.user_type;
   
    return(
      <div>
        <HomepageTittle>
          <h1>Welcome to TrueTrans</h1>
        </HomepageTittle>

        {Company_id === "" && User_type === "Admin" ?
        <AddCompany/>:""}
      </div>
     
    );
    
  }
}
 
export default Dashboard;
  