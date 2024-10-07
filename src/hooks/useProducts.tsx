import Product from "@/models/product";
import ProductsApi from "@/repositories/products";




interface ProductsInterface {
  getProductsHome: () => Promise<Product[]>;
}

export const useProducts = (): ProductsInterface => {
  

  const getProductsHome = async (): Promise<Product[]> => {
    const response = await ProductsApi.getProductsHome();
    

    return response as Product[] ;
  };

  

  return {
    getProductsHome,
  };
};
