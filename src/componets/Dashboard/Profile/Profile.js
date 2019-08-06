import React, { Component } from 'react';

class Profile extends Component {
    render()
    {
        return(
            <div className="Edit Profile">
                <div id="sc-edprofile">
                    <h1>Edit Profile Form</h1>
                    <div className="sc-container">
                        <img src="http://pluspng.com/img-png/user-png-icon-male-user-icon-512.png" className="w3-round" alt="Norway" />
                        <input type="text" placeholder="Name" />
                        <input type="text" placeholder="Email Address" />
                        <input type="submit" value="Update Profile" />
                    </div>
                </div>
            </div>
        );
    }
}

export default Profile;
