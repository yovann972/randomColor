function randomizer() {
  const random = Math.floor(Math.random() * 255);
  return random;
}

function setToast(element) {
  element.className = "show";
  setTimeout(() => {
    element.className = element.className.replace("show", " ");
  }, 3000);
}

export { randomizer, setToast };
