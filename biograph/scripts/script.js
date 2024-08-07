// script.js
$(document).ready(function() {
   
});

function openNav() {
      document.getElementById("menu-button").style.display="none"
        document.getElementById("mySidenav").style.width = "250px";
        document.getElementById("main-content").style.marginLeft = "250px";
    // var width =  document.getElementById("mySidenav").style.width;
    // console.log({width})
    // if(width==='' || width==='0px'){
    //      document.getElementById("mySidenav").style.width = "250px";
    //      document.getElementById("main-content").style.marginLeft = "250px";
    // }else{
    //     document.getElementById("mySidenav").style.width = "0";
    //     document.getElementById("main-content").style.marginLeft= "0";
    // }
  }
  
  function closeNav() {
    document.getElementById("menu-button").style.display="block"
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main-content").style.marginLeft= "0";
  }