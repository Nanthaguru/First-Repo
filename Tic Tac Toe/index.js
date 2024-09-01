let b1 = document.getElementById('s1')
let b2 = document.getElementById('s2')
let b3 = document.getElementById('s3')
let b4 = document.getElementById('s4')
let b5 = document.getElementById('s5')
let b6 = document.getElementById('s6')
let b7 = document.getElementById('s7')
let b8 = document.getElementById('s8')
let b9 = document.getElementById('s9')

let ban = document.getElementById('ban')
let buttons = document.getElementsByClassName('btns')
let reset = document.getElementById('reset')

let turn = "";
let color = ""
let count = 0

let xScore = 0;
let oScore = 0;
let gamesPlayed = 0;

function disableButtons()
{
    for(let button of buttons)
    {
        button.disabled = true
    }
}
function resetGame()
{
    console.log('asdfasdf')
    turn=""
    color=""
    count=0
    ban.innerHTML = "TIC TAC TOE"
    ban.style = "background-color:blueviolet; color:white;"
    for(let button of buttons)
    {
        button.textContent = ""
        button.disabled = false
        button.style = "background-color:aliceblue;"
    }
}

function checkWin(count)
{
    if((b1.textContent=="X" && b2.textContent=='X' && b3.textContent=='X')||
    (b1.textContent=="O" && b2.textContent=='O' && b3.textContent=='O'))
    {
        ban.innerHTML = `${b1.textContent} wins`
        b1.style = "background-color:green; color:white"
        b2.style = "background-color:green; color:white"
        b3.style = "background-color:green; color:white"
        ban.style = "background-color:white; color:green;"
        disableButtons()
    }
    else if((b4.textContent=="X" && b5.textContent=='X' && b6.textContent=='X')||
    (b4.textContent=="O" && b5.textContent=='O' && b6.textContent=='O'))
    {
        ban.innerHTML = `${b4.textContent} wins`
        ban.style = "background-color:white; color:green;"
        b4.style = "background-color:green; color:white"
        b5.style = "background-color:green; color:white"
        b6.style = "background-color:green; color:white"
        disableButtons()
    }
    else if((b7.textContent=="X" && b8.textContent=='X' && b9.textContent=='X')||
    (b7.textContent=="O" && b8.textContent=='O' && b9.textContent=='O'))
    {
        ban.innerHTML = `${b7.textContent} wins`
        ban.style = "background-color:white; color:green;"
        b7.style = "background-color:green; color:white"
        b8.style = "background-color:green; color:white"
        b9.style = "background-color:green; color:white"
        disableButtons()
    }
    else if((b1.textContent=="X" && b4.textContent=='X' && b7.textContent=='X')||
    (b1.textContent=="O" && b4.textContent=='O' && b7.textContent=='O'))
    {
        ban.innerHTML = `${b1.textContent} wins`
        ban.style = "background-color:white; color:green;"
        b1.style = "background-color:green; color:white"
        b4.style = "background-color:green; color:white"
        b7.style = "background-color:green; color:white"
        disableButtons()
    }
    else if((b2.textContent=="X" && b5.textContent=='X' && b8.textContent=='X')||
    (b2.textContent=="O" && b5.textContent=='O' && b8.textContent=='O'))
    {
        ban.innerHTML = `${b2.textContent} wins`
        ban.style = "background-color:white; color:green;"
        b2.style = "background-color:green; color:white"
        b5.style = "background-color:green; color:white"
        b8.style = "background-color:green; color:white"
        disableButtons()
    }
    else if((b3.textContent=="X" && b6.textContent=='X' && b9.textContent=='X')||
    (b3.textContent=="O" && b6.textContent=='O' && b9.textContent=='O'))
    {
        ban.innerHTML = `${b3.textContent} wins`
        ban.style = "background-color:white; color:green;"
        b3.style = "background-color:green; color:white"
        b6.style = "background-color:green; color:white"
        b9.style = "background-color:green; color:white"
        disableButtons()
    }
    else if((b1.textContent=="X" && b5.textContent=='X' && b9.textContent=='X')||
    (b1.textContent=="O" && b5.textContent=='O' && b9.textContent=='O'))
    {
        ban.innerHTML = `${b1.textContent} wins`
        ban.style = "background-color:white; color:green;"
        b1.style = "background-color:green; color:white"
        b5.style = "background-color:green; color:white"
        b9.style = "background-color:green; color:white"
        disableButtons()
    }
    else if((b3.textContent=="X" && b5.textContent=='X' && b7.textContent=='X')||
    (b3.textContent=="O" && b5.textContent=='O' && b7.textContent=='O'))
    {
        ban.innerHTML = `${b3.textContent} wins`
        ban.style = "background-color:white; color:green;"
        b3.style = "background-color:green; color:white"
        b5.style = "background-color:green; color:white"
        b7.style = "background-color:green; color:white"
        disableButtons()
    }
    else if(b1.textContent!="" && b2.textContent!="" && b3.textContent!="" &&
    b4.textContent!="" && b5.textContent!="" && b6.textContent!="" &&
    b7.textContent!="" && b8.textContent!="" && b9.textContent!="" )
    {
        ban.innerHTML = "Game Over"
        ban.style = "background-color:white; color:red;"
        for(let but of buttons)
        {
            but.style = "background-color:red; color:white"
        }
    }
}

function check(btn)
{
    count++
    if(turn=="" || turn=="O"){
        turn = "X"
        color = "royalblue"}
    else{
        turn = "O"
        color= "red"}
    if(btn=='b1')
    {
        b1.textContent = turn
        b1.style = `color:${color};`
        b1.disabled = true
    }
    else if(btn=='b2')
    {
        b2.textContent = turn
        b2.style = `color:${color};`
        b2.disabled = true
    }
    else if(btn=='b3')
    {
        b3.textContent = turn
        b3.style = `color:${color};`
        b3.disabled = true
    }
    else if(btn=='b4')
    {
        b4.textContent = turn
        b4.style = `color:${color};`
        b4.disabled = true
    }
    else if(btn=='b5')
    {
        b5.textContent = turn
        b5.style = `color:${color};`
        b5.disabled = true
    }
    else if(btn=='b6')
    {
        b6.textContent = turn
        b6.style = `color:${color};`
        b6.disabled = true
    }
    else if(btn=='b7')
    {
        b7.textContent = turn
        b7.style = `color:${color};`
        b7.disabled = true
    }
    else if(btn=='b8')
    {
        b8.textContent = turn
        b8.style = `color:${color};`
        b8.disabled = true
    }
    else if(btn=='b9')
    {
        b9.textContent = turn
        b9.style = `color:${color};`
        b9.disabled = true
    }
    if(count>4)
    {
        checkWin(count)
    }
}