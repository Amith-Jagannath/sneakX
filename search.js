const displayer = document.querySelector(".displayer");
const input_shoeName = document.querySelector("#search-input");
const search_btn = document.querySelector("#search-btn");
const search_box = document.querySelector(".search_box");
const shoes_database = [
  {
    productId: "1",
    name: "Sneaker",
    img: {
      img1: "/images/shoe1a.webp",
      img2: "/images/shoe1b.webp",
      img3: "/images/shoe1c.webp",
    },
    description: "White Sneaker For Men Sneakers For Men  (White)",
    cost: "2300/-",
    costInVal: 2300,
  },
  {
    productId: "2",
    name: "Bruton",
    img: {
      img1: "/images/shoe2a.webp",
      img2: "/images/shoe2b.webp",
      img3: "/images/shoe2c.webp",
    },
    description: "Modern Trendy Shoes Sneakers For Men  (Orange, Grey)",
    cost: "8900/-",
    costInVal: 8900,
  },
  {
    productId: "3",
    name: "Numenzo",
    img: {
      img1: "/images/shoe3a.webp",
      img2: "/images/shoe3b.webp",
      img3: "/images/shoe3c.webp",
    },
    description: "Numenzo Black Sneaker For Men Sneakers For Men  (Black)",
    cost: "4500/-",
    costInVal: 4500,
  },
  {
    productId: "4",
    name: "Puma",
    img: {
      img1: "/images/shoe4a.webp",
      img2: "/images/shoe4b.webp",
      img3: "/images/shoe4c.webp",
    },
    description: "Wired Rapid Sneakers For Men  (Black)",
    cost: "2807/-",
    costInVal: 2807,
  },
  {
    productId: "5",
    name: "Puma",
    img: {
      img1: "/images/shoe5a.webp",
      img2: "/images/shoe5b.webp",
      img3: "/images/shoe5c.webp",
    },
    description: "Perforated Low Sneakers For Men  (Blue)",
    cost: "1599/-",
    costInVal: 1599,
  },
  {
    productId: "6",
    name: "Sparx",
    img: {
      img1: "/images/shoe6c.webp",
      img2: "/images/shoe6b.webp",
      img3: "/images/shoe6a.webp",
    },
    description: "SM 651 Walking Shoes For Men  (Black, Red)",
    cost: "797/-",
    costInVal: 797,
  },
];

function renderCards(item) {
  let html = `<div class="container col-lg-4 py-4">
  <div class="card col-lg-4" style="width: 18rem">
    <img src=${item.img.img1} class="card-img-top" alt="shoes" />
    <div class="card-body">
      <h5 class="card-title">${item.name}</h5>
      <p class="card-text">
        ${item.description}
      </p>
      <h3>${item.cost}</h3>
     
      <h3 class="product_id hidden">${item.productId}</h3>
    </div>
  </div>
</div>`;
  displayer.insertAdjacentHTML("beforeend", html);
}
search_btn.addEventListener("click", function () {
  console.log(input_shoeName.value);

  displayer.innerHTML = "";
  for (let i = 0; i < shoes_database.length; i++) {
    if (
      input_shoeName.value.toLowerCase() == shoes_database[i].name.toLowerCase()
    )
      renderCards(shoes_database[i]);
  }
  const shoe_items = document.querySelectorAll(".container");

  shoe_items.forEach((item) => {
    item.addEventListener("click", function () {
      let product = item.querySelector(".product_id").innerHTML;
      console.log(product);
      const searchObject = shoes_database.find(
        (shoe) => shoe.productId == product
      );
      console.log(searchObject);

      displayer.innerHTML = "";
      search_box.classList.add("hidden");

      render_shoe_details(searchObject);
      return;
    });
  });
});

for (let i = 0; i < shoes_database.length; i++) {
  renderCards(shoes_database[i]);
}
const shoe_detail = document.querySelector(".shoe_details");
function render_shoe_details(item) {
  let html = `<div class="row p-5" align="center">
  <div class="container w-25 h-25">
    <div
      id="carouselExampleIndicators"
      class="carousel slide my-5"
      data-bs-ride="carousel"
    >
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          class="active bg-dark"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
          class="bg-dark"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
          class="bg-dark"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src=${item.img.img1} class="d-block w-100" alt="shoe1" />
        </div>
        <div class="carousel-item">
          <img src=${item.img.img2} class="d-block w-100" alt="shoe2" />
        </div>
        <div class="carousel-item">
          <img src=${item.img.img3} class="d-block w-100" alt="shoe3" />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type=""
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
  <div class="col-lg-6">
    <div class="items">
      <h3>${item.name}</h3>
      <p>
        ${item.description}
      </p>
      <h3>${item.cost}</h3>
      <ul>
        <li><i class="fa-solid fa-star"></i></li>
        <li><i class="fa-solid fa-star"></i></li>
        <li><i class="fa-solid fa-star"></i></li>
        <li><i class="fa-solid fa-star"></i></li>
        <li><i class="fa-solid fa-star"></i></li>
      </ul>
    </div>

    <div class="offers">
      <h3>Available offers</h3>
      <ul>
        <li>
          <i class="fa-solid fa-tag"></i>
          Bank Offer10% off on SBI Credit Card, up to ₹1,750, on orders of
          ₹5000
        </li>
        <li>
          <i class="fa-solid fa-tag"></i>
          Bank Offer10% off on SBI Credit Card EMI Transactions, up to
          ₹2,250, on orders of ₹5000
        </li>
        <li>
          <i class="fa-solid fa-tag"></i>
          Bank OfferAdditional ₹750 discount on SBI Credit Card
        </li>
        <li>
          <i class="fa-solid fa-tag"></i>
          Partner OfferSign up for Flipkart Pay Later
        </li>
      </ul>
      <div class="sizes">
        <ul>
          <li><i class="fa-solid fa-7"></i></li>

          <li><i class="fa-solid fa-8"></i></li>
          <li><i class="fa-solid fa-9"></i></li>
          <li><i class="fa-solid fa-6"></i></li>
        </ul>
      </div>
    </div>
  </div>
</div>`;
  shoe_detail.insertAdjacentHTML("beforeend", html);
}

const shoe_items = document.querySelectorAll(".card");
console.log(shoe_items);
shoe_items.forEach((item) => {
  item.addEventListener("click", function () {
    console.log("yttd");
    let product = item.querySelector(".product_id").innerHTML;
    console.log(product);
    const searchObject = shoes_database.find(
      (shoe) => shoe.productId == product
    );
    console.log(searchObject);

    displayer.innerHTML = "";
    search_box.classList.add("hidden");

    render_shoe_details(searchObject);
  });
});

/*********************SORT BY ***************************************8 */
shoes_database.sort(function (a, b) {
  if (a.costInVal < b.costInVal) {
    return -1;
  }
  if (a.costInVal > b.costInVal) {
    return 1;
  }
  return 0;
});

const handleClick = function (e) {
  e.preventDefault();
  if (e.target.classList.contains("dropdown")) console.log("yes");
};
const detailed_display = () => {
  shoe_items.forEach((item) => {
    item.addEventListener("click", function () {
      let product = item.querySelector(".product_id").innerHTML;
      console.log(product);
      const searchObject = shoes_database.find(
        (shoe) => shoe.productId == product
      );
      console.log(searchObject);

      displayer.innerHTML = "";
      search_box.classList.add("hidden");

      render_shoe_details(searchObject);
      return;
    });
  });
};
const lowToHigh = document.getElementById("lowToHigh");
const highToLow = document.getElementById("highToLow");
lowToHigh.addEventListener("click", function () {
  shoes_database.sort(function (a, b) {
    if (a.costInVal < b.costInVal) {
      return -1;
    }
    if (a.costInVal > b.costInVal) {
      return 1;
    }
    return 0;
  });
  displayer.innerHTML = "";
  for (let i = 0; i < shoes_database.length; i++) {
    renderCards(shoes_database[i]);
  }
  const shoe_items = document.querySelectorAll(".container");

  shoe_items.forEach((item) => {
    item.addEventListener("click", function () {
      let product = item.querySelector(".product_id").innerHTML;
      console.log(product);
      const searchObject = shoes_database.find(
        (shoe) => shoe.productId == product
      );
      console.log(searchObject);

      displayer.innerHTML = "";
      search_box.classList.add("hidden");

      render_shoe_details(searchObject);
      return;
    });
  });
});
highToLow.addEventListener("click", function () {
  shoes_database.sort(function (a, b) {
    if (a.costInVal > b.costInVal) {
      return -1;
    }
    if (a.costInVal < b.costInVal) {
      return 1;
    }
    return 0;
  });
  displayer.innerHTML = "";
  for (let i = 0; i < shoes_database.length; i++) {
    renderCards(shoes_database[i]);
  }
  const shoe_items = document.querySelectorAll(".container");

  shoe_items.forEach((item) => {
    item.addEventListener("click", function () {
      let product = item.querySelector(".product_id").innerHTML;
      console.log(product);
      const searchObject = shoes_database.find(
        (shoe) => shoe.productId == product
      );
      console.log(searchObject);

      displayer.innerHTML = "";
      search_box.classList.add("hidden");

      render_shoe_details(searchObject);
      return;
    });
  });
});
function myFunction() {
  console.log("yes");
}
