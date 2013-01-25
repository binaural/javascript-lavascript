// return the number of vowels in a string

var word = prompt("Type in a word or a sentence to find the number of vowels");
var amount = 0;
for (i=0;i<word.length;i++){
    if (word[i] === 'a'|| word [i] === 'e' || word[i]==='i' || word[i] ==='o' || word[i] === 'u'){
        amount = amount + 1;
    }

}
alert("There are " + amount + " vowels in " + word);

