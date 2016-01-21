var pigLatin = function(input) {

  if (beginsVowel(input)) {
    return input + "ay";
  }
  else {
    var firstLetter = input[0]; //firstLetter = b
    var minusFirst = input.slice(1); //minusFirst = and
    //if minusFirst starts with a consonant, then we want to split the first letter off of it and
    if (beginsVowel(minusFirst)) {
      return minusFirst + firstLetter + "ay";
    }
    else {
      var secondLetter = minusFirst[0]; //secondletter = r
      var minusFirstAndSecond = minusFirst.slice(1); //and
      // return minusFirstAndSecond + firstLetter + secondLetter + "ay";
        if (beginsVowel(minusFirstAndSecond)) {
          return minusFirstAndSecond + firstLetter + secondLetter + "ay";  //
        }


        else {
          var thirdLetter = minusFirstAndSecond[0]; //secondletter = s
          var minusFirstSecondThird = minusFirstAndSecond.slice(1); //and
          console.log(thirdLetter);
          return minusFirstSecondThird + firstLetter + secondLetter + thirdLetter + "ay"; //temsysay
      }
    }
  }
};


var beginsVowel = function(phrase) {
  var vowel = ["a","e","i","o","u"];

  if (vowel.includes(phrase[0])) {
    return true;
  } else {
    return false;
  }
};






// user_input = input.split('') ["c", "a", "t"]
// vowels = {{alkjawlekjf}}
//
// cat

// for(i=1; i <= user_input.length; i++){
//   if vowels.include(user_input[i]){
//     user_input.slice(0,i)
//   }
// }



// var pigLatin = function(input) {
//   if (beginsVowel(input)) {
//     return input + "ay";
//     if (var firstLetter = input[0]; var minusFirst = input.slice(1); {
//     return minusFirst + firstLetter + "ay";
//   }) else(
//     var firstTwoLetters = input[0,1];
//     var minusFirstTwo = input.slice(2); {
//     return minusFirstTwo + firstTwoLetters + "ay";
// })
// };

//   var addAyV = function(input) {
//     if (beginsVowel = true) {
//       return input + 'ay';
//     }
//   };
  // var beginsConsonant = function(phrase) {
  //   var consonant = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r",
  // "s", "t", "v", "w", "x", "y", "z"];
//
//       if ( (consonant.includes(phrase[0]) && (consonant.includes(phrase[0,1]) && (consonant.includes(phrase[0,1,2]) && (consonant.includes(phrase[0,1,2,3])) ) {
//         return true;
//       } else {
//         return false;
//       }
//     };

// var output = beginsVowel(userInput);
//
// -->jquery to output the result to the page.



  // var firstLetter = phrase.charAt(0);

//
// hi again! Also look up the charAt() method which might be easier to use than .slice. Youll still need a loop to move thru your array i think.

// Perry


// var pigLatin = function(input) {
//   if (beginsVowel(input)) {
//     return input + "ay";
//   } else {
//     var firstLetter = input[0]; //firstLetter = b
//     var minusFirst = input.slice(1); //minusFirst = rand
//   if (beginsVowel(minusFirst)) {
//     return minusFirst +  + "ay";
//   } else {
//
//
//   }
// };
