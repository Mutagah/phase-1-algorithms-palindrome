function isPalindrome(word) {
  // Write your algorithm here
  const lowerCasedString = word.toLowerCase()
  const splitString = lowerCasedString.split("")
  const splitReverseString = splitString.reverse()
  const joinString = splitReverseString.join("");
  if(lowerCasedString !== joinString)
  {
    return false
  }else
    return true
  }


/* 
  Add your pseudocode here
  Write your string input
  convert to lowerCase
  reverse the string 
  compare the string both reversed and reversed
  return true is string is equal 
  false if string is not equal
  */

/*
  Add written explanation of your solution here
Converted my input to lowercase
Splitted my string to be in form of an array
Reversed the splitted string
Joined the string and compared the original and reversed string
 */


// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
