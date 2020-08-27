function checkForSpam (str) { 
    'use strict';
    let message = str.toLowerCase().includes('spam') || str.toLowerCase().includes('sale');
    return message;
  }
  
  console.log(checkForSpam('Latest technology news')); // false
  
  console.log(checkForSpam('JavaScript weekly newsletter')); // false
  
  console.log(checkForSpam('Get best sale offers now!')); // true
  
  console.log(checkForSpam('[SPAM] How to earn fast money?')); // true