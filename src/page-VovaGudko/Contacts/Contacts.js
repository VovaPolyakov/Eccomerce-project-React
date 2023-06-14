import React from "react";

function Contacts() {
    return (
      <div className="Contacts">
        <div className="Logo">
            <img src="./logo.svg" alt="Logo"></img>
        </div>
        <div className="Contact-Main">
            <ul className="Contact-List-1">
                <li className="Contact-List-1-li"><a href="">О нас</a></li>
                <li className="Contact-List-1-li"><a href="">Концепция</a></li>
                <li className="Contact-List-1-li"><a href="">Сортировка</a></li>
                <li className="Contact-List-1-li"><a href="">Карта</a></li>
                <li className="Contact-List-1-li"><a href="">Зачем</a></li>
                <li className="Contact-List-1-li"><a href="">Услуги</a></li>
                <li className="Contact-List-1-li"><a href="">Контакты</a></li>
                <li className="Contact-List-1-li"><a href="">Магазин</a></li>
            </ul>
            <ui className="Contact-List-2">
                <li><a href="">Пластик</a></li>
                <li><a href="">Макулатура</a></li>
                <li><a href="">Стекло</a></li>
                <li><a href="">Металл</a></li>
                <li><a href="">Пищевые отходы</a></li>
            </ui>
        </div>
        <button className="Contact-Button">Войти</button>    
      </div>
    );
  }
  
  export default Contacts;
  