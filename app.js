

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
    let floatingimage = document.getElementById("floatingimage");

let obj = {
    

    floatingusername,
    floatingemail,
    floatingPassword,
    floatingconfirmPassword,
    floatingAddress,
    floatingdob,
    floatingnumber,
    inputZip,
    inputgender,
    floatingimage

}


    var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


    if (floatingusername === "" || floatingemail === "" || floatingPassword === "" || floatingconfirmPassword === "" || floatingAddress === "" || floatingdob === "" || floatingnumber === "" || inputZip === "" || inputgender === "" || floatingimage === "" || !regex.test(floatingemail)) {
        document.getElementById("verification").style.display = "block"

    }
    else {
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




    var username = localStorage.setItem("username", floatingusername)
    var email = localStorage.setItem("email", floatingemail);
    var pass = localStorage.setItem("password", floatingPassword);
    var address = localStorage.setItem("address", floatingAddress);
    var phone = localStorage.setItem("phnumber", floatingnumber);
    var zipcode = localStorage.setItem("zipcode", inputZip);
    var dob = localStorage.setItem("dob", floatingdob);
    var gender = localStorage.setItem("gender", inputgender);
    
    // console.log(floatingimage[this.spriteCostumeCount],"heloo")


    // bannerImage = document.getElementById('floatingimage');
    // imgData = getBase64Image(bannerImage);
    // localStorage.setItem("imgData", imgData);
    
    // function getBase64Image(img) {
    //     var canvas = document.createElement("canvas");
    //     canvas.width = img.width;
    //     canvas.height = img.height;

    //     var ctx = canvas.getContext("2d");
    //     ctx.drawImage(img,0,0);

    //     var dataURL = canvas.toDataURL("image/png");

    //     return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
    // }


    // var dataImage = localStorage.getItem('imgData');
    // bannerImg = document.getElementById('tableBanner');
    // bannerImg.src = "data:image/png;base64," + dataImage;


}




////// dashboard js//////////




function dashboardlogin() {
    let cemail = document.getElementById("floatingloginemail").value
    let cpass = document.getElementById("floatingloginPassword").value

    if (cemail == localStorage.getItem("email") && cpass == localStorage.getItem("password")) {
        location.replace("dashboard.html")
    } else {
        alert("account not found")
    }
}


function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }


let dashboardusername = document.getElementById("username");
dashboardusername.innerHTML += localStorage.getItem("username");


function deleteacc(){
    let dashDiv = document.getElementById("dashDiv");
        dashDiv.style.display = "none";


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
