import { Product } from './product'

export type Variant = {
  id: string,
  name: string,
  position: string,
  price: string,
  sku: string,
  product: Product
}
