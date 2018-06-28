import React from 'react';

import profile from "../../_assets/images/profile-new.jpg";

class Profile extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="image-page">
        <img src={profile} alt="profile page" />
      </div>
    )
  }
}

export default Profile;