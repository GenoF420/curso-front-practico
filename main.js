const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuBurger = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');
const productDetailContainer = document.querySelector('#productDetail');
const productDetailCloseIcon = document.querySelector('.product-detail-close');

const imgDetailAside = document.querySelector('#imgDetailAside');


const productInfo = document.querySelector(".product-info");
const productInfoParrafos = productInfo.querySelectorAll('p');
const myOrderContent = document.querySelector('.my-order-content');
const products = document.querySelector('#products');
const totalOrder = document.querySelector('#totalOrder');
const numTotalCarrito = document.querySelector('#total-unidad-carrito');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuBurger.addEventListener('click', toggleMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);
let totalPrice=0.00;
let totalUnidadCarrito = 0;


function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
    shoppingCartContainer.classList.add('inactive');
}

function toggleMenu() {
    mobileMenu.classList.toggle('inactive');
    shoppingCartContainer.classList.add('inactive');

    closeProductDetailAside();
}


function toggleCarritoAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    if(!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }

    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');

    if(!isProductDetailClosed) {
        productDetailContainer.classList.add('inactive');
    }

    

    shoppingCartContainer.classList.toggle('inactive');
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
}

function openProductDetailAside(img, productPrice, productName, description) {
    imgDetailAside.src=img.src;
    productInfoParrafos[0].textContent = '$'+productPrice;
    productInfoParrafos[1].textContent = productName.textContent;
    productInfoParrafos[2].textContent = description;

    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.remove('inactive');

}

function closeProductDetailAside() {
    productDetailContainer.classList.add('inactive');
}

function addToCart(img, productName, productPrice) {
    const shoppingCart = document.createElement('div');
    shoppingCart.classList.add('shopping-cart');

    const figureImage = document.createElement('figure');
    const image = document.createElement('img');
    image.src=img.src;

    const name = document.createElement('p');
    name.textContent=productName.textContent;
    const price = document.createElement('p');
    price.textContent='$'+productPrice;

    const closeIcon = document.createElement('img');
    closeIcon.src='./icons/icon_close.png';
    closeIcon.addEventListener('click', () => {
        deleteProductShoppingCart(productPrice, shoppingCart);
        
    })

    figureImage.appendChild(image);

    shoppingCart.append(figureImage, name, price, closeIcon);
    
    products.append(shoppingCart);
    totalOrderCost(productPrice);
}

function deleteProductShoppingCart(productPrice, shoppingCart) {
    totalPrice-=productPrice;
    totalUnidadCarrito-=1;
    totalOrder.textContent='$'+totalPrice;
    numTotalCarrito.textContent=totalUnidadCarrito;
    shoppingCart.remove();

}


function totalOrderCost(price) {
    totalPrice=totalPrice+price;
    totalUnidadCarrito+=1;
    totalOrder.textContent='$'+totalPrice;
    numTotalCarrito.textContent=totalUnidadCarrito;
}




