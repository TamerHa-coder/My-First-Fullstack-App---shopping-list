const loadData = async () => {
    const { data } = await axios.get(`http://localhost:3001/products`);
    console.log(data) 
};

loadData();