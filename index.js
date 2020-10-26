let amount = '';
let period = '';
let salary = '';
let percent = '';
let overpayment = '';
let refund = '';

function giveAloan(){
  amount = +prompt('Please enter the amount you want to take (from 5000 to 100000): ');
  if (amount === 0) {
    return;
  }
  while (amount < 5000 || amount > 100000) {
    alert ('We cannot give a loan for such an amount, please enter a different amount!')
    amount = +prompt('Please enter the amount you want to take (from 5000 to 100000): ');
  }
  
  period = +prompt('Please enter a period (from 1 month to 36 months): ');
  
  while (period < 1 || period > 36){
    alert ('We cannot give a loan for such a period, please enter a different period!')
    period = +prompt('Please enter a period (from 1 month to 36 months): ');
  }
  
  salary = +prompt('Please, enter your salary: ', '');
  
  if (amount >= 5000 && amount < 20000) {
    percent = 0.06;
  }
  if (amount >= 20000 && amount < 40000) {
    percent = 0.05;
  }
  if (amount >= 40000 && amount < 60000) {
    percent = 0.04;
  }
  if (amount >= 60000 && amount < 80000) {
    percent = 0.03;
  }
  if (amount >= 80000 && amount <= 100000) {
    percent = 0.02;
  }
  
  overpayment = amount * percent * period;
  refund = amount + overpayment;
  
  if (salary >= refund / period * 1.5 ){
    alert ('The amount you will have to pay: ' + refund)
  } else {
    alert ('We can not give you a loan')
  }
}
giveAloan();


