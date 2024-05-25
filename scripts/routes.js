import { loadcontent } from "./function.js";

//#region array function for routing
function addclickelements(elements,pageurl){        
    elements.forEach(element => {
        element.addEventListener('click',function() {            
            loadcontent(pageurl,'main','Y');
        })
    });
}
//#endregion

//#region routes define and click elements
export function routing() {

    var routes = {
        '#loginpage': 'Pages/login.html',
        '#cartpage': 'Pages/cart.html',
        '#homepage': '/index.html',
        '#allproduct': '/Pages/Product/product.html',
        '#contactpage': '/Pages/contact.html',
        '#all_women': '/Pages/Product/Women/all.html',
        '#women_dresses': '/Pages/Product/Women/dresses.html',
        '#women_pants': '/Pages/Product/Women/pants.html',
        '#women_skirts': '/Pages/Product/Women/skirts.html',
        '#women_gowns': '/Pages/Product/Women/gowns.html',
        '#all_men': '/Pages/Product/Men/all.html',
        '#men_shirts': '/Pages/Product/Men/shirts.html',
        '#men_pants': '/Pages/Product/Men/pants.html',
        '#men_trousers': '/Pages/Product/Men/trousers.html',
        '#men_jeans': '/Pages/Product/Men/jeans.html',
        '#all_kid': '/Pages/Product/Kids/all.html',
        '#kid_tops': '/Pages/Product/Kids/top.html',
        '#kid_bottoms': '/Pages/Product/Kids/bottom.html',
        '#kid_onepcs': '/Pages/Product/Kids/onepc.html',
        '#kid_inners': '/Pages/Product/Kids/inner.html'
        
    };
    
    for (var id in routes) {   
             
        var elements = document.querySelectorAll(id);        
        addclickelements(elements, routes[id]);        
        
    }
}
//#endregion
