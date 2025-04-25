const imageLinks = [
    './assets/images/Logo1.svg',
    './assets/images/Logo2.svg',
    './assets/images/Logo3.svg',
    './assets/images/Logo4.svg',
    './assets/images/Logo5.svg',
];

const image = imageLinks.map(img => {
  return `<img src="${img}" class="p-3" alt="logo" />`;
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

window.addEventListener("scroll",function(){
const navbar=document.getElementById("navbar")
if (window.scrollY > 50){
  navbar.classList.add("scrolled");
  console.log("scroll");
}else{
  navbar.classList.remove("scrolled");
}
})

const eventCardImage = [
  {img:'./assets/images/Picture.png',title:"Design Thinking",desc:"Wild Horse Event",badge:"Design Thinking"},
  {img:'./assets/images/Picture2.png',title:"Festival",desc:"Music & Colors",badge:"Festival"},
  {img:'./assets/images/Picture3.png',title:"Bootcamp",desc:"Happy Father’s Day",badge:"Bootcamp"},
  {img:'./assets/images/Picture2.png',title:"Design Thinking",desc:"Wild Horse Event",badge:"Festival"},
  {img:'./assets/images/Picture.png',title:"Design Thinking",desc:"Happy Father’s Day",badge:"Design Thinking"},  
];

const sliderCard = document.getElementById('slider-card');
const sliderCards = eventCardImage.map(img => {
  return `<div class="event-card">
                        <div class="position-relative">
                        <img src="${img.img}" class="card-img-top" alt="">
                        <span class="badge position-absolute top-0 m-3 px-2 py-1 z-1">${img.badge}</span>
                        </div>
                        <div class="card-desc">
                            <h5 class="card-title">${img.title}</h5>
                            <p class="card-text">${img.desc}</p>
                            <a href="" class="d-flex">Buy Tickets<img src="./assets/images/arrow-right.svg" alt=""
                                    class="ps-3"></a>
                        </div>
                    </div>`;
});

const eventCards = sliderCards.join('');
sliderCard.innerHTML = eventCards;



// const footerIcons = [
// {icon:'/assets/images/youtube.svg',href:"https://www.youtube.com/",title:"youtube"},
// {icon:'/assets/images/facebook.svg',href:"https://www.facebook.com/",title:"facebook"},
// {icon:'/assets/images/x.svg',href:"https://x.com/",title:"x"},
// {icon:'/assets/images/insta.svg',href:"https://www.instagram.com/",title:"instagram"},
// {icon:'/assets/images/linkdin.svg',href:"https://www.linkedin.com/",title:"linkedin"},
// ];

// const footericons = document.getElementById('footer-icons');
// const footerIcon = footerIcons.map(icon => {
//   return `<a href="${icon.href
//   }" title="${icon.title}" target="_blank"><img src="${icon.icon}" alt=""></a>`;
// });

// const icons = footerIcon.join('');
// footericons.innerHTML = icons;

const productLinks = [
  'Pricing',
  'Overview',
  'Browse',
  'Accessibility',
  'Five',
];
const productlink = document.getElementById('product-links');
const plink = productLinks.map(link => {
  return `<li>${link}</li>`;
});

const productlinks = plink.join('');
productlink.innerHTML = productlinks;

const solutionLinks = [
  'Brainstorming',
  'Ideation',
  'Wireframing',
  'Research',
];

const solutionlink = document.getElementById('solution-links');
const slink = solutionLinks.map(link => {
  return `<li>${link}</li>`;
});

const solutionlinks = slink.join('');
solutionlink.innerHTML = solutionlinks;

const resourceLinks = [
  'Help Center',
  'Blog',
  'Tutorials',
];

const resourcelink = document.getElementById('resource-links');
const rlink = resourceLinks.map(link => {
  return `<li>${link}</li>`;
});

const resourcelinks = rlink.join('');
resourcelink.innerHTML = resourcelinks;


const companyLinks = [
  'About',
  'Press',
  'Events',
  'Careers',
];

const companylink = document.getElementById('company-links');
const clink = companyLinks.map(link => {
  return `<li>${link}</li>`;
});

const companylinks = clink.join('');
companylink.innerHTML = companylinks;
