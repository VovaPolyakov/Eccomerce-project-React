import React from "react";

function MainBlock3() {
    return(
        <div className="Main-Block-3">
            <h2>Макулатура</h2>
            <div className="Main3-Arrow">
                <img src="./Arrow2.svg"></img>
            </div>
            <div className="Main-Block-Text-3">
                <p className="Main-Block-Text-Text-3">Это <span>все</span> виды бумаги и картона, пригодные для переработки и дальнейшего использования.</p>
                <div className="Rectangle-Green" >
                    <img src="./RectangleGreen.png"></img>
                    <p className="Rectangle-Green-Title">цвет бака</p>
                </div>
            </div>
            <h1 className="Main-Title-2-4">Как подготовить такой мусор?</h1>
                <dib className= "Main-Text-2-4">
                    <p><span>Сложить</span> максимально компактно, тетрапаки <span>ополоснуть</span>, крышечки <span>снять</span>.</p>
                </dib>  
        </div>
    )
}

export default MainBlock3;