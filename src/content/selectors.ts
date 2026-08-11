import { products, type Product, type ProductCategory } from "@/content/menu"

/**
 * Returns the exact-category records in their declared catalog order.
 * The optional catalog keeps boundary behavior testable without creating data.
 */
export function getProductsByCategory(
  category: ProductCategory,
  catalog: readonly Product[] = products,
): readonly Product[] {
  return catalog.filter((product) => product.category === category)
}

/** Returns canonical records in their declared catalog order. */
export function getProducts(catalog: readonly Product[] = products): readonly Product[] {
  return catalog
}
