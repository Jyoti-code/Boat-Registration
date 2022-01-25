function myfunction() {
    var sum=0;
    if(document.getElementById("boat1").checked==true) {
        var x=parseInt(document.getElementById("times1").value);
        var y=parseInt(document.getElementById("Guest1").value);
        sum = sum+(250*x*y);
    }
    if(document.getElementById("boat2").checked==true) {
        var x=parseInt(document.getElementById("times2").value);
        var y=parseInt(document.getElementById("Guest2").value);
        sum = sum+(200*x*y);
    }
    if(document.getElementById("boat3").checked==true) {
        var x=parseInt(document.getElementById("times3").value);
        var y=parseInt(document.getElementById("Guest3").value);
        sum = sum+(50*x*y);
    }
    if(document.getElementById("boat4").checked==true) {
        var x=parseInt(document.getElementById("times4").value);
        var y=parseInt(document.getElementById("Guest4").value);
        sum = sum+(50*x*y);
    }
    if(document.getElementById("boat5").checked==true) {
        var x=parseInt(document.getElementById("times5").value);
        var y=parseInt(document.getElementById("Guest5").value);
        sum = sum+(60*x*y);
    }
    if(document.getElementById("boat6").checked==true) {
        var x=parseInt(document.getElementById("times6").value);
        var y=parseInt(document.getElementById("Guest6").value);
        sum = sum+(55*x*y);
    }
    if(document.getElementById("boat7").checked==true) {
        var x=parseInt(document.getElementById("times7").value);
        var y=parseInt(document.getElementById("Guest7").value);
        sum = sum+(40*x*y);
    }
    if(document.getElementById("boat8").checked==true) {
        var x=parseInt(document.getElementById("times8").value);
        var y=parseInt(document.getElementById("Guest8").value);
        sum = sum+(20*x*y);
    }
    if(document.getElementById("boat9").checked==true) {
        var x=parseInt(document.getElementById("times9").value);
        var y=parseInt(document.getElementById("Guest9").value);
        sum = sum+(10*x*y);
    }
    if(document.getElementById("boat10").checked==true) {
        var x=parseInt(document.getElementById("times10").value);
        var y=parseInt(document.getElementById("Guest10").value);
        sum = sum+(50*x*y);
    }
    if(document.getElementById("boat11").checked==true) {
        var x=parseInt(document.getElementById("times11").value);
        var y=parseInt(document.getElementById("Guest11").value);
        sum = sum+(120*x*y);
    }
    if(document.getElementById("boat12").checked==true) {
        var x=parseInt(document.getElementById("times12").value);
        var y=parseInt(document.getElementById("Guest12").value);
        sum = sum+(60*x*y);
    }
    document.getElementById("total").value=sum;

}

function payment() {
    var x= document.getElementById("cardnumber").value;
    if(isNaN(x)){
        alert("Please Enter card number as number");
        return false;
    }
    if(x.length!=16){
        alert("Enter number between (1-16)");
        return false;
    }
    var y= document.getElementById("cvv").value;
    if(isNaN(y)){
        alert("Please Enter CVV number as number");
        return false;
    }
    if(y.length!=5){
        alert("Enter 5 Digit CVV Number");
        return false;
    }
    var z= document.getElementById("name").value;
    if(!isNaN(z)){
        alert("Please Enter Name as alphabet");
        return false;
    }
    confirm("!!!!!Payment Successfully!!!!!!");
}