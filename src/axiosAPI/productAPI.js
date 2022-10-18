import axios from 'axios';

axios.defaults.baseURL = 'https://testbackend.nc-one.com';

async function allProducts() {
  try {
    const { data } = await axios.get('/image');
    return data;
  } catch (error) {
    console.log(error);
  }
}

async function oneProduct(id) {
  try {
    const { data } = await axios.post(`/image?id=${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
}

export { allProducts, oneProduct };
