function testKeyDown(event){
    console.log(event);
    // event.target.value = "";
    event.target.value = persianChar[event.keyCode];
}
var persianChar = {
    83 : "س" ,
}