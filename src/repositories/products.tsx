
import { getInstance } from '@/service/axios';


const ProductsApi = {
  getProductsHome: async () => {
    const instance = getInstance();
    const { data } = await instance.get('/products?per_page=3');

    return data;
  },

  
};

export default ProductsApi;
