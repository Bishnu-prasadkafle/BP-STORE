const products = [
  {
    id: 1,
    name: "Classic Leather Watch",
    price: 4999,
    image: "/assets/watches/leather-watch.jpg",
    category: "Watches",
    description:
      "Timeless analogue watch with genuine leather strap and stainless steel case.",
  },
  {
    id: 2,
    name: "Sporty Digital Watch",
    price: 2999,
    image: "/assets/watches/digital-watch.jpg",
    category: "Watches",
    description:
      "Durable digital watch with stopwatch, alarm, and water-resistance up to 50m.",
  },
  {
    id: 3,
    name: "Smart Fitness Watch",
    price: 7999,
    image: "/assets/watches/fitness-watch.jpg",
    category: "Watches",
    description:
      "All-in-one fitness tracker with heart-rate monitor and sleep analysis.",
  },
  {
    id: 4,
    name: "Luxury Chronograph Watch",
    price: 12999,
    image: "/assets/watches/chronograph-watch.jpg",
    category: "Watches",
    description:
      "Stylish chronograph with precision quartz movement and sapphire crystal.",
  },
  {
    id: 5,
    name: "Aviator Sunglasses",
    price: 1599,
    image: "/assets/glasses/aviator-sunglasses.jpg",
    category: "Glasses",
    description:
      "UV-protective aviator frames with polarized lenses for clear vision.",
  },
  {
    id: 6,
    name: "Round Frame Glasses",
    price: 1299,
    image: "/assets/glasses/round-glasses.jpg",
    category: "Glasses",
    description:
      "Lightweight acetate round frames for everyday wear and comfort.",
  },
  {
    id: 7,
    name: "Cat-Eye Sunglasses",
    price: 1899,
    image: "/assets/glasses/cat-eye.jpg",
    category: "Glasses",
    description:
      "Fashionable cat-eye frames with UV400 protection and gradient lenses.",
  },
  {
    id: 8,
    name: "Reading Glasses",
    price: 999,
    image: "/assets/glasses/reading-glasses.jpg",
    category: "Glasses",
    description:
      "Comfortable reading frames with spring hinges and anti-glare coating.",
  },
  {
    id: 9,
    name: "Eau de Parfum (100ml)",
    price: 3499,
    image: "/assets/perfume/edp-100ml.jpg",
    category: "Perfume",
    description:
      "Long-lasting fragrance blend of citrus top notes and woody base.",
  },
  {
    id: 10,
    name: "Travel Spray Perfume (30ml)",
    price: 1499,
    image: "/assets/perfume/travel-spray.jpg",
    category: "Perfume",
    description:
      "Compact, refillable spray bottle—perfect for on-the-go freshness.",
  },
  {
    id: 11,
    name: "Fragrance Body Mist (200ml)",
    price: 799,
    image: "/assets/perfume/body-mist.jpg",
    category: "Perfume",
    description:
      "Light body mist with floral hints for a refreshed scent throughout the day.",
  },
  {
    id: 12,
    name: "Roll-On Perfume",
    price: 499,
    image: "/assets/perfume/roll-on.jpg",
    category: "Perfume",
    description:
      "Compact roll-on fragrance for precise application and travel convenience.",
  },
  {
    id: 13,
    name: "Herbal Hair Oil",
    price: 799,
    image: "/assets/hair-oil/herbal-hair-oil.jpg",
    category: "Hair Oil",
    description:
      "Nourishing blend of coconut, amla, and hibiscus oils for healthy scalp.",
  },
  {
    id: 14,
    name: "Argan Repair Hair Oil",
    price: 999,
    image: "/assets/hair-oil/argan-oil.jpg",
    category: "Hair Oil",
    description: "Pure argan oil to repair split ends and add shine.",
  },
  {
    id: 15,
    name: "Herbal Serum Hair Elixir",
    price: 1199,
    image: "/assets/hair-oil/hair-elixir.jpg",
    category: "Hair Oil",
    description:
      "Concentrated serum with keratin and biotin for thicker, healthier hair.",
  },
  {
    id: 16,
    name: "Anti-Dandruff Scalp Treatment",
    price: 899,
    image: "/assets/hair-oil/scalp-treatment.jpg",
    category: "Hair Oil",
    description:
      "Soothing scalp formula with tea tree oil and peppermint for dandruff control.",
  },
  {
    id: 17,
    name: "Vanity Cosmetic Bag",
    price: 1599,
    image: "/assets/vanity/cosmetic-bag.jpg",
    category: "Vanity",
    description:
      "Elegant travel pouch with multiple compartments and mirror pocket.",
  },
  {
    id: 18,
    name: "Makeup Brush Set",
    price: 2299,
    image: "/assets/vanity/brush-set.jpg",
    category: "Vanity",
    description:
      "10-piece synthetic brush set with ergonomic handles for flawless application.",
  },
  {
    id: 19,
    name: "Compact Mirror Palette",
    price: 699,
    image: "/assets/vanity/mirror-palette.jpg",
    category: "Vanity",
    description:
      "Foldable compact mirror with LED lights for perfect makeup touch-ups.",
  },
  {
    id: 20,
    name: "Nail Art Kit",
    price: 1299,
    image: "/assets/vanity/nail-kit.jpg",
    category: "Vanity",
    description:
      "Complete nail kit with brushes, polishes, and rhinestones for creative designs.",
  },
  {
    id: 21,
    name: "Gold Plated Ring",
    price: 2699,
    image: "/assets/ornaments/ring.jpg",
    category: "Ornaments",
    subcategory: "Rings",
    description: "Elegant gold-plated ring with cubic zirconia accents.",
  },
  {
    id: 22,
    name: "Silver Band Ring",
    price: 2199,
    image: "/assets/ornaments/silver-ring.jpg",
    category: "Ornaments",
    subcategory: "Rings",
    description: "Sleek silver band with polished finish and comfort fit.",
  },
  {
    id: 23,
    name: "Pearl Necklace",
    price: 4999,
    image: "/assets/ornaments/necklace.jpg",
    category: "Ornaments",
    subcategory: "Necklaces",
    description:
      "Classic faux-pearl strand with silver clasp—perfect for any outfit.",
  },
  {
    id: 24,
    name: "Gemstone Pendant Necklace",
    price: 3599,
    image: "/assets/ornaments/gemstone-necklace.jpg",
    category: "Ornaments",
    subcategory: "Necklaces",
    description:
      "Beautiful pendant necklace with natural gemstone and adjustable chain.",
  },
  {
    id: 25,
    name: "Beard Grooming Kit",
    price: 1999,
    image: "/assets/grooming/beard-kit.jpg",
    category: "Men’s Grooming",
    description:
      "Complete set: beard oil, balm, comb, and scissors for precision styling.",
  },
  {
    id: 26,
    name: "Travel Shaving Set",
    price: 2499,
    image: "/assets/grooming/shaving-set.jpg",
    category: "Men’s Grooming",
    description: "Compact razor, brush, and travel case—smooth shave anywhere.",
  },
  {
    id: 27,
    name: "Hair Styling Wax",
    price: 899,
    image: "/assets/grooming/wax.jpg",
    category: "Men’s Grooming",
    description: "Matte finish styling wax for flexible hold and natural look.",
  },
  {
    id: 28,
    name: "Face Wash & Scrub Combo",
    price: 1099,
    image: "/assets/grooming/face-wash.jpg",
    category: "Men’s Grooming",
    description:
      "Dual-action face wash and scrub to cleanse and exfoliate skin.",
  },
  {
    id: 29,
    name: "Leather Wallet",
    price: 1499,
    image: "/assets/accessories/wallet.jpg",
    category: "Accessories",
    description: "Slim bifold wallet in genuine leather with RFID protection.",
  },
  {
    id: 30,
    name: "Stylish Belt",
    price: 1299,
    image: "/assets/accessories/belt.jpg",
    category: "Accessories",
    description: "Reversible leather belt with polished metal buckle.",
  },
  {
    id: 31,
    name: "Keychain Holder",
    price: 499,
    image: "/assets/accessories/keychain.jpg",
    category: "Accessories",
    description: "Durable leather keychain holder with metal ring.",
  },
  {
    id: 32,
    name: "Stylish Cap",
    price: 799,
    image: "/assets/accessories/cap.jpg",
    category: "Accessories",
    description: "Adjustable cotton cap with embroidered logo.",
  },
];

export default products;
