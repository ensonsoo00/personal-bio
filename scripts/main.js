
let imageButton = document.getElementById("switch_img");

const myImage = document.getElementById("neu_img");
imageButton.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/neu2.png") {
        myImage.setAttribute("src", "images/neu.jpg");
    }
    else {
        myImage.setAttribute("src", "images/neu2.png");
    }
}


let userButton = document.getElementById("change_user");

function greetUser() {
    const userName = prompt("Please enter your name.");
    // if user clicks "Ok" without entering a name, re-prompt the user
    if (userName === "") {
        greetUser();
    }
    // if user clicks "Cancel", exit the function
    else if (userName === null) {
        return;
    }
    else {
        alert(`Hi ${userName}, nice to meet you!`)
    }
}

userButton.onclick = () => {
    greetUser();
};

