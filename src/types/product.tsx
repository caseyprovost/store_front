import { Variant } from './variant'

export type Product = {
  id: string,
  name: string,
  description: string,
  variants: Array<Variant>
}
