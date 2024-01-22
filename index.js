
function NavBar() {
    return (
  <div>
    <nav>
     <img src="./images/react-icon-small.png"/> 
     <h3>ReactFacts</h3>
     <h4>React Course - Project 1</h4>

    </nav>
    </div>
  
 )  
}

function Main() {
    return (
  
        <main>
          <h1 className="main--title">Fun facts about React</h1>
            <ul className="main--facts">
              <li>Was first released in 2013</li>
              <li>Was originally created by Jordan Walke</li>
              <li>Has well overlook stars on Github</li>
              <li>Is maintained by Facebook</li>
              <li>Powers thousands of enterprise apps, including mobile apps</li>        
          </ul>
        <footer>A React Project (static webpage) by Kanyi.John- FreeCodeCamp</footer>
    </main>
      
    )
  }


ReactDOM.render(
    <div>
       <NavBar />
       <Main/>
    </div>,
document.getElementById("root"))