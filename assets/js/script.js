let openMenu = document.querySelector(".header .Navcontainer .links .menu");
let closeMenu = document.querySelector(".header .menuOpt .close");
let menu = document.querySelector(".header .menuOpt")

openMenu.addEventListener("click", function () {
    menu.style.right = "0"
})

closeMenu.addEventListener("click", function () {
    menu.style.right = "-100%"
})



// ---------------------------------------------------------
// Show Elements as per category
let object = [
    {
        title: "Animi Dolor Pariatur",
        amount: "$19.00",
        img: "./assets/images/product-1.jpg",
        type: ""
    },
    {
        title: "Art Deco Home",
        amount: "$30.00",
        img: "./assets/images/product-2.jpg",
        type: "accessory"
    },
    {
        title: "Artificial potted plant",
        amount: "$20.00",
        img: "./assets/images/product-3.jpg",
        type: "decoration"
    },
    {
        title: "Dark Green Jug",
        amount: "$17.10",
        img: "./assets/images/product-4.jpg",
        type: "accessory"
    },
    {
        title: "Drinking Glasses",
        amount: "$21.00",
        img: "./assets/images/product-5.jpg",
        type: "accessory"
    },
    {
        title: "Helen Chair",
        amount: "$69.50",
        img: "./assets/images/product-6.jpg",
        type: "furniture"
    },
    {
        title: "High Quality Glass Bottle",
        amount: "$30.10",
        img: "./assets/images/product-7.jpg",
        type: "accessory"
    },
    {
        title: "Living Room & Bedroom Lights",
        amount: "$45.00",
        img: "./assets/images/product-8.jpg",
        type: "accessory"
    },
    {
        title: "Nancy Chair",
        amount: "$90.00",
        img: "./assets/images/product-9.jpg",
        type: "furniture"
    },
    {
        title: "Simple Chair",
        amount: "$46.00",
        img: "./assets/images/product-11.jpg",
        type: "furniture"
    },
    {
        title: "Table Black",
        amount: "$67.00",
        img: "./assets/images/product-12.jpg",
        type: "decoration"
    },
    {
        title: "Teapot with black tea",
        amount: "$25.00",
        img: "./assets/images/product-14.jpg",
        type: "furniture"
    },
    {
        title: "Unique Decoration",
        amount: "$15.00",
        img: "./assets/images/product-15.jpg",
        type: "furniture"
    },
    {
        title: "Vase Of Flowers",
        amount: "$77.00",
        img: "./assets/images/product-16.jpg",
        type: "furniture"
    },
    {
        title: "Wood Eggs",
        amount: "$19.00",
        img: "./assets/images/product-17.jpg",
        type: "decoration"
    },
    {
        title: "Wooden Box",
        amount: "$27.00",
        img: "./assets/images/product-18.jpg",
        type: "decoration"
    },
    {
        title: "Wooden Cups",
        amount: "$29.00",
        img: "./assets/images/product-19.jpg",
        type: "accessory"
    },
]

function insertElement(obj) {
    let clutter = ``;

    obj.forEach((elem) => {
        let element = `<div class="product" value=${elem.type}>
    <div class="imageDiv">
        <img src="${elem.img}" alt="">
    </div>
    <div class="text">
        <h1>${elem.title}</h1>
        <p>${elem.amount}</p>
    </div>
</div>`

        clutter += element;
    })

    document.querySelector(".productsSection .productsContainer .lowerSection .products").innerHTML = clutter;
}
insertElement(object);

function objectSort(object, type) {

    if (type == "") {
        insertElement(object.type)
    }
    else {
        let filterArray = object.filter(item => {
            if (item.type == type) {
                return true;
            }
            return false;
        });
        insertElement(filterArray);
    }
}

function activeAdder() {
    document.addEventListener("DOMContentLoaded", function() {
        var elements = document.querySelectorAll('.upperSection .types span');
      
        elements.forEach(function(element) {
          element.addEventListener('click', function() {
            elements.forEach(function(el) {
              el.classList.remove('active');
            });
            this.classList.add('active');

            if (element.classList.contains("acc")) {
                objectSort(object, "accessory")
            } else if (element.classList.contains("dec")) {
                objectSort(object, "decoration")
            } else if (element.classList.contains("fur")) {
                objectSort(object, "furniture")
            } else {
                insertElement(object)
            }

          });
        });
      });
}
activeAdder();
// ---------------------------------------------------------





