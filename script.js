
const convertbtn = document.querySelector(".btn-convert");
const swapbtn = document.querySelector(".btn-swap");
convertbtn.addEventListener("click", convert);


// function for conversion
function convert() {

    var inputnumber = document.querySelector(".input-number").value;
    var inputtype = document.querySelector(".input-option").value;
    var outputtype = document.querySelector(".output-option").value;
    var outputnumber;


    // conversion from decimal to other
    if (inputtype == "input-dec" && outputtype == "output-bin") outputnumber = dectobin(inputnumber);
    if (inputtype == "input-dec" && outputtype == "output-oct") outputnumber = dectooct(inputnumber);
    if (inputtype == "input-dec" && outputtype == "output-hex") outputnumber = dectohex(inputnumber);
    if (inputtype == "input-dec" && outputtype == "output-dec") outputnumber = inputnumber;

    //conversion from hexadecimal to other
    if (inputtype == "input-hex" && outputtype == "output-bin") outputnumber = hextobin(inputnumber);
    if (inputtype == "input-hex" && outputtype == "output-oct") outputnumber = hextooct(inputnumber);
    if (inputtype == "input-hex" && outputtype == "output-dec") outputnumber = hextodec(inputnumber);
    if (inputtype == "input-hex" && outputtype == "output-hex") outputnumber = inputnumber;

    //conversion from octal to other
    if (inputtype == "input-oct" && outputtype == "output-bin") outputnumber = octtobin(inputnumber);
    if (inputtype == "input-oct" && outputtype == "output-dec") outputnumber = octtodec(inputnumber);
    if (inputtype == "input-oct" && outputtype == "output-hex") outputnumber = octtohex(inputnumber);
    if (inputtype == "input-oct" && outputtype == "output-oct") outputnumber = inputnumber;

    //conversion from binary other
    if (inputtype == "input-bin" && outputtype == "output-dec") outputnumber = bintodec(inputnumber);
    if (inputtype == "input-bin" && outputtype == "output-oct") outputnumber = bintooct(inputnumber);
    if (inputtype == "input-bin" && outputtype == "output-hex") outputnumber = bintohex(inputnumber);
    if (inputtype == "input-bin" && outputtype == "output-bin") outputnumber = inputnumber;

    document.querySelector(".output-number").value = outputnumber;


}

// function for decimal to other
function dectobin(no) {
    return parseInt(no).toString(2);
}
function dectooct(no) {
    return parseInt(no).toString(8);
}
function dectohex(no) {
    return parseInt(no).toString(16);
}
// ----------------------------------------------- //

// function for hexadecimal to other
function hextobin(no) {
    return parseInt(no, 16).toString(2);
}
function hextooct(no) {
    return parseInt(no, 16).toString(8);
}
function hextodec(no) {
    return parseInt(no, 16).toString(10);
}
// ----------------------------------------------- //

// function for octal to other
function octtobin(no) {
    return parseInt(no, 8).toString(2);
}
function octtodec(no) {
    return parseInt(no, 8).toString(10);
}
function octtohex(no) {
    return parseInt(no, 8).toString(16);
}
// ----------------------------------------------- //

// function for binary to other
function bintodec(no) {
    return parseInt(no, 2);
}
function bintooct(no) {
    return parseInt(no, 2).toString(8);
}
function bintohex(no) {
    return parseInt(no, 2).toString(16);
}
// ----------------------------------------------- //


