let toastBox = document.getElementById("toastBox");
let success = document.getElementById("success");
let error = document.getElementById("error");
let invalid = document.getElementById("invalid");

let successMsg = '<i class="fa-solid fa-circle-check"></i> Successfully Submitted!';
let errorMsg = '<i class="fa-solid fa-circle-xmark"></i> Please fix the error!';
let invalidMsg = '<i class="fa-solid fa-circle-exclamation"></i> Invalid input, check again!';

function showToast(msg) {
    let toast = document.createElement("div");
    toast.classList.add("toast");
    toast.innerHTML = msg;
    toastBox.appendChild(toast);


    if(msg.includes('error')) {
        toast.classList.add('error');
        toast.querySelector("i").style.color = "red";  
    
    } else if (msg.includes('invalid')) {
        toast.classList.add('invalid');
        toast.querySelector("i").style.color = "orange";  
    
    } else if (msg.includes('Successfully')) {
        toast.classList.add('success');
        toast.querySelector("i").style.color = "green";  
    }
    
    setTimeout(() => {
        toast.remove();
    }, 6000);

}

success.addEventListener("click", () => {
    showToast(successMsg);
});

error.addEventListener("click", () => {
    showToast(errorMsg);
});

invalid.addEventListener("click", () => {
    showToast(invalidMsg);
});



