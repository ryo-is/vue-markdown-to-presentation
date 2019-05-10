export interface transitionPageInfoType {
  preb: string
  next: string
}

export interface pageContentsType {
  [key: string]: pageContentType
}

export interface pageContentType {
  mainText?: string
  prebLink: string
  nextLink: string
}
