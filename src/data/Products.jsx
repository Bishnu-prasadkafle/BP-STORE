import ladyhandbag from "../assets/ladyhand.png";
import packbag from "../assets/packbag.png";
import bag from "../assets/bag.png";
import watchg from "../assets/graphwatch.png";
import glass from "../assets/glass.png";
import bracelet from "../assets/bracelet.png";
import cateye from "../assets/cateye.png";
import hat from "../assets/Hat.png";
import converse from "../assets/converse.png";
import boot from "../assets/boots1.png";
import perfume2 from "../assets/perfume2.png";
import perfume3 from "../assets/perfume3.png";
import perfume4 from "../assets/perfume4.png";
import perfume from "../assets/perfume.png";
import cream from "../assets/cream.png";
import serum1 from "../assets/serum1.png";
import facewash from "../assets/face-wash1.png";
import watch from "../assets/watch.png";
import scarf from "../assets/scarf.png";
import gopro from "../assets/gopro.png";
import trekkingpole from "../assets/trekkingpole.png";
import gel from "../assets/Gel.png";
import ring from "../assets/ring.png";
import necklace from "../assets/necklace.png";
import powerbank from "../assets/powerbank.png";
import kit from "../assets/kit.png";
import beared from "../assets/beared.png";
import wax from "../assets/wax.png";
import belt from "../assets/belt.png";
import wallet from "../assets/wallet.png";
import keychain from "../assets/keychain.png";
import airpods from "../assets/airpods.png";
import denimhat from "../assets/denimhat.png";
import running from "../assets/runningshoes.png";
import laptopstand from "../assets/laptopstand.png";
import shoulderbag from "../assets/shoulderbag.png";
import wbelt from "../assets/wbelt.png";
import scale from "../assets/scale.png";
import tripod from "../assets/tripod.png";
import scrub from "../assets/scrub.png";
import fedora from "../assets/fedora.png";
import ncream from "../assets/ncream.png";

