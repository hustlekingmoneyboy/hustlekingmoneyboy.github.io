if(document.addEventListener){
    document.addEventListener("DOMContentLoaded", function(){
        loaded();
    });
} else if(document.attachEvent){
    document.attachEvent("onreadystatechange", function(){
        loaded();
    });
}

function loaded(){
    
    setInterval(loop, 300);
}

var x = 0;

var titleText = [
  "|",
  "H",
  "HU",
  "HUS",
  "HUST",
  "HUSTL",
  "HUSTLE",
  "HUSTLE ",
  "HUSTLE K",
  "HUSTLE KI",
  "HUSTLE KIN",
  "HUSTLE KING",
  "HUSTLE KIN",
  "HUSTLE KI",
  "HUSTLE K",
  "HUSTLE ",
  "HUSTL",
  "HUST",
  "HUS",
  "HU",
  "H"
];
function loop(){
    document.getElementsByTagName("title")[0].innerHTML = titleText[x++%titleText.length];
}