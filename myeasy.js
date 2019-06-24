// A small js library to make common operations easier by Hosein Hamzenejad - hoseinh.com
//
//

//||||||-- ARRAYS & OBJECTS ||||||//

////// 1- searchArr - using this method you can search a word in an array and get the result as an array //////
'use strict'

var searchArr = function (arr,word){
    const searchedArr = arr.filter((i)=>{
      return i.includes(word);
    });
    return searchedArr;
  }

  ////// 2- searchArrOfObjs - search in an array of objects by object property  //////

var searchArrOfObjs = function (arr, prop, word){
    const searchedArr = arr.filter((i)=>{
      return i[prop].includes(word);
    });
    return searchedArr;
  }

  
  ////// 3- sortArrOfObjs - sort an array of objects by one of object's properties //////


  var sortArrOfObjs = function (arr, key, order='asc'){

      /////

    function compareValues() {
        return function(a, b) {
          if(!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {

            return 0;
          }
      
          const varA = (typeof a[key] === 'string') ?
            a[key].toUpperCase() : a[key];
          const varB = (typeof b[key] === 'string') ?
            b[key].toUpperCase() : b[key];
      
          let comparison = 0;
          if (varA > varB) {
            comparison = 1;
          } else if (varA < varB) {
            comparison = -1;
          }
          return (
            (order == 'desc') ? (comparison * -1) : comparison
          );
        };
      }

      /////

      const sortedArray = arr.sort(compareValues(key,order));

      return sortedArray;
  }

  ////// 4- shuffle - randomize order of items of an array and return a new array //////

  var shuffleArr = function shuffle(arr) {

    let array = [...arr];
    let j, x, i;

    for (i = 0; i < array.length; i++) {
        j = Math.floor(Math.random() * (i + 1));
        x = array[i];
        array[i] = array[j];
        array[j] = x;
    }

    return array;
}

//||||||-- STRING --||||||//

// shorten text by word count
var shortenText = function (text, wordCount){
  if(text.length > wordCount){
      return text.split(' ').slice(0, wordCount).join(' ') + '...';
  }else{
      return text;
  }
}

// format numbers

var formatNumber = function (x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
