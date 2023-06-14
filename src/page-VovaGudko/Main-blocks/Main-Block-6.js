import React from "react";

function MainBlock6() {
    return(
        <div className="Main-Block-6">
            <h2>Пищевые отходы</h2>
            <div className="Main5-Arrow">
                <img src="./Arrow5.svg"></img>
            </div>
            <div className="Main-Block-Text-6">
                <p className="Main-Block-Text-Text-6">Не подлежат сортировке и не принимаются для переработки, хотя и представляют собой значительную часть повседневного мусора.</p>
                <div className="Rectangle-Black" >
                    <img src="./RectangleBlack.png"></img>
                    <p className="Rectangle-Black-Title">цвет бака</p>
                </div>
            </div>
            <div className="Main-Block-6-Bottom-Text">
                <p>Пищевые отходы нужно либо компостировать (эта роскошь доступна жителям загородных домов), либо измельчать с помощью специальных устройств-диспоузеров (устанавливаются под раковину и соединяются с общедомовой канализацией).</p>
            </div>
        </div>
    )
}

export default MainBlock6;