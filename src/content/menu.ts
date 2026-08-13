/** Owner-approved catalog facts for public product displays. */
export const productCategories = [
  "Pasta",
  "Cookies",
  "Desserts",
  "Drinks",
] as const;

export type ProductCategory = (typeof productCategories)[number];

export interface ProductImage {
  readonly src: `/${string}`;
  readonly alt: string;
}

export interface ProductOption {
  readonly label: string;
  readonly price: string;
}

export interface Product {
  readonly id: string;
  readonly name: string;
  readonly category: ProductCategory;
  readonly description: string;
  readonly image: ProductImage;
  readonly options: readonly ProductOption[];
  readonly isBestSeller?: boolean;
}

const cookieImages = {
  chocolateChip: {
    src: "/images/choco_chips_orig.jpeg",
    alt: "Chocolate chip cookies",
  },
  chocoWalnut: {
    src: "/images/wallnut_orig.jpeg",
    alt: "Choco-walnut cookies",
  },
  premiumNutty: {
    src: "/images/premium_nutty_orig.jpeg",
    alt: "Premium nutty cookies",
  },
  smores: { src: "/images/smores_orig.jpeg", alt: "Gooey s'mores cookies" },
  assorted: { src: "/images/cookies_orig.jpg", alt: "Assorted cookies" },
  fullFlavorBox: {
    src: "/images/box_of_8_full_orig.jpeg",
    alt: "Full flavor cookie box",
  },
  fullFlavorBox4: {
    src: "/images/full_box_of 4.jpeg",
    alt: "Full flavor box of four cookies",
  },
  premiumChocolateChip: {
    src: "/images/premium_choco.jpeg",
    alt: "Premium nutty and chocolate chip cookies",
  },
  premiumWalnut: {
    src: "/images/wallnut_premium.jpeg",
    alt: "Premium nutty and choco-walnut cookies",
  },
  chocolateChipWalnut: {
    src: "/images/choco_wallnut.jpeg",
    alt: "Chocolate chip and choco-walnut cookies",
  },
  smoresChocolateChip: {
    src: "/images/smores_choco.jpeg",
    alt: "Gooey s'mores and chocolate chip cookies",
  },
  smoresWalnut: {
    src: "/images/smores_wallnut.jpeg",
    alt: "Gooey s'mores and choco-walnut cookies",
  },
  smoresPremium: {
    src: "/images/smores_premium.jpeg",
    alt: "Gooey s'mores and premium nutty cookies",
  },
} as const;

export const products = [
  {
    id: "beef-mushroom-lasagna",
    name: "Beef & Mushroom Lasagna",
    category: "Pasta",
    isBestSeller: true,
    description:
      "Layers of tender pasta, savory beef, mushrooms, and creamy béchamel sauce topped with melted cheese and herbs.",
    image: {
      src: "/images/lasagna_orig.jpeg",
      alt: "Beef and mushroom lasagna",
    },
    options: [
      { label: "Solo Pan 5.8x4.75x1.9 inches", price: "PHP88" },
      {
        label: "For Sharing Pan 8.6x6x2 inches (3-4 persons)",
        price: "PHP240",
      },
      { label: "Family Pan 12.4x8x2 inches (6-8 persons)", price: "PHP480" },
    ],
  },
  {
    id: "creamy-carbonara",
    name: "Creamy Carbonara",
    category: "Pasta",
    description:
      "Rich, creamy, and perfectly savory. Made with love in every bite.",
    image: { src: "/images/carbo_orig.jpeg", alt: "Creamy carbonara pasta" },
    options: [
      { label: "Solo 220g", price: "PHP140" },
      { label: "Sharing (3-4 persons)", price: "PHP530" },
      { label: "Family (6-8 persons)", price: "PHP900" },
      { label: "Party (10-12 persons)", price: "PHP1300" },
    ],
  },
  {
    id: "creamy-tuna-pesto",
    name: "Creamy Tuna Pesto Pasta",
    category: "Pasta",
    description:
      "Creamy, herby, and packed with flavor. Tuna meets pesto in the perfect bite!",
    image: {
      src: "/images/tuna_pesto_orig.jpeg",
      alt: "Creamy tuna pesto pasta",
    },
    options: [
      { label: "Solo 220g", price: "PHP140" },
      { label: "Sharing (3-4 persons)", price: "PHP530" },
      { label: "Family (6-8 persons)", price: "PHP900" },
      { label: "Party (10-12 persons)", price: "PHP1300" },
    ],
  },
  {
    id: "chocolate-chip-cookies",
    name: "Chocolate Chip Cookies",
    category: "Cookies",
    isBestSeller: true,
    description: "molded cookies mix with semi-sweet chocolate chips",
    image: cookieImages.chocolateChip,
    options: [
      { label: "By 3s", price: "PHP55" },
      { label: "Box of 6", price: "PHP100" },
      { label: "Box of 8", price: "PHP120" },
      { label: "Box of 10", price: "PHP140" },
    ],
  },
  {
    id: "choco-walnut-cookies",
    name: "Choco-Walnut Cookies",
    category: "Cookies",
    description:
      "molded cookies mix with semi-sweet chocolate chips & premium walnuts",
    image: cookieImages.chocoWalnut,
    options: [
      { label: "By 3s", price: "PHP65" },
      { label: "Box of 6", price: "PHP120" },
      { label: "Box of 8", price: "PHP150" },
      { label: "Box of 10", price: "PHP180" },
    ],
  },
  {
    id: "premium-nutty-cookies",
    name: "Premium Nutty Cookies",
    category: "Cookies",
    description:
      "molded cookies mix with semi-sweet chocolate chips, premium walnuts & almonds",
    image: cookieImages.premiumNutty,
    options: [
      { label: "By 3s", price: "PHP75" },
      { label: "Box of 6", price: "PHP145" },
      { label: "Box of 8", price: "PHP180" },
      { label: "Box of 10", price: "PHP215" },
    ],
  },
  {
    id: "gooey-smores-cookies",
    name: "Gooey S'mores Cookies",
    category: "Cookies",
    isBestSeller: true,
    description:
      "molded cookies mix with semi-sweet chocolate chips, graham cracker & marshmallow",
    image: cookieImages.smores,
    options: [
      { label: "By 3s", price: "PHP70" },
      { label: "Box of 6", price: "PHP135" },
      { label: "Box of 8", price: "PHP170" },
      { label: "Box of 10", price: "PHP200" },
    ],
  },
  {
    id: "full-flavor-box-4",
    name: "Full Flavor Box of 4",
    category: "Cookies",
    description: "One each of the four flavors.",
    image: cookieImages.fullFlavorBox4,
    options: [{ label: "Box of 4", price: "PHP88" }],
  },
  {
    id: "full-flavor-box-8",
    name: "Full Flavor Box of 8",
    category: "Cookies",
    isBestSeller: true,
    description: "Two each of the four flavors.",
    image: cookieImages.fullFlavorBox,
    options: [{ label: "Box of 8", price: "PHP170" }],
  },
  {
    id: "mix-flavors-premium-choco-chip",
    name: "Box of 10 Mix Flavors: Premium Nutty & Chocolate Chip",
    category: "Cookies",
    isBestSeller: true,
    description: "Mixed cookie flavors.",
    image: cookieImages.premiumChocolateChip,
    options: [{ label: "Box of 10", price: "PHP200" }],
  },
  {
    id: "mix-flavors-premium-walnut",
    name: "Box of 10 Mix Flavors: Premium Nutty & Choco-Walnut",
    category: "Cookies",
    description: "Mixed cookie flavors.",
    image: cookieImages.premiumWalnut,
    options: [{ label: "Box of 10", price: "PHP215" }],
  },
  {
    id: "mix-flavors-chip-walnut",
    name: "Box of 10 Mix Flavors: Chocolate Chip & Choco-Walnut",
    category: "Cookies",
    description: "Mixed cookie flavors.",
    image: cookieImages.chocolateChipWalnut,
    options: [{ label: "Box of 10", price: "PHP180" }],
  },
  {
    id: "mix-flavors-smores-chip",
    name: "Box of 10 Mix Flavors: Gooey S'mores & Chocolate Chip",
    category: "Cookies",
    isBestSeller: true,
    description: "Mixed cookie flavors.",
    image: cookieImages.smoresChocolateChip,
    options: [{ label: "Box of 10", price: "PHP200" }],
  },
  {
    id: "mix-flavors-smores-walnut",
    name: "Box of 10 Mix Flavors: Gooey S'mores & Choco-Walnut",
    category: "Cookies",
    description: "Mixed cookie flavors.",
    image: cookieImages.smoresWalnut,
    options: [{ label: "Box of 10", price: "PHP210" }],
  },
  {
    id: "mix-flavors-smores-nutty",
    name: "Box of 10 Mix Flavors: Gooey S'mores & Premium Nutty",
    category: "Cookies",
    description: "Mixed cookie flavors.",
    image: cookieImages.smoresPremium,
    options: [{ label: "Box of 10", price: "PHP230" }],
  },
  {
    id: "mango-tapioca-jelly",
    name: "Mango Tapioca Jelly",
    category: "Drinks",
    isBestSeller: true,
    description:
      "Creamy, fruity, and full of chewy goodness in every spoonful. A refreshing treat you'll love!",
    image: { src: "/images/mango_jelly_orig.jpeg", alt: "Mango tapioca jelly" },
    options: [
      { label: "Small 150ml", price: "PHP48" },
      { label: "Large 500ml", price: "PHP150" },
    ],
  },
  {
    id: "coffee-jelly",
    name: "Coffee Jelly",
    category: "Drinks",
    description:
      "Smooth, creamy, and a perfectly coffee-infused delight with chewy coffee jelly in every sip!",
    image: { src: "/images/coffe_jelly_orig.jpeg", alt: "Coffee jelly" },
    options: [
      { label: "Small 150ml", price: "PHP48" },
      { label: "Large 500ml", price: "PHP150" },
    ],
  },
  {
    id: "moist-chocolate-cake",
    name: "Moist Chocolate Cake",
    category: "Desserts",
    description: "Rich. Moist. Irresistible. Pure chocolate indulgence.",
    image: { src: "/images/moist_cake_orig.jpeg", alt: "Moist chocolate cake" },
    options: [
      { label: "Mini 150ml, pan size 3.4 x 3.4 x 1.3 inches", price: "PHP100" },
      { label: "Solo 300ml, pan size 4.4 x 4.4 x 1.7 inches", price: "PHP150" },
    ],
  },
  {
    id: "blueberry-cheesecake",
    name: "Blueberry Cheesecake - No Bake",
    category: "Desserts",
    description: "Creamy, fruity, and deliciously irresistible!",
    image: {
      src: "/images/blueberry_orig.jpeg",
      alt: "No bake blueberry cheesecake",
    },
    options: [
      { label: "Mini 150ml, pan size 3.4 x 3.4 x 1.3 inches", price: "PHP150" },
      { label: "Solo 300ml, pan size 4.4 x 4.4 x 1.7 inches", price: "PHP230" },
    ],
  },
] as const satisfies readonly Product[];
