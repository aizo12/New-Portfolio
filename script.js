//Projects Section
document.querySelector('.iphoneClick').addEventListener('click',()=>{
    brand('.vivo','.oppo','.mi','.iphone');
    active('.miClick','.oppoClick','.vivoClick','.iphoneClick');
});
document.querySelector('.vivoClick').addEventListener('click',()=>{
    brand('.iphone','.oppo','.mi','.vivo');
    active('.miClick','.oppoClick','.iphoneClick','.vivoClick');
});
document.querySelector('.oppoClick').addEventListener('click',()=>{
    brand('.vivo','.iphone','.mi','.oppo');
    active('.miClick','.vivoClick','.iphoneClick','.oppoClick');
});
document.querySelector('.miClick').addEventListener('click',()=>{
    brand('.vivo','.oppo','.iphone','.mi');
    active('.oppoClick','.vivoClick','.iphoneClick','.miClick');
});

const brand = (name1,name2,name3,name4) =>{
    document.querySelector(name1).classList.add('none');
    document.querySelector(name2).classList.add('none');
    document.querySelector(name3).classList.add('none');
    document.querySelector(name4).classList.remove('none');
};

const active = (name1,name2,name3,name4) =>{
    document.querySelector(name1).classList.remove('active');
    document.querySelector(name2).classList.remove('active');
    document.querySelector(name3).classList.remove('active');
    document.querySelector(name4).classList.add('active');
};
//scrollspy
document.querySelectorAll('.scrollLink').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
    });
  });
//scroll animation
window.onscroll = function() {myFunction()};

const whatwedoSection = document.querySelector('#whatwedo-section');
const whatwedo = document.querySelector('#whatwedo-section h3');
const whatwedoWrapper1 = document.querySelector('.whatwedo-wrapper1');
const whatwedoWrapper2 = document.querySelector('.whatwedo-wrapper2');

function myFunction() {
  if (window.pageYOffset = whatwedoSection.offsetTop) {
    whatwedo.classList.add("animation")
    whatwedoWrapper1.classList.add("animation")
    whatwedoWrapper2.classList.add("animation")
  }
  if (window.pageYOffset = whatwedoSection.offsetBottom) {
    whatwedo.classList.add("animation")
    whatwedoWrapper1.classList.add("animation")
    whatwedoWrapper2.classList.add("animation")
  }
}
//sideBar
const sideBar = document.querySelector(".sideBar");
const openBtn = document.querySelector(".openBtn");
const closeBtn = document.querySelector(".closeBtn");
const aTag = document.querySelectorAll(".sideBar a");
const overlay = document.querySelector(".overlay");

openBtn.addEventListener("click", ()=>{
  sideBar.classList.toggle("open");
  overlay.style.display = 'block';

});

closeBtn.addEventListener("click", ()=>{
  sideBar.classList.toggle("open");
  overlay.style.display = 'none';
});

aTag.forEach((anchor)=>{
  anchor.addEventListener("click", ()=>{
    sideBar.classList.remove("open");
    overlay.style.display = 'none';
  });
})