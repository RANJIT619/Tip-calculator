const billInput = document.getElementById('billTotalInput')
const tipInput = document.getElementById('tipInput')
const numberOfPeopleDiv = document.getElementById('numberOfPeople')
const perPersonTotalDiv = document.getElementById('perPersonTotal')

let numberOfPeople = Number(numberOfPeopleDiv.innerText);

const calculateBill = () => {

const bill = Number(billInput.value);

const tipPercent = Number(tipInput.value) / 100;

const tipAmount = Number(bill * tipPercent);

const total = Number(bill + tipAmount);

console.log(total);

const perPersonTotal = total / numberOfPeople;

perPersonTotalDiv.innerText = `${perPersonTotal.toFixed(2)}`


}

const increasePeople = () => {
numberOfPeople += 1

numberOfPeopleDiv.innerText = numberOfPeople;

calculateBill();


}


const decreasePeople = () => {
    // guard clause
    // if amount is 1 or less simply return
    // (a.k.a you can't decrease the number of people to 0 or negative!)
    if (numberOfPeople <= 1) {
      return
    }
  
    // decrement the amount
    numberOfPeople -= 1
  
    // update the DOM with the new number of people
    numberOfPeopleDiv.innerText = numberOfPeople
  
    // calculate the bill based on the new number of people
    calculateBill()

}
