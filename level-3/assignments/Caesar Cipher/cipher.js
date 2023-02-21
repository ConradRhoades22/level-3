var readline = require('readline-sync');
var input = readline.question('What phrase would you like to encrypt? ').toLowerCase();
var shift = parseInt(readline.question('How many letters would you like to shift? '));

function ceasarCipher(plaintext, key){
    if(key < 0){return ceasarCipher(plaintext, key + 26);}
var ciphertext = '';


for(var i = 0, n = plaintext.length; i < n; i++){

var c = plaintext[i];

if(c.match(/[a-z]/i)){

var code = plaintext.charCodeAt(i);

if((code >= 65) && (code <= 90)){
c = String.fromCharCode(((code - 65 + key ) % 26) + 65);}
else if((code >= 97) && (code <= 122)){
c = String.fromCharCode(((code - 97 + key ) % 26) + 97);}}
ciphertext += c;}
return ciphertext;	};	 

console.log("Encrypted message: " + ceasarCipher(input, shift) + '\n'); 