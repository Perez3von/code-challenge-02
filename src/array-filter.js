export function fiveAndGreaterOnly (arr){


    return arr.filter((item)=> {
        return item >=5;
    })
}

export function evensOnly(arr) {
  return arr.filter(evens);
}

export function evens(item){

    if(item % 2 === 0){
        return item;
    }

}

export function fiveCharactersOrFewerOnly(arr){
   
    let myArr = arr.filter(wordLength);

    return myArr.sort((a,b) => a.length - b.length);
}

export function wordLength(word){

    if(word.length <= 5){
        return word;
    }
}

export function peopleWhoBelongToTheIlluminati(arr){
  return arr.filter(person => person.member === true);
}

export function ofAge(arr){
  return arr.filter(person => person.age >= 18);
}