let btns = document.querySelectorAll(".squares");
let resetbtn=document.querySelector(".btn");
let turnX=true;
let count=0;
btns.forEach((btn)=>{
    btn.addEventListener("click", ()=>{
        if(turnX)
        {
            btn.innerText="X";
            turnX=false;
        }
        else{
            btn.innerText="O"
            turnX=true;
        }
        btn.disabled=true;
        count++;
        let winner=checkWinner();
        if(count==9 && !winner)
        {
            setTimeout(()=>{
                alert("Draw");
                reset();
            },100);
        }
    });
});
const winningbtns=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[2,4,6],[0,4,8]];
const checkWinner=()=>{
    for(let btn of winningbtns){
        let val1=btns[btn[0]].innerText;
        let val2=btns[btn[1]].innerText;
        let val3=btns[btn[2]].innerText;
        if(val1!="" && val2!="" && val3!=""){
            if(val1===val2 && val2===val3)
            {
                setTimeout(()=>{
                    alert(`${val1} is winner`);
                    reset();
                },100);
                return true;
            }
        }
    }
    return false;
}
const reset=()=>{
    turnX=true;
    count=0;
    for(let btn of btns){
        btn.disabled=false;
        btn.innerText="";
    }
};
resetbtn.addEventListener("click", reset);