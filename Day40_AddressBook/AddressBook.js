const ps = require("prompt-sync");
const prompt =ps();
const firstname = prompt("Enter First_Name : ");
const lastname = prompt("Enter Last_Name : ");
const address = prompt("Enter Address : ");
const city = prompt("Enter City : ");
const state = prompt("Enter State : ");
const phoneNumber = prompt("Enter Phone _Number ");
const email= prompt("Enter Email : ");
let addressbook = new Array();
firstName(firstname);
lastName(lastname);
addressF(address);
cityF(city);
stateF(state);
phone(phoneNumber);
emailId(email);
function firstName(firstname){
    const fNameReg = RegExp("^[A-Z]{1}[a-z]{2,}$");
    if(fNameReg.test(firstname))
      {
          addressbook.push(firstname);
      }
      else
      {
          console.log("Entered wrong name format");
      }
}
function lastName(lastname){
    const lNameReg = RegExp("^[A-Z]{1}[a-z]{2,}$");
    if(lNameReg.test(lastname))
      {
          addressbook.push(lastname);
      }
      else
      {
         console.log("Entered wrong lastname format");
      }
}

function addressF(address){
    const addresspattern = RegExp("^[A-Z]{1}[a-z]{2,}$");
    if(addresspattern.test(address))
      {
          addressbook.push(address);
      }
      else
      {
          console.log("Wrong address format");
      }
}

function cityF(city){
    const citypattern = RegExp("^[A-Z]{1}[a-z]{2,}$");
    if(citypattern.test(city))
      {
          addressbook.push(city);
      }
      else
      {
          console.log("Wrong city format");
      }
}

function stateF(state){
    const statepattern = RegExp("^[A-Z]{1}[a-z]{2,}$");
    if(statepattern.test(state))
      {
          addressbook.push(state);
      }
      else
      {
          console.log("Wrong state format");
      }
    
   
}
function phone(phoneNumber){
    const phonenpattern= RegExp("^(0/91)?[7-9][0-9]{9}");
    
    if(phonenpattern.test(phoneNumber))
    {
        addressbook.push(phoneNumber);
    }
    else
    {
        console.log("Wrong number format");
    }
    
  }
  function emailId(email){
    const emailpattern = RegExp("/^(([^<>()[\]\\.,;:\s@]+(\.[^<>()[\]\\.,;:\s@]+)*)|(.+))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/")
       
    if(emailpattern.test(email))
    {
        addressbook.push(email);
    }
    else
    {
        console.log("Wrong email format");
    }
  }
  console.log(addressbook)
  
  updateName(firstname);
  deleteName(firstName);
  countContacts();
  ViewpersonByCity(city);
  sortAdressbook();
  function updateName(firstname){
      let name = addressbook.filter(name => addressbook.firstname=="Aparna");
      if(name){
      addressbook[0]="Abhi";
      console.log("First name changed as :"+addressbook[0])
      }else{
          console.log("Name not found");
      }
      
    }

    function deleteName(firstname){
        let name = addressbook.filter(name => addressbook.firstname=="Anjali");
        if(name){
            addressbook[0]="";
            console.log("Deleted firstname :"+addressbook[0]);
        }else{
            console.log("Name not found");
        }
    }
    function countContacts(){
        let count = addressbook.length
        console.log("Number of contacts :"+count);
    }
    function ViewpersonByCity(city){
        let cityname =addressbook.filter(cities => cities.city=="Akkalkot");
        if(city){
            console.log(addressbook[0]);
        }else{
            console.log("No city found")
        }
    }
    function sortAdressbook(){
        let addressbookSort = addressbook.sort;
        console.log(" soerted addressbook is :"+addressbookSort);
    }
    console.log(addressbook);