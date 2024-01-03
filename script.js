// Assignment Code
var generateBtn = document.querySelector('#generate');
function generatePassword() {
	var numbers = [
		'A',
		'B',
		'C',
		'D',
		'E',
		'F',
		'G',
		'H',
		'I',
		'J',
		'K',
		'L',
		'M',
		'N',
		'O',
		'P',
		'Q',
		'R',
		'S',
		'T',
		'U',
		'V',
		'W',
		'X',
		'Y',
		'Z',
		'a',
		'b',
		'c',
		'd',
		'e',
		'f',
		'g',
		'h',
		'i',
		'j',
		'k',
		'l',
		'm',
		'n',
		'o',
		'p',
		'q',
		'r',
		's',
		'v',
		't',
		'u',
		'w',
		'x',
		'y',
		'z',
		'1',
		'2',
		'3',
		'4',
		'5',
		'6',
		'7',
		'8',
		'9',
		'0',
		'!',
		'@',
		'#',
		'$',
		'%',
		'^',
		'&',
		'*',
		'(',
		')',
		'_',
		'-',
		'+',
		'=',
		'{',
		'}',
		'[',
		']',
		'|',
		';',
		':',
		'<',
		'>',
		'?',
		'/',
		'~',
		'`',
		' ',
	];

	// create a variable to store the final password
	var finalPassword = '';
	for (var i = 0; i < 8; i++) {
		var randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
		finalPassword += randomNumber;
	}

	// create a for loop that gets 4 random numbers and adds them to the final password variable
	// return the final password
	return finalPassword;
}
// Write password to the #password input
function writePassword() {
	var password = generatePassword();
	var passwordText = document.querySelector('#password');

	passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