const productList = [];
productList.push ({
    name:'Bike',
    price: 12700,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio doloremque natus quo est nulla? Mollitia debitis quo tempore velit, iste ullam',
});
productList.push ({
    name:'Bicycle helmet',
    price: 1200,
    image: 'https://assets.specialized.com/i/specialized/60821-104_HLMT_ALIGN-II-HLMT-MIPS-CE-BLK-BLKREFL-S-M_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio doloremque natus quo est nulla? Mollitia debitis quo tempore velit, iste ullam',
});
productList.push ({
    name:'Bicycle helmet',
    price: 1600,
    image: 'https://m.media-amazon.com/images/I/61eExL-rIAL._AC_SL1001_.jpg',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio doloremque natus quo est nulla? Mollitia debitis quo tempore velit, iste ullam',
});
productList.push ({
    name:'Bicycle helmet',
    price: 1500,
    image: 'https://assets.specialized.com/i/specialized/60822-140_HLMT_CHAMONIX-HLMT-MIPS-CE-MRN-M-L_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio doloremque natus quo est nulla? Mollitia debitis quo tempore velit, iste ullam',
});
productList.push ({
    name:'Seat',
    price: 300,
    image: 'https://m.media-amazon.com/images/I/61e+sZ9rgNL._AC_SL1500_.jpg',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio doloremque natus quo est nulla? Mollitia debitis quo tempore velit, iste ullam',
});
productList.push ({
    name:'Tennis Mountain Bike',
    price: 2200,
    image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8ea578f6c07847fca2d0ac85011d7f1f_9366/Tenis_para_Mountain_Bike_Five_Ten_Freerider_Negro_FW2835_01_standard.jpg',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio doloremque natus quo est nulla? Mollitia debitis quo tempore velit, iste ullam',
});
productList.push ({

    name:'Sunglasses',
    price: 800,
    image: 'https://cdn.siroko.com/s/files/1/1220/6874/products/gafas-siroko-tech-k3s-london-lateral/1200x/crop_center.jpg?v=1635209602',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio doloremque natus quo est nulla? Mollitia debitis quo tempore velit, iste ullam',
});
productList.push ({

    name:'Sunglasses',
    price: 600,
    image: 'https://cdn.siroko.com/s/files/1/1220/6874/products/siroko-tech-k3s-clearfog-lente-antiniebla-frontal/1200x/crop_center.jpg?v=1635209603',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio doloremque natus quo est nulla? Mollitia debitis quo tempore velit, iste ullam',
});
productList.push ({
    name:'Bicycle seat bag',
    price: 876,
    image: 'https://m.media-amazon.com/images/I/81k2Gmal+VL._AC_SL1500_.jpg',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio doloremque natus quo est nulla? Mollitia debitis quo tempore velit, iste ullam',
}); 
productList.push ({
    name:'Bike',
    price: 12700,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio doloremque natus quo est nulla? Mollitia debitis quo tempore velit, iste ullam',
});
productList.push ({
    name:'Bicycle helmet',
    price: 1200,
    image: 'https://assets.specialized.com/i/specialized/60821-104_HLMT_ALIGN-II-HLMT-MIPS-CE-BLK-BLKREFL-S-M_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio doloremque natus quo est nulla? Mollitia debitis quo tempore velit, iste ullam',
});
productList.push ({
    name:'Bicycle helmet',
    price: 1600,
    image: 'https://m.media-amazon.com/images/I/61eExL-rIAL._AC_SL1001_.jpg',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio doloremque natus quo est nulla? Mollitia debitis quo tempore velit, iste ullam',
});
productList.push ({
    name:'Bicycle helmet',
    price: 1500,
    image: 'https://assets.specialized.com/i/specialized/60822-140_HLMT_CHAMONIX-HLMT-MIPS-CE-MRN-M-L_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio doloremque natus quo est nulla? Mollitia debitis quo tempore velit, iste ullam',
});
productList.push ({
    name:'Seat',
    price: 300,
    image: 'https://m.media-amazon.com/images/I/61e+sZ9rgNL._AC_SL1500_.jpg',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio doloremque natus quo est nulla? Mollitia debitis quo tempore velit, iste ullam',
});
productList.push ({
    name:'Tennis Mountain Bike',
    price: 2200,
    image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8ea578f6c07847fca2d0ac85011d7f1f_9366/Tenis_para_Mountain_Bike_Five_Ten_Freerider_Negro_FW2835_01_standard.jpg',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio doloremque natus quo est nulla? Mollitia debitis quo tempore velit, iste ullam',
});
productList.push ({

    name:'Sunglasses',
    price: 800,
    image: 'https://cdn.siroko.com/s/files/1/1220/6874/products/gafas-siroko-tech-k3s-london-lateral/1200x/crop_center.jpg?v=1635209602',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio doloremque natus quo est nulla? Mollitia debitis quo tempore velit, iste ullam',
});
productList.push ({

    name:'Sunglasses',
    price: 600,
    image: 'https://cdn.siroko.com/s/files/1/1220/6874/products/siroko-tech-k3s-clearfog-lente-antiniebla-frontal/1200x/crop_center.jpg?v=1635209603',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio doloremque natus quo est nulla? Mollitia debitis quo tempore velit, iste ullam',
});
productList.push ({
    name:'Bicycle seat bag',
    price: 876,
    image: 'https://m.media-amazon.com/images/I/81k2Gmal+VL._AC_SL1500_.jpg',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio doloremque natus quo est nulla? Mollitia debitis quo tempore velit, iste ullam',
}); 

function renderProducts(arr) {
    for (product of arr) {
        const description = product.description;
        const productPriceClean = product.price;

        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const img = document.createElement('img');
        img.src=product.image;
        
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
    
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        const productInfoFigure = document.createElement('figure');
        const productInfoImg = document.createElement('img');
        productInfoImg.setAttribute('src', './icons/bt_add_to_cart.svg');

        productInfoImg.addEventListener('click', () => {
            addToCart(img, productName, productPriceClean);
        });

        img.addEventListener('click', () => {
            openProductDetailAside(img, productPriceClean, productName, description);
        });
    
        productInfoFigure.append(productInfoImg);
        productDiv.append(productPrice, productName);
    
        productInfo.append(productDiv,productInfoFigure);
    
        productCard.append(img, productInfo);
    
        cardsContainer.append(productCard);

        
    }
}

renderProducts(productList);



// <div class="product-detail-close">
// <img src="./icons/icon_close.png" alt="close">
// </div>
// <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike">
// <div class="product-info">
// <p>$35,00</p>
// <p>Bike</p>
// <p>With its practical position, this bike also fulfills a decorative function, add your hall or workspace.</p>
// <button class="primary-button add-to-cart-button">
//   <img src="./icons/bt_add_to_cart.svg" alt="add to cart">
//   Add to cart
// </button>
// </div>