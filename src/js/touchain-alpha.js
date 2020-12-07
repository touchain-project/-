import "./keyshotxr.js";
function initKeyShotXR(color) {
  if (typeof(color) !== 'string') {
    color = 'black'
  }
  var nameOfDiv = "KeyShotXR";
  var folderName = "assets/images/home/" + color;
  var viewPortWidth = 402;
  var viewPortHeight = 564;
  var backgroundColor = "#FFFFFF";
  var uCount = 18;
  var vCount = 1;
  var uWrap = true;
  var vWrap = false;
  var uMouseSensitivity = -0.05;
  var vMouseSensitivity = 1;
  var uStartIndex = 9;
  var vStartIndex = 0;
  var minZoom = 1;
  var maxZoom = 1;
  var rotationDamping = 0.96;
  var downScaleToBrowser = true;
  var addDownScaleGUIButton = false;
  var downloadOnInteraction = false;
  var imageExtension = "png";
  var showLoading = true;
  var loadingIcon = "";
  var allowFullscreen = true;
  var uReverse = false;
  var vReverse = false;
  var hotspots = {};
  var isIBooksWidget = false;

  new keyshotXR(
    nameOfDiv,
    folderName,
    viewPortWidth,
    viewPortHeight,
    backgroundColor,
    uCount,
    vCount,
    uWrap,
    vWrap,
    uMouseSensitivity,
    vMouseSensitivity,
    uStartIndex,
    vStartIndex,
    minZoom,
    maxZoom,
    rotationDamping,
    downScaleToBrowser,
    addDownScaleGUIButton,
    downloadOnInteraction,
    imageExtension,
    showLoading,
    loadingIcon,
    allowFullscreen,
    uReverse,
    vReverse,
    hotspots,
    isIBooksWidget
  );
}

window.onload = initKeyShotXR;

window.initKeyShotXR = initKeyShotXR;