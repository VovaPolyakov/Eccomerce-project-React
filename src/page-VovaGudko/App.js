import Contacts from "./Contacts/Contacts";
import Nav from "./Navigation/Navigation";
import Foot from "./Footer/Footer";
import './App.scss';
import MainBlock1 from "./Main-blocks/Main-Block-1";
import MainBlock2 from "./Main-blocks/Main-Block-2";
import MainBlock3 from "./Main-blocks/Main-Block-3";
import MainBlock4 from "./Main-blocks/Main-Block-4";
import MainBlock5 from "./Main-blocks/Main-Block-5";
import MainBlock6 from "./Main-blocks/Main-Block-6";

function App() {
  return (
    <div className="App">
      <div className="Info">
        <Contacts />
        <Nav />
      </div>
      <div className="MainBlock1">
        <MainBlock1 />
        <MainBlock2 />
        <MainBlock3 />
        <MainBlock4 />
        <MainBlock5 />
        <MainBlock6 />
      </div>
      <div>
        <div>
          <Foot/>
        </div>
      </div>
    </div>
  );
}

export default App;
