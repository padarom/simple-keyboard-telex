let Keyboard = window.SimpleKeyboard.default;
let telex = window.SimpleKeyboardVietnameseTelex.default;

let keyboard = new Keyboard({
  onChange: input => onChange(input),
  onKeyPress: button => onKeyPress(button),
  modules: [
    telex
  ]
});

function onChange(input) {
  document.querySelector(".input").value = input;
  // console.log("Input changed", input);
}

function onKeyPress(button) {
  // console.log("Button pressed", button);

  if (button === "{lock}" || button === "{shift}")
    handleShiftButton();
}

function handleShiftButton() {
  let shiftToggle = keyboard.options.layoutName === "default" ? "shift" : "default";

  keyboard.setOptions({
    layoutName: shiftToggle
  });
}