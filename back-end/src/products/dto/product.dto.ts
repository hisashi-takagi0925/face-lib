export interface ProductResponse {
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
    prices: {
      price: string;
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
    };
  }[];
  result_count: number;
}

export interface ProductSearchParams {
  actress_id?: number;
  hits?: number;
  offset?: number;
  sort?: 'date' | 'review';
}
