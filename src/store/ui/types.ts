export interface IState {
  overlay: boolean,
  loading: boolean,
  loadingText: string,
  sidebar: {
    [key: string]: boolean
  }
}