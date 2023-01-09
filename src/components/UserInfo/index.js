// Write your JS code here

import './index.css'
import {Component} from 'react'

class UserInfo extends Component {
  render() {
    return (
      <div className="userInfo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/profile-img.png"
          className="profile-img"
          alt="profile"
        />
        <h1 className="user-name-heading">Wade Warren</h1>
        <p className="user-job-description">Software Developer at UK</p>
      </div>
    )
  }
}

export default UserInfo
