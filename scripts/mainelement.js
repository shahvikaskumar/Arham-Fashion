import { addproduct, logincheck } from "./function.js";
import { Products, kids_bottom, kids_inner, kids_onepc, kids_top, men_jeans, men_pants, men_shirts, men_trousers, women_dresses, women_gowns, women_pants, women_skirts } from "./storage.js";

//#region load mainelement as per pages
export function mainelement(url) {
    const productMap = {
        '/Pages/Product/Women/all.html': [
            { selector: '#women_dressespage', data: women_dresses },
            { selector: '#women_pantspage', data: women_pants },
            { selector: '#women_skirtspage', data: women_skirts },
            { selector: '#women_gownspage', data: women_gowns }
        ],
        '/Pages/Product/Men/all.html': [
            { selector: '#men_shirtspage', data: men_shirts },
            { selector: '#men_pantspage', data: men_pants },
            { selector: '#men_trouserspage', data: men_trousers },
            { selector: '#men_jeanspage', data: men_jeans }
        ],
        '/Pages/Product/Kids/all.html': [
            { selector: '#kids_toppage', data: kids_top },
            { selector: '#kids_bottompage', data: kids_bottom },
            { selector: '#kids_onepcpage', data: kids_onepc },
            { selector: '#kids_innerpage', data: kids_inner }
        ]
    };

    const productLists = productMap[url];
    if (productLists) {
        productLists.forEach(({ selector, data }) => {
            const productlist = document.querySelectorAll(selector);
            if (productlist) {
                addproduct(productlist, data);
            }
        });
    }

    switch (url) {
        case '/Pages/login.html':
            const loginc = document.querySelector('#login');
            if (loginc) {
                loginc.addEventListener('click', logincheck);
            }
            break;
        case '/':
            const productlist = document.querySelectorAll('#product');
            if (productlist) {
                addproduct(productlist, Products);
            }
            break;
        case '/Pages/Product/product.html':
            var productlistWomen = document.querySelectorAll('#women_all');
            if (productlistWomen) {
                addproduct(productlistWomen, women_dresses);
                addproduct(productlistWomen, women_pants);
                addproduct(productlistWomen, women_skirts);
                addproduct(productlistWomen, women_gowns);
            }

            var productlistMen = document.querySelectorAll('#men_all');
            if (productlistMen) {
                addproduct(productlistMen, men_shirts);
                addproduct(productlistMen, men_pants);
                addproduct(productlistMen, men_trousers);
                addproduct(productlistMen, men_jeans);
            }

            var productlistKids = document.querySelectorAll('#kids_all');
            if (productlistKids) {
                addproduct(productlistKids, kids_top);
                addproduct(productlistKids, kids_bottom);
                addproduct(productlistKids, kids_onepc);
                addproduct(productlistKids, kids_inner);
            }
            break;
        case '/Pages/Product/Women/dresses.html':
        case '/Pages/Product/Women/pants.html':
        case '/Pages/Product/Women/skirts.html':
        case '/Pages/Product/Women/gowns.html':
        case '/Pages/Product/Men/shirts.html':
        case '/Pages/Product/Men/pants.html':
        case '/Pages/Product/Men/trousers.html':
        case '/Pages/Product/Men/jeans.html':
        case '/Pages/Product/Kids/top.html':
        case '/Pages/Product/Kids/bottom.html':
        case '/Pages/Product/Kids/onepc.html':
        case '/Pages/Product/Kids/inner.html':
            const productList = document.querySelectorAll('#product');
            if (productList) {
                switch (url) {
                    case '/Pages/Product/Women/dresses.html':
                        addproduct(productList, women_dresses);
                        break;
                    case '/Pages/Product/Women/pants.html':
                        addproduct(productList, women_pants);
                        break;
                    case '/Pages/Product/Women/skirts.html':
                        addproduct(productList, women_skirts);
                        break;
                    case '/Pages/Product/Women/gowns.html':
                        addproduct(productList, women_gowns);
                        break;
                    case '/Pages/Product/Men/shirts.html':
                        addproduct(productList, men_shirts);
                        break;
                    case '/Pages/Product/Men/pants.html':
                        addproduct(productList, men_pants);
                        break;
                    case '/Pages/Product/Men/trousers.html':
                        addproduct(productList, men_trousers);
                        break;
                    case '/Pages/Product/Men/jeans.html':
                        addproduct(productList, men_jeans);
                        break;
                    case '/Pages/Product/Kids/top.html':
                        addproduct(productList, kids_top);
                        break;
                    case '/Pages/Product/Kids/bottom.html':
                        addproduct(productList, kids_bottom);
                        break;
                    case '/Pages/Product/Kids/onepc.html':
                        addproduct(productList, kids_onepc);
                        break;
                    case '/Pages/Product/Kids/inner.html':
                        addproduct(productList, kids_inner);
                        break;
                }
            }
            break;
    }
}
//#endregion
