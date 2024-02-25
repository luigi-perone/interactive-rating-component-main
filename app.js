
const vote_component=document.getElementsByClassName("vote-component")
let last=-1


for(let i=0;i<vote_component.length;i++){
    vote_component[i].addEventListener('click',function(){
            if(last!=-1)
                vote_component[last].classList.remove("selected")
            vote_component[i].classList.add("selected")

            last=i
    })
}

const submit=document.getElementById("submit");
let rating=document.getElementsByClassName("rating");
let thank=document.getElementsByClassName("thank-you");
let output=document.getElementsByClassName("output");

submit.addEventListener("click",function(){
    if(last!=-1){
        rating[0].classList.add("hidden");
        output[0].innerHTML="You selected out "+(last+1)+" of 5"
        thank[0].classList.remove("hidden")
    }
});