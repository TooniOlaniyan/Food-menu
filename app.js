const menu = [
  {
    id: 1,
    title: "Boiled yam and Pepper Eggs",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.webp",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "Jollof Rice",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.webp",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "Sharwahma",
    category: "dinner",
    price: 6.99,
    img: "./images/item-3.jpg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "Toast Bread and Eggs",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "Ewa agoyin",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "Pounded yam and Efo",
    category: "dinner",
    price: 18.99,
    img: "./images/item-6.png",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "Pancakes",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "Nigerian Coconut Rice",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "Semovita and Egusi",
    category: "dinner",
    price: 16.99,
    img: "./images/item-9.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "Ofada Rice",
    category: "dinner",
    price: 22.99,
    img: "./images/item-10.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

const sectionCenter = document.querySelector('.section-center');
const filterButtons = document.querySelectorAll('.filter-btn');

filterButtons.forEach((btns)=>{
    btns.addEventListener('click',(e)=>{
        const currentBtn = e.currentTarget.dataset.id;
        const filteredMenu = menu.filter((items)=>{
            if(currentBtn === items.category){
                return items;
            }

        })
         if(currentBtn == 'all'){
                showItems(menu);

            }
            else{
                showItems(filteredMenu);
            }
        

        

    })

})
window.addEventListener('DOMContentLoaded',()=>{
    showItems(menu);

});

function showItems(someMenu){
        let displayItems =someMenu.map((menuItems)=>{
    return `<article class="menu-item">
          <img src="${menuItems.img}" alt="menu item" class="photo" />
          <div class="item-info">
            <header>
              <h4>${menuItems.title}</h4>
              <h4 class="price">${menuItems.price}</h4>
            </header>
            <p class="item-text">
              ${menuItems.desc}
            </p>
          </div>
        </article>`;

});
displayItems = displayItems.join('');
sectionCenter.innerHTML = displayItems;
    
}

