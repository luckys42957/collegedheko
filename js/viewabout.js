let abouteditbtn=Array.from(document.querySelectorAll("#edit-btn"));

abouteditbtn.forEach((button)=>{
    button.addEventListener("click" ,()=>{
        window.location.href="./../editabout.html"
    })
})





