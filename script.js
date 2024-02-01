
document.addEventListener('DOMContentLoaded', function() {
    
    
    getFromLocal()
})
const contentBox = document.querySelector('#contentBox');
const cancel = document.querySelector(".cancel")
contentBox.style.display = 'none';

cancel.addEventListener('click', () => {
    // Toggle the visibility of the content box
    contentBox.style.display =  'none';
});
const toggleButton = document.querySelector(".btn_Rule");

toggleButton.addEventListener('click', () => {
    // Toggle the visibility of the content box
    contentBox.style.display = (contentBox.style.display === 'none') ? 'block' : 'none';
});
const path_scissors = './images/Scissors.png';
const path_rock = './images/Rock.png'
const path_paper = './images/Paper.png'
let count2 = document.querySelector('.user_counter');
let count = document.querySelector('.comp_counter');
let score1 = parseInt(localStorage.getItem('Computer'))||0;
let score2 = parseInt(localStorage.getItem('User'))||0;
count.innerText = score1;
count.style.color = "red";
count2.innerText = score2;
count2.style.color = "green";
// img.alt = 'Description of the image';
const img_paths = {"rock":path_rock,"paper":path_paper,"scissors":path_scissors};
function play(userChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    
    // Determine the winner
    let result = declareWinner(userChoice, computerChoice);
     if(result == false){
        score1+=1
        let count = document.querySelector('.comp_counter')
        count.innerText = parseInt(score1)
        count.style.color = "red"
        localStorage.setItem("Computer",JSON.stringify(score1))
     }
     else if(result == true){
        score2+=1
        let count2 = document.querySelector('.user_counter')
        count2.innerText = parseInt(score2)
        count2.style.color = "green"
        localStorage.setItem("User",JSON.stringify(score2))
     }
    // Display the result
    
    // document.getElementById('result').innerText = `You chose ${userChoice}. Computer chose ${computerChoice}. ${result}`;
}
function declareWinner(userChoice, computerChoice) {
    let winner = "";
    const res = document.querySelector('.result')
    const comp_choice = document.querySelector('.comp_choice')
    const user_choice = document.querySelector('.user_choice')
    let img = document.createElement('img');
    user_choice.src = img_paths[userChoice]
    comp_choice.src = img_paths[computerChoice]
    if (userChoice === computerChoice) {

        res.innerHTML = "Its a tie";
    } else if ((userChoice === 'rock' && computerChoice === 'scissors') ||
               (userChoice === 'paper' && computerChoice === 'rock') ||
               (userChoice === 'scissors' && computerChoice === 'paper')) {
        res.innerHTML = "You win!";
        winner = "user"
        
        if(winner == 'user'){
            addNextButton()
        }
    } else {
        res.innerHTML = "Computer wins!";
        winner = "computer"
    }
    removeGameContainer(winner)
    return winner == "user"?true:winner == "computer"?false:null;
}

    function removeGameContainer(winner){
        // console.log(result)
        document.querySelector('.option').style.display = 'none';
        let reset = document.querySelector('.reset');
        reset.style.width = "6em"
        reset.style.height = "3em"
        reset.style.cursor = "pointer"
        reset.style.borderRadius = "5%"
        if(winner=="user"){

            reset.innerHTML = "Play Again"
        }
        else{
            reset.innerHTML = "Replay"
        }
        reset.style.color = "White"
        reset.style.marginTop = "2em"
        reset.style.fontSize = "1em"
        
        reset.style.backgroundColor = "#20112e"
        reset.onclick = function() {
            location.reload(true);
           
        
            // Wait for a short delay after the reload and then retrieve data
            // setTimeout(function() {
            //     getFromLocal();
            // }, 1530);  // Adjust the delay as needed
        };
        
        
    }
            //   document.write(win)
            // document.querySelector('.next').innerText='Next';
        function addNextButton(){
            let next = document.querySelector('.next');
            next.style.width = "5em"
            next.style.height = "3em"
            next.style.borderRadius = "5%"
            next.innerHTML = "Next"
            next.style.color = "White"
            next.style.marginTop = "2em"
            next.style.fontSize = "1em"
            next.style.backgroundColor = "#20112e"
            next.style.cursor = "pointer"
            next.onclick = function() {
                // Reload the current page
                location.href = './victory.html';
              };

            }
       function getFromLocal(){
            // Retrieve data from local storage after the page has loaded
            let comp_score = localStorage.getItem('Computer');
            let count = document.querySelector('.comp_counter');
            count.innerText = parseInt(comp_score) || 0;
            count.style.color = "red";
        
            let user_score = localStorage.getItem('User');
            let count2 = document.querySelector('.user_counter');
            count2.innerText = parseInt(user_score) || 0;
            count2.style.color = "green";
        
        }
           
