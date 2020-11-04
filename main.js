// You should NOT change the HTML or CSS in this project (at least until you reach
// the bonus objectives). Focus on the JavaScript.

const findInput = document.querySelector(".find-input");
const replaceInput = document.querySelector(".replace-input");
const replaceAllButton = document.querySelector(".replace-all-button");

// The following variable holds your OUTER ARRAY of row elements.
// Later you will need an OUTER LOOP to loop over the individual elements within
// this array.
const rowElements = document.querySelectorAll(".row");

// When you call the function belwo, it will get and return an INNER ARRAY
// containing the cell elements for a given row.
// Call this function from WITHIN your row elements loop. Then you will, in turn,
// need to loop over the resulting cell elements. But where should this whole
// NESTED LOOP go? Think through the user's experience: when should WHAT happen?
function getCellElements(currentRowElement) {
  return currentRowElement.querySelectorAll(".cell");
}

// YOUR CODE GOES HERE

// One last thing: dedicate very careful attention to using variables and
// naming them accurately.
// And when you change the value you are assigning to a variable, don't
// forget to consider changing the name to reflect the change you made! It
// is very easy to get confused when you are working inside NESTED LOOPS.
// The best of us do. And unnecessary confusion during the process of
// developing your code means wasted time.
//
// The time-cost of structuring and naming things well is FAR less than the
// time-cost of ignoring the quality and readability of your code.
//
// You can, of course, remove any comments in this starter project once
// you have read them, if you prefer.

//Add a click event listener to the `replaceAllButton`.
replaceAllButton.addEventListener("click", function () {
  console.log("button clicked");

  // On click but outside of a loop, assign the values of the two input textboxes.
  const searchValue = findInput.value;
  const replaceValue = replaceInput.value;
  console.log(searchValue);
  console.log(replaceValue);

  // replace function separate from nested loops?
  // dunno yet
  // supposedly separating things out is part of best practices

  // use innerHTML and the string method `replace()` to replace the search string with the replacement.
  function myReplace(str, before, after) {
    return str.replace(before, after);
  }

  // Write a loop which loops over the `rowElements` array.
  // In all your loops, have distinct counters like 'i' or 'j'
  for (i = 0; i < rowElements.length; i++) {
    // Inside this loop, use the `getCellElements()` function
    console.log(getCellElements(rowElements[i]));
    // assign the resulting array of cell elements to a variable
    let nestedCellArr = getCellElements(rowElements[i]);
    // Write a nested loop which loops over the array of cell elements.
    // In all your loops, have distinct counters like 'i' or 'j'
    for (j = 0; j < nestedCellArr.length; j++) {
      console.log(nestedCellArr[j]);
      let ourCellElements = nestedCellArr[j];
      // For each cell element, check if a cell contains the user-provided search string.
      // Use the string method `includes()`.
      if (ourCellElements.innerHTML.includes(searchValue)) {
        console.log(" A match was found!");
        // calling the outer replace function which is utilizing the replace() method
        // and assigning it to the cell
        // I knew if i could get it working in console.log() that I was missing something simple lol
        ourCellElements.innerHTML = myReplace(
          ourCellElements.innerHTML,
          searchValue,
          replaceValue
        );
        console.log(
          myReplace(ourCellElements.innerHTML, searchValue, replaceValue)
        );
      }
    }
  }
});
