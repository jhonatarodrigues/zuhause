
import { getInstance } from '@/service/axios';


const ProductsApi = {
  getProductsHome: async () => {
    const instance = getInstance();
    const { data } = await instance.get('/products?per_page=3');

    return data;
  },
  getProducts: async (page: number, perPage: number) => {
    const instance = getInstance();
    const response = await instance.get('/products',{
      params: {
        page,
        per_page: perPage,
      },
    });

    return {
      products: response.data,
      total: parseInt(response.headers['x-wp-total'], 10),
      totalPages: parseInt(response.headers['x-wp-totalpages'], 10),
    };
  },

  
};

export default ProductsApi;
