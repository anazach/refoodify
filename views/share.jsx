import React from 'react';


class App extends React.Component {
  render() {
    return <>
			<link rel="stylesheet" href="/public/styles/share.css" />
      			<link rel="stylesheet" href="/public/styles/bootstrap.css" />
       <link rel="icon" href="/public/images/food.svg"/>

      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      
      <div className="App">
        <h3 className="pt-5 pb-5 text-center">What would you like to share?</h3>

        <div className="mb-3 col-8 mx-auto  text-center">
          <div className="row">
            <input type="text" class="form-control " id="exampleFormControlInput1" placeholder="Item name"/>
          </div>
        </div>

        <div className="mb-3 col-8 mx-auto  text-center">
          <div className="row">
            <input type="text" class="form-control " id="exampleFormControlInput1" placeholder="Description"/>
          </div>
        </div>

        <div className="mb-3 col-8 mx-auto  text-center">
          <div className="row">
            <input type="text" class="form-control " id="exampleFormControlInput1" placeholder="Location"/>
          </div>
        </div>

        <div className="container">
          <h5 className="text-center py-5">Category</h5>
          <div className="row text-center">
            <div className="col-3">
              <a href="#"><img src="/public/images/icon1.svg" alt="icon1" /></a>
            </div>
            <div className="col-3">
              <a href="#"><img src="/public/images/icon2.svg" alt="icon1" /></a>
            </div>
            <div className="col-3">
              <a href="#"><img src="/public/images/icon3.svg" alt="icon1" /></a>
            </div>
            <div className="col-3">
              <a href="#"><img src="/public/images/icon4.svg" alt="icon1" /></a>
            </div>
            <div className="col-3">
              <a href="#"><img src="/public/images/icon5.svg" alt="icon1" /></a>
            </div>
            <div className="col-3">
              <a href="#"><img src="/public/images/icon2.svg" alt="icon1" /></a>
            </div>
            <div className="col-3">
              <a href="#"><img src="/public/images/icon3.svg" alt="icon1" /></a>
            </div>
            <div className="col-3">
              <a href="#"><img src="/public/images/icon4.svg" alt="icon1" /></a>
            </div>
          </div>
        </div >

        <div className="py-5 my-5 d-grid gap-2 col-8 mx-auto">
          <button type="button" class="rounded-pill btn btn-purple">Share</button>
        </div>

    <nav class="navbar fixed-bottom bg-light">
      <div class="container">
  
        <ul class="nav">
          <li class="nav-item">
            <a class="nav-link text-center" aria-current="page" href="#">Profile</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-center" href="#">Share</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Recieve</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-center" href="#" >Rewards</a>
          </li>
        </ul>

      </div>
    </nav>
      </div>
      <script src={`/public/scripts/bootstrap.js`}/>
    </>;
  }
}

export default App;