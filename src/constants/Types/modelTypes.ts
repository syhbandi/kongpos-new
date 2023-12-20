export type GetModelsType = {
  company_id: string;
  order_col: string;
  order_type: string;
  search: string;
  limit: number | any;
  length: number | any;
};

export type GetModelType = { company_id: string; kd_model: string };

export type ModelType = {
  kd_model: string;
  nama: string;
  status: string;
  keterangan: string;
};

export type CreateModelType = {
  company_id: string;
  kd_model: string;
  nama: string;
  keterangan: string;
  status: string;
};
