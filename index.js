(function () {
  let view = document.querySelector("#screen");
  let clearButton = document.querySelector(".clear_btn");
  let equalsTo = document.querySelector(".equal");
  let backSpace = document.querySelector(".backspace");
  let buttons = document.querySelectorAll(".btn");

  buttons.forEach((button) => {
    button.addEventListener("click", function (e) {
      value = e.target.dataset.sum;
      view.value += value;
    });
  });

  backSpace.addEventListener("click", function (e) {
    view.value = view.value.slice(0, -1);
  });

  clearButton.addEventListener("click", function (e) {
    view.value = "";
  });

  equalsTo.addEventListener("click", function (e) {
    if (view.value === "") {
        view.value = ""
    }else {
        view.value = eval(view.value);
}
  });

})();
