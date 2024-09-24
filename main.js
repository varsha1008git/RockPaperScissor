let game=confirm("Can we Play rock,paper and scissors?");
if(game){
    let choice=prompt("Enter rock,paper or scissors!!");
    if(choice){
        let p=choice.trim().toLowerCase();
        if(
            p==="rock"||
            p==="paper"||
            p==="scissors"
        )
        {
            let compChoice=Math.floor(Math.random()*3+1);
            let computer=compChoice===1?"rock"
            :compChoice===2
            ?"paper"
            :"scissors";
            let result=
            p===computer?"Tie Game"
            :p==="rock" && computer==="paper" 
            ? `player puts ${p} and computer puts ${computer} and Computer Wins!!`
            :p==="paper" && computer==="scissors"
            ? `player puts ${p} and computer puts ${computer} and Computer Wins!!`
            :p==="scissor" && computer==="rock"
             ? `player puts ${p} and computer puts ${computer} and Computer Wins!!`
             : `player puts ${p} and computer puts ${computer} and Player Wins!!`;
             alert(result);
             let playagain=confirm("Play Again");
             playagain?location.reload():alert("Thanks for playing");

        }
        else{
            alert("You didn't enter rock or paper or scissor");
        }
    }else{
        alert("May be next time we will try!")
    }
}
else{
    alert("Good Bye!!")
}