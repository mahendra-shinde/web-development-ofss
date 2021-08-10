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
    localStorage.setItem(account.accNo, JSON.stringify(account));
    reloadTable();
    return account;
}

function reloadTable(){
    //empty Table first
    data = document.getElementById("data");
    data.innerHTML ="";
    for(i=0;i<localStorage.length;i++){
        acc = JSON.parse(localStorage.getItem(localStorage.key(i)));
        console.log(acc);
        row = convertToRow(acc);
        data.innerHTML += row;
    }
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
    // Load all data from localStorage
    reloadTable();
}