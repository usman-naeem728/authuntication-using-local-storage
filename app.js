let image_input = document.querySelector("#floatingimage");

image_input.addEventListener("change", function () {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
        let uploaded_image = reader.result;
        document.querySelector("#display-image").style.backgroundImage = `url(${uploaded_image})`;
    });
    reader.readAsDataURL(this.files[0]);
});


function signup() {

    let floatingusername = document.getElementById("floatingusername").value;
    let floatingemail = document.getElementById("floatingemail").value;
    let floatingPassword = document.getElementById("floatingPassword").value;
    let floatingconfirmPassword = document.getElementById("floatingconfirmPassword").value;
    let floatingAddress = document.getElementById("floatingAddress").value;
    let floatingdob = document.getElementById("floatingdob").value;
    let floatingnumber = document.getElementById("floatingnumber").value;
    let inputZip = document.getElementById("inputZip").value;
    let inputgender = document.getElementById("inputgender").value;
    let floatingimage = document.getElementById("floatingimage").value;


    // function validateEmail() {
    // var eEntered = document.getElementById("address").value;
    // if (!(eEntered.match(emailCorrectPattern))) {
        // alert("Please correct email address");
        // return false;
        // }
        // }
        
        var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


    if (floatingusername === "" || floatingemail === "" || floatingPassword === "" || floatingconfirmPassword === "" || floatingAddress === "" || floatingdob === "" || floatingnumber === "" || inputZip === "" || inputgender === "" || floatingimage === "" || !regex.test(floatingemail) ) {
      document.getElementById("verification").style.display = "block"

    }   
    else{
        let signupdiv = document.getElementById("signupdiv");
        signupdiv.style.display = "none";


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

    



    var email = localStorage.setItem("email", floatingemail);
    var pass = localStorage.setItem("password", floatingPassword);
}
 function dashboardlogin(){
    let cemail = document.getElementById("floatingloginemail").value
    let cpass = document.getElementById("floatingloginPassword").value
    
    if(cemail ==  localStorage.getItem("email")  && cpass ==  localStorage.getItem("password")){
           location.replace("dashboard.html")
    }else{
        alert("account not found")
    }
 }
