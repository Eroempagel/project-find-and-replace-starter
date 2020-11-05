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

// replace function separate from event listeners and nested loops?
// dunno yet
// supposedly separating things out is part of best practices

// use innerHTML and the string method `replace()` to replace the search string with the replacement.
function myReplace(str, before, after) {
  return str.replace(before, after);
}

//Add a click event listener to the `replaceAllButton`.
replaceAllButton.addEventListener("click", function () {
  console.log("button clicked");

  // On click but outside of a loop, assign the values of the two input textboxes.
  const searchValue = findInput.value;
  const replaceValue = replaceInput.value;
  console.log(searchValue);
  console.log(replaceValue);

  let itemsReplaced = 0;
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

        itemsReplaced++;
      }
    }
  }

  // Stretch 1 Display for the user the number of items replaced during the most recent replace button press
  let paragraphElement = document.createElement("p");
  let itemsReplacedElement = document.createTextNode(
    itemsReplaced +
      " instances of " +
      searchValue +
      " have been replaced with  " +
      replaceValue +
      "."
  );
  paragraphElement.appendChild(itemsReplacedElement);
  bodySectionElement = document.querySelector("body");
  bodySectionElement.append(paragraphElement);
});

//  Stretch 2 create a "Replace Once" button which only replaces the first occurrence of the found search string.
let replaceOnceButtonElement = document.createElement("button");
replaceOnceButtonElement.className = "replace-once-button";
replaceOnceButtonElement.id = "button-two";
replaceOnceButtonElement.append("Replace Once");

const replaceOnceButton = document.querySelector(".replace-once-button");
replaceOnceButtonElement.addEventListener("click", function () {
  console.log("button clicked");
  const searchValue = findInput.value;
  const replaceValue = replaceInput.value;
  console.log(searchValue);
  console.log(replaceValue);
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
        ourCellElements.innerHTML = myReplace(
          ourCellElements.innerHTML,
          searchValue,
          replaceValue
        );
        console.log(
          myReplace(ourCellElements.innerHTML, searchValue, replaceValue)
        );
      } else {
        break;
      }
    }
    break;
  }
});

fieldsetSectionElement = document.querySelector("fieldset");
fieldsetSectionElement.append(replaceOnceButtonElement);

// not part of Stretch just figured id throw this in
let resetButtonElement = document.createElement("button");
resetButtonElement.className = "reset-button";
resetButtonElement.id = "button-three";
resetButtonElement.append("Reset Button");

resetButtonElement.addEventListener("click", function () {
  //  On click, reset the page.
  location.reload();
  return false;
});

fieldsetSectionElement = document.querySelector("fieldset");
fieldsetSectionElement.append(resetButtonElement);

// Stretch 3 Add a checkbox which toggles case-insensitive searches.
let checkBoxElement = document.createElement("input");
checkBoxElement.type = "checkbox";
checkBoxElement.className = "case-insensitive-searches-checkbox";
checkBoxElement.id = "checkbox-one";
let paragraphElement = document.createElement("p");
let checkBoxTextElement = document.createTextNode(
  "Case Insensitive Searches: "
);
paragraphElement.appendChild(checkBoxTextElement);

bodySectionElement = document.querySelector("body");
bodySectionElement.append(checkBoxElement);
bodySectionElement.append(paragraphElement);
