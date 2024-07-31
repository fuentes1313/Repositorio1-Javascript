// these two do the exact same thing!
function forLoopDoubler (array) {
    // it is convention to shorten index to just i in most cases
    for (let i = 0; i < array.length; i++) {
      array[i] = array[i] * 2;
    }
    return array;
  };
  
  function whileLoopDoubler (array) {
    let i = 0;
    while (i < array.length) {
      array[i] = array[i] * 2;
      i++;
    }
    return array;
  };
  
  forLoopDoubler([1, 2, 3]); // => [2,4,6]
  whileLoopDoubler([1, 2, 3]); //=> [2,4,6]