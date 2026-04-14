// This is a small program. There are only two sections. This first section is what runs
// as soon as the page loads.
$(document).ready(function () {
  render($("#display"), image);
  $("#apply").on("click", applyAndRender);
  $("#reset").on("click", resetAndRender);
});

/////////////////////////////////////////////////////////
//////// event handler functions are below here /////////
/////////////////////////////////////////////////////////

// this function resets the image to its original value; do not change this function
function resetAndRender() {
  reset();
  render($("#display"), image);
}

// this function applies the filters to the image and is where you should call
// all of your apply functions
function applyAndRender() {
  // Multiple TODOs: Call your apply function(s) here



  // do not change the below line of code
  render($("#display"), image);
}

/////////////////////////////////////////////////////////
// "apply" and "filter" functions should go below here //
/////////////////////////////////////////////////////////

// TODO 1, 2, 3 & 5: Create the applyFilter function here
function applyFilter(filterFunction) {
  applyAndRender();
  for (var i = 0; i < image.length; i++) {
    for (var j = 0; j < image[i].length; j++) {
      console.log(image[i][j]);
      var pixel = image[i][j];
      var pixelArray = rgbStringToArray(pixel);
      //pixelArray[RED] = 200;
      filterFunction(pixelArray);
      var updatedPixel = rgbArrayToString(pixelArray);
      image[i][j] = updatedPixel;
    }
  }
}

applyFilter(reddify);

// TODO 9 Create the applyFilterNoBackground function


// TODO 6: Create the keepInBounds function


// TODO 4: Create reddify filter function
function reddify(pixelArray) {
  pixelArray[RED] += 100;
}

var testArray = [100, 100, 100];
reddify(testArray);
console.log(testArray); // Should show [200, 100, 100]

// TODO 7 & 8: Create more filter functions


// CHALLENGE code goes below here
