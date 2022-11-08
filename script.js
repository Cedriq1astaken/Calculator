const display = document.getElementById('display');
const deleteBtn = document.getElementById('delete')
const circle = document.getElementById('circle')

let i = 0;
let enter = (number) =>{
    let val = display.value.charAt(display.value.length - 1)
    if(val == '*' || val == '/' ||val == '+' ||val == '-' ||val == '%' || val ==''){
        if(number == '-'){
            if(val == ''){
                display.value += number
            }
        }
        else if(typeof number == 'number'){
            display.value += number
        }
        
    }
    else{
        display.value += number
    }
}
let equal = () =>{
    let result = eval(display.value);
    (display.value == '') ? alert('Enter stuff') : display.value = result;  
}
let C = () =>{
    display.value = ''
}
deleteBtn.onclick = () =>{
    let str = display.value
    str = str.slice(0, -1)
    display.value = str
}

circle.onclick = ()=>{
    if(i == 0){
        circle.style.transform = 'translate(80%, -50%)';
        i++
        alert('Dark mode// work in progress')
    }
    else if(i == 1){
        circle.style.transform = 'translate(-50%, -50%)';
        i--
    }
}
let parenthesis = (a) =>{
    let val = display.value.charAt(display.value.length - 1)
    if(a == 0){
        display.value += '('
    } 
    if(a == 1){
        (val == '' || typeof val == 'number') ? display.value +='' : display.value += ')'
    }
}