import { categories } from "./categories";

// 📋 Products Data
export const products = [
  // Perfumes
  {
    id: 1,
    slug: "luxury-perfume-chance",
    name: "Luxury Perfume - Chance",
    price: 4500,
    compareAtPrice: 5500,
    image:
      "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=400&fit=crop",
    rating: 4.8,
    reviewCount: 120,
    badge: "Best Seller",
    category: "perfumes",
    subcategory: "Women",
    inStock: true,
    description: "A luxurious fragrance with floral and woody notes.",
  },
  {
    id: 2,
    slug: "oud-wood-perfume",
    name: "Oud Wood Perfume",
    price: 5500,
    compareAtPrice: 7000,
    image:
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=400&h=400&fit=crop",
    rating: 4.9,
    reviewCount: 85,
    badge: "Best Seller",
    category: "perfumes",
    subcategory: "Oud",
    inStock: true,
    description: "Premium oud wood fragrance for special occasions.",
  },
  {
    id: 3,
    slug: "floral-eau-de-parfum",
    name: "Floral Eau De Parfum",
    price: 3800,
    compareAtPrice: null,
    image:
      "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=400&h=400&fit=crop",
    rating: 4.8,
    reviewCount: 60,
    badge: null,
    category: "perfumes",
    subcategory: "Women",
    inStock: true,
    description: "Fresh floral fragrance perfect for daily wear.",
  },

  // Jewelry
  {
    id: 4,
    slug: "gold-plated-necklace-set",
    name: "Gold Plated Necklace Set",
    price: 3200,
    compareAtPrice: null,
    image:
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop",
    rating: 4.9,
    reviewCount: 200,
    badge: "New",
    category: "jewelry",
    subcategory: "Necklaces",
    inStock: true,
    description: "Elegant 22K gold plated necklace set.",
  },
  {
    id: 5,
    slug: "rose-gold-earrings",
    name: "Rose Gold Earrings",
    price: 1800,
    compareAtPrice: null,
    image:
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=400&fit=crop",
    rating: 4.6,
    reviewCount: 75,
    badge: "New",
    category: "jewelry",
    subcategory: "Earrings",
    inStock: true,
    description: "Delicate rose gold earrings for daily wear.",
  },
  {
    id: 6,
    slug: "diamond-stud-earrings",
    name: "Diamond Stud Earrings",
    price: 4200,
    compareAtPrice: null,
    image:
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=400&fit=crop",
    rating: 4.7,
    reviewCount: 45,
    badge: null,
    category: "jewelry",
    subcategory: "Earrings",
    inStock: true,
    description: "Classic diamond stud earrings.",
  },
  {
    id: 7,
    slug: "pearl-pendant-necklace",
    name: "Pearl Pendant Necklace",
    price: 2600,
    compareAtPrice: 3400,
    image:
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=400&fit=crop",
    rating: 4.9,
    reviewCount: 30,
    badge: "Best Seller",
    category: "jewelry",
    subcategory: "Necklaces",
    inStock: true,
    description: "Elegant pearl pendant necklace.",
  },

  // Skincare
  {
    id: 8,
    slug: "vitamin-c-skincare-set",
    name: "Vitamin C Skincare Set",
    price: 2800,
    compareAtPrice: 3500,
    image:
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=400&fit=crop",
    rating: 4.7,
    reviewCount: 90,
    badge: "Sale",
    category: "skincare",
    subcategory: "Serums",
    inStock: true,
    description: "Complete vitamin C skincare routine.",
  },
  {
    id: 9,
    slug: "hydrating-face-serum",
    name: "Hydrating Face Serum",
    price: 1500,
    compareAtPrice: 2000,
    image:
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=400&fit=crop",
    rating: 4.8,
    reviewCount: 110,
    badge: null,
    category: "skincare",
    subcategory: "Serums",
    inStock: true,
    description: "Deep hydrating face serum.",
  },
  {
    id: 10,
    slug: "anti-aging-night-cream",
    name: "Anti-Aging Night Cream",
    price: 2200,
    compareAtPrice: 2800,
    image:
      "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=400&fit=crop",
    rating: 4.6,
    reviewCount: 55,
    badge: "New",
    category: "skincare",
    subcategory: "Moisturizers",
    inStock: true,
    description: "Advanced anti-aging night cream.",
  },

  // Bags
  {
    id: 11,
    slug: "michael-kors-handbag",
    name: "Michael Kors Handbag",
    price: 6500,
    compareAtPrice: 8000,
    image:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=400&fit=crop",
    rating: 4.9,
    reviewCount: 150,
    badge: null,
    category: "bags",
    subcategory: "Handbags",
    inStock: true,
    description: "Premium Michael Kors handbag.",
  },
  {
    id: 12,
    slug: "luxury-leather-tote-bag",
    name: "Luxury Leather Tote Bag",
    price: 7200,
    compareAtPrice: 9000,
    image:
      "https://images.unsplash.com/photo-1591561954557-26941169b49e?w=400&h=400&fit=crop",
    rating: 4.8,
    reviewCount: 80,
    badge: "Sale",
    category: "bags",
    subcategory: "Tote Bags",
    inStock: true,
    description: "Spacious leather tote bag.",
  },
];

// 🔍 Helper Functions
export const getProductsByCategory = (categorySlug) => {
  return products.filter((p) => p.category === categorySlug);
};

export const getProductBySlug = (slug) => {
  return products.find((p) => p.slug === slug);
};

export const getCategoryBySlug = (slug) => {
  return categories.find((c) => c.slug === slug);
};