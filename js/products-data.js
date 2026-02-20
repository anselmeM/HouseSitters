const products = [
  {
    id: "orange-sofa",
    name: "Orange Comfort Sofa",
    price: 899.00,
    category: "Sofas",
    collections: ["fall"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDlRDo5mIxDtTnxdVmpf-qhWnaF9skSOEDfCqvWF25S6fbsP--iBsbmROgNdyBUHxPvGL0U_3vRH5UR2PwtMIrud64e-xp94VbxKDKDaxA35Qaj8p5ViLcnHOeYdfvLe_DPvRh-TJZIEhBHt8wd0vXaGCQQfWG_FA7RTdlBW_WOZmMTGy3eI1zAP_TE7rgab7brfe7aVFjvV5k_w7shEJ2fnQZkS1Y21QP1X5XRc9WStK3NxgxdDZenqSLoXK6WO7gs5h5VAK_2xrKS",
    description: "A vibrant orange sofa that brings warmth and comfort to any living room. Featuring plush cushions and a modern silhouette, it's perfect for lounging or entertaining guests."
  },
  {
    id: "modern-grey-chair",
    name: "Modern Grey Chair",
    price: 249.00,
    category: "Chairs",
    collections: ["workspace", "minimalist"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBcCl_HShQbEnBAeBj3ODP5bxFBJgSrP-1x2JQzf9v_nK5Yx-GocQ-NdXSK-TEkZWj2TNNsARfbkLsltX5RW9sbdvPSVyDpehYZ6PxXxblu9F1SjzAXsk3nCEAC3tRyLGLLBxKJsLaRoNMQT3rHYE6EiFkKcUSYf6k8gnCdNKb9DxRGHY0KX2ipw0dm-9CzQmRxqiJk-yQQQGdUwr31aqOK_LFI3jrhCRx_lfY0T79fWxDqIPVDgHLk0CcOloVyQ8HYCfU4hHO2l7NO",
    description: "Sleek and sophisticated, this modern grey chair adds a touch of elegance to your home office or reading nook. Designed with ergonomic support and high-quality fabric."
  },
  {
    id: "classic-desk-chair",
    name: "Classic Desk Chair",
    price: 199.00,
    category: "Chairs",
    collections: ["workspace"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB4irLobIHUFAGL4oSiOizYASjfLH6WkD3nI5KuoE0QQHwitjjaEC-6kJpFL3I6z0HCchx3vkrC5LxAzX8PZtGoCP_PoQvie1c_HkaaF6e0zywAyOWbB-6FFnHYuAIU_-fr5_yy1TVsOG1J4cjhqVEJbXcoBJNC6pXlm7dO_dJjApJ0S5Lv6Mi74oXNRMdID2ukcSsE0-hEYJurOnoNq43jKmRLzZRoWYkoLWLGUaK7H9dqVepD2xIdczoC_GI_jGivvF3wqgKJAxmv",
    description: "A timeless classic. This desk chair combines traditional design with modern comfort features. The sturdy wooden frame and upholstered seat make it a durable choice."
  },
  {
    id: "green-velvet-sofa",
    name: "Green Velvet Sofa",
    price: 1199.00,
    category: "Sofas",
    collections: ["fall"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDfFsbXKnKVJtUOXk4Q6mEqf5k8xTz4ApIbKYU8JimWKjxjMfAzk2w3jisMG2DJxnen-gFI2iFNWlCRb9rj1M5me-S_5gsbd5nTb-SR1PptIvNJ5ytHYL8uvIUVTzQuhoGDegPQO_Co-1j6xyPiRXxcyLPr2XoVKU9ouB_h_R0rq56VjrSHn7HilKyJ3R0Sq0oQITqkJuJi2R8BLZBuFM760Rsg0mF_8a9s2nF0Ly9izU-lcYISrm7aEqWCBU_d0lCid9hs8QIxj7aY",
    description: "Make a statement with this luxurious green velvet sofa. Its rich color and soft texture create a focal point in any room, while the deep seating ensures maximum relaxation."
  },
  {
    id: "modern-bookshelf",
    name: "Modern Bookshelf",
    price: 209.30,
    originalPrice: 299.00,
    category: "Storage",
    collections: ["workspace"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBTjCKCSdA0ilutuZuOXK3s0caS8XBxFtd7DG-58hQoYuPrZKZseWWwPATR0-SJPuFYnIVYf6Oqe7zONwrVoVkptn2VxAfok-y9oC9IEtrauupRHUN_fg2J13w-9EMattszZyjzRUh3EujaniH-kWDCGwTI1hHuh6KM7eKwDHmNZfsgsOy7CMkcoZx0GS1NOM1XUStajCpdyEJ0CGAp1dv04npsVJx_Lybt_Y-GpaJnqAibFQPY_QesZuytUzdLQ1-kX9QNILG949Uy",
    description: "Organize your collection in style with this modern bookshelf. Its clean lines and open design make it perfect for displaying books, plants, and decor items."
  },
  {
    id: "accent-chair",
    name: "Accent Chair",
    price: 159.20,
    originalPrice: 199.00,
    category: "Chairs",
    collections: ["workspace", "fall"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBcCl_HShQbEnBAeBj3ODP5bxFBJgSrP-1x2JQzf9v_nK5Yx-GocQ-NdXSK-TEkZWj2TNNsARfbkLsltX5RW9sbdvPSVyDpehYZ6PxXxblu9F1SjzAXsk3nCEAC3tRyLGLLBxKJsLaRoNMQT3rHYE6EiFkKcUSYf6k8gnCdNKb9DxRGHY0KX2ipw0dm-9CzQmRxqiJk-yQQQGdUwr31aqOK_LFI3jrhCRx_lfY0T79fWxDqIPVDgHLk0CcOloVyQ8HYCfU4hHO2l7NO",
    description: "Add a pop of style to any corner with this versatile accent chair. Compact yet comfortable, it's an ideal addition to bedrooms, living rooms, or entryways."
  },
  {
    id: "wooden-sofa-frame",
    name: "Wooden Sofa Frame",
    price: 382.50,
    originalPrice: 450.00,
    category: "Sofas",
    collections: ["fall", "industrial"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBRU-lxLgoTh7ocFfAuj90pQt087undOY3_m8GHgXC-jzhzrLKaCTco85o386-g5z_fudezjtlYiLeApJTMlJRf91AeJtYPkRg0Hf4EbyZSLYlHcGrhAaw1lDRqKT8HgPC6P9vnn7qyywPAke9yox0ORxCG9rgIs8dEDZwax0h3j3943JiXzTTqv-_bu7f8CC4s-4NGp7g1rmgvxzFjnaQlWse1MCU0LDeeUOdlHInRd_V3JzDZSV8M9h24G62cxNte7yPnNtcCmlOV",
    description: "Build your dream seating area with this high-quality wooden sofa frame. Durable and stylish, it's the perfect foundation for custom cushions and upholstery."
  },
  {
    id: "teal-velvet-sofa",
    name: "Mid-Century Teal Sofa",
    price: 1299.00,
    category: "Sofas",
    collections: ["fall"],
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "A stunning teal velvet sofa with a mid-century modern design. Comfortable and stylish, it adds a touch of retro charm to any living space."
  },
  {
    id: "white-tufted-chair",
    name: "Tufted White Armchair",
    price: 399.00,
    category: "Chairs",
    collections: ["fall", "minimalist"],
    image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Elegant white armchair with tufted upholstery. Perfect for a cozy reading corner or as a sophisticated accent piece in your living room."
  },
  {
    id: "rustic-wood-table",
    name: "Rustic Wood Side Table",
    price: 149.00,
    category: "Tables",
    collections: ["fall"],
    image: "https://images.unsplash.com/photo-1532372320572-cda25653a26d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Handcrafted rustic wood side table. Features a natural finish and sturdy construction, bringing warmth and character to your home."
  },
  {
    id: "black-dining-chair",
    name: "Modern Black Dining Chair",
    price: 129.00,
    category: "Chairs",
    collections: ["dining", "workspace", "minimalist"],
    image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Sleek and modern black dining chair. Durable and easy to clean, with a minimalist design that fits any contemporary dining room."
  },
  {
    id: "yellow-armchair",
    name: "Sunny Yellow Armchair",
    price: 349.00,
    category: "Chairs",
    collections: ["fall"],
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Brighten up your space with this cheerful yellow armchair. Comfortable seating with a pop of color that instantly lifts the mood of any room."
  },
  {
    id: "autumn-rug",
    name: "Cozy Autumn Rug",
    price: 129.00,
    category: "Decor",
    collections: ["fall"],
    image: "https://images.unsplash.com/photo-1575414723362-e6e76fb211c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Bring the colors of autumn indoors with this cozy, hand-woven rug. Soft underfoot and durable, it's the perfect way to warm up your space."
  },
  {
    id: "standing-desk",
    name: "Adjustable Standing Desk",
    price: 499.00,
    category: "Desks",
    collections: ["workspace"],
    image: "https://images.unsplash.com/photo-1595515106968-45d6252994e6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Improve your posture and productivity with our adjustable standing desk. Features a motorized lift and a spacious desktop for all your work essentials."
  },
  {
    id: "minimalist-sofa",
    name: "Minimalist Beige Sofa",
    price: 899.00,
    category: "Sofas",
    collections: ["minimalist"],
    image: "https://images.unsplash.com/photo-1550226891-ef816aed4a98?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Clean lines and neutral tones define this minimalist sofa. A versatile piece that blends seamlessly into any modern living space."
  },
  {
    id: "simple-coffee-table",
    name: "Simple Coffee Table",
    price: 249.00,
    category: "Tables",
    collections: ["minimalist"],
    image: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Less is more with this simple coffee table. Its functional design and unembellished surface make it a staple for minimalist interiors."
  },
  {
    id: "outdoor-lounge-chair",
    name: "Teak Poolside Chair",
    price: 349.00,
    category: "Chairs",
    collections: ["outdoor"],
    image: "https://images.unsplash.com/photo-1532323544230-7191fd51bc1b?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
    description: "Relax by the pool or on your patio with this durable teak lounge chair. Weather-resistant and stylish, perfect for outdoor living."
  },
  {
    id: "patio-dining-set",
    name: "Patio Dining Set",
    price: 999.00,
    category: "Tables",
    collections: ["outdoor"],
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Enjoy alfresco dining with this complete patio set. Includes a large table and matching chairs, designed to withstand the elements."
  },
  {
    id: "industrial-shelving",
    name: "Metal Pipe Shelving",
    price: 459.00,
    category: "Storage",
    collections: ["industrial", "workspace"],
    image: "https://images.unsplash.com/photo-1594620302200-9a762244a156?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Add an industrial edge to your room with this metal pipe shelving unit. Robust and practical, it's ideal for books, plants, and display items."
  },
  {
    id: "loft-coffee-table",
    name: "Reclaimed Wood Table",
    price: 399.00,
    category: "Tables",
    collections: ["industrial"],
    image: "https://images.unsplash.com/photo-1532372320572-cda25653a26d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Crafted from reclaimed wood and metal, this coffee table brings history and texture to your industrial-chic living room."
  },
  {
    id: "concrete-planter",
    name: "Concrete Planter",
    price: 89.00,
    category: "Decor",
    collections: ["industrial", "minimalist"],
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "A modern concrete planter that adds a raw, industrial touch to your indoor garden. Perfect for succulents or statement plants."
  },
  {
    id: "pendant-light",
    name: "Geometric Pendant Light",
    price: 149.00,
    category: "Lighting",
    collections: ["lighting", "industrial"],
    image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Illuminate your space with this geometric pendant light. Its open metal frame casts intriguing shadows and fits perfectly in modern lofts."
  },
  {
    id: "table-lamp",
    name: "Ceramic Table Lamp",
    price: 99.00,
    category: "Lighting",
    collections: ["lighting", "minimalist"],
    image: "https://images.unsplash.com/photo-1515948725-edac7b5bb0fc?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80",
    description: "A simple yet elegant ceramic table lamp. Provides a soft, ambient glow that enhances the mood of any bedroom or living area."
  }
];

function getProductById(id) {
  return products.find(product => product.id === id);
}
