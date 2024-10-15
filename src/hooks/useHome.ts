import Banner from "@/models/banner";
import ImageHome from "@/models/imageHome";

import HomeApi from "@/repositories/home";

interface ProductsInterface {
  getImageOrnamentHome: () => Promise<ImageHome>;
  getBanner: () => Promise<Banner[]>;
}

export const useHome = (): ProductsInterface => {
  

  const getImageOrnamentHome = async (): Promise<ImageHome> => {
    const response = await HomeApi.getImageOrnamentHome();
    

    return response.pop() as ImageHome;
  };

  const getBanner = async (): Promise<Banner[]> => {
    const response = await HomeApi.getBanner();
    

    return response as Banner[];
  };
 
  

  return {
    getImageOrnamentHome,
    getBanner
  };
};
