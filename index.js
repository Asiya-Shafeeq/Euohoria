    const menproduct = [
        
        {
            id: 1,
            name: "Shirts",
            title: "Explore Now !",
            image: "./image/Rectangle 20 - Copy (2) - Copy - Copy.png",
            arrow: "./image/Arrow 1.png",
        },
        {
            id: 2,
            name: "Plain T-Shirts",
            title: "Explore Now !",
            image: "./image/Rectangle 22 (5).png",
            arrow: "./image/Arrow 1.png",
        },
        {
            id: 3,
            name: "Polo T-Shirts",
            title: "Explore Now !",
            image: "./image/Rectangle 22 - Copy (2) - Copy - Copy.png",
            arrow: "./image/Arrow 1.png",
        },
        {
            id: 4,
            name: "Hoodies & Sweetshirt",
            title: "Explore Now !",
            image: "./image/Rectangle 20 (3) - Copy - Copy - Copy.png",
            arrow: "./image/Arrow 1.png",
        },
        {
            id: 5,
            name: "Jeans",
            title: "Explore Now !",
            image: "./image/Rectangle 21 (3) - Copy - Copy - Copy.png",
            arrow: "./image/Arrow 1.png",
        },
        {
            id: 6,
            name: "Activewear",
            title: "Explore Now !",
            image: "./image/Rectangle 20 - Copy (2) - Copy - Copy.png",
            arrow: "./image/Arrow 1.png",
        },
        {
            id: 7,
            name: "Boxers",
            title: "Explore Now !",
            image: "./image/Rectangle 22 (5) - Copy - Copy - Copy.png",
            arrow: "./image/Arrow 1.png",
        },
        {
            id: 8,
            name: "Shirts",
            title: "Explore Now !",
            image: "./image/Rectangle 20 - Copy (2) - Copy - Copy.png",
            arrow: "./image/Arrow 1.png",
        },
    ]
    const womenproduct = [
        {
            id: 1,
            name:"Hoodies & Sweetsshirt",
            title: "Explore Now !",
            img: "./image/Rectangle 20 (3).png",
            image: "./image/Arrow 1.png",
        },
        {
            id: 2,
            name:"Coats & parkas",
            title: "Explore Now !",
            img: "./image/Rectangle 21 (4) - Copy - Copy.png",
            image: "./image/Arrow 1.png",
        },
        {
            id: 3,
            name:"Tees & T-shirt",
            title: "Explore Now !",
            img: "./image/Rectangle 22 (7) - Copy - Copy.png",
            image: "./image/Arrow 1.png",
        },
        {
            id: 4,
            name:"Boxers",
            title: "Explore Now !",
            img: "./image/Rectangle 22 (6) - Copy - Copy.png",
            image: "./image/Arrow 1.png",
        },
        {
            id: 5,
            name:"Hoodies & Sweetsshirt",
            title: "Explore Now !",
            img: "./image/Rectangle 25 (4) - Copy - Copy.png",
            image: "./image/Arrow 1.png",
        },
        {
            id: 6,
            name:"Hoodies & Sweetsshirt",
            title: "Explore Now !",
            img: "./image/Rectangle 25 (5) - Copy.png",
            image: "./image/Arrow 1.png",
        },
        {
            id: 7,
            name:"Hoodies & Sweetsshirt",
            title: "Explore Now !",
            img: "./image/Rectangle 25 (4).png",
            image: "./image/Arrow 1.png",
        },
        {
            id: 8,
            name:"Hoodies & Sweetsshirt",
            title: "Explore Now !",
            img: "./image/Rectangle 20 (3).png",
            image: "./image/Arrow 1.png",
        },
        
    ]
    
    
    


    
    
    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('header nav ul li a');
    const productContainer = document.querySelector('.product')
    const womenContainer = document.querySelector('.products')
    window.addEventListener('DOMContentLoaded', () => {
        displayProductData(menproduct);
        // console.log(displayData);
    });

    function displayProductData (product){
        let displayData = product.map(function(cat_item) {
            return ` <div class="categories">
                    <span class="img one">
                        <img src="${cat_item.image}" alt="">
                    </span>
                    <span class="content">
                        <li>
                            <h5 class="name">${cat_item.name}</h5>
                            <h6 class="title">${cat_item.title}</h6>
                        </li>
                        <li>
                            <a href="#" class="arrow"><img src="${cat_item.arrow}" alt=""/></a>
                        </li>
                    </span>
                </div>`;
        });
        displayData = displayData.join("");
        productContainer.innerHTML = displayData;
    }
    

    window.addEventListener("DOMContentLoaded", () => {
        let displayData = womenproduct.map(function (women_item) {
            return `<div class="categories">
                    <span class="img">
                        <img src="${women_item.img}" alt="">
                    </span>
                    <span class="content">
                        <li>
                            <h5 class="name">${women_item.name}</h5>
                            <h6 class="title">${women_item.title}</h6>
                        </li>
                        <li>
                            <a href="#" class="arrow"><img src="${women_item.image}" alt=""/></a>
                        </li>
                    </span>
                </div>`;
        });
        displayData = displayData.join("");
        womenContainer.innerHTML = displayData;
        console.log(displayData);
    });

    window.onscroll = () => {
        sections.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if(top >= offset && top < offset + height) {
                navLinks.forEach(links => {
                    links.classList.remove('active');
                    document.querySelector('header nav ul li a [href*=' + id + ']').classList.add('active');
            });
        };
        });
    };
    const bar = document.getElementById('bar');
    const nav = document.getElementById('navbar');
    const close = document.getElementById('close');

    if (bar) {
        bar.addEventListener('click', () => {
            nav.classList.add('active');
        })
    }

    if (close) {
        close.addEventListener('click', () => {
            nav.classList.remove('active');
        })
    } 
