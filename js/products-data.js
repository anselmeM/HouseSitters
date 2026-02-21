const products = [
  {
    id: "orange-sofa",
    name: "Orange Comfort Sofa",
    price: 899.00,
    category: "Living Room",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDlRDo5mIxDtTnxdVmpf-qhWnaF9skSOEDfCqvWF25S6fbsP--iBsbmROgNdyBUHxPvGL0U_3vRH5UR2PwtMIrud64e-xp94VbxKDKDaxA35Qaj8p5ViLcnHOeYdfvLe_DPvRh-TJZIEhBHt8wd0vXaGCQQfWG_FA7RTdlBW_WOZmMTGy3eI1zAP_TE7rgab7brfe7aVFjvV5k_w7shEJ2fnQZkS1Y21QP1X5XRc9WStK3NxgxdDZenqSLoXK6WO7gs5h5VAK_2xrKS",
    description: "A vibrant orange sofa that brings warmth and comfort to any living room. Featuring plush cushions and a modern silhouette, it's perfect for lounging or entertaining guests."
  },
  {
    id: "modern-grey-chair",
    name: "Modern Grey Chair",
    price: 249.00,
    category: "Office",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBcCl_HShQbEnBAeBj3ODP5bxFBJgSrP-1x2JQzf9v_nK5Yx-GocQ-NdXSK-TEkZWj2TNNsARfbkLsltX5RW9sbdvPSVyDpehYZ6PxXxblu9F1SjzAXsk3nCEAC3tRyLGLLBxKJsLaRoNMQT3rHYE6EiFkKcUSYf6k8gnCdNKb9DxRGHY0KX2ipw0dm-9CzQmRxqiJk-yQQQGdUwr31aqOK_LFI3jrhCRx_lfY0T79fWxDqIPVDgHLk0CcOloVyQ8HYCfU4hHO2l7NO",
    description: "Sleek and sophisticated, this modern grey chair adds a touch of elegance to your home office or reading nook. Designed with ergonomic support and high-quality fabric."
  },
  {
    id: "classic-desk-chair",
    name: "Classic Desk Chair",
    price: 199.00,
    category: "Office",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB4irLobIHUFAGL4oSiOizYASjfLH6WkD3nI5KuoE0QQHwitjjaEC-6kJpFL3I6z0HCchx3vkrC5LxAzX8PZtGoCP_PoQvie1c_HkaaF6e0zywAyOWbB-6FFnHYuAIU_-fr5_yy1TVsOG1J4cjhqVEJbXcoBJNC6pXlm7dO_dJjApJ0S5Lv6Mi74oXNRMdID2ukcSsE0-hEYJurOnoNq43jKmRLzZRoWYkoLWLGUaK7H9dqVepD2xIdczoC_GI_jGivvF3wqgKJAxmv",
    description: "A timeless classic. This desk chair combines traditional design with modern comfort features. The sturdy wooden frame and upholstered seat make it a durable choice."
  },
  {
    id: "green-velvet-sofa",
    name: "Green Velvet Sofa",
    price: 1199.00,
    category: "Living Room",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDfFsbXKnKVJtUOXk4Q6mEqf5k8xTz4ApIbKYU8JimWKjxjMfAzk2w3jisMG2DJxnen-gFI2iFNWlCRb9rj1M5me-S_5gsbd5nTb-SR1PptIvNJ5ytHYL8uvIUVTzQuhoGDegPQO_Co-1j6xyPiRXxcyLPr2XoVKU9ouB_h_R0rq56VjrSHn7HilKyJ3R0Sq0oQITqkJuJi2R8BLZBuFM760Rsg0mF_8a9s2nF0Ly9izU-lcYISrm7aEqWCBU_d0lCid9hs8QIxj7aY",
    description: "Make a statement with this luxurious green velvet sofa. Its rich color and soft texture create a focal point in any room, while the deep seating ensures maximum relaxation."
  },
  {
    id: "modern-bookshelf",
    name: "Modern Bookshelf",
    price: 209.30,
    originalPrice: 299.00,
    category: "Office",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBTjCKCSdA0ilutuZuOXK3s0caS8XBxFtd7DG-58hQoYuPrZKZseWWwPATR0-SJPuFYnIVYf6Oqe7zONwrVoVkptn2VxAfok-y9oC9IEtrauupRHUN_fg2J13w-9EMattszZyjzRUh3EujaniH-kWDCGwTI1hHuh6KM7eKwDHmNZfsgsOy7CMkcoZx0GS1NOM1XUStajCpdyEJ0CGAp1dv04npsVJx_Lybt_Y-GpaJnqAibFQPY_QesZuytUzdLQ1-kX9QNILG949Uy",
    description: "Organize your collection in style with this modern bookshelf. Its clean lines and open design make it perfect for displaying books, plants, and decor items."
  },
  {
    id: "accent-chair",
    name: "Accent Chair",
    price: 159.20,
    originalPrice: 199.00,
    category: "Living Room",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBcCl_HShQbEnBAeBj3ODP5bxFBJgSrP-1x2JQzf9v_nK5Yx-GocQ-NdXSK-TEkZWj2TNNsARfbkLsltX5RW9sbdvPSVyDpehYZ6PxXxblu9F1SjzAXsk3nCEAC3tRyLGLLBxKJsLaRoNMQT3rHYE6EiFkKcUSYf6k8gnCdNKb9DxRGHY0KX2ipw0dm-9CzQmRxqiJk-yQQQGdUwr31aqOK_LFI3jrhCRx_lfY0T79fWxDqIPVDgHLk0CcOloVyQ8HYCfU4hHO2l7NO",
    description: "Add a pop of style to any corner with this versatile accent chair. Compact yet comfortable, it's an ideal addition to bedrooms, living rooms, or entryways."
  },
  {
    id: "wooden-sofa-frame",
    name: "Wooden Sofa Frame",
    price: 382.50,
    originalPrice: 450.00,
    category: "Living Room",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBRU-lxLgoTh7ocFfAuj90pQt087undOY3_m8GHgXC-jzhzrLKaCTco85o386-g5z_fudezjtlYiLeApJTMlJRf91AeJtYPkRg0Hf4EbyZSLYlHcGrhAaw1lDRqKT8HgPC6P9vnn7qyywPAke9yox0ORxCG9rgIs8dEDZwax0h3j3943JiXzTTqv-_bu7f8CC4s-4NGp7g1rmgvxzFjnaQlWse1MCU0LDeeUOdlHInRd_V3JzDZSV8M9h24G62cxNte7yPnNtcCmlOV",
    description: "Build your dream seating area with this high-quality wooden sofa frame. Durable and stylish, it's the perfect foundation for custom cushions and upholstery."
  },
  {
    id: "teal-velvet-sofa",
    name: "Mid-Century Teal Sofa",
    price: 1299.00,
    category: "Living Room",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "A stunning teal velvet sofa with a mid-century modern design. Comfortable and stylish, it adds a touch of retro charm to any living space."
  },
  {
    id: "white-tufted-chair",
    name: "Tufted White Armchair",
    price: 399.00,
    category: "Bedroom",
    image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Elegant white armchair with tufted upholstery. Perfect for a cozy reading corner or as a sophisticated accent piece in your living room."
  },
  {
    id: "rustic-wood-table",
    name: "Rustic Wood Side Table",
    price: 149.00,
    category: "Living Room",
    image: "https://images.unsplash.com/photo-1532372320572-cda25653a26d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Handcrafted rustic wood side table. Features a natural finish and sturdy construction, bringing warmth and character to your home."
  },
  {
    id: "black-dining-chair",
    name: "Modern Black Dining Chair",
    price: 129.00,
    category: "Dining",
    image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Sleek and modern black dining chair. Durable and easy to clean, with a minimalist design that fits any contemporary dining room."
  },
  {
    id: "yellow-armchair",
    name: "Sunny Yellow Armchair",
    price: 349.00,
    category: "Bedroom",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Brighten up your space with this cheerful yellow armchair. Comfortable seating with a pop of color that instantly lifts the mood of any room."
  },
  {
    id: "modern-table-lamp",
    name: "Modern Table Lamp",
    price: 129.99,
    category: "Lighting",
    image: "images/modern-lamp.png",
    description: "A sleek and stylish table lamp to illuminate your workspace or bedside. Its contemporary design fits seamlessly into any modern decor."
  },
  {
    id: "crystal-chandelier",
    name: "Crystal Chandelier",
    price: 450.00,
    category: "Lighting",
    image: "images/crystal-chandelier.jpg",
    description: "Add a touch of elegance with this stunning crystal chandelier. Perfect for dining rooms or entryways, it creates a warm and inviting atmosphere."
  },
  {
    id: "glass-pendant-light",
    name: "Glass Pendant Light",
    price: 199.50,
    category: "Lighting",
    image: "images/glass-pendant.jpg",
    description: "Minimalist glass pendant light perfect for modern kitchens and dining areas. The clear glass shade allows for maximum light distribution."
  },
  {
    id: "modern-outdoor-chair",
    name: "Modern Outdoor Chair",
    price: 129.00,
    category: "Outdoor",
    image: "https://images.unsplash.com/photo-1617850687395-620757feb1f3?fm=jpg&q=60&w=800&auto=format&fit=crop",
    description: "A comfortable and stylish chair for your outdoor patio. Weather-resistant and easy to clean."
  },
  {
    id: "garden-lounge-set",
    name: "Garden Lounge Set",
    price: 299.00,
    category: "Outdoor",
    image: "https://images.unsplash.com/photo-1715090576114-c07384af2069?fm=jpg&q=60&w=800&auto=format&fit=crop",
    description: "Relax in style with this complete garden lounge set. Includes comfortable cushions and a sturdy frame. Perfect for your outdoor space."
  },
  {
    id: "patio-dining-table",
    name: "Patio Dining Table",
    price: 199.00,
    category: "Outdoor",
    image: "https://images.unsplash.com/photo-1633330948542-0b3bdeefcdb3?fm=jpg&q=60&w=800&auto=format&fit=crop",
    description: "Perfect for outdoor dining and entertaining guests. Durable and spacious."
  }
];

function getProductById(id) {
  return products.find(product => product.id === id);
}
