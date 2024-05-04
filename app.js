const laundryServices = [
  {
    serviceName: "Wash and Fold",
    servicePrice: 135.0, // Price in rupees
    imageUrl: 'url("images/wash-fold.jpg")',
  },
  {
    serviceName: "Express Laundry Service",
    servicePrice: 185.0, // Price in rupees
    imageUrl: 'url("images/express.jpg")',
  },
  {
    serviceName: "Delicate Fabric Cleaning",
    servicePrice: 220.0, // Price in rupees
    imageUrl: 'url("images/delicate.jpg")',
  },
  {
    serviceName: "Dry Cleaning",
    servicePrice: 260.0, // Price in rupees
    imageUrl: 'url("images/dry-cleaning.jpg")',
  },

  {
    serviceName: "Ironing Only",
    servicePrice: 110.0, // Price in rupees
    imageUrl: 'url("images/iron.jpeg")',
  },
];

let image = document.querySelector(".s-image");
let service = document.querySelector(".service");
//adding service images in div
laundryServices.forEach((element) => {
  let img = document.createElement("div");
  let namePrice = document.createElement("div");
  image.appendChild(img);
  service.appendChild(namePrice);
  img.style.backgroundImage = element.imageUrl;
  namePrice.classList.add("name-n-price");
  namePrice.innerHTML = `
    <p class="service-name">${element.serviceName}</p>
    <p class="service-price">&#8377 ${element.servicePrice.toFixed(2)}</p>
    `;
});

let addBtn = document.querySelector(".add-btn");
addBtn.addEventListener("click", () => {
  if (image.childElementCount >= 1) {
    //maping to cartbox
    let searchText = image.firstChild.style.backgroundImage;
    const menuItem = laundryServices.filter((el) =>
      el.imageUrl.startsWith(searchText)
    );
    addMenu(menuItem);
    //removing image and name
    console.log(image.firstChild.style.backgroundImage);
    console.log(service.firstChild);
    service.removeChild(service.firstChild);
    image.removeChild(image.firstChild);
    menuCards.style.backgroundImage = "none";
  }
});

let skipBtn = document.querySelector(".skip-btn");
skipBtn.addEventListener("click", () => {
  let el = image.firstChild;
  let nameEl = service.firstChild;
  if (image.childElementCount >= 2) {
    image.removeChild(image.firstChild);
    service.removeChild(service.firstChild);
    image.appendChild(el);
    service.appendChild(nameEl);
  } else if (image.childElementCount == 1) {
    image.removeChild(image.firstChild);
    service.removeChild(service.firstChild);
  }
});
let menuCards = document.querySelector(".menu-items");
const addMenu = (menuItem) => {
  menuItem.map((menu) => {
    let card = document.createElement("div");
    card.classList.add("products");
    menuCards.appendChild(card);
    card.innerHTML = `
          <p class="s-no">${menuCards.childElementCount}</p>
          <p class="service">${menu.serviceName}</p>
          <p class="price">&#8377 ${menu.servicePrice.toFixed(2)}</p>
          `;

    let price = menu.servicePrice;
    total(price);
    lengthCount = menuCards.childElementCount;
    submit(lengthCount);
  });
};
//total amount for the items in the cart
let totalAmount = document.querySelector(".total-amt");
let sum = 0;

function total(price) {
  sum += price;
  console.log(sum);
  totalAmount.innerHTML = `<big> &#8377 <b >${sum.toFixed(2)} </b></big>`;
}

let submitBtn = document.querySelector(".submit-btn");
//Submit button
let count = 0;
console.log(count);
function submit(lengthCount) {
  if (count == 0 && lengthCount == undefined) {
    submitBtn.style.opacity = "0.5";
  } else {
    submitBtn.style.opacity = "1";
  }
  console.log(lengthCount);
}
submit();
let msg = document.querySelector(".add-msg");
submitBtn.addEventListener("click", () => {
  if (submitBtn.style.opacity == "0.5") {
    msg.innerHTML = `<span class="material-symbols-outlined"> info </span>Add items to
    the cart`;
    msg.style.visibility = "visible";
  } else {
    msg.innerHTML = `<span class="material-symbols-outlined"> info </span>
    Thankyou for contacting, we will get back to you soon`;

    msg.style.color = "green";
  }
});
