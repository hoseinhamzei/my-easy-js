## My Easy Js
a simple library to make common js tasks easier

**Installing**

    npm install my-easy-js

**usage**

1- search for a word in an array:

    import {searchArr} from 'my-easy-js';
    //
    const arr = ['john','jack','bob','jane','boby']
    searchArr(arr,'bob') // ['bob','boby']

2- search in an array of objects:

    import {searchArrOfObjs} from 'my-easy-js';
    //
    const arr = [
    {name:'bob',id:1}
    {name:'jack',id:2}
    {name:'john',id:3}
    {name:'boby',id:4}
    ]
    const newArr = searchArrOfObjs(arr,'name','bob');

3- sort an array of objects by one of object's properties:

    import {sortArrOfObjs} from 'my-easy-js';
    //
    const arr = [
    {name:'bob',id:1}
    {name:'jack',id:2}
    {name:'john',id:3}
    {name:'boby',id:4}
    ]
    const newArr = sortArrOfObjs(arr,'id');

4-shuffle - randomize order of items of an array and return a new array

    import {shuffleArr} from 'my-easy-js';
    //
    const arr = ['john','jack','bob','jane','boby']
    const newArr = shuffleArr(arr);
    
5-shorten string by word count

    
    import {shortenText} from 'my-easy-js'
    //
    const longString = 'a very long string to be shortened!'
    const newString = shortenText(longString,4); //a very long string...
6- format a number with thousands separators

    import {formatNumber} from 'my-easy-js'
    //
    const num = formatNumber(120000000) //120,000,000

new methods to be added
.
.
.
    







    

