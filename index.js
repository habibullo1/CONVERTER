let select1=document.getElementById("from-currency");
let select2=document.getElementById("to-currency");
let input=document.getElementById("amount");
let result=document.getElementById("result");


function convert(){
    let amount=input.value;
    let from = select1. value;
    let to = select2. value;

    
    axios.get(`https://api.exchangerate-api.com/v4/latest/${from}`).then(res=>{
        let rate=res.data.rates[to];
        let sum=amount*rate;
        result.innerHTML=`${amount} ${from} = ${sum} ${to} `;
    })
 
    
}
let form =document.getElementById("converter-form");
form.addEventListener("submit",function(e){
    e.preventDefault();
    convert();
})