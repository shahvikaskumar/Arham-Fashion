import { routing } from "./routes.js";
import { mainelement } from "./mainelement.js";

//#region Create Element

//Function to create an HTML element and append it to the document body.
export function createElement(elementType) {
  const element = document.createElement(elementType)
  element.id = elementType
  document.body.appendChild(element)
}
//#endregion

//#region Add head Data

// Function to add meta tags, title, favicon, stylesheets, and scripts to the document head.
export function addheaddata() {

  var charsetMeta = document.createElement('meta');
  charsetMeta.setAttribute('charset', 'UTF-8');

  var viewportMeta = document.createElement('meta');
  viewportMeta.setAttribute('name', 'viewport');
  viewportMeta.setAttribute('content', 'width=device-width, initial-scale=1.0');

  var titleElement = document.createElement('title');
  titleElement.textContent = "Arham Fashion";

  var faviconElement = document.createElement('link');
  faviconElement.rel = 'icon';
  faviconElement.type = 'image/png';
  faviconElement.href = '/Images/favicon.png';

  var link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = "/Bootstrap/css/bootstrap.min.css";

  var linkfaicon = document.createElement('link');
  linkfaicon.rel = 'stylesheet';
  linkfaicon.href = "/fontawesome/css/all.min.css";

  var scriptElement = document.createElement('script');
  scriptElement.defer = true;
  scriptElement.src = "/Bootstrap/js/bootstrap.bundle.min.js";

  document.head.appendChild(charsetMeta);
  document.head.appendChild(viewportMeta);
  document.head.appendChild(titleElement);
  document.head.appendChild(faviconElement);
  document.head.appendChild(link);
  document.head.appendChild(linkfaicon);
  document.head.appendChild(scriptElement);

}
//#endregion

//#region Load Content

// Function to load content from a URL and insert it into a specified element.
export function loadcontent(url, targetid, changeurl) {

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      return response.text()
    })
    .then(data => {
      document.getElementById(targetid).innerHTML = data;
      if ( targetid === 'footer') {
        routing();
      } else
        if (targetid === 'main') {

          if (changeurl === "Y") {
            history.pushState({ page: url }, null, url);
          }
          else {
            var container = document.querySelectorAll('#container');
            container[0].remove();
          }
          mainelement(url);
        }
    })
    .catch(error => {
      console.error('Error fetching content:', error)
    })
}
//#endregion

//#region create Product Card

// Function to create a product card element.
function createproductcard(product) {

  const card = document.createElement('div');
  card.classList.add(...product.classarray, 'py-3');
  card.innerHTML = `
        <div class="card text-center">
            <div class="h-50">
            <img class="card-img-top img-fluid" src=${product.image_url} alt=${product.name}>
            </div>
            <div class="card-body mt-4">
                <h5 class="card-title fs-4 fw-bold">${product.name}</h5>
                <h6 class="card-text fs-5 fw-bold">₹ ${product.price}</h6>
                <p class="text-truncate">${product.detail}</p>
                <a href="#" class="btn btn-warning fs-5 fw-bold mt-4 rounded-4" >
                <i class="fa fa-shopping-cart m-2" aria-hidden="true"></i>
                Add to Cart
                </a>
            </div>
        </div>
    `;

  return card;
}
//#endregion

//#region add product function

// Function to add product cards to the specified product list elements.
export function addproduct(productlist,itemarray) { 

  itemarray.forEach((product, index) => {
    const card = createproductcard(product);
    const cloneCard = card.cloneNode(true);
    
    if(productlist.length > 1){
    const listIndex = Math.floor(index / 4);
    productlist[listIndex].appendChild(cloneCard);
    }
    else if (productlist.length===1)
    {
      productlist[0].appendChild(cloneCard);
    }
  });

}
//#endregion

//#region Login Check

// Function to perform login validation.
export function logincheck() {
  var email = document.getElementById('email');
  var password = document.querySelector('#password');

  if (email.value === 'admin@admin.com' && password.value === '123456') {
    alert('Login Successfully');
  } else {
    alert('Invalid email or password. Please try again.');
  }
}
//#endregion

