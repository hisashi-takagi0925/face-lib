export interface ActressResponse {
  actress: {
    id: number;
    name: string;
    ruby: string;
    bust: number;
    waist: number;
    hip: number;
    height: number;
    birthday: string;
    blood_type: string;
    hobby: string;
    prefectures: string;
    imageURL: {
      small: string;
      large: string;
    };
  }[];
  result_count: number;
}

export interface ActressSearchParams {
  initial?: string;
  actress_id?: number;
  keyword?: string;
  bust?: string;
  waist?: string;
  hip?: string;
  height?: string;
  birthday?: string;
  sort?: 'name' | 'birthday' | 'height';
  hits?: number;
  offset?: number;
}

export interface SingleActressResponse {
  actress: {
    id: number;
    name: string;
    ruby: string;
    bust: number;
    waist: number;
    hip: number;
    height: number;
    birthday: string;
    blood_type: string;
    hobby: string;
    prefectures: string;
    imageURL: {
      small: string;
      large: string;
    };
  };
}
