const search_btn = document.getElementById("search_btn");
const clr_btn = document.getElementById("clr_btn");

async function getData(str) {
    const url = "./travel_recommendation_api.json";
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        const result = await response.json();
        showdata(result[str]);
    } catch (error) {
        console.error(error.message);
    }
}

function showdata(array) {
    array.forEach(detail => {
        const imgurl = detail.imageUrl;
        const name = detail.name;
        const desc = detail.description;

        const resultdiv = document.getElementById("search_res");

        const newChild = document.createElement("div");
        const html = `<img src="${imgurl}"><br><h1>${name}</h1><br><p>${desc}</p>`;
        newChild.innerHTML = html;
        resultdiv.appendChild(newChild);
    })
}

function search() {
    const searchterm = document.getElementById("searchstr");

    if (searchterm.value.toLowerCase().includes("beach")) {
        getData("beaches");
    } else if (searchterm.value.toLowerCase().includes("temple")) {
        getData("temples");
    } else if (searchterm.value.toLowerCase().includes("countr")) {
        getData("countries");
    }
}
function clear() {
    const resultdiv = document.getElementById("search_res");
    const searchterm = document.getElementById("searchstr");
    resultdiv.innerHTML = "";
    searchterm.value = "";


}
search_btn.addEventListener("click", search);
clr_btn.addEventListener("click", clear)