function loadAwards(){
     fetch('project.json')
     .then(res=> res.json())
    .then(data =>  displayAwards(data))
}
loadAwards();




function displayAwards(data){
    const sectionId = document.getElementById('Awards');
    for(const Awards of data){
        const div = document.createElement('div');
        div.classList.add("Award")
    div.innerHTML = `
        <h1>${Awards.name}</h1>
        <h5>${Awards.username}</h5>
        <h4>${Awards.email}</h4>
        <a>${Awards.phone}</a>
        <a href="${Awards.website}">Website</a>
        `;
        
      sectionId.appendChild(div);
        console.log(Awards);
    }
}














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
