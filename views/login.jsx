import React from 'react';


class App extends React.Component {
  render() {
    return <>
			<link rel="stylesheet" href="/public/styles/login.css" />
      
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      
      <div className="App">
        <h1 className="title">Foodify</h1>

        <br/>

        <form method="POST" action="/api/login">
          <label htmlFor="username">Username or Email <required/></label><br/>
          <input type="text" name="username" required/>

          <br/><br/>

          <label htmlFor="username">Password<required/></label> <br/>
          <input type="password" name="password" required/>

          <br/><br/>

          <p className="m-3" >Don't have an account?<a href="/register"> Go register now!</a></p>
          
          <p id="error"></p>
          <input type="submit" value="Login" />
        </form>
      </div>

      <script src={`/public/scripts/login.js`}/>
    </>;
  }
}

export default App;