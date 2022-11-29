/* eslint-disable */
const redChange = document.querySelector('#red');
const greenChange = document.querySelector('#green');
const blueChange = document.querySelector('#blue');
const hexCode = document.querySelector('#hexColor');

function rgbToHex() {
    // 將十進位轉換成十六進位
    let redValue = Number(redChange.value).toString(16);
    let greenValue = Number(greenChange.value).toString(16);
    let blueValue = Number(blueChange.value).toString(16);
    // 在進位轉換時會有位數不同的問題，用 String.padStart(2, '0') 來補 0  ex:2>02
    return (hexCode.innerHTML = `#${redValue.padStart(2, '0')}${greenValue.padStart(2, '0')}${blueValue.padStart(
        2,
        '0'
    )}`);
}

// 背景顏色跟著改變
function switchBgColor() {
    return (document.body.style.backgroundColor = hexCode.innerText);
}

// 調整滑桿時數值也會跟著變動
function red(e) {
    let red = document.querySelector('#label-red');
    let color = e.target.value;
    red.innerHTML = color;
    rgbToHex();
    switchBgColor();
}
function green(e) {
    let green = document.querySelector('#label-green');
    let color = e.target.value;
    green.innerHTML = color;
    rgbToHex();
    switchBgColor();
}
function blue(e) {
    let blue = document.querySelector('#label-blue');
    let color = e.target.value;
    blue.innerHTML = color;
    rgbToHex();
    switchBgColor();
}

switchBgColor();

// 監聽滑鼠移動
redChange.addEventListener('mousemove', red);
greenChange.addEventListener('mousemove', green);
blueChange.addEventListener('mousemove', blue);
