/** Owner-approved catalog facts for public product displays. */
export const productCategories = ["Pasta", "Cookies", "Desserts", "Drinks"] as const

export type ProductCategory = (typeof productCategories)[number]

export interface ProductImage {
  readonly src: `/${string}`
  readonly alt: string
}

export interface ProductOption {
  readonly label: string
  readonly price: string
}

export interface Product {
  readonly id: string
  readonly name: string
  readonly category: ProductCategory
  readonly description: string
  readonly image: ProductImage
  readonly options: readonly ProductOption[]
  readonly isBestSeller?: boolean
}

const cookieImage = { src: "/images/cookies_price.jpg", alt: "Antigua's cookie menu" } as const

export const products = [
  {
    id: "beef-mushroom-lasagna", name: "Beef & Mushroom Lasagna", category: "Pasta", isBestSeller: true,
    description: "Layers of tender pasta, savory beef, mushrooms, and creamy béchamel sauce topped with melted cheese and herbs.",
    image: { src: "/images/lasagna_price.jpg", alt: "Beef and mushroom lasagna" },
    options: [{ label: "Solo Pan 5.8x4.75x1.9 inches", price: "PHP88" }, { label: "For Sharing Pan 8.6x6x2 inches (3-4 persons)", price: "PHP240" }, { label: "Family Pan 12.4x8x2 inches (6-8 persons)", price: "PHP480" }],
  },
  {
    id: "creamy-carbonara", name: "Creamy Carbonara", category: "Pasta",
    description: "Rich, creamy, and perfectly savory. Made with love in every bite.",
    image: { src: "/images/carbo_price.jpg", alt: "Creamy carbonara pasta" },
    options: [{ label: "Solo 220g", price: "PHP140" }, { label: "Sharing (3-4 persons)", price: "PHP530" }, { label: "Family (6-8 persons)", price: "PHP900" }, { label: "Party (10-12 persons)", price: "PHP1300" }],
  },
  {
    id: "creamy-tuna-pesto", name: "Creamy Tuna Pesto Pasta", category: "Pasta",
    description: "Creamy, herby, and packed with flavor. Tuna meets pesto in the perfect bite!",
    image: { src: "/images/pesto_price.jpg", alt: "Creamy tuna pesto pasta" },
    options: [{ label: "Solo 220g", price: "PHP140" }, { label: "Sharing (3-4 persons)", price: "PHP530" }, { label: "Family (6-8 persons)", price: "PHP900" }, { label: "Party (10-12 persons)", price: "PHP1300" }],
  },
  { id: "chocolate-chip-cookies", name: "Chocolate Chip Cookies", category: "Cookies", isBestSeller: true, description: "molded cookies mix with semi-sweet chocolate chips", image: cookieImage, options: [{ label: "By 3s", price: "PHP55" }, { label: "Box of 6", price: "PHP100" }, { label: "Box of 8", price: "PHP120" }, { label: "Box of 10", price: "PHP140" }] },
  { id: "choco-walnut-cookies", name: "Choco-Walnut Cookies", category: "Cookies", description: "molded cookies mix with semi-sweet chocolate chips & premium walnuts", image: cookieImage, options: [{ label: "By 3s", price: "PHP65" }, { label: "Box of 6", price: "PHP120" }, { label: "Box of 8", price: "PHP150" }, { label: "Box of 10", price: "PHP180" }] },
  { id: "premium-nutty-cookies", name: "Premium Nutty Cookies", category: "Cookies", description: "molded cookies mix with semi-sweet chocolate chips, premium walnuts & almonds", image: cookieImage, options: [{ label: "By 3s", price: "PHP75" }, { label: "Box of 6", price: "PHP145" }, { label: "Box of 8", price: "PHP180" }, { label: "Box of 10", price: "PHP215" }] },
  { id: "gooey-smores-cookies", name: "Gooey S'mores Cookies", category: "Cookies", isBestSeller: true, description: "molded cookies mix with semi-sweet chocolate chips, graham cracker & marshmallow", image: cookieImage, options: [{ label: "By 3s", price: "PHP70" }, { label: "Box of 6", price: "PHP135" }, { label: "Box of 8", price: "PHP170" }, { label: "Box of 10", price: "PHP200" }] },
  { id: "full-flavor-box-4", name: "Full Flavor Box of 4", category: "Cookies", description: "One each of the four flavors.", image: cookieImage, options: [{ label: "Box of 4", price: "PHP88" }] },
  { id: "full-flavor-box-8", name: "Full Flavor Box of 8", category: "Cookies", isBestSeller: true, description: "Two each of the four flavors.", image: cookieImage, options: [{ label: "Box of 8", price: "PHP170" }] },
  { id: "mix-flavors-premium-choco-chip", name: "Box of 10 Mix Flavors: Premium Nutty & Chocolate Chip", category: "Cookies", isBestSeller: true, description: "Mixed cookie flavors.", image: cookieImage, options: [{ label: "Box of 10", price: "PHP200" }] },
  { id: "mix-flavors-premium-walnut", name: "Box of 10 Mix Flavors: Premium Nutty & Choco-Walnut", category: "Cookies", description: "Mixed cookie flavors.", image: cookieImage, options: [{ label: "Box of 10", price: "PHP215" }] },
  { id: "mix-flavors-chip-walnut", name: "Box of 10 Mix Flavors: Chocolate Chip & Choco-Walnut", category: "Cookies", description: "Mixed cookie flavors.", image: cookieImage, options: [{ label: "Box of 10", price: "PHP180" }] },
  { id: "mix-flavors-smores-chip", name: "Box of 10 Mix Flavors: Gooey S'mores & Chocolate Chip", category: "Cookies", isBestSeller: true, description: "Mixed cookie flavors.", image: cookieImage, options: [{ label: "Box of 10", price: "PHP200" }] },
  { id: "mix-flavors-smores-walnut", name: "Box of 10 Mix Flavors: Gooey S'mores & Choco-Walnut", category: "Cookies", description: "Mixed cookie flavors.", image: cookieImage, options: [{ label: "Box of 10", price: "PHP210" }] },
  { id: "mix-flavors-smores-nutty", name: "Box of 10 Mix Flavors: Gooey S'mores & Premium Nutty", category: "Cookies", description: "Mixed cookie flavors.", image: cookieImage, options: [{ label: "Box of 10", price: "PHP230" }] },
  { id: "mango-tapioca-jelly", name: "Mango Tapioca Jelly", category: "Drinks", isBestSeller: true, description: "Creamy, fruity, and full of chewy goodness in every spoonful. A refreshing treat you'll love!", image: { src: "/images/mango_price.jpg", alt: "Mango tapioca jelly" }, options: [{ label: "Small 150ml", price: "PHP48" }, { label: "Large 500ml", price: "PHP150" }] },
  { id: "coffee-jelly", name: "Coffee Jelly", category: "Drinks", description: "Smooth, creamy, and a perfectly coffee-infused delight with chewy coffee jelly in every sip!", image: { src: "/images/coffe_jelly_price.jpg", alt: "Coffee jelly" }, options: [{ label: "Small 150ml", price: "PHP48" }, { label: "Large 500ml", price: "PHP150" }] },
  { id: "moist-chocolate-cake", name: "Moist Chocolate Cake", category: "Desserts", description: "Rich. Moist. Irresistible. Pure chocolate indulgence.", image: { src: "/images/moist_cake_price.jpg", alt: "Moist chocolate cake" }, options: [{ label: "Mini 150ml, pan size 3.4 x 3.4 x 1.3 inches", price: "PHP100" }, { label: "Solo 300ml, pan size 4.4 x 4.4 x 1.7 inches", price: "PHP150" }] },
  { id: "blueberry-cheesecake", name: "Blueberry Cheesecake - No Bake", category: "Desserts", description: "Creamy, fruity, and deliciously irresistible!", image: { src: "/images/blueberry_price.jpg", alt: "No bake blueberry cheesecake" }, options: [{ label: "Mini 150ml, pan size 3.4 x 3.4 x 1.3 inches", price: "PHP150" }, { label: "Solo 300ml, pan size 4.4 x 4.4 x 1.7 inches", price: "PHP230" }] },
] as const satisfies readonly Product[]
