/*
 * Shuffles array in place.
 * @param {Array} a items An array containing the items.
 */
function shuffle(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
}

/**
 * Shuffles array in place. ES6 version
 * @param {Array} a items An array containing the items.
 */
function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

var arr = [1, 2, 3, 4, 5, 6];

//Fisrt Step Array Shuffle Show
document.write(shuffle(arr));
document.getElementById("first-array-zero-index").innerHTML = arr[0];
document.getElementById("first-array-first-index").innerHTML = arr[1];
document.getElementById("first-array-second-index").innerHTML = arr[2];
document.getElementById("first-array-third-index").innerHTML = arr[3];
document.getElementById("first-array-fourth-index").innerHTML = arr[4];
document.getElementById("first-array-fifth-index").innerHTML = arr[5];

//Numbers in Array Will be Randomly Generated
//let arr =[a, b, c, d, e, f];
document.write("<br>" + arr + "<br>");


//Second Step Array Swap
document.write("Second Step array swap" + "<br>");
// Swapping element at index 0 and index 1
if (arr[0] > arr[1]) {
  [arr[0], arr[1]] = [arr[1], arr[0]];
  document.write(arr + "<br>");
  document.getElementById("second-array-zero-index").innerHTML = arr[0];
  document.getElementById("second-array-first-index").innerHTML = arr[1];
} else {
  [arr[0], arr[1]] = [arr[0], arr[1]];
  document.write(arr + "<br>");

  document.getElementById("second-array-zero-index").innerHTML = arr[0];
  document.getElementById("second-array-first-index").innerHTML = arr[1];
}

// Swapping element at index 2 and index 3

if (arr[2] > arr[3]) {
  [arr[2], arr[3]] = [arr[3], arr[2]];
  document.write(arr + "<br>");
  document.getElementById("second-array-second-index").innerHTML = arr[2];
  document.getElementById("second-array-third-index").innerHTML = arr[3];
} else {
  [arr[2], arr[3]] = [arr[2], arr[3]];
  document.write(arr + "<br>");
  document.getElementById("second-array-second-index").innerHTML = arr[2];
  document.getElementById("second-array-third-index").innerHTML = arr[3];
}

// Swapping element at index 4 and index 5

if (arr[4] > arr[5]) {
  [arr[4], arr[5]] = [arr[5], arr[4]];
  document.write(arr + "<br>");
  document.getElementById("second-array-fourth-index").innerHTML = arr[4];
  document.getElementById("second-array-fifth-index").innerHTML = arr[5];

} else {
  [arr[4], arr[5]] = [arr[4], arr[5]];
  document.write(arr + "<br>");
  document.getElementById("second-array-fourth-index").innerHTML = arr[4];
  document.getElementById("second-array-fifth-index").innerHTML = arr[5];
}
// Print the array
document.write(arr + "<br>");
//Second Step Array Swap End





//---------Third Step Array SWAP------------//
document.write("Second Step Array Swap");
//Before Swap
[arr[1], arr[2]] = [arr[2], arr[1]];
[arr[3], arr[4]] = [arr[4], arr[3]];
document.write("<br>" + arr);
//Before Swap End

//After swap Again
// Swapping element at index 0 and index 1
if (arr[0] > arr[1]) {
  [arr[0], arr[1]] = [arr[1], arr[0]];
  document.write("<br>" + arr + "<br>");
  document.getElementById("Third-array-zero-index").innerHTML = arr[0];
  document.getElementById("Third-array-first-index").innerHTML = arr[1];
} else {
  [arr[0], arr[1]] = [arr[0], arr[1]];
  document.write(arr + "<br>");
  document.getElementById("Third-array-zero-index").innerHTML = arr[0];
  document.getElementById("Third-array-first-index").innerHTML = arr[1];
}

// Swapping element at index 2 and index 3

if (arr[2] > arr[3]) {
  [arr[2], arr[3]] = [arr[3], arr[2]];
  document.write(arr + "<br>");
} else {
  [arr[2], arr[3]] = [arr[2], arr[3]];
  document.write(arr + "<br>");
}

// Swapping element at index 4 and index 5

if (arr[4] > arr[5]) {
  [arr[4], arr[5]] = [arr[5], arr[4]];
  document.write(arr + "<br>");
} else {
  [arr[4], arr[5]] = [arr[4], arr[5]];
  document.write(arr + "<br>");
}
// Print the array
document.write(arr + "<br>");

//-------Third Step Array Swap End-----//




//--------Fourth Step Array Swap-----------//
document.write("Third Step Array Swap");
//Before Swap//
[arr[1], arr[2]] = [arr[2], arr[1]];
[arr[3], arr[4]] = [arr[4], arr[3]];
document.write("<br>" + arr + "<br>");
//Before Swap End//

//After swap Again
// Swapping element at index 0 and index 1
if (arr[0] > arr[1]) {
  [arr[0], arr[1]] = [arr[1], arr[0]];
  document.write("<br>" + arr + "<br>");
} else {
  [arr[0], arr[1]] = [arr[0], arr[1]];
  document.write(arr + "<br>");
}

// Swapping element at index 2 and index 3
if (arr[2] > arr[3]) {
  [arr[2], arr[3]] = [arr[3], arr[2]];
  document.write(arr + "<br>");
} else {
  [arr[2], arr[3]] = [arr[2], arr[3]];
  document.write(arr + "<br>");
}

// Swapping element at index 4 and index 5

if (arr[4] > arr[5]) {
  [arr[4], arr[5]] = [arr[5], arr[4]];
  document.write(arr + "<br>");
} else {
  [arr[4], arr[5]] = [arr[4], arr[5]];
  document.write(arr + "<br>");
}
// Print the array
document.write(arr + "<br>");

//--------Fourth Step Array Swap End-------//








//------Fifth Step Swap Array Swap-------//

document.write("<br>" + "Fourth Step Swap" + "<br>");
if (arr[1] > arr[2]) {
  [arr[1], arr[2]] = [arr[2], arr[1]];
  document.write(arr + "<br>");
} else {
  [arr[1], arr[2]] = [arr[1], arr[2]];
  document.write(arr);
}

if (arr[3] > arr[4]) {
  [arr[3], arr[4]] = [arr[4], arr[3]];
  document.write(arr);
} else {
  [arr[3], arr[4]] = [arr[3], arr[4]];
  document.write(arr);
}
//-----------Fifth Step Array End----------//







//-----------Sixth Step Array Swapping-----------------//
document.write("<br>" + "fifth Step Array Swap" + "<br>");
if (arr[2] > arr[3]) {
  [arr[2], arr[3]] = [arr[3], arr[2]];
  document.write(arr);
} else {
  [arr[2], arr[3]] = [arr[2], arr[3]];
  document.write(arr);
}

document.write("<br>" + " Final sorted array is " + "<br>" + arr);
//-----------Sixth Step Array Swap End------------//

document.getElementById("zero-index").innerHTML = arr[5];
document.getElementById("first-index").innerHTML = arr[6];
