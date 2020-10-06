var text = document.getElementById("text");

text.addEventListener("input", () => {
  var ptext = text.value;

  if (ptext === "") {
    document.querySelector("body").style.background = "White";
  } else {
    document.querySelector("body").style.background = ptext;
  }
});
