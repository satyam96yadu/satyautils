import './App.css';
import appleLogoBlack from './images/logo-black.png';
function App() {
  return (<div className="base">

    <div className="left-panel">
        <p>CodesGestures</p>


        <p className="title"><b>Apple</b> <span>Logo</span> <span>History</span> <span>and</span> <b>Evolution</b> <span>Over</span> <span>Years</span></p>

        <b>CODEGESTURE</b>
        <a href="#">www.codegestures.com</a>
    </div>

    <div className="main-panel">
        <div className="block">
          <h1>Apple</h1>
          <p>40 Years of Evolution</p>
        </div>
        <div className="block">
          <img src={appleLogoBlack} alt="Logo Black"/>
          <p>1976</p>
        </div>
        <div className="block">
          <img src={appleLogoBlack} alt="Logo Black"/>
          <p>1976</p>
        </div>
        <div className="block">
          <img src={appleLogoBlack} alt="Logo Black"/>
          <p>1976</p>
        </div>
        <div className="block">
          <img src={appleLogoBlack} alt="Logo Black"/>
          <p>1976</p>
        </div>
        <div className="block">
          <img src={appleLogoBlack} alt="Logo Black"/>
          <p>1976</p>
        </div>
        <div className="block">
          <img src={appleLogoBlack} alt="Logo Black"/>
          <p>1976</p>
        </div>
        <div className="block">
          <img src={appleLogoBlack} alt="Logo Black"/>
          <p>1976</p>
        </div>
        
        
    </div>

</div>)
}

export default App;