export const products = [
  {
    id: 1,
    name: "Vintage Hat",
    price: 2100,
    image: hat,
    category: "Wearables",
    feature: "latest",
    description:
      "Step gray in time and make a bold statement with this Vintage Hat, designed to capture the elegance and spirit of a bygone era.",
  },

  {
    id: 2,
    name: "Travel PackBag",
    price: 2999,
    image: packbag,
    category: "Bags",
    description:
      "Whether you're heading for a weekend getaway, an international trip, or an adventurous trek, this Travel Backpack is designed to be your perfect travel companion.",
  },
  {
    id: 3,
    name: "Trekking Bag",
    price: 7999,
    image: bag,
    category: "Bags",
    description: "",
    feature: "latest",
  },
  {
    id: 4,
    name: "Luxury Chronograph Watch",
    price: 12999,
    image: watchg,
    category: "Wearables",
    description:
      "Stylish chronograph with precision quartz movement and sapphire crystal.",
  },
  {
    id: 5,
    name: "Aviator Sunglasses",
    price: 1599,
    image: glass,
    category: "Wearables",
    description:
      "UV-protective aviator frames with polarized lenses for clear vision.",
  },
  {
    id: 6,
    name: "Titanium Steel Men's Bracelet",
    price: 2500,
    image: bracelet,
    category: "Wearables",
    description:
      "Elevate your style with the strength and sophistication of our Titanium Steel Men's Bracelet. Engineered for the modern man, this bracelet blends rugged masculinity with sleek design—perfect for everyday wear or special occasions.",
  },
  {
    id: 7,
    name: "Cat-Eye Sunglasses",
    price: 1899,
    image: cateye,
    category: "Wearables",
    description:
      "Fashionable cat-eye frames with UV400 protection and gradient lenses.",
  },
  {
    id: 8,
    name: "Converse Chuck 70 Platform Shoes Ecru US 9al",
    price: 5400,
    image: converse,
    category: "Shoes",
    description:
      "Elevate your classic style—literally. The Converse Chuck 70 Platform Shoes in Ecru are a bold twist on the iconic Chuck Taylor, designed for those who love timeless vibes with a modern edge. Crafted with premium canvas in a soft, off-white Ecru tone, these sneakers pair perfectly with everything from casual denim to dressier streetwear looks.",
  },
  {
    id: 9,
    name: "Trekking Boot",
    price: 22000,
    image: boot,
    category: "Shoes",
    description:
      "Conquer any trail with confidence in these rugged, high-performance trekking boots—built for the bold explorer. Designed to handle challenging terrain and unpredictable weather, these boots offer unmatched durability, comfort, and support whether you're scaling mountains or navigating forest trails.",
  },
  {
    id: 10,
    name: "Travel Spray Perfume (30ml)",
    price: 1499,
    image: perfume2,
    category: "Perfume",
    description:
      "Compact, refillable spray bottle—perfect for on-the-go freshness.",
  },
  {
    id: 11,
    name: "Fragrance Body Mist (200ml)",
    price: 799,
    image: perfume3,
    category: "Perfume",
    description:
      "Light body mist with floral hints for a refreshed scent throughout the day.",
  },
  {
    id: 12,
    name: "Roll-On Perfume",
    price: 499,
    image: perfume4,
    category: "Perfume",
    description:
      "Compact roll-on fragrance for precise application and travel convenience.",
  },
  {
    id: 13,
    name: "Veleno perfume",
    price: 28000,
    image: perfume,
    category: "Perfume",
    description:
      "The fragrance opens with a spicy and boozy blend, leading to a heart of earthy tobacco and patchouli, and settles into a sweet base of cherry and vanilla with a touch of amber.",
  },
  {
    id: 14,
    name: "Face Cream",
    price: 5000,
    image: cream,
    category: "Cosmetics",
    description: "Face toner for men and women",
  },
  {
    id: 15,
    name: "Herbal Serum ",
    price: 599,
    image: serum1,
    category: "Cosmetics",
    description: "Suitable for all skin types – even sensitive skin",
  },
  {
    id: 16,
    name: "Men Face-Wash",
    price: 2000,
    image: facewash,
    category: "Cosmetics",
    description:
      "Suitable for all skin types / oily / dry / sensitive / acne-prone] ",
  },
  {
    id: 17,
    name: "Apple Watch",
    price: 9500,
    image: watch,
    category: "Wearables",
    description: "Apple Watch (Black) – Style Meets Smart Technology",
  },
  {
    id: 18,
    name: "Scarf",
    price: 2000,
    image: scarf,
    category: "Wearables",
    feature: "latest",
    description:
      "  handmade scarf is crafted from 100% soft, breathable cotton — perfect for year-round wear. ",
  },
  {
    id: 19,
    name: "Skin Care Gel",
    price: 2200,
    image: gel,
    category: "Cosmetics",
    description: "Made In Aruba World's Finest Aloe",
  },
  {
    id: 20,
    name: "GoPro HERO4",
    price: 70000,
    image: gopro,
    category: "Gadgets",
    description: "Waterproof Action Camera",
  },
  {
    id: 21,
    name: "Trekking Pole",
    price: 1100,
    image: trekkingpole,
    category: "Others",

    description: "Crafted from high-quality materials",
  },
  {
    id: 22,
    name: "Silver Band Ring",
    price: 2199,
    image: ring,
    category: "Wearables",
    subcategory: "Rings",
    description: "Sleek silver band with polished finish and comfort fit.",
  },
  {
    id: 23,
    name: "Pearl Necklace",
    price: 4999,
    image: necklace,
    category: "Wearables",
    subcategory: "Necklaces",
    description:
      "Classic faux-pearl strand with silver clasp—perfect for any outfit.",
  },
  {
    id: 24,
    name: "Power Bank",
    price: 3599,
    image: powerbank,
    category: "Gadgets",
    feature: "latest",
    description:
      "a portable battery-powered device used to charge electronic gadgets such as smartphones, tablets, smartwatches, wireless earphones, cameras, and other USB-powered devices. It's a convenient backup power source, especially for people on the go, travelers, students, or professionals who need reliable charging without access to wall sockets.",
  },
  {
    id: 25,
    name: "Beard Grooming Kit",
    price: 1999,
    image: beared,
    category: "Others",
    description:
      "Complete set: beard oil, balm, comb, and scissors for precision styling.",
  },
  {
    id: 26,
    name: "Travel Shaving Set",
    price: 2499,
    image: kit,
    category: "Others",
    description: "Compact razor, brush, and travel case—smooth shave anywhere.",
  },
  {
    id: 27,
    name: "Hair Styling Wax",
    price: 899,
    image: wax,
    category: "Others",
    feature: "latest",
    description: "Matte finish styling wax for flexible hold and natural look.",
  },
  {
    id: 28,
    name: "Cortina Leather Belt",
    price: 2099,
    image: belt,
    category: "Others",
    description:
      "Elevate your attire with the Trafalgar 30mm Cortina Leather Belt, a timeless accessory designed for the discerning gentleman. ",
  },
  {
    id: 29,
    name: "Leather Wallet",
    price: 1499,
    image: wallet,
    category: "Others",
    description: "Slim bifold wallet in genuine leather with RFID protection.",
  },
  {
    id: 30,
    name: "Apple Airpods 3rd generation",
    price: 10099,
    image: airpods,
    category: "Gadgets",
    description:
      "Utilizes dynamic head tracking to create an immersive, theater-like sound experience, adapting audio based on your head movements. ",
  },
  {
    id: 31,
    name: "Keychain Holder",
    price: 499,
    image: keychain,
    category: "Others",
    description: "Durable leather & metal keychain holder with metal ring.",
  },

  {
    id: 32,
    name: "CHANEL Mini flag bag",
    price: 9999,
    image: ladyhandbag,
    category: "Bags",
    feature: "latest",
    description:
      "Timeless analogue watch with genuine leather strap and stainless steel case.",
  },
  {
    id: 33,
    name: "Denim Bucket Hat",
    price: 1399,
    image: denimhat,
    category: "Wearables",
    description:
      "Stylish denim bucket hat—perfect for casual and streetwear looks.",
  },
  {
    id: 35,
    name: "Running Shoes",
    price: 6500,
    image: running,
    category: "Shoes",
    description:
      "Breathable lightweight shoes designed for maximum performance.",
  },
  {
    id: 36,
    name: "Adjustable Laptop Stand",
    price: 2599,
    image: laptopstand,
    category: "Gadgets",
    description: "Portable and ergonomic laptop stand with cooling support.",
  },
  {
    id: 37,
    name: "Canvas Shoulder Bag",
    price: 2300,
    image: shoulderbag,
    category: "Bags",
    feature: "latest",
    description: "Stylish canvas bag ideal for casual outings.",
  },
  {
    id: 38,
    name: "Woven Belt",
    price: 1399,
    image: wbelt,
    category: "Others",
    description: "Stretchable belt with leather accents for a snug fit.",
  },
  {
    id: 39,
    name: "Digital Travel Scale",
    price: 1599,
    image: scale,
    category: "Gadgets",
    description:
      "Avoid excess baggage fees with this lightweight digital scale.",
  },
  {
    id: 40,
    name: "Mini Tripod Stand",
    price: 1099,
    image: tripod,
    category: "Gadgets",
    description: "Flexible tripod stand for smartphones and compact cameras.",
  },
  {
    id: 41,
    name: "Body Scrub",
    price: 899,
    image: scrub,
    category: "Cosmetics",
    description: "Exfoliating body scrub with natural sea salt and almond oil.",
  },
  {
    id: 42,
    name: "Classic Fedora",
    price: 2200,
    image: fedora,
    category: "Wearables",
    feature: "latest",
    description:
      "Stylish felt fedora with ribbon detail—ideal for urban fashion.",
  },

  {
    id: 43,
    name: "Night Repair Cream",
    price: 2700,
    image: ncream,
    category: "Cosmetics",
    description: "Overnight repair cream to hydrate and rejuvenate skin.",
  },
];
