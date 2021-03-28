import React from 'react';


class App extends React.Component {
  render() {
    return <>
			<link rel="stylesheet" href="/public/styles/login.css" />
       <link rel="icon" href="/public/images/food.svg"/>
       
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

      <div className="App">
        <h1>Foodify Register</h1>

        <br/>

        <form method="POST" action="/api/register">
          <label htmlFor="email">Email</label> <required/><br/>
          <input type="email" name="email" required/>

          <br/><br/>

          <label htmlFor="username">Username</label> <required/><br/>
          <input type="text" name="username" required/>

          <br/><br/>
          
          <label htmlFor="full_name">Full Name</label><br/>
          <input type="text" name="full_name"/>

          <br/><br/>

          <label htmlFor="password">Password</label> <required/><br/>
          <input type="password" name="password" required/>

          <br/><br/>

          <a href="/login">Already have an account? Login!</a><br/><br/>
          
          <input type="submit" value="Register" />
        </form>
      </div>
    </>;
  }
}

export default App;