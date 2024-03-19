// function loadAwards(){
//      fetch('project.json')
//      .then(res=> res.json())
//     .then(data =>  displayAwards(data))
// }
// loadAwards();




// function displayAwards(data){
//     const sectionId = document.getElementById('Awards');
//     for(const Awards of data){
//         const div = document.createElement('div');
//         div.classList.add("Award")
//     div.innerHTML = `
//         <h1>{<div class="card" style="width: 18rem;">
//         <div class="card-body">
//           <h5 class="card-title">APR 2019</h5>
//           <img src="IMAGE/award-01.png" alt="">
//           <h1 class="card-subtitle mb-2 text-body-secondary">Site of the year 2019</h1>
//           <p class="card-text">For minimal and elegant premium branding design package.</p>
//           <a href="#" class="card-link">See Project </a>
//         </div>
//       </div>}</h1>

//         <h5>{<div class="card" style="width: 18rem;">
//         <div class="card-body">
//           <h5 class="card-title">May 2018</h5>
//           <img src="IMAGE/award-02.png" alt="">
//           <h1 class="card-subtitle mb-2 text-body-secondary">1st Winner creative Design Championship</h1>
//           <p class="card-text">For most favorited design voted by NY City Style customers.</p>
//           <a href="#" class="card-link">See Project </a>
//         </div>
        
//       </div>}</h5>
//         <h4>{<div class="card" style="width: 18rem;">
//         <div class="card-body">
//           <h5 class="card-title">Sep 2015</h5>
//           <img src="IMAGE/award-03.png" alt="">
//           <h1 class="card-subtitle mb-2 text-body-secondary">Best 5 Branding Project of nominations</h1>
//           <p class="card-text">For best creative & usable health care mobile app design.</p>
//           <a href="#" class="card-link">See Project </a>
//         </div>
//       </div>}</h4>
        
//         `;
        
//       sectionId.appendChild(div);
//         console.log(Awards);
//     }
// }














// const form = document.querySelector("form");
// const firstName = document.querySelector("#fistName");
// const lastName = document.querySelector("#lastName");
// const userName = document.querySelector("#userName");
// const emailAddress = document.querySelector("#exampleInputEmail1");
// const password = document.querySelector("#password");
// const confirmPassword = document.querySelector("#confirmPsw");

// form.addEventListener("submit", formHandler);


// function formHandler(e){
//     e.preventDefault();
//     // console.log(email.value);
//     // console.log(password.value);

//     const formInfo = {
//         FistName: firstName.value,
//         LastName: lastName.vlaue,
//         UserName: userName.value,
//         Email: emailAddress.value,
//         password: password.value,
//         ConfirmPassword: confirmPassword.value
//     }

//     console.log(formInfo);

//     firstName.vlue = "",
//     lastName.value = "",
//     userName.value = "",
//     emailAddress.value = "",
//     password.value = "",
//     password.value = ""
// }
