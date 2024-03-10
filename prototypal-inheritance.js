/* 
There are three functions `Activity`, `Payment`, and `Refund`. 

1. function Activity will take a property `amount` which should be set to it's member variable `amount`.
    It will have two methods in it's Prototype, `getAmount`, and `setAmount`.
    a) getAmount will return the amount in it's member variable.
    b) setAmount will accept a property `value`. 
        i) If value is less then or equal to 0, it will return false.
        ii) If value is greater than 0, it will update the member variable amount with value and return true.

2. function Payment will accept two properties, `amount`, and `receiver`. It will inherit it's parent Activity.
    amount will be updated in Activity's context and receiver will be stored in Payment's member variable `receiver`.
    It will have two methods in it's prototype, `getReceiver`, and `setReceiver`.
    a) getReceiver will return the value of it's member variable `receiver`.
    b) setReceiver will accept a variable `value` and set that value in it's member variable `receiver`.

3. function Refund will accept two properties, `amount`, and `sender`. It will inherit it's parent Activity.
    amount will be updated in Activity's context and sender will be stored in Refund's member variable `sender`.
    It will have two methods in it's prototype, `getSender`, and `setSender`.
    a) getSender will return the value of it's member variable `sender`.
    b) setSender will accept a variable `value` and set that value in it's member variable `sender`.
*/


function Activity(amount) {
  this.amount = amount;
} //001

Activity.prototype.constructor = Activity;

Activity.prototype.getAmount = function() {
  return this.amount;
}

Activity.prototype.setAmount = function(value) {
  if(value <= 0) return false;
  this.amount = value;
  return true;
}



function Payment(amount, receiver) {
  this.receiver = receiver;
  Activity.call(this, amount);
}

Payment.prototype = Object.create(Activity.prototype);
Payment.prototype.constructor = Payment;

Payment.prototype.getReceiver = function() {
  return this.receiver;
}

Payment.prototype.setReceiver = function(value) {
  this.receiver = value;
}



function Refund(amount, sender) {
  this.sender = sender;
  Activity.call(this, amount);
}

Refund.prototype = Object.create(Activity.prototype); // 002
Refund.prototype.constructor = Refund;

Refund.prototype.getSender = function() {
  return this.sender;
}

Refund.prototype.setSender = function(value) {
  this.sender = value;
}


const payment = new Payment(5000, "John");
payment.setAmount(4000);
console.log(`Amount: ${payment.getAmount()}, Receiver: ${payment.getReceiver()}`)
payment.setReceiver("Wick");
console.log(`Amount: ${payment.getAmount()}, Receiver: ${payment.getReceiver()}`)
payment.setAmount(10000)
console.log(`Amount: ${payment.getAmount()}, Receiver: ${payment.getReceiver()}`)
