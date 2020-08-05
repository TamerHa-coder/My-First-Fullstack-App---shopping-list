const loadData = async () => {
    const { data } = await axios.get(`http://localhost:3001/products`);
    startList(data);
};

const listDiv = document.getElementById("list");

const startList = (list) => {
    let htmlText = ``;
    
    list.forEach(item => {
        htmlText += `
            <div>${item.id} ${item.name}</div>`;
    });

    listDiv.innerHTML = htmlText;
};

loadData();