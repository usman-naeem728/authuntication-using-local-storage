document.getElementById("floatingimage").addEventListener("change", function () {
    const reader = new FileReader();

    reader.addEventListener("load", () => {
        localStorage.setItem("image1", reader.result)
    })
    
    reader.readAsDataURL(this.files[0]);
});

