import header from "./header/header"
import "./animate.min.css"
import "./header/header.scss"
// Images
import Welcome from "./img/Screenshot at Feb 13 3-40-19 PM.png"

function colorH () {
    let div = document.createElement('div');
    div.innerHTML = "<strong>Всем привет!</strong> Вы прочитали важное сообщение.";
  
    document.body.append(div);
}

colorH();