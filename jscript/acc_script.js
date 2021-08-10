// Constructor Function
function Account(accNo, holderName, openingDate, balance){
    this.accNo = accNo;
    this.holderName = holderName;
    this.openingDate = openingDate;
    this.balance = balance;
}
    
function addAccount(){
    var frm1 = document.forms["frm1"];
    account = new Account(frm1.accno.value, frm1.accname.value, frm1.dtopen.value, frm1.amt.value);
    console.log(account);
    var row = convertToRow(account);
    document.getElementById("data").innerHTML += row;
    return account;
}

function convertToRow(acc){
    var str ="<tr><td>";
    str += acc.accNo + "</td><td>";
    str += acc.holderName + "</td><td>";
    str += acc.openingDate + "</td><td>";
    str += acc.balance +"</td></tr>";
    return str;
}
//After Document (DOM) is Loaded
//Assigning a new "nameless" function 
window.onload = function(){
    //Register for "click" eveny
    document.getElementById("btn1").onclick = addAccount ;
}