export enum UIActionTypes {
  UPLOAD = 'UPLOAD',
  CLOSE = 'CLOSE',
  NOTIFY = 'NOTIFY',
  REGIONAL_ASSETS = 'REGIONAL_ASSETS',
}

export interface UIAction {
  type: UIActionTypes;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload?: any;
}

export enum WorkerActionTypes {
  REGIONAL_ASSETS_NOTIFY = 'REGIONAL_ASSETS_NOTIFY',
}

export interface WorkerAction {
  type: WorkerActionTypes;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload?: any;
}
