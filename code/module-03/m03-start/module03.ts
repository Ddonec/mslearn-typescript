/* Module 3: Implement interfaces in TypeScript
   Lab Start  */

/*  EXERCISE 1
    TODO: Declare the Loan interface. */

/*  TODO: Declare the ConventionalLoan interface. */

/*  TODO: Update the calculateInterestOnlyLoanPayment function. */

interface loan {
   principle: number;
   interestRate: number;
}

interface ConventionalLoan extends loan {
   mounths: number;
}

function calculateInterestOnlyLoanPayment(Value:loan):string {
   // Calculates the monthly payment of an interest only loan
   let interest = Value.interestRate / 1200; // Calculates the Monthly Interest Rate of the loan
   let payment;
   payment = Value.principle * interest;
   return "The interest only loan payment is " + payment.toFixed(2);
}


// let interestOnlyPayment = calculateInterestOnlyLoanPayment({principle: 30000, interestRate: 5});
// console.log(interestOnlyPayment);     //* Returns "The interest only loan payment is 125.00"


/*  TODO: Update the calculateConventionalLoanPayment function. */

function calculateConventionalLoanPayment(value:ConventionalLoan) {
   // Calculates the monthly payment of a conventional loan
   let interest = value.interestRate / 1200; // Calculates the Monthly Interest Rate of the loan
   let payment;
   payment = (value.principle * interest) / (1 - Math.pow(1 / (1 + interest), value.mounths));
   return "The conventional loan payment is " + payment.toFixed(2);
}

let interestOnlyPayment = calculateInterestOnlyLoanPayment({interestRate: 5, principle: 30000});
let conventionalPayment = calculateConventionalLoanPayment({principle: 30000, interestRate: 5, mounths: 180});

console.log(interestOnlyPayment); //* Returns "The interest only loan payment is 125.00"
console.log(conventionalPayment); //* Returns "The conventional loan payment is 237.24"
