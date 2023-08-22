document.addEventListener("DOMContentLoaded", () => {
  const image = document.getElementById("pic");
  const input = document.getElementById("upload");

  input.addEventListener("change", () => {
    if (input.files && input.files[0]) {
      const reader = new FileReader();

      reader.onload = function (e) {
        image.src = e.target.result;
      };

      reader.readAsDataURL(input.files[0]);
    }
  });
});
