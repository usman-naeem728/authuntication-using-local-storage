
document.getElementById("name").innerText = localStorage.getItem("username")
document.getElementById("email").innerText = localStorage.getItem("email")
document.getElementById("pass").innerText = localStorage.getItem("password")
document.getElementById("dob").innerText = localStorage.getItem("dob")
document.getElementById("ph").innerText = localStorage.getItem("phnumber")
document.getElementById("gender").innerText = localStorage.getItem("gender")
document.getElementById("postcode").innerText = localStorage.getItem("zipcode")
document.getElementById("address").innerText = localStorage.getItem("address")

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  function deleteacc(){
    let proDiv = document.getElementById("proDiv");
        proDiv.style.display = "none";


        let lodingpagetimeout = setTimeout(function () {
            let lodingDiv = document.getElementById("lodingDiv");
            lodingDiv.style.display = "block";
        }, 1000)

        setTimeout(function () {
            let loginmsg = document.getElementById("loginmsg")
            loginmsg.style.display = "block";
            let waitingDiv = document.getElementById("waitingDiv")
            waitingDiv.style.display = "none";
        }, 6000)

       
}
