import { addheaddata,createElement,loadcontent } from "scripts/function.js";

//#region dom content laod event

// Get the current pathname
var pathname = window.location.pathname;

// Event listener for DOM content loaded
document.addEventListener('DOMContentLoaded',function () {

  // Function to add head data
  addheaddata();
  
  // Create header, main, and footer elements
  createElement('header');
  createElement('main');
  createElement('footer');
  
  // Load header, main (based on current pathname), and footer content
  loadcontent('/Pages/header.html', 'header');
  loadcontent(pathname, 'main');
  loadcontent('/Pages/footer.html', 'footer');
})
//#endregion

