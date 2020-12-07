import "./style.css";
import "./js/blockchain.js";
import "./js/touchain-alpha.js";
import "./js/touchain-swiper.js";
import $ from "jquery";
window.jQuery = $;
require("@fancyapps/fancybox");
import "./about/index.js";

import store from "./assets/images/home/store.png"
import wallet from "./assets/images/home/wallet.png"
import email from "./assets/images/home/email.png"
import tid from "./assets/images/home/tid.png"
import dapp from "./assets/images/home/dapp.png"

function selectAppFunc(event, name) {
  let funcList = document.getElementsByClassName("func");
  for (let index = 0; index < funcList.length; index++) {
    if (funcList[index].style.color == 'rgb(41, 72, 255)') {
      funcList[index].style.color = 'black';
      funcList[index].classList.add('opacity-50');
      event.target.style.color = 'rgb(41, 72, 255)';
      event.target.classList.remove('opacity-50');
    }
  }
  switch (name) {
    case "store":
      document.getElementById("appFunc").src = store;
      break;
    case "wallet":
      document.getElementById("appFunc").src = wallet;
      break;
    case "email":
      document.getElementById("appFunc").src = email;
      break;
    case "tid":
      document.getElementById("appFunc").src = tid;
      break;
    case "dapp":
      document.getElementById("appFunc").src = dapp;
      break;
  }
}

window.selectAppFunc = selectAppFunc;

test.onclick = function(){
  document.body.scrollTop = document.documentElement.scrollTop = 0;
}