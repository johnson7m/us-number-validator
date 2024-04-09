const userInput = document.getElementById('user-input');
const checkButton = document.getElementById('check-btn');
const clearButton = document.getElementById('clear-btn');
const results = document.getElementById('results-div');



/*
1 555-555-5555 regex7
1 (555) 555-5555 regex2 done
1(555)555-5555 regex3 done
1 555 555 5555 regex6 
5555555555 regex1 done
555-555-5555 regex5 done
(555)555-5555 regex4 done
*/

const regex1 = /(?:^|\s)[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9](?:$|\s)/i;
const regex2 = /(?:^|\s)[1] \([0-9][0-9][0-9]\) [0-9][0-9][0-9]\-[0-9][0-9][0-9][0-9](?:$|\s)/i;
const regex3 = /(?:^|\s)[1]\([0-9][0-9][0-9]\)[0-9][0-9][0-9]\-[0-9][0-9][0-9][0-9](?:$|\s)/i;
const regex4 = /(?:^|\s)\([0-9][0-9][0-9]\)[0-9][0-9][0-9]\-[0-9][0-9][0-9][0-9](?:$|\s)/i;
const regex5 = /(?:^|\s)(?:^|\s)[0-9][0-9][0-9]\-[0-9][0-9][0-9]\-[0-9][0-9][0-9][0-9](?:$|\s)/i;
const regex6 = /(?:^|\s)[1] [0-9][0-9][0-9] [0-9][0-9][0-9] [0-9][0-9][0-9][0-9](?:$|\s)/;
const regex7 = /(?:^|\s)[1] [0-9][0-9][0-9]\-[0-9][0-9][0-9]\-[0-9][0-9][0-9][0-9](?:$|\s)/i;
const regex8 = /(?:^|\s)[1][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9](?:$|\s)/i;
const lettersAndSymbolsRegex = /[a-z]/gi;


const formatList = [regex1, regex2, regex3, regex4, regex5, regex6, regex7, regex8];


checkButton.addEventListener('click', () => {
  const num = (userInput.value)
  if (userInput.value === '') {
    alert('Please provide a phone number')
  };

  console.log(num);

  const isValid = (num) => formatList.some((regex) => regex.test(num));
  return results.innerText = isValid(num)
    ? `Valid US number: ${num}`
    : `Invalid US number: ${num} `
});
clearButton.addEventListener('click', () => {
  results.innerText = '';
  userInput.value = '';
});