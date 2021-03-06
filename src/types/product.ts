import { Variant } from './variant'
import { ProductProperty } from './productProperty';
import { OptionType } from './optionType';

export type Product = {
  id: string,
  name: string,
  description: string,
  variants: Array<Variant>,
  productProperties: Array<ProductProperty>
  optionTypes: Array<OptionType>
}
