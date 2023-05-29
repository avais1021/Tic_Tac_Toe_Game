

let turnSound = new Audio('images/tap.wav');
// turnSound.play();
let turn = 'X';
let isGameOver = false;
// Function to change the turn 
const changeTurn = () => {
    return turn === 'X' ? '0' : 'X';
}

// Function to check for a win

const checkWin = () => {
    let boxtext = document.getElementsByClassName('boxtext');
    // console.log(boxtext)
    let wins = [
        [0, 1, 2],
        [3, 4, 5,],
        [6, 7, 8,],
        [0, 3, 6,],
        [1, 4, 7,],
        [2, 5, 8,],
        [0, 4, 8,],
        [2, 4, 6,],
    ]
    wins.forEach((e) => {
        if (boxtext[e[0]].innerText === boxtext[e[1]].innerText && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== '')) {
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + 'Won'
            document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = "200px";
            isGameOver = true;
            // console.log(e)
            // console.log('e0', e[0]);
        }
    })

}
// document.body 

//Game Logic 
let boxes = document.getElementsByClassName('box');
Array.from(boxes).forEach((element) => {
    let boxtext = element.querySelector('.boxtext');
    boxtext.addEventListener('click', () => {
        console.log('clicked')
        if (boxtext.innerText === '') {
            // boxtext.innerText = 'X';
            boxtext.innerText = turn;
            turn = changeTurn();
            // console.log(turn)
            turnSound.play();
            checkWin();
            if (!isGameOver) {
                document.getElementsByClassName('info')[0].innerHTML = 'Turn for' + '<span id="d_ii">'+turn+'</span>';
                
            }
        }
    })
    //  console.log(element);
})

// on Click listner to Reset button 

const reset = document.querySelector('#reset');
reset.addEventListener('click' , ()=>{
    let boxtext = document.querySelectorAll('.boxtext');
    boxtext.forEach((item)=>{
        item.innerText = '';
    })
    turn = 'X'
    isGameOver = false;
    document.getElementsByClassName('info')[0].innerHTML = 'Turn for' + '<span id="d_ii">'+turn+'</span>';
    document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = "0px";

})






