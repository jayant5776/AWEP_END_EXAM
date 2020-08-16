function submit() {

    //console.log(document.querySelector("#submitId").parentElement.children[0].children[1].value);

    let newElement = document.createElement("div");

    let eleUsername = document.querySelector("#submitId").parentElement.children[0].children[1].value;

    let eleEmail = document.querySelector("#submitId").parentElement.children[1].children[1].value;

    let elePass = document.querySelector("#submitId").parentElement.children[2].children[1].value;


    newElement.appendChild(eleUsername);
    newElement.appendChild(eleEmail);
    newElement.appendChild(elePass);

    

    document.querySelector("#submitId").innerHTML = "";

}