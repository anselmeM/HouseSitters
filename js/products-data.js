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
    category: "Living Room",
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
  // New Products
  {
    id: "oak-dining-table",
    name: "Solid Oak Dining Table",
    price: 799.00,
    category: "Dining Room",
    image: "https://images.unsplash.com/photo-1577140917170-285929fb55b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "A robust and elegant solid oak dining table. Perfect for family gatherings and dinner parties, featuring a natural finish that highlights the wood grain."
  },
  {
    id: "pendant-light",
    name: "Industrial Pendant Light",
    price: 89.00,
    category: "Lighting",
    image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Add an industrial chic touch to your space with this matte black pendant light. Ideal for kitchens, dining areas, or entryways."
  },
  {
    id: "minimalist-bed-frame",
    name: "Minimalist Bed Frame",
    price: 450.00,
    category: "Bedroom",
    image: "https://images.unsplash.com/photo-1505693314120-0d443867891c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "A clean and simple platform bed frame that complements any bedroom decor. Sturdy construction ensures a restful night's sleep."
  },
  {
    id: "ceramic-vase-set",
    name: "Ceramic Vase Set",
    price: 45.00,
    category: "Decor",
    image: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "A set of three hand-crafted ceramic vases in varying sizes. Perfect for displaying fresh flowers or as standalone decorative pieces."
  },
  {
    id: "wool-rug",
    name: "Handwoven Wool Rug",
    price: 299.00,
    originalPrice: 350.00,
    category: "Decor",
    image: "https://images.unsplash.com/photo-1575414003502-9a633e45c479?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Soft and durable, this handwoven wool rug adds texture and warmth to any room. Features a subtle geometric pattern."
  },
  {
    id: "bedside-lamp",
    name: "Modern Bedside Lamp",
    price: 65.00,
    category: "Lighting",
    image: "https://images.unsplash.com/photo-1507473888900-52e1ad145928?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "A sleek bedside lamp with a touch-control base and warm LED light. Perfect for late-night reading."
  }
];

function getProductById(id) {
  return products.find(product => product.id === id);
}
