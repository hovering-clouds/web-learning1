let myImage = document.querySelector('img');

myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/luster-dawn.png'){
        myImage.setAttribute('src','images/luster-dawn2.png');
        alert("luster-dawn:嘿~嘿~不要这样啦~")
    }
    else{
        myImage.setAttribute('src','images/luster-dawn.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('.welcome');

function setUserName() {
    let myName = prompt('请输入你的名字:(放心，所有数据只会存在于你本地浏览器)');
    if(!myName || myName === null) {
        myName = '游客'
    }    
    localStorage.setItem('name', myName);
    myHeading.textContent = 'welcome, ' + myName;
}
if(!localStorage.getItem('name')) {
    setUserName();
} 
else{
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'welcome, ' + storedName;
}
myButton.onclick = function(){
    setUserName();
}