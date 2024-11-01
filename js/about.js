// // javascript for the tab navogations horizontal scroll btns

// const btnleft=document.querySelector(".left-btn");
// const btnright=document.querySelector(".right-btn");

// const tabmenu=document.querySelector(".tab-menu");


// const iconVisviblity=()=>{
//     let scrollLeftValue=Math.ceil(tabmenu.scrollLeft);


//     let scrollablewidth=tabmenu.scrollWidth-tabmenu.clientWidth

//     btnleft.style.display=scrollLeftValue > 0 ? "block":"none";

//     btnright.style.display=scrollablewidth > scrollLeftValue ? "block" :"none"
// }

// btnright.addEventListener("click",()=>{
//     tabmenu.scrollLeft+=150;

//     setTimeout(()=> iconVisviblity() , 50)
   
// })

// btnleft.addEventListener("click",()=>{
//     tabmenu.scrollLeft-=150;
//     setTimeout(()=> iconVisviblity() , 50)
// })


// window.onload=function(){
//     btnright.style.display=tabmenu.scrollWidth > tabmenu.clientWidth || tabmenu.scrollWidth >=window.innerWidth ? "block": "none"

//     btnleft.style.display=tabmenu.scrollWidth > window.innerWidth ? "":"none"
// }

// window.onresize=function(){
//     btnright.style.display=tabmenu.scrollWidth > tabmenu.clientWidth || tabmenu.scrollWidth >=window.innerWidth ? "block": "none";

//     btnleft.style.display=tabmenu.scrollWidth > window.innerWidth ? "":"none";


//     let scrollLeftValue=Math.round(tabMenu.scrollLeft);

//     btnleft.style.display=scrollLeftValue > 0 ? "block" : "none";
// }




// // javacsript to make the tab navigation draggbale

// let activeDrag=false;

// tabmenu.addEventListener("mousemove", (drag)=>{
//     if(!activeDrag) return;
//         tabmenu.scrollLeft-=drag.movementX;
//         iconVisviblity();
//         tabmenu.classList.add("dragging")
    
// });

// document.addEventListener("mouseup" ,()=>{
//     activeDrag=false;
//     tabmenu.classList.remove("dragging")

// })

// tabmenu.addEventListener("mousedown" ,()=>{
//     activeDrag=true

// })


function inittab(tabWrapper, activeTab = 1) {
    const tabBtns = tabWrapper.querySelectorAll(".tab-btn");
    const underline = tabWrapper.querySelector(".underline");
    const tabContents = tabWrapper.querySelectorAll(".tab-content");
  
    activeTab = activeTab - 1;
    tabBtns[activeTab].classList.add("active");
    underline.style.width = `${tabBtns[activeTab].offsetWidth}px`;
    underline.style.left = `${tabBtns[activeTab].offsetLeft}px`;
    tabContents.forEach((content) => {
      content.style.transform = `translateX(-${activeTab * 100}%)`;
    });
  
    tabBtns.forEach((btn, index) => {
      btn.addEventListener("click", () => {
        tabBtns.forEach((btn) => btn.classList.remove("active"));
        btn.classList.add("active");
        underline.style.width = `${btn.offsetWidth}px`;
        underline.style.left = `${btn.offsetLeft}px`;
        tabContents.forEach((content) => {
          content.style.transform = `translateX(-${index * 100}%)`;
        });
      });
  
      //same effect as on click when button in focus
      btn.addEventListener("focus", () => {
        tabBtns.forEach((btn) => btn.classList.remove("active"));
        btn.classList.add("active");
        underline.style.width = `${btn.offsetWidth}px`;
        underline.style.left = `${btn.offsetLeft}px`;
        tabContents.forEach((content) => {
          content.style.transform = `translateX(-${index * 100}%)`;
        });
      });
    });
  }
  
  const tabWrappers = document.querySelectorAll(".tab-wrapper");
  tabWrappers.forEach((tabWrapper, index) => inittab(tabWrapper));



