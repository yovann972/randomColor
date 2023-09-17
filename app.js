import { randomizer, setToast } from "./functions.js";

const container = document.querySelector("#container-color");
const div = document.querySelector("#colored-div");
const generateBtn = document.querySelector("#generateBtn");
const rgbCode = document.querySelector("#rgbCode");
const toast = document.querySelector("#snackbar");

generateBtn.addEventListener("click", () => {
  const rgbValue =
    (div.style.backgroundColor = `rgb(${randomizer()},${randomizer()},${randomizer()})`);
  rgbCode.innerHTML = `${rgbValue}<img src='./images/icons8-copie-24.png' width='16' height='16' alt='icon-copy'>`;
  container.appendChild(div);

  rgbCode.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(rgbValue);
      setToast(toast);
    } catch (error) {
      console.log(error.message);
    }
  });
});
