const hasDuplicate = arr => new Set(arr).size === arr.length? false : true;
/*Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the string.*/


const vowelCount = (str) => {
    const arr = str.toLowerCase().split('');
    const vowelMap = new Map();

    const vowelArr = [];

    for (let char of arr) {
        if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u') {
            vowelArr.push(char);
        }
    }

    for (let vowel of vowelArr) {
        if (vowelMap.has(vowel)) {
            vowelMap.set(vowel, vowelMap.get(vowel) + 1)
        } else {
            vowelMap.set(vowel, 1)
        }
    }

 return vowelMap
}

vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
vowelCount('Colt') // Map { 'o' => 1 }