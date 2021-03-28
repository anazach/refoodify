// import React from 'react';

// class Feed extends React.Component {
//   render() {
//     return <>
// 			<link rel="stylesheet" href="/public/styles/bootstrap.css" />
//       <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

//       <div classNameName="App">
      

// <div class="card mb-3">
//   <div class="row g-0">
//     <div class="col-4">
//       <img src="/public/images/cooked-rice-red-cup-placed-plywood-floor.jpg" alt="food" class="card-img-top" />  
//     </div>
//     <div class="col-8">
//       <div class="card-body">
//     <h5 className="card-title mb-0">Burger</h5>
//     <p className="card-text">Zinger.....    <a href="#" className="pt-1 btn btn-primary">See more</a>
// </p>
//       </div>
//     </div>
//   </div>
// </div>

// <div class="card mb-3">
//   <div class="row g-0">
//     <div class="col-4">
//       <img src="/public/images/cooked-rice-red-cup-placed-plywood-floor.jpg" alt="food" class="card-img-top" />  
//     </div>
//     <div class="col-8">
//       <div class="card-body">
//     <h5 className="card-title mb-0">Burger</h5>
//     <p className="card-text">Zinger.....    <a href="#" className="pt-1 btn btn-primary">See more</a>
// </p>
//       </div>
//     </div>
//   </div>
// </div>

// <div class="card mb-3">
//   <div class="row g-0">
//     <div class="col-4">
//       <img src="/public/images/cooked-rice-red-cup-placed-plywood-floor.jpg" alt="food" class="card-img-top" />  
//     </div>
//     <div class="col-8">
//       <div class="card-body">
//     <h5 className="card-title mb-0">Burger</h5>
//     <p className="card-text">Zinger.....    <a href="#" className="pt-1 btn btn-primary">See more</a>
// </p>
//       </div>
//     </div>
//   </div>
// </div>


        
//       </div>
//     </>;
//   }
// }

// export default Feed;

// import React from 'react';


// class Feed extends React.Component {
//   render() {
//     return <>
// 			<link rel="stylesheet" href="/public/styles/share.css" />
//       			<link rel="stylesheet" href="/public/styles/bootstrap.css" />

//       <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      
//       <div className="App">
//         <h3 className="pt-5 pb-5 text-center">What would you like to share?</h3>

//         <div className="mb-3 col-8 mx-auto  text-center">
//           <div className="row">
//             <input type="text" class="form-control " id="exampleFormControlInput1" placeholder="Item name"/>
//           </div>
//         </div>

//         <div className="mb-3 col-8 mx-auto  text-center">
//           <div className="row">
//             <input type="text" class="form-control " id="exampleFormControlInput1" placeholder="Description"/>
//           </div>
//         </div>

//         <div className="mb-3 col-8 mx-auto  text-center">
//           <div className="row">
//             <input type="text" class="form-control " id="exampleFormControlInput1" placeholder="Location"/>
//           </div>
//         </div>

//         <div className="container">
//           <h5 className="text-center py-5">Category</h5>
//           <div className="row text-center">
//             <div className="col-3">
//               <a href="#"><img src="/public/images/icon1.svg" alt="icon1" /></a>
//             </div>
//             <div className="col-3">
//               <a href="#"><img src="/public/images/icon2.svg" alt="icon1" /></a>
//             </div>
//             <div className="col-3">
//               <a href="#"><img src="/public/images/icon3.svg" alt="icon1" /></a>
//             </div>
//             <div className="col-3">
//               <a href="#"><img src="/public/images/icon4.svg" alt="icon1" /></a>
//             </div>
//             <div className="col-3">
//               <a href="#"><img src="/public/images/icon5.svg" alt="icon1" /></a>
//             </div>
//             <div className="col-3">
//               <a href="#"><img src="/public/images/icon2.svg" alt="icon1" /></a>
//             </div>
//             <div className="col-3">
//               <a href="#"><img src="/public/images/icon3.svg" alt="icon1" /></a>
//             </div>
//             <div className="col-3">
//               <a href="#"><img src="/public/images/icon4.svg" alt="icon1" /></a>
//             </div>
//           </div>
//         </div >

//         <div className="py-5 my-5 d-grid gap-2 col-8 mx-auto">
//           <button type="button" class="rounded-pill btn btn-purple">Share</button>
//         </div>

//     <nav class="navbar fixed-bottom bg-light">
//       <div class="container">
  
//         <ul class="nav">
//           <li class="nav-item">
//             <a class="nav-link text-center" aria-current="page" href="#">Profile</a>
//           </li>
//           <li class="nav-item">
//             <a class="nav-link text-center" href="#">Share</a>
//           </li>
//           <li class="nav-item">
//             <a class="nav-link" href="#">Recieve</a>
//           </li>
//           <li class="nav-item">
//             <a class="nav-link text-center" href="#" >Rewards</a>
//           </li>
//         </ul>

//       </div>
//     </nav>
//       </div>
//       <script src={`/public/scripts/bootstrap.js`}/>
//     </>;
//   }
// }

// export default Feed;

import React from 'react';


class Receive extends React.Component {
  render() {
    return <>
			<link rel="stylesheet" href="/public/styles/receive.css" />
       <link rel="icon" href="/public/images/food.svg"/>
      			<link rel="stylesheet" href="/public/styles/bootstrap.css" />

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
              <img className=" rounded float-right" src="/public/images/check.svg" alt="check" />
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