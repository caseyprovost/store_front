import { Product } from './product'
import { OptionValue } from './optionValue'

export type Variant = {
  id: string,
  name: string,
  position: string,
  price: string,
  sku: string,
  description: string,
  product: Product,
  optionValues: Array<OptionValue>
}
