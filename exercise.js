
// 1. Clone this object

const obj1 = {
    array  : [ 1, 2, 3 ],
    value  : 42,
    object : { value: 7 }
}

const obj2 = {
    array  : [ 1, 2, 3 ],
    value  : 42,
    object : { value: 7 }
}

// 1.1. shallonly (only the upper level)

const shallowClone = { ...obj1 }; 

// 1.2. deeply ( all internal arrays and objects )

const deepClone1 = {
    array:  [ ...obj1.array ],
    value:  obj1.value,
    object: { ...obj1.object } 
}

const deepClone2 = JSON.parse(JSON.stringify(obj1));

const deepClone3 = {};

Object.entries(
    ([key,value])=> {
        if ( Array.isArray(value) )
             deepClone3[key] = [ ...value ];
        else if ( typeof value === 'object' )
             deepClone3[key] = { ...value };
        else deepClone3[key] = value;
    }
);

// 2. Write a function that compares two values (a,b)

const simple1 = { value:3 };
const simple2 = { test:1, value:3 };

function shallowCompare ( a, b ){
    if ( typeof a !== 'object' ){
        return a === b;
    }
    const keys1 = Object.keys(a);
    const keys2 = Object.keys(b);
    const allkeys = [ ...keys1, ...keys2 ];
    //            = ['value','test','value']
    function compare ( equal, key ){
        return equal && ( a[key] === b[key] );
        // 1.  true  &&   a.value === b.value
        // 1.  true  &&         3 === 3
        // 1.  true  && true                   => true

        // 2.  true  &&    a.test === b.test
        // 2.  true  && undefined === 1
        // 2.  true  && false                  => false

        // 3.  false &&   a.value === b.value
        // 3.  false && true                   => false
    }
    const equal = allkeys.reduce( compare, true );
    return equal;
}

// 2.2. Write a function that compares two values (a,b) deeply
//      meaning compare their contents ( hard, hint: recursion )
function deepCompare(a,b) {
    // return JSON.stringify(a) === JSON.stringify(b);
    if ( typeof a !== 'object' ) return a === b;
    const keys1 = Object.keys(a);
    const keys2 = Object.keys(b);
    const allkeys = [ ...keys1, ...keys2 ];
    function compare ( equal, key ){
        if ( ! equal ) return false;
        if ( typeof a[key] === 'object' )
            return deepCompare(a,b);
        return equal && a[key] === b[key];
    }
    const equal = allkeys.reduce( compare, true );
    return equal;
}

// 3.1. Create a function that pushes to the array
//      the object should be used by reference

function pushToReference(o){
    o.array.push('123');
}

const pushedReference = pushToReference(obj);

// 3.2. Create a function that pushed to the array
//      this time the original object and array
//      should not be altered

function pushToReference(o){
    const clone = { ...o };
    clone.array = [ ...o.array, '123' ];
    // clone.array = [ ...o.array ];
    // clone.array.push('123');
    return clone;
}

const pushedClone     = pushToClone(obj);