export function firstLetter (word:String){
    let correct = word[0].toUpperCase() + word.substring(1);
    return correct;
};