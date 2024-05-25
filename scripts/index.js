import { addheaddata,createElement,loadcontent } from "./function.js";

//#region dom content laod event

// Get the current pathname
var pathname = window.location.pathname;
var currenturl=location.href;

var dir=currenturl.substring(0,currenturl.lastIndexOf('/')+1);
console.log(dir);
console.log('success');

// Event listener for DOM content loaded
document.addEventListener('DOMContentLoaded',function () {

  
  // Function to add head data
  addheaddata();
  
  // Create header, main, and footer elements
  createElement('header');
  createElement('main');
  createElement('footer');
  
  // Load header, main (based on current pathname), and footer content
  loadcontent(currenturl + 'Pages/header.html', 'header');
  loadcontent(pathname, 'main');
  loadcontent(currenturl + 'Pages/footer.html', 'footer');
})
//#endregion

