let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/well-being-2.0-perma-720w.jpg') {
      myImage.setAttribute('src', 'images/sunlit-tides-sims3.jpg');
    } else {
      myImage.setAttribute('src', 'images/well-being-2.0-perma-720w.jpg');
    }
}

let myButton = document.querySelector('button'); 
let myHeading = document.querySelector('h1');//获取新按钮和标题的引用，并保存至变量中
function setUserName() {  //定义了一个新函数
  let myName = prompt('请输入你的名字。'); //调用了 prompt() 函数， 与 alert() 类似会弹出一个对话框
  
  if(!myName || myName === null) { //用人话说就是：如果 myName 没有值或值为 null，就再次从头运行setUserName()。如果有值（上面的表达式结果不为真），就把值存储到 localStorage 并且设置标题。
    setUserName();
  } else {
  localStorage.setItem('name', myName); //调用 localStorage API 
  myHeading.textContent = '你可以学习积极心理学，' + myName;
  }
}

if(!localStorage.getItem('name')) { //使用了取非运算符（逻辑非，用 ! 表示）来检测 'name' 数据是否存在。
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = `你可以学习积极心理学，${storedName}`;
}

myButton.onclick = function() { //为按钮设置 onclick 事件处理器。按钮按下时运行 setUserName() 函数。
  setUserName();
}