const submit = document.getElementById("submit");
const subject = document.getElementById("subject");
const question = document.getElementById("question");
const text_area = document.getElementById("text_area");
const form = document.getElementById("form");
const queries = document.getElementById("queries");
const Add_Response = document.getElementById("Add_Response");
const select = document.getElementById("select");
const idRes = document.getElementById("Response");
const Sub_for_Res = document.getElementById("Sub_for_Res");

const name1 = document.getElementById("name");
const text = document.getElementById("text");


submit.addEventListener("click", (e) => {
    e.preventDefault();
    let div = document.createElement("div");

    div.setAttribute("class", "dynamic-div");
    div.innerHTML = `<h2>${subject.value}</h2><p>${question.value}</p>`;
    text_area.appendChild(div);
    subject.value = "";  
    question.value = "";
});

const button = document.createElement("button");
button.setAttribute("class", "Resolve");
button.innerText = "Resolve";
const txt_res= document.getElementById("txt_res");

text_area.addEventListener("click", (e) => {
    const parentDiv = e.target.parentElement;

    if (parentDiv) {
        const h2 = parentDiv.querySelector("h2").cloneNode(true);
        const p = parentDiv.querySelector("p").cloneNode(true);

        select.innerHTML = "";
        queries.style.display = "none";
        form.style.display = "flex";
        form.style.direction = "column";

        
        select.appendChild(h2);
        select.appendChild(p);
        
        form.appendChild(select);
        form.appendChild(button);
        form.appendChild(txt_res);

        form.appendChild(idRes);
        form.appendChild(Add_Response);
        form.appendChild(Sub_for_Res);
    }
    idRes.innerHTML=""
});

// Adding new responses under the "Response" section
Sub_for_Res.addEventListener("click", () => {
    let div = document.createElement("div");
    div.setAttribute("class", "dynamic-div");
    div.innerHTML = `<h4>${name1.value}</h4><p>${text.value}</p>`;

    // Append the new response to the Response section
    idRes.appendChild(div);

    // Clear input fields after submission
    name1.value = "";
    text.value = "";
});
