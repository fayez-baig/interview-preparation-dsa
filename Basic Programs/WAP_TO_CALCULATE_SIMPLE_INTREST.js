// Formulla
// SI = principalAmount * annualIntrest * timePeriod/100
// SI = P * R * T/100

const calculateSimpleIntrest = (principalAmount, annualIntrest, timePeriod) =>
  (principalAmount * annualIntrest * timePeriod) / 100;

console.log(`Simple Intrest= ${calculateSimpleIntrest(10, 10, 10)}`);
