export interface ReqresResourceReturnType {
  data?: ReqresResourceReturnDataType[];
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
}

export interface ReqresResourceReturnDataType {
  id: number;
  name: string;
  year: number;
  color: string;
  pantone_value: string;
}
