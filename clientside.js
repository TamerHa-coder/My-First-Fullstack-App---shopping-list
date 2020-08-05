const startList = async () => {
    const { data } = await axios.get(`http://localhost:3001/products`);
    loadData(data);
    console.log(data);
};

const addItem = async (id, item) => {
    const { data } = await axios.post(`http://localhost:3001/products`, {id: id, name: item})
    .then(addToDiv(id, item));
    console.log(data)
};

const listDiv = document.getElementById("list");

const idText = document.getElementById("id");
const itemText = document.getElementById("item");

const addButton = document.getElementById("add");
addButton.addEventListener("click", () => addItem(idText.value, itemText.value));

const loadData = (list) => {
    let htmlText = ``;
    
    list.forEach(item => {
        htmlText += `<div>${item.id} ${item.name} <button class="delete">Delete</button></div>`;
    });

    listDiv.innerHTML = htmlText;
};

const addToDiv = (id, item) => {
    const htmlText = `<div>${id} ${item} <button class="delete">Delete</button></div></div>`;

    listDiv.innerHTML += htmlText;
};

startList();