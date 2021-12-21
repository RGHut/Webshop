document.getElementById("HoneyBtn").onmouseover = function(){
    document.getElementById("HoneyBtn").style.color = "green"
    console.log("in")
}
document.getElementById("CandyBtn").onmouseover = function(){
    document.getElementById("CandyBtn").style.color = "green"
}
document.getElementById("MeadBtn").onmouseover = function(){
    document.getElementById("MeadBtn").style.color = "green"
}
document.getElementById("CandleBtn").onmouseover = function(){
    document.getElementById("CandleBtn").style.color = "green"
}

document.getElementById("HoneyBtn").onmouseleave = function(){
    console.log("uit")
    document.getElementsByClassName("btn btn-primary").style.color = "white"
    
}
// vue js
// Vue.config.devtools = True;
// Vue.config.productionTip = false;

