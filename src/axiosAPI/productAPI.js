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
    const { data } = await axios.get(`/image?id=${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
}

async function image(src) {
  try {
    const { data } = await axios.get(`${src}`, { responseType: 'blob' });
    return data;
  } catch (error) {
    console.log(error);
  }
}

export { allProducts, oneProduct, image };
