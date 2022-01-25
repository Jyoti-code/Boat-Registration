function myFunction() {
    var x= document.getElementById("code").value;
    if(isNaN(x)){
        alert("Please Enter Correct Area Code ");
        return false;
    }
    var x= document.getElementById("number").value;
    if(isNaN(x)){
        alert("Please Enter Correct Phone Number ");
        return false;
    }
    var x= document.getElementById("namef").value;
    if(!isNaN(x)){
        alert("Please Enter Correct First Name ");
        return false;
    }
    var x= document.getElementById("namel").value;
    if(!isNaN(x)){
        alert("Please Enter Correct Last Name ");
        return false;
    }
    alert("!!! You have to be succefully Registered!!!")
}