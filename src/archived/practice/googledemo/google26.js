import searchIcon from './search-icon.png';
import './App.css';

function App() {
  return (

    <div className="page">
      
      
      <ul className='menutop'>
        <li><a href="/">Gmail</a></li>
        <li><a href="/">Images</a></li>
        <li><a href="/" className="btn-blue">Sign In</a></li>
      </ul>



      <div className="container">

        <img
          src='https://www.google.co.in/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png' alt='google icon' ></img>
        <div className="searchBox">
          <div className="mainsearchinput">
            <img src={searchIcon} alt="lens" width="15"/>
            <input type="text" class="search" placeholder="search here"></input>
            <img src={searchIcon} alt="mic" width="15"/>
          </div>

          <div class="button"></div>
          <button>felling good</button>
          <button>google search</button>
          <ul className="web"></ul>
      



        </div>

      </div>
    </div>






  )
}

export default App;

