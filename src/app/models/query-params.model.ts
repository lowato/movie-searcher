interface BaseQueryParams {
  type?: 'movie' | 'series' | 'episode';
  y?: string;
  r?: 'json' | 'xml';
  callback?: string;
}

export interface QueryParamsBySearch extends BaseQueryParams {
  s: string;
  page?: number;
}

export interface QueryParamsById extends BaseQueryParams {
  i: string;
  plot?: 'short' | 'full';
}

export interface QueryParamsByTitle extends BaseQueryParams {
  t: string;
  plot?: 'short' | 'full';
}

export type QueryParams = QueryParamsBySearch | QueryParamsById | QueryParamsByTitle;
