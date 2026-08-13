export const businessContent = {
  brandName: "Antigua's Bake & Cuisine",
  order: {
    facebookPageUrl: "https://www.facebook.com/antiguasbakeandcuisine",
    ctaLabel: "Message us on Facebook.",
    loginWarning: "Facebook login may be required to message us.",
  },
  contact: {
    address:
      "Block 4 Lot 16 Myrtle Street, Metrogreen Village, Brgy. San Bartolome, Quezon City, Philippines",
    email: "antiguasbakeandcuisine@gmail.com",
    phone: "0915 495 3635",
  },
  placeholders: {
    detail: "Details coming soon.",
    imageLabel: "Image coming soon",
  },
  expectedFacts: {
    businessOverview: null,
    featuredImage: null,
  },
} as const;

export type BusinessContent = typeof businessContent;
