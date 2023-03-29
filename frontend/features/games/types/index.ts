export interface GameCardSimpleInterface {
  title: string
  link: string
}

export interface GameCardInterface extends GameCardSimpleInterface {
  coverImg: string
  price: number
  sale?: number
  badge?: 'New' | 'Pre-order'
  platform?: Array<PlatformType>
  currency?: 'RUB' | 'USD' | 'EUR'
}

export interface PlatformType {
  type: 'ps' | 'xbox' | 'win' | 'ap'
}
