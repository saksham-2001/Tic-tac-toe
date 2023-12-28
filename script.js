const boxes = document.getElementsByClassName("box");
console.log(boxes);
let result = document.getElementById("msg");
let blockedindex = [];

let boxindex = [0, 1, 2, 3, 4, 5, 6, 7, 8];

const button=document.getElementById("button");
button.addEventListener('click',()=>{
    button.innerHTML="Loading Game";
    setTimeout(function () {
        window.location.reload();

    }, 1000);
})


// The blocked index array represents the indexes in which the user/computer  has already entered X/0 respectively.
// The boxindex array represents the array fromm which the computer can randomly select an index and display 0 in the box with that index.
for (let i = 0; i < boxes.length; i++) {

    boxes[i].addEventListener('click', () => {
        const time= 5000;
        
       

        if (blockedindex.includes(i) != true) {
            boxes[i].innerHTML = "X";
            blockedindex.push(i);
            result.innerHTML="Game in Progress..."
            for (let m = 0; m < boxindex.length; m++) {
                if (boxindex[m] == i) {
                    boxindex.splice(m, 1);
                }
            }
        
            let counter=0;    
          
            for(let j=0;j<9;j++){
                if(boxes[j].innerHTML=='X'||boxes[j].innerHTML=='0'){
                    counter++;
    
                }
            }
    
           if(counter!=9){
            let randomInt = Math.floor(Math.random() * boxindex.length);
            boxes[boxindex[randomInt]].innerHTML = "0";
            blockedindex.push(boxindex[randomInt]);
            boxindex.splice(randomInt, 1);
            // console.log(boxindex);
           }
           
        }
        else{
            result.innerHTML="Invalid box selcted!"
        }
            


               let winpattern=0;
               
           if ((boxes[0].innerHTML == 'X') || (boxes[0].innerHTML == '0')) {
            //pattern 0,1,2
            if (boxes[0].innerHTML == boxes[1].innerHTML) {
                if (boxes[1].innerHTML == boxes[2].innerHTML) {
                    console.log("winnner pattern:'0,1,2'");
                    if (boxes[0].innerHTML == 'X') {
                        boxes[0].classList.toggle("win");
                        boxes[1].classList.toggle("win");
                        boxes[2].classList.toggle("win");
                        result.classList.toggle("resultwin");
                        result.innerHTML = "Winner🏆🎊";
                        setTimeout(function () {
                            window.location.reload();
    
                        }, time);
                       winpattern++;

                    }
                    else {
                        
                        boxes[0].classList.toggle("lose");
                        boxes[1].classList.toggle("lose");
                        boxes[2].classList.toggle("lose");
                        result.innerHTML = "You Lose 🥺";
                        setTimeout(function () {
                            window.location.reload();
    
                        }, time);
                        winpattern++;
                    }


                   
                }
            }
            //pattern 0,3,6
            
            else if (boxes[0].innerHTML == boxes[3].innerHTML) {
                if (boxes[3].innerHTML == boxes[6].innerHTML) {
                    console.log("winnner pattern:'0,3,6'");
                    if (boxes[0].innerHTML == 'X') {
                     
                        boxes[0].classList.toggle("win");
                        boxes[3].classList.toggle("win");
                        boxes[6].classList.toggle("win");
                        result.classList.toggle("resultwin");
                        result.innerHTML = "Winner🏆🎊";
                        setTimeout(function () {
                            window.location.reload();
    
                        }, time);
                        winpattern++;

                    }
                    else {
                        
                        boxes[0].classList.toggle("lose");
                        boxes[3].classList.toggle("lose");
                        boxes[6].classList.toggle("lose");
                        result.innerHTML = "You Lose 🥺";
                        setTimeout(function () {
                            window.location.reload();
    
                        }, time);
                        winpattern++;
                    }
                    
                }
            }
            
        //    pattern 0,4,8
            else if (boxes[0].innerHTML == boxes[4].innerHTML) {
                if (boxes[4].innerHTML == boxes[8].innerHTML) {
                    console.log("winnner pattern:'0,4,8'");
                    if (boxes[0].innerHTML == 'X') {
                       
                        boxes[0].classList.toggle("win");
                        boxes[4].classList.toggle("win");
                        boxes[8].classList.toggle("win");
                        result.classList.toggle("resultwin");
                        result.innerHTML = "Winner🏆🎊";
                        setTimeout(function () {
                            window.location.reload();
    
                        }, time);
                        winpattern++;
                    }
                    else {
                      
                        boxes[0].classList.toggle("lose");
                        boxes[4].classList.toggle("lose");
                        boxes[8].classList.toggle("lose");
                        result.classList.toggle("resullose");
                        result.innerHTML = "You Lose 🥺";
                    
                    setTimeout(function () {
                        window.location.reload();
                    }, time);
                    winpattern++;
                }
                }
            }
        }


        //pattern 1,4,7 
         if(winpattern==0){  
        if ((boxes[1].innerHTML == 'X') || (boxes[1].innerHTML == '0')) {

            if (boxes[1].innerHTML == boxes[4].innerHTML) {
                if (boxes[4].innerHTML == boxes[7].innerHTML) {
                    console.log("winnner pattern:'1,4,7'");
                    if (boxes[1].innerHTML == 'X') {
                       
                        boxes[1].classList.toggle("win");
                        boxes[4].classList.toggle("win");
                        boxes[7].classList.toggle("win");
                        result.classList.toggle("resultwin");
                        result.innerHTML = "Winner🏆🎊";
                        setTimeout(function () {
                            window.location.reload();
    
                        }, time);
                        winpattern++;
                    }
                    else {
                        
                        boxes[1].classList.toggle("lose");
                        boxes[4].classList.toggle("lose");
                        boxes[7].classList.toggle("lose");
                        result.classList.toggle("resultlose");
                        result.innerHTML = "You Lose 🥺";
                    

                    setTimeout(function () {
                        window.location.reload();
                    }, time);
                    winpattern++;
                }
            }
            }

        }
    }


        if(winpattern==0){
            //pattern 2,4,6
        if ((boxes[2].innerHTML == 'X') || (boxes[2].innerHTML == '0')) {
            if (boxes[2].innerHTML == boxes[4].innerHTML) {
                if (boxes[4].innerHTML == boxes[6].innerHTML) {
                    console.log("winnner pattern:'2,4,6'");
                    if (boxes[2].innerHTML == 'X') {
                      
                        boxes[2].classList.toggle("win");
                        boxes[4].classList.toggle("win");
                        boxes[6].classList.toggle("win");
                        result.classList.toggle("resultwin");
                        result.innerHTML = "Winner🏆🎊";
                        setTimeout(function () {
                            window.location.reload();
    
                        }, time);
                        winpattern++;
                    }
                    else {
                        
                        boxes[2].classList.toggle("lose");
                        boxes[4].classList.toggle("lose");
                        boxes[6].classList.toggle("lose");
                        result.classList.toggle("resultlose");
                        result.innerHTML = "You Lose 🥺";
                    

                    setTimeout(function () {
                        window.location.reload();
                    }, time);
                    winpattern++;
                }
                }
            }

            //pattern 2,5,8       
            else if (boxes[2].innerHTML == boxes[5].innerHTML) {
                if (boxes[5].innerHTML == boxes[8].innerHTML) {
                    console.log("winnner pattern:'2,5,8'");
                    if (boxes[2].innerHTML == 'X') {
                       
                        boxes[2].classList.toggle("win");
                        boxes[5].classList.toggle("win");
                        boxes[8].classList.toggle("win");
                        result.classList.toggle("resultwin");
                        result.innerHTML = "Winner🏆🎊";
                        setTimeout(function () {
                            window.location.reload();
    
                        }, time);
                        winpattern++;
                    }
                    else {
                        
                        boxes[2].classList.toggle("lose");
                        boxes[5].classList.toggle("lose");
                        boxes[8].classList.toggle("lose");
                        result.classList.toggle("resultlose");
                        result.innerHTML = "You Lose 🥺";
                    
                    setTimeout(function () {
                        window.location.reload();
                    }, time);
                    winpattern++;
                }
                }
            }
        }
    }


        if(winpattern==0)
        //pattern 3,4,5
        if ((boxes[3].innerHTML == 'X') || (boxes[3].innerHTML == '0')) {
            if (boxes[3].innerHTML == boxes[4].innerHTML) {
                if (boxes[4].innerHTML == boxes[5].innerHTML) {
                    console.log("winnner pattern:'3,4,5'");
                    if (boxes[3].innerHTML == 'X') {
                        
                        boxes[3].classList.toggle("win");
                        boxes[4].classList.toggle("win");
                        boxes[5].classList.toggle("win");
                        result.classList.toggle("resultwin");
                        result.innerHTML = "Winner🏆🎊";
                        setTimeout(function () {
                            window.location.reload();
    
                        }, time);
                        winpattern++;
                    }
                    else {
                        
                        boxes[3].classList.toggle("lose");
                        boxes[4].classList.toggle("lose");
                        boxes[5].classList.toggle("lose");
                        result.classList.toggle("resultlose");
                        result.innerHTML = "You Lose 🥺";
                    

                    setTimeout(function () {
                        window.location.reload();
                    }, time);
                    winpattern++;
                }
                }
            }

        }

//pattern 6,7,8
        if(winpattern==0){
        if ((boxes[6].innerHTML == 'X') || (boxes[6].innerHTML == '0')) {
            if (boxes[6].innerHTML == boxes[7].innerHTML) {
                if (boxes[7].innerHTML == boxes[8].innerHTML) {
                    console.log("winnner pattern:'6,7,8'");
                    if (boxes[6].innerHTML == 'X') {
                        
                        boxes[6].classList.toggle("win");
                        boxes[7].classList.toggle("win");
                        boxes[8].classList.toggle("win");
                        result.classList.toggle("resultwin");
                        result.innerHTML = "Winner🏆🎊";
                        setTimeout(function () {
                            window.location.reload();
    
                        }, time);
                    }
                    else {
                     
                        boxes[6].classList.toggle("lose");
                        boxes[7].classList.toggle("lose");
                        boxes[8].classList.toggle("lose");
                        result.classList.toggle("resultlose");
                        result.innerHTML = "You Lose 🥺";
                    

                    setTimeout(function () {
                        window.location.reload();
                    }, time);
                }
                }

            }

        }
    }
    let c=0;    
          
    for(let j=0;j<9;j++){
        if(boxes[j].innerHTML=='X'||boxes[j].innerHTML=='0'){
            c++;

        }
    }
   
            if(c==9 && winpattern==0){
               
                    result.innerHTML="Game Tied😐";
                    setTimeout(function () {
                        window.location.reload();
                
                    }, time);
                   
            }
}

    


    );
}
