import React from "react";

function Nav() {
    return (
      <div className="Nav">
        <div className="Searchbar">
          <img src="./Search.svg" alt="Search"></img>
          <p className="Searchbar-Text">Поиск</p>
        </div>

        <logo className = 'small-logo'>BY</logo>
      </div>
    );
  }
  
  export default Nav;
  