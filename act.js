let userSeq=[];
let gameSeq=[];
let btns=['red', 'blue', 'green', 'yellow'];
let level=0;
let started=false;
let h2=document.querySelector("h2");
document.addEventListener("keypress", function(event) {
   
    if (started==false){
     console.log("game started");
     started=true;
    levelUp();
    ;}});
    
    function btnFlash(btn){
        btn.classList.add("flash");
        setTimeout(function() {
            btn.classList.remove("flash");
        }, 250);
    }
     function userFlash(btn){
        btn.classList.add("userflash");
        setTimeout(function() {
            btn.classList.remove("userflash");
        }, 250);
    }

    function levelUp(){
        userSeq=[];
        level++;
        h2.innerText=`Level ${level}`;
        let randomIndex=Math.floor(Math.random()*3);
        let randomColor=btns[randomIndex];
        let randbtn=document.querySelector(`.${randomColor}`);
        gameSeq.push(randomColor);
        console.log(gameSeq);
        userFlash(randbtn);

    }
    function checkAns(idx){
        // console.log("current level:", level);
    
       if (userSeq[idx]===gameSeq[idx]){
        if (userSeq.length===gameSeq.length){
        
          setTimeout(levelUp,1000);

        }
        else{
            h2.innerHTML=`Wrong! your score <b>${level}<b> <br>Press any key to restart`;
            documment.querySelector("body").style.backgroundColor="red";
            setTimeout(function()
            {
                document.querySelector("body").style.backgroundColor="white";
            },150);
            reset();
                
            
            
            }
        
    }}


    function btnPress(){
        // console.log(this);
        let btn = this;
        userFlash(btn);
        userColor=btn.getAttribute("id");
        userSeq.push(userColor);
        checkAns(userSeq.length-1);

    }
    let allbtns=document.querySelectorAll(".btn");
    for (btn of allbtns)
    {
          btn.addEventListener("click", btnPress);
    }
    function reset()
    {
        started=false;
        userSeq=[];
        gameSeq=[];
        level=0;
    }
