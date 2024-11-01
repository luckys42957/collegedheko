// let fileInput = document.getElementById("file-input");
// let fileList = document.getElementById("files-list");
// let numOfFiles = document.getElementById("num-of-files");
// fileInput.addEventListener("change", () => {




//   fileList.innerHTML = "";
//   numOfFiles.textContent = `${fileInput.files.length} Files Selected`;
//   for (i of fileInput.files) {
//     let reader = new FileReader();
//     let listItem = document.createElement("li");
//     let fileName = i.name;
//     let fileSize = (i.size / 1024).toFixed(1);
//     listItem.innerHTML = `<p>${fileName}</p><p>${fileSize}KB</p>`;
//     if (fileSize >= 1024) {
//       fileSize = (fileSize / 1024).toFixed(1);
//       listItem.innerHTML = `<p>${fileName}</p><p>${fileSize}MB</p>`;
//     }
//     fileList.appendChild(listItem);
//   }


// let fileInput = document.getElementById("file-input");
// let fileList = document.getElementById("tabel-list");
// let numoffiles = document.getElementById("num-of-files");






// fileInput.addEventListener("change", () => {

//   let imagedata = Array.from(fileInput.files);
//   let index=0

//   imagedata.forEach((image) => {
//     let filereader = new FileReader();

//     let listofimage = document.createElement("tr");
//     let filename = image.name;
//     let filesize = (image.size / 1024).toFixed(1);
//     listofimage.innerHTML = `
//         <td><input class="input checkbox" type="checkbox" /></td>
//                         <td>#${index+1}</td>
//                         <td class="data-img"><img src="././assests/${filename}" alt=""></td>
//                         <td>${filename}</td>
//                         <td>${files}</td>
//                         <td>Pending</td>
//                         <td class="trash"><i class='bx bxs-trash-alt'></i></td>
//     `
//     if (filesize >= 1024) {
//       filesize = (filesize / 1024).toFixed(1);
//       listofimage.innerHTML = `<p>${filename}</p><p>${filesize}</p>`
//     }

//     fileList.appendChild(listofimage);



//   })


// edit gallery css







// edit gallery css end












let filelist = document.getElementById("tabel-list");

let addbtn = document.getElementById("file-input");



let submitbtn = document.getElementById("submit-btn");

let images = [];







let index = 1;

let imagesdata = [];








addbtn.addEventListener("click", () => {
  let lists = document.createElement("tr");
  lists.classList.add("browse-list");
  lists.innerHTML = `<td><input class="input checkbox" type="checkbox" /></td>
                        <td>#${index}</td>
                        <td  style="display: flex; justify-content: center;  max-width:700px ; text-align:center ;">
                         <label id="browselabel" for="browsinput">
                          <i class="fa-solid fa-arrow-up-from-bracket"></i>
                                &nbsp;
                         Browse Now</label>
                        <input id="browsinput" type="file" value="" multiple>
                        </td>
                        <td class="trash">
                           <label id="remove-one" >
                                <i class='bx bxs-trash-alt'></i>
                                

                            </label>
                        </td>`;

  filelist.appendChild(lists);

  index = index + 1;

  let filedata = Array.from(document.querySelectorAll(".browse-list"));
  console.log(filedata)
  let deletebtn = Array.from(document.querySelectorAll("#remove-one"));
  let submitbtn = document.getElementById("submit-btn");

  let allremove = document.getElementById("delete-input");

  if (filedata.length > 0) {
    allremove.classList.remove("deleteactive");
    submitbtn.classList.add("submitactive");

  }



  allremove.addEventListener("click", () => {


    filelist.innerHTML = "";


  })

  deletebtn.forEach((button, index) => {
    button.addEventListener("click", () => {


      filedata[index].remove();
      let newfiledata = Array.from(document.querySelectorAll(".browse-list"));
      if (newfiledata.length < 1) {
        allremove.classList.add("deleteactive");
        submitbtn.classList.remove("submitactive");
      }




    })
  })


  // browse input























  submitbtn.addEventListener("click", (e) => {

    e.preventDefault();

    let imageslist = document.querySelectorAll("#browsinput");
    imageslist.forEach((input) => {
      input.addEventListener("change", () => {
        imagesdata = input.files;

      })
    })


    Swal.fire({
      title: "Submit successfully!",
      text: "You clicked the button!",
      icon: "success"
    });

    console.log(imagesdata)














  })












});



// js for view gallery


const editbtn = document.querySelectorAll("#edit-btn");
editbtn.forEach((btn)=>{
  btn.addEventListener("click" ,()=>{
    console.log("clicked")
  })
})


































