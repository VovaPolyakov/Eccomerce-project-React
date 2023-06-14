import React from "react";

function MainBlock1() {
    return (
        <div>
            <div className="Main-Block-1">
                <div className="Main-Title-1">
                    <h2>Пластик</h2>
                    <div className="Main-Arrow-1">
                        <img src="./Arrow.svg" alt="Arrow" ></img>
                    </div>
                </div>
                <div className="Main-Text-1">
                    <p className="Main-Text-Text-1">
                        Это самая объемная и пугающая новичков категория. Виды пластика звучат как таблица Менделеева, нюансы сбора пугают, польза кажется сомнительной... Рассказываем максимально доступно.
                    </p>
                    <div>
                        <img className="Rectangle-Yellow" src="./Rectangle.png"></img>
                        <p className="Rectangle-Yellow-Color">цвет бака</p>
                    </div>
                </div>
            </div>
        </div>

        
    );
  }
  
export default MainBlock1;