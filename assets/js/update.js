let chart_bards =document.getElementById("chart-bars");
console.log(chart_bards);

let icons   =document.getElementsByTagName("i");
console.log(icons);

let cards   =document.getElementsByClassName("card");
console.log(cards);

let modifyText = () => {
        let listOfP = document.getElementsByTagName("p");
        console.log(listOfP)
        let elementP = listOfP[3];
        elementP.innerHTML = "RONALDO PRO";
        let elementP2 = listOfP[5];
        elementP2.innerHTML = "RONALDO PRO";
      
}


modifyText()