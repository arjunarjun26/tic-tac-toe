let boxes=document.querySelectorAll(".box");
let tic_new_btn=document.querySelector("#tic_new_btn");
let tw_msg = document.querySelector("#tw-msg");

let turn0 = true

const win_patterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const DisableBtn=() =>{
    boxes.forEach((box)=>{
          box.disabled=true;
    })
}
const EnableBtn=() =>{
    boxes.forEach((box)=>{
          box.disabled=false;
    })
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=> {
        console.log("box was clicked")
        if(turn0){
            box.innerText="o"
            turn0=false;
        }
        else{
            box.innerText="x"
            turn0=true;

        }
    box.disabled = true;
   
    checkWinner();
    });
})
const checkWinner = () => {
    for(let pattern of win_patterns){
         let t_boxValue1= boxes[pattern[0]].innerText;
         let t_boxValue2= boxes[pattern[1]].innerText;
         let t_boxValue3= boxes[pattern[2]].innerText;
         if(t_boxValue1!="" && t_boxValue2!="" && t_boxValue3 != ""){
            if(t_boxValue1===t_boxValue2&&t_boxValue2===t_boxValue3){
                console.log("Winner")
                DisableBtn();
                tw_msg.innerText=`Winner is ${t_boxValue1}`
            }
         }


    }
} 
tic_new_btn.addEventListener("click",()=>{
    boxes.forEach((box) => {
        box.innerText=""
        EnableBtn();
        tw_msg.innerText=""
    })
})