const header = document.querySelector('.header');
const images = [
    'images/banner.png',
    'images/el-manoufia University2.jpg',
    'images/el-manoufia University3.png',
    'images/el-manoufia University4.jpg'
    ];
let index = 0;

function changeBackgroundImage() {
    header.style.backgroundImage = `linear-gradient(rgba(4,9,30,0.7), rgba(4,9,30,0.7)), url('${images[index]}')`;
    index = (index + 1) % images.length;
}

setInterval(changeBackgroundImage, 5000);
changeBackgroundImage(); //


function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  }