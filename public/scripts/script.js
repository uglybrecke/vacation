document.getElementById("form").onsubmit = () => {
    let isvalid = true;

    clearErrors();

    let numtrav = document.getElementById("number").value.trim();
    if(numtrav === 0 || numtrav < 0) {
        document.getElementById("err-number").style.display = "block";
        isvalid = false;
    }

    let destination = document.getElementById("destination").value;
    if (destination == "none") {
        document.getElementById("err-destination").style.display = "block";
        isvalid = false;
    }


    if(isvalid == false) {
        return false;
    }
}

function clearErrors() {
        let errors = document.getElementsByClassName("err");
        for (let i=0; i<errors.length; i++) {
            errors[i].style.display = "none";
        }
}