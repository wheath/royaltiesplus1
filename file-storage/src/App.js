import React, { Component } from 'react'
import { Link } from 'react-router'
import { getWeb3 } from './reducers/web3/getWeb3'
import { getFiles } from './components/fileStorage/FileStorageActions'

// Images
import skale_logo from './assets/Skale_Logo_White.png'
import bg from './assets/demo-background.png'
import big_red_btn_up from './assets/big-red-btn-up.png'
import big_red_btn_dn from './assets/big-red-btn-dn.png'

// Styles
import './App.scss'

// Initialize web3 and set in Redux.
getWeb3
.then(results => {
  getFiles();
  console.log('Web3 initialized!')
})
.catch(() => {
  console.log('Error in web3 initialization.')
})

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container-fluid">
        <div className="header">
          <nav className="navbar">
            <Link to="/" className="navbar-brand">
	    Royalties +1
            </Link>
            <Link to="/" className="nav-link-right">
	    About Contact | Login
            </Link>
          </nav>
        </div>
          <br/>
          <br/>
          <div id="upload-img">
          {this.props.children}
          </div>
          <div id="accept-offer" className="container">
	    <span className="offer">Offer: </span><span className="money">$100,000</span>
	    <br/>
	    <button className="button">
	      <img className="button__image button__image--active"
		   src={big_red_btn_up}
		   alt="OFF"/>
	      <img className="button__image button__image--inactive"
		   src={big_red_btn_dn}
		   alt="ON"/>
	    </button>
          </div>
          <br/>
          <br/>
          <div id="debt-offer" className="container">
          <span className="offer">Make Offers</span>
          <table>
	    <tr>
	      <th>
	        Artist Name  
	      </th>
	      <th>
	        Royalties Owed
	      </th>
	      <th>
	        Bid Amount
	      </th>
	      <td></td>
	    </tr>
	    <tr>
	      <td>
	        Whitney Houston
	      </td>
	      <td>
	        $1,000,000
	      </td>
	      <td>
	        <input type="text" name="offer1"/>
	      </td>
	      <td>
	        <input type="submit" name="Make Offer"/>
	      </td>
	    </tr>
          </table>
	     
          </div>
        </div>
      </div>
    );
  }
}

export default App
