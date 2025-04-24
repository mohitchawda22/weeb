const imageLinks = [
    './assets/images/Logo1.svg',
    './assets/images/Logo2.svg',
    './assets/images/Logo3.svg',
    './assets/images/Logo4.svg',
    './assets/images/Logo5.svg',
];

const image = imageLinks.map(img => {
  return `<img src="${img}" alt="logo" />`;
});

const images = image.join('');

const imgDiv = document.getElementById('img-div');
imgDiv.innerHTML = images;


const navMenu= document.getElementById('nav-menu')

const navItems=["About Us","Solutions","Pricing","Resources"]

const navItem=navItems.map(links=>{
    return `<li class="nav-item">
                                <a class="nav-link" aria-current="page" href="#">${links}</a>
                            </li>`
})

const links=navItem.join('')
navMenu.innerHTML=links