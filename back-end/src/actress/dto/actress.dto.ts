export interface ActressResponse {
  result: {
    actress: {
      id: number;
      name: string;
      ruby: string;
      bust: string | null;
      waist: string | null;
      hip: string | null;
      height: string | null;
      birthday: string | null;
      blood_type: string | null;
      hobby: string | null;
      prefectures: string | null;
      imageURL?: {
        small?: string;
        large?: string;
      };
      listURL?: {
        digital?: string;
      };
    }[];
    first_position: number;
    result_count: number;
    total_count: number;
  };
}

export type Actresses = ActressResponse['result']['actress'];
export type ActressDetail = ActressResponse['result']['actress'][0];

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
