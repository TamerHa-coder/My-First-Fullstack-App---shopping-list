const loadData = async () => {
    const { data } = await axios.get(`http://localhost:3001/products`);
    loadList(data);
    console.log(data);
};

const addItem = async (id, item) => {
    if (id.length > 0 && item.length > 0) {
        const { data } = await axios.post(`http://localhost:3001/products`, {id: id, name: item})
        .then(addToDiv(id, item));
        loadData();
        console.log(data)
    }
};

const deleteItem = async (id) => {
    const { data } = await axios.delete(`http://localhost:3001/products/${id}`);
    loadData();
    console.log(data)
};

const listDiv = document.getElementById("list");
const idText = document.getElementById("id");
const itemText = document.getElementById("item");
const addButton = document.getElementById("add");

addButton.addEventListener("click", () => addItem(idText.value, itemText.value));

const loadList = (list) => {
    let htmlText = ``;
    
    list.forEach(item => {
        htmlText += `<li><span>${item.id} ${item.name}</span> <button id="${item.id}">Delete</button></li>`;
    });

    listDiv.innerHTML = htmlText;

    list.forEach(item => {
        let deleteButton = document.getElementById(item.id);
        deleteButton.addEventListener("click", () => deleteItem(item.id));
    });
};

const addToDiv = (id, item) => {
    const htmlText = `<li><span>${id} ${item}</span> <button id="${id}">Delete</button></li>`;

    listDiv.innerHTML += htmlText;
};

loadData();