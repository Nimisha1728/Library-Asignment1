
function validation() {
   const form=document.getElementById("myForm");
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('pwd').value;
    const number = document.getElementById('number').value;
    const cPassword = document.getElementById('cPwd').value;
    const error = document.getElementById('error');
    const errorimg=document.getElementById('errorimg');
    const success=document.getElementById("success");
   
    let text;
    
    var regx = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var regx1=/^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
    if(name=="") {
      text = "Name cannot be blank";
      error.style.padding = '10px';
      error.innerHTML = text;
      errorimg.innerHTML="<img src=\"./images/rabbit.gif\" width=\"100px\"height=\"200px\">";
      return false;
    }
   
    // if(email.indexOf("@") == -1|| email.length < 6) {
     if(!email.match(regx))
     {
       
      text = "Enter A Valid Email Address";
      error.style.padding = '10px';
      
      error.innerHTML = text;
      errorimg.innerHTML="<img src=\"./images/rabbit.gif\" width=\"100px\"height=\"200px\">";
      return false;
    }
    // if(number.length < 10 || isNaN(number)) {
      if(!number.match(regx1)){
      text = "Please Enter A Valid Number";
      error.style.padding = '10px';
      error.innerHTML = text;
      errorimg.innerHTML="<img src=\"./images/rabbit.gif\" width=\"100px\"height=\"200px\">";
      return false;
    }
    if(password == '' || password.length < 8) {
      text = "Please Enter Your Password (it must be 8 letters or more)";
      error.style.padding = '10px';
      error.innerHTML = text;
      errorimg.innerHTML="<img src=\"./images/rabbit.gif\" width=\"100px\"height=\"200px\">";
      return false;
      
    }
   
    if(password != cPassword) {
      text = "Your Password Do Not Match";
      error.style.padding = '10px';
      error.innerHTML = text;
      errorimg.innerHTML="<img src=\"./images/rabbit.gif\" width=\"100px\"height=\"200px\">";
      return false;
    }
    error.innerHTML="";
    errorimg.innerHTML="";

  
    
    
  // swal({
  //   title: 'Registration Success!!',
  //   timer:6000,
  //   icon:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQn7-_I0kA-gb6PAzWQttreniHwjjsdUSDV6P7R9bk0ANuVRCzS&usqp=CAU",
  // }).then(function(){
  // window.location.href = "login.html";
  // console.log('The Ok Button was clicked.');
  //   });
  
  
    return true;
 

  }

  function strength()
  {
    
    
    const pass1 = document.getElementById('pwd').value;
    const status = document.getElementById('length');
    var counter = 0;
    if(pass1 != '') {
      //input text for password to change red
      if(pass1.length <= 6 && pass1.match(/[a-zA_Z]+/))
        counter = 1;
      //input numbers for password to change orange
      if(pass1.match(/[0-9]+/) && pass1.length > 6)
        counter = 2;
      //input special characters for password to change green
      if(pass1.match(/[!@$#^&()*%]+/))
        counter = 3;
      //if text have been inputted
      if(counter == 1) {
        status.style.opacity = '1';
        status.style.background = "#dc0303";
        status.style.width = '35%';

      }
      //if numbers have been inputted
      if(counter == 2) {
        status.style.opacity = '1';
        status.style.background = "orange";
        status.style.width = '70%';
      }
      //if special characters have been inputted
      if(counter == 3) {
        status.style.opacity = '1';
        status.style.background = "green";
        status.style.width = '100%';
      }
    }
    else {
      status.style.opacity = '0';
    }
  }


  function hide(){
    error.innerHTML="";
    error.style.padding = '0px';
    errorimg.innerHTML="";
  }


  function sweetalert(){
    swal({
        title: 'Registration Success!!',
        
        icon:"./images/successboy.jpg",
      }).then(function(){
         window.location.href = "login.html";
         console.log('The Ok Button was clicked.');
        });
  }