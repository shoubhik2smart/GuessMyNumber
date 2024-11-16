'use strict';

// Storing and printing the random number
let rand_num = Math.ceil(Math.random()*20);
// console.log(rand_num);
// Storing and printing the highscore
let highScore = document.querySelector(".highscore").textContent;
// console.log(highScore);

// The below code reflects the happenings when someone click on Check button
document.querySelector(".check").addEventListener(
    "click", function(){
        let mynum = document.querySelector(".guess").value;
        mynum = Number(mynum);
        // console.log(mynum);
        // console.log(typeof(mynum));

        // Storing the current score in this variable
        let score = document.querySelector(".score").textContent;
        // Storing the high score in this variable
        

        if(mynum === 0){
            document.querySelector(".message").textContent = "🤦‍♂️ No number is entered!";
        }

        else if(mynum !== rand_num){
            if(score>0){
                if(mynum > rand_num){
                document.querySelector(".message").textContent = "😢 Too High!";
                }
                else if(mynum < rand_num){
                document.querySelector(".message").textContent = "😢 Too Low!";
                }
                score--;
                document.querySelector(".score").textContent = score;
                if(score === 0){
                    document.querySelector(".message").textContent = "🤢You Lost😭";
                    document.querySelector("body").style.backgroundColor = "red";
                    document.querySelector(".number").textContent = rand_num;
                    document.querySelector(".number").style.width = "30rem";
                }
            }
        }
        
        else if(mynum === rand_num){
            document.querySelector(".message").textContent = "🎉 Correct Number!";
            if(score > highScore){
                highScore = score;
                document.querySelector(".highscore").textContent = highScore;
            }
            document.querySelector("body").style.backgroundColor = "#60b347";
            document.querySelector(".number").style.width = "30rem";
            document.querySelector(".number").textContent = rand_num;
        }
    }
);

// The below code reflects the situation when someone clicks on try again button
document.querySelector(".again").addEventListener(
    "click", function(){
        document.querySelector(".guess").value = "";
        document.querySelector(".score").textContent = 20;
        rand_num = Math.ceil(Math.random()*20);
        // console.log(rand_num);
        document.querySelector("body").style.backgroundColor = "#222";
        document.querySelector(".number").style.width = "15rem";
        document.querySelector(".number").textContent = "?";
        document.querySelector(".message").textContent = "Start guessing...";
    }

);
