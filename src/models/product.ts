type Product = {
  id: number;
  date: string;
  date_gmt: string;
  guid: {
    rendered: string;
  };
  modified: string;
  modified_gmt: string;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: {
    rendered: string;
  };
  featured_media: number;
  template: string;
  class_list: string[];
  acf: {
    [key: string]: string;
  };
  thumbnail_url: string;
  _links: Record<string, unknown>;
};

export default Product;
