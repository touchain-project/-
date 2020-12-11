import "./style.css";
import "./js/blockchain.js";
import "./js/touchain-alpha.js";
import "./js/touchain-swiper.js";
import $ from "jquery";
window.jQuery = $;
require("@fancyapps/fancybox");
import "./about/index.js";
import 'bootstrap';

function selectAppFunc(event, name) {
  let funcList = document.getElementsByClassName("func");
  for (let index = 0; index < funcList.length; index++) {
    if (funcList[index].style.color == 'rgb(41, 72, 255)') {
      funcList[index].style.color = 'black';
      funcList[index].classList.remove('selected');
      funcList[index].classList.add('opacity-50');
      event.target.style.color = 'rgb(41, 72, 255)';
      event.target.classList.remove('opacity-50');
      event.target.classList.add('selected');
    }
  }
  document.getElementById("appFunc").src = './assets/images/home/' + name + '.png';
}

window.selectAppFunc = selectAppFunc;

test.onclick = function(){
  document.body.scrollTop = document.documentElement.scrollTop = 0;
}

document.querySelectorAll('.footer').forEach(
  element => {
    element.addEventListener("mouseover", function (event) {
      event.target.src = event.target.src.replace(".png", "-hover.png")
    })
  }
)

document.querySelectorAll('.footer').forEach(
  element => {
    element.addEventListener("mouseout", function (event) {
      event.target.src = event.target.src.replace("-hover.png", ".png")
    })
  }
)

document.querySelector('.wechat.footer').addEventListener('mouseover', function (event) {
  document.querySelector('div.wechat-qrcode').classList.remove('hidden');
})

document.querySelector('.wechat.footer').addEventListener('mouseout', function (event) {
  document.querySelector('div.wechat-qrcode').classList.add('hidden');
})

document.querySelector('#bt-more').addEventListener('click', function (event) {
  document.querySelector('.device-specifications').classList.remove('absolute');
  document.querySelector('.device-specifications').classList.remove('hidden');
  document.querySelector('#bt-more').classList.add('hidden');
  initKeyShotXR();
})

document.querySelector('#bt-close').addEventListener('click', function (event) {
  document.querySelector('.device-specifications').classList.add('absolute');
  document.querySelector('.device-specifications').classList.add('hidden');
  document.querySelector('#bt-more').classList.remove('hidden');
})