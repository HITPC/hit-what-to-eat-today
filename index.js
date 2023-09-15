var card1 = document.getElementById("card1");
var card2 = document.getElementById("card2");
var nextBtn = document.getElementById("next-btn");
var proBtn = document.getElementById("pro-btn");
var ul = document.getElementById("select-ul");
var result = document.getElementById("result");
var allowrepeate = document.getElementById("allowrepeate");
var inschool = document.getElementById("inschool");
var outschool = document.getElementById("outschool");
var eatd = document.getElementById("eatd");
var noeatd = document.getElementById("noeatd");

const possibleItem = [ // 可能的选择
  {
    name: "学子1楼",
    inschool: true,
    delever: false
  }, 
  {
    name: "学子2楼",
    inschool: true,
    delever: false
  },
  {
    name: "学子3楼",
    inschool: true,
    delever: false
  },
  {
    name: "学子4楼",
    inschool: true,
    delever: false
  },
  {
    name: "饺子园",
    inschool: true,
    delever: false
  },
  {
    name: "清真",
    inschool: true,
    delever: false
  },
  {
    name: "高级餐厅",
    inschool: true,
    delever: false
  },
  {
    name: "学苑1楼",
    inschool: true,
    delever: false
  },
  {
    name: "学苑2楼",
    inschool: true,
    delever: false
  },
  {
    name: "小亭子",
    inschool: true,
    delever: false
  },
  {
    name: "天雅轩",
    inschool: false,
    delever: true
  },
  {
    name: "快当",
    inschool: false,
    delever: true
  },
  {
    name: "美团/饿了么 其他外卖",
    inschool: false,
    delever: true
  },
  {
    name: "毛炒屋",
    inschool: false,
    delever: false
  },
  {
    name: "石锅",
    inschool: false,
    delever: false
  },
  {
    name: "凉皮肉夹馍",
    inschool: false,
    delever: false
  },
  {
    name: "校外其他餐馆",
    inschool: false,
    delever: false
  }
];

// 将元素放进去
possibleItem.forEach(item=>{
  let li = document.createElement('li');
  // 创建span元素
  var span = document.createElement('span');  
  span.textContent = item.name; // 设置文本内容  
  li.appendChild(span); // 将 <span> 添加到 <li> 中 
  // 创建 <input> 元素  
  var input = document.createElement('input');  
  input.type = 'checkbox'; // 设置类型为 checkbox 
  input.name = "selections";
  input.value = item.name; 
  li.appendChild(input); // 将 <input> 添加到 <li> 中
  ul.appendChild(li);
});

function getRandomNum(max, min){// 整个随机数函数
  min = Math.ceil(min);  
  max = Math.floor(max);  
  return Math.floor(Math.random() * (max - min + 1)) + min; //含最大值，含最大值，含最大值  
}

let selected = []; // 被选中的下标有哪些

function judgeAndReturn(){ // 返回对应标准的可选数组
  let temp = possibleItem;
  if(!allowrepeate.checked){ // 不允许重复
    temp = temp.filter(item=>!selected.includes(item.name));
  }
  if(inschool.checked){ // 在学校里吃
    temp = temp.filter(item=>item.inschool);
  }
  if(outschool.checked){ // 在校外吃
    temp = temp.filter(item=>!item.inschool);
  }

  if(eatd.checked){ // 吃外卖
    temp = temp.filter(item=>item.delever);
  }

  if(noeatd.checked){ // 不吃外卖
    temp = temp.filter(item=>!item.delever);
  }

  return temp;
}

function getResult(){
  var boxes = document.querySelectorAll('input[type="checkbox"]');
  boxes.forEach(item=>{
    if(item.checked){
      selected.push(item.defaultValue);
    }
  });
  let posA = judgeAndReturn();
  let index = getRandomNum(0, posA.length);
  result.innerHTML = posA[index] ? posA[index].name : "-条件选择冲突-";
}



nextBtn.addEventListener("click", ()=>{
  card1.classList.add("nosee");
  card2.classList.remove("nosee");
  getResult();
});

proBtn.addEventListener("click", ()=>{
  card2.classList.add("nosee");
  card1.classList.remove("nosee");
});