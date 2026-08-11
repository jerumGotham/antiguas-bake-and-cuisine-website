/**
 * Owner-approved catalog facts for public product displays.
 *
 * Records remain empty until product details are approved; expected display
 * fields use null so renderers can show the locked factual/image placeholders.
 */
export const productCategories = [
  "Pasta",
  "Cookies",
  "Desserts",
  "Drinks",
  "Seasonal / Special Products",
] as const

export type ProductCategory = (typeof productCategories)[number]

export interface ProductImage {
  /** A local asset path rooted in public/. */
  readonly src: `/${string}`
  /** Owner-supplied, meaningful description of the approved image. */
  readonly alt: string
}

export interface Product {
  readonly id: string
  readonly name: string
  readonly category: ProductCategory
  readonly description?: string | null
  readonly image?: ProductImage | null
  readonly sizes?: readonly string[]
  /** An owner-approved display string, never a value for arithmetic. */
  readonly price?: string | null
  readonly isBestSeller?: boolean
}

/** The sole public product catalog; append owner-approved records in display order. */
export const products: readonly Product[] = []
