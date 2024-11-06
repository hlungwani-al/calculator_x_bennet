(function () {
  let view = document.querySelector("#screen");
  let clearButton = document.querySelector(".clear_btn");
  let equalsTo = document.querySelector(".equal");
  let backSpace = document.querySelector(".backspace");
  let buttons = document.querySelectorAll(".btn");

  buttons.forEach((button) => {
    button.addEventListener("click", function (e) {
      value = e.target.dataset.sum;
      if(view.value === '' && ['+', '/', '*'].includes(value)) {
        return
      }
      if(view.value === '-' && value.endsWith('-')) {
        return
      }

      const lastOperator = view.value.slice(-1)
      if(['+', '/', '*', '-'].includes(value) && ['+', '/', '*', '-'].includes(lastOperator)) {
        view.value = view.value.slice(0, -1)
        view.value += value;
        return
      }

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
      view.value = "";
    } else {
      view.value = eval(view.value);
    }
  });
})();
