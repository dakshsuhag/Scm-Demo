let globaloffer = 4; //percentage
document.getElementById("discountPercentage").innerText = globaloffer ;
let storedProducts = JSON.parse(localStorage.getItem("product")) || [] ;
if(storedProducts.length==0)
{
    storedProducts = [
        {
            id:1,
            imageurl:"https://tse1.mm.bing.net/th/id/OIP._r__0Xx27N6Y8NgZcN4CUQAAAA?rs=1&pid=ImgDetMain&o=7&rm=3",
            title:"Ford Bronco New Edition",
            price:"42259",
            favourite:false,
        },
        {
            id:2,
            imageurl:"https://img.goodfon.com/wallpaper/big/9/54/ford-bronco-4-door-big-bend-black-diamond-package-ford-wallp.webp",
            title:"Ford Bronco Big Bend",
            price:"70636",
            favourite:false,
        },
        // {
        //     id:
        //     imageurl:
        //     title:

        // }
    ];
    localStorage.setItem("product",JSON.stringify(storedProducts));
}
const container = document.getElementById("product container");

// 💸 Calculate Discounted Price
function getDiscountedPrice(price){
    return (price - (price*globaloffer)/100).toFixed(2);
}
// ❤ Toggle Favourite
function toggleFavourite(id) {
  storedProducts = storedProducts.map(product => {
    if (product.id === id) product.favourite = !product.favourite;
    return product;
  });
  localStorage.setItem('product', JSON.stringify(storedProducts));
  displayProducts();
}
// container.innerHTML = `<img src="https://tse1.mm.bing.net/th/id/OIP._r__0Xx27N6Y8NgZcN4CUQAAAA?rs=1&pid=ImgDetMain&o=7&rm=3",
// alt="Ford Bronco Raptor"/>
// <div class='card-body'>
// <h2>
// Ford Bronco Raptor
// </h2>
// <div class='price'>$40845</div>
// </div><br/>`
// {
// container.innerHTML += `<img src="https://img.goodfon.com/wallpaper/big/9/54/ford-bronco-4-door-big-bend-black-diamond-package-ford-wallp.webp",
// alt="Ford Bronco Big Bend"/>
// <div class='card-body'>
// <h2>
// Ford Bronco Big Bend
// </h2>
// <div class='price'>$79995</div>
// </div><br/>`
// }
// 🖼 Display Products
function displayProducts() {
    console.log('this is displayProducts function');
  container.innerHTML = '';
  storedProducts.forEach(product => {
    const discountedPrice = getDiscountedPrice(product.price);
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
      <img src="${product.imageurl}" alt="${product.title}">
      <div class="card-body">
        <h3>${product.title}</h3>
        <p>${product.description}</p>
        <div class="price">₹${discountedPrice} <span style="text-decoration: line-through; color: grey;">₹${product.price}</span></div>
        <button class="like-btn ${product.favourite ? 'liked' : ''}" onclick="toggleFavourite(${product.id})">
            &#10084;
        </button>
      </div>
      <br/>
    `;
    container.appendChild(card);
  });
}

// Initial Display
displayProducts();