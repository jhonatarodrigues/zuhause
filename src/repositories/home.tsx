
import { getInstance } from '@/service/axios';


const HomeApi = {
  getImageOrnamentHome: async () => {
    const instance = getInstance();
    const { data } = await instance.get('/home_image?per_page=1');

    return data;
  },
  getBanner: async () => {
    const instance = getInstance();
    const { data } = await instance.get('/banner');

    return data;
  },
};

export default HomeApi;
