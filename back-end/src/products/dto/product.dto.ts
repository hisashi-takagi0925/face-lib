export interface ProductResponse {
  result: {
    items: {
      service_code: string;
      service_name: string;
      floor_code: string;
      floor_name: string;
      category_name: string;
      content_id: string;
      product_id: string;
      title: string;
      volume: string;
      review: {
        count: number;
        average: number;
      };
      URL: string;
      affiliateURL: string;
      imageURL: {
        list: string;
        small: string;
        large: string;
      };
      sampleImageURL: {
        sample_s: {
          image: string[];
        };
      };
      number: string;
      tachiyomi: {
        URL: string;
        affiliateURL: string;
      };
      sampleMovieURL: {
        size_476_306: string;
        size_560_360: string;
        size_644_414: string;
        size_720_480: string;
        pc_flag: number;
        sp_flag: number;
      };
      prices: {
        price: string;
        list_price?: string;
        deliveries: {
          type: string;
          price: string;
        }[];
      };
      date: string;
      iteminfo: {
        actress: {
          id: number;
          name: string;
        }[];
        genre?: {
          name: string;
          id: number;
        }[];
        series?: {
          name: string;
          id: number;
        }[];
        maker?: {
          name: string;
          id: number;
        }[];
        actor?: {
          name: string;
          id: number;
        }[];
        director?: {
          name: string;
          id: number;
        }[];
        author?: {
          name: string;
          id: number;
        }[];
        label?: {
          name: string;
          id: number;
        }[];
        type?: {
          name: string;
          id: number;
        }[];
        color?: {
          name: string;
          id: number;
        }[];
        size?: {
          name: string;
          id: number;
        }[];
      };
      cdinfo?: {
        kind: string;
      };
      jancode?: string;
      maker_product?: string;
      isbn?: string;
      stock?: string;
      directory?: {
        id: number;
        name: string;
      }[];
      campaign?: {
        date_begin: string;
        date_end: string;
        title: string;
      };
    }[];
  };
  result_count: number;
  total_count: number;
}

export interface ProductSearchParams {
  actress_id?: number;
  hits?: number;
  offset?: number;
  sort?: 'date' | 'review';
}
