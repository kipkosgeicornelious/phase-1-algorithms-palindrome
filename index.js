function isPalindrome(word) {
  // Write your algorithm here
    function stringReverse(string){
      return string.split('').reverse().join('');
  }
  const input = `robot`
  const reversedString=stringReverse(input) 

  function reverseChecker(){
      if(input===reversedString){
          console.log(true)
      }
      else(console.log(false))
  }
  reverseChecker()
}

/* 
  Add your pseudocode here