let image_input = document.querySelector("#floatingimage");

image_input.addEventListener("change", function () {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
        let uploaded_image = reader.result;
        document.querySelector("#display-image").style.backgroundImage = `url(${uploaded_image})`;
    });
    reader.readAsDataURL(this.files[0]);
});
