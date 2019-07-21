import { Variant } from './variant'
import { ProductProperty } from './productProperty';

export type Product = {
  id: string,
  name: string,
  description: string,
  variants: Array<Variant>,
  productProperties: Array<ProductProperty>
}
