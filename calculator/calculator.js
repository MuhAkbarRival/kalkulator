const display1E1 = document.querySelector('.display-1');
const display2E1 = document.querySelector('.display-2');
const tempresultE1 = document.querySelector('.temp-result');
const numbersE1 = document.querySelectorAll('.number');
const operationE1 = document.querySelectorAll('.operation');
const equalE1 = document.querySelector('.equal');
const clearallE1 = document.querySelector('.all-clear');
const clearlastE1 = document.querySelector('.last-entity-clear');

let dis1Num = '';
let dis2Num = '';
let result = null;
let lastOperation = '';
let haveDot = false;

numbersE1.forEach( number => {
    number.addEventListener('click', (e)=> {
        if(e.target.innerText === '.' && !haveDot){
            haveDot = true
        }else if(e.target.innerText === '.' && haveDot){
            return;
        }
        dis2Num += e.target.innerText;
        display2E1.innerText = dis2Num;
    })
}

);

operationE1.forEach( operation => {
    operation.addEventListener('click', (e)=> {
        if (!dis2Num) result;
        haveDot= false;
        const opperationName = e.target.innerText;
        if(dis1Num && dis2Num && lastOperation){
            MathOperation();
        }else{
            result = parseFloat(dis2Num);
        }
        clearVar(opperationName);
        lastOperation = opperationName
        console.log(result);
    })
}
);


function clearVar(name = ''){
    dis1Num += dis2Num+ '' + name + '';
    display1E1.innerText = dis1Num;
    display2E1.innerText = '';
    dis2Num = '';
    tempresultE1.innerText = result;
}

function MathOperation(){
    if(lastOperation === 'X'){
        result = parseFloat(result) * parseFloat(dis2Num);
    } else if(lastOperation === '+'){
        result = parseFloat(result) + parseFloat(dis2Num);
    } else if (lastOperation === '-'){
        result = parseFloat(result) - parseFloat(dis2Num);
    }else if (lastOperation === '/'){
        result = parseFloat(result) / parseFloat(dis2Num);
    }else if (lastOperation === '%'){
        result = parseFloat(result) % parseFloat(dis2Num);
    }
}

equalE1.addEventListener('click', (e)=> {
    if(!dis1Num || !dis2Num) return;
    haveDot = false;
    MathOperation();
    clearVar();
    display2E1.innerText = result;
    tempresultE1.innerText = '';
    dis2Num = result;
    dis1Num = '';
})

clearallE1.addEventListener('click', (e) => {
    display1E1.innerText = '';
    display2E1.innerText = '';
    dis1Num = '';
    dis2Num = '';
    result = '';
    tempresultE1.innerText = '0';
})

clearlastE1.addEventListener('click', (e) => {
    display2E1.innerText = '';
    dis2Num = '';
})

window.addEventListener('keydown', (e)=>{
    if(
      e.key === '0' ||
      e.key === '1' || 
      e.key === '2' ||
      e.key === '3' ||
      e.key === '4' ||
      e.key === '5' ||
      e.key === '6' ||
      e.key === '7' ||
      e.key === '8' ||
      e.key === '9' ||
      e.key === '.' 
    ){
      clickButtonEl(e.key)
    }else if(
      e.key === '+' ||
      e.key === '-' ||
      e.key === '/' ||
      e.key === '%' 
    ){
      clickOperation(e.key);
    }
    else if(e.key === '*'){
      clickOperation('x')
    } else if( e.key == "Enter" || e.key === '='){
      clickEqual();
    }
    
  })
  function clickButtonEl(key) {
    numbersEl.forEach(button => {
      if (button.innerText === key) {
        button.click();
      }
    })
  }
  function clickOperation(key){
    operationEl.forEach( operation => {
      if(operation.innerText === key){
        operation.click()
      }
    })
  }
  function clickEqual(){
    equalEl.click();
  }