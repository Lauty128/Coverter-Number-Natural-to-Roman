let inputNumber = document.querySelector("#inputNumber");
let inputRomanNumeral = document.querySelector("#inputRomanNumeral");
let submitNumber = document.querySelector("#submitNumber");
let numberResult = []

document.querySelector(".exitErrorCard").addEventListener("click", () => {
  document.querySelector(".errorCard").classList.add("errorCardOpacityNone")
  setTimeout(() => { document.querySelector(".errorCard").classList.remove("errorCardEnter") }, 500)
})


class ConvertNumber {

  administrateConvert = (numberIndex, numberToConvert) => {
    if (numberToConvert == 0) { return; }
    switch (numberIndex) {
      case 0:
        this.number1(numberToConvert)
        break;
      case 1:
        this.allHighersTo10(numberToConvert, "X", "L", 10)
        break;
      case 2:
        this.allHighersTo10(numberToConvert, "C", "D", 100)
        break;
    }
  }

  number1 = (numberToConvert) => {
    if (numberToConvert != 0) {
      numberResult.push(listNumbers[numberToConvert]);
    }
  }

  allHighersTo10 = (numberToConvert, lyrics, half, quantity) => {
    if (numberToConvert >= 1 && numberToConvert < 4) {
      numberResult.push(this.repeatNumber(numberToConvert, lyrics))
      return
    }
    if (numberToConvert >= 6 && numberToConvert < 9) {
      numberResult.push(`${half}${this.repeatNumber(numberToConvert - 5, lyrics)}`)
      return
    }
    numberResult.push(listNumbers[numberToConvert * quantity]);
  }

  repeatNumber = (amount, lyrics) => {
    let result = "";
    for (let i = 0; i < amount; i++) {
      result += lyrics;
    }
    return result
  }
}


let convertNumber = new ConvertNumber();

submitNumber.addEventListener("click", () => {
  if (inputNumber.value == 1000) {
    document.querySelector(".contentResult b").textContent = "M";
    return;
  }
  if (inputNumber.value > 1000 || inputNumber.value.includes(".") || inputNumber.value < 0) {
    document.querySelector(".contentResult b").textContent = "";
    inputNumber.value = 0;
    document.querySelector(".errorCard").classList.remove("errorCardOpacityNone")
    document.querySelector(".errorCard").classList.add("errorCardEnter")
    return;
  }
  let indexNumber = inputNumber.value.length - 1;
  numberResult = []
  document.querySelector(".contentResult b").textContent = ""
  let indexList = 0;
  for (let i = indexNumber; i >= 0; i--) {
    convertNumber.administrateConvert(indexList,
      inputNumber.value[i])
    indexList += 1;
  }
  numberResult.reverse().forEach(numeralRoman => {
    document.querySelector(".contentResult b").textContent += numeralRoman;
  })

})



