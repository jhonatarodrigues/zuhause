import Product from "@/models/product";
import ProductsApi from "@/repositories/products";

type GetProductsReturnProps = {
  products: Product[],
  total: number,
  totalPages: number
}

type GetProductsProps = {
  page: number,
  perPage: number
}



interface ProductsInterface {
  getProductsHome: () => Promise<Product[]>;
  getProducts: ({page, perPage}: GetProductsProps) => Promise<GetProductsReturnProps>;
}

export const useProducts = (): ProductsInterface => {
  

  const getProductsHome = async (): Promise<Product[]> => {
    const response = await ProductsApi.getProductsHome();
    

    return response as Product[] ;
  };
  const getProducts = async ({page, perPage}:GetProductsProps): Promise<GetProductsReturnProps> => {
    const response = await ProductsApi.getProducts(page, perPage);
    

    return response as GetProductsReturnProps ;
  };

  

  return {
    getProductsHome,
    getProducts
  };
};
