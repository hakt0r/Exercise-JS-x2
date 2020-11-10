
// 1. Clone this object

const obj1 = {
    array  : [ 1, 2, 3 ],
    value  : 42,
    object : { value: 7 }
}

// 1.1. shallowly (only the upper level)

const shallowClone = ???; 

// 1.2. deeply ( all internal arrays and objects )

const deepClone = ???

// 2. Write a function that compares two values (a,b)

function shallowCompare ( a, b ){
    // ...
}

// 2.2. Write a function that compares two values (a,b) deeply
//      meaning compare their contents ( hard, hint: recursion )
function deepCompare() {
    // ...
}

// 3.1. Create a function that pushes to the array
//      the object should be used by reference

const pushedClone     = pushToClone(obj);

// 3.2. Create a function that pushed to the array
//      this time the original object and array
//      should not be altered

const pushedReference = pushToReference(obj);