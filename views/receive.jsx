import React from 'react';


class Receive extends React.Component {
  render() {
    return <>
			<link rel="stylesheet" href="/public/styles/receive.css" />
      			<link rel="stylesheet" href="/public/styles/bootstrap.css" />
       <link rel="icon" href="/public/images/food.svg"/>

      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      
      <div className="App">
        <h3 className="pt-5 pb-5 text-center">Available near me</h3>

        <div className="mb-3 col-8 mx-auto ">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Pizza slice</h5>
              Pizza hut, Expiration Date
            </div>
          </div>
        </div>

        <div className="mb-3 col-8 mx-auto">
          <div className="card">
            <div className="card-body">
            <h5 className="card-title">Soft drink </h5>
              Location, Expiration Date
              <img className="d-block rounded float-right" src="/public/images/check.svg" alt="check" />
            </div>
          </div>
        </div>

        <div className="mb-3 col-8 mx-auto">
          <div className="card">
            <div class="card-body">
              <h5 className="card-title">Item</h5>
              Location, Expiration Date
            </div>
          </div>
        </div>

        <div className="mb-3 col-8 mx-auto">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Item</h5>
              Location, Expiration Date
            </div>
          </div>
        </div>

        <div className="py-5 mb-5 d-grid gap-2 col-8 mx-auto">
          <button type="button" class="rounded-pill btn btn-purple">Share</button>
        </div>


// bottom navbar
    <nav className="navbar fixed-bottom bg-light">
      <div className="container">
  
        <ul className="nav">
          <li className="nav-item">
            <a className="nav-link text-center" aria-current="page" href="#">Profile</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-center" href="#">Share</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Recieve</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-center" href="#" >Rewards</a>
          </li>
        </ul>

      </div>
    </nav>
      </div>
      <script src={`/public/scripts/bootstrap.js`}/>
    </>;
  }
}

export default Receive;