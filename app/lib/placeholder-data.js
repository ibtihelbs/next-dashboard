// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:
// https://nextjs.org/learn/dashboard-app/fetching-data
const users = [
  {
    id: "410544b2-4001-4271-9855-fec4b6a6442a",
    name: "User",
    email: "user@nextmail.com",
    password: "123456",
  },
];

const customers = [
  {
    id: "3958dc9e-712f-4377-85e9-fec4b6a6442a",
    name: "Delba de Oliveira",
    email: "delba@oliveira.com",
    image_url: "/customers/delba-de-oliveira.png",
  },
  {
    id: "3958dc9e-742f-4377-85e9-fec4b6a6442a",
    name: "Lee Robinson",
    email: "lee@robinson.com",
    image_url: "/customers/lee-robinson.png",
  },
  {
    id: "3958dc9e-737f-4377-85e9-fec4b6a6442a",
    name: "Hector Simpson",
    email: "hector@simpson.com",
    image_url: "/customers/hector-simpson.png",
  },
  {
    id: "50ca3e18-62cd-11ee-8c99-0242ac120002",
    name: "Steven Tey",
    email: "steven@tey.com",
    image_url: "/customers/steven-tey.png",
  },
  {
    id: "3958dc9e-787f-4377-85e9-fec4b6a6442a",
    name: "Steph Dietz",
    email: "steph@dietz.com",
    image_url: "/customers/steph-dietz.png",
  },
  {
    id: "76d65c26-f784-44a2-ac19-586678f7c2f2",
    name: "Michael Novotny",
    email: "michael@novotny.com",
    image_url: "/customers/michael-novotny.png",
  },
  {
    id: "d6e15727-9fe1-4961-8c5b-ea44a9bd81aa",
    name: "Evil Rabbit",
    email: "evil@rabbit.com",
    image_url: "/customers/evil-rabbit.png",
  },
  {
    id: "126eed9c-c90c-4ef6-a4a8-fcf7408d3c66",
    name: "Emil Kowalski",
    email: "emil@kowalski.com",
    image_url: "/customers/emil-kowalski.png",
  },
  {
    id: "CC27C14A-0ACF-4F4A-A6C9-D45682C144B9",
    name: "Amy Burns",
    email: "amy@burns.com",
    image_url: "/customers/amy-burns.png",
  },
  {
    id: "13D07535-C59E-4157-A011-F8D2EF4E0CBB",
    name: "Balazs Orban",
    email: "balazs@orban.com",
    image_url: "/customers/balazs-orban.png",
  },
];

const invoices = [
  {
    customer_id: customers[0].id,
    amount: 15795,
    status: "pending",
    date: "2022-12-06",
  },
  {
    customer_id: customers[1].id,
    amount: 20348,
    status: "pending",
    date: "2022-11-14",
  },
  {
    customer_id: customers[4].id,
    amount: 3040,
    status: "paid",
    date: "2022-10-29",
  },
  {
    customer_id: customers[3].id,
    amount: 44800,
    status: "paid",
    date: "2023-09-10",
  },
  {
    customer_id: customers[5].id,
    amount: 34577,
    status: "pending",
    date: "2023-08-05",
  },
  {
    customer_id: customers[7].id,
    amount: 54246,
    status: "pending",
    date: "2023-07-16",
  },
  {
    customer_id: customers[6].id,
    amount: 666,
    status: "pending",
    date: "2023-06-27",
  },
  {
    customer_id: customers[3].id,
    amount: 32545,
    status: "paid",
    date: "2023-06-09",
  },
  {
    customer_id: customers[4].id,
    amount: 1250,
    status: "paid",
    date: "2023-06-17",
  },
  {
    customer_id: customers[5].id,
    amount: 8546,
    status: "paid",
    date: "2023-06-07",
  },
  {
    customer_id: customers[1].id,
    amount: 500,
    status: "paid",
    date: "2023-08-19",
  },
  {
    customer_id: customers[5].id,
    amount: 8945,
    status: "paid",
    date: "2023-06-03",
  },
  {
    customer_id: customers[2].id,
    amount: 8945,
    status: "paid",
    date: "2023-06-18",
  },
  {
    customer_id: customers[0].id,
    amount: 8945,
    status: "paid",
    date: "2023-10-04",
  },
  {
    customer_id: customers[2].id,
    amount: 1000,
    status: "paid",
    date: "2022-06-05",
  },
];

const revenue = [
  { month: "Jan", revenue: 2000 },
  { month: "Feb", revenue: 1800 },
  { month: "Mar", revenue: 2200 },
  { month: "Apr", revenue: 2500 },
  { month: "May", revenue: 2300 },
  { month: "Jun", revenue: 3200 },
  { month: "Jul", revenue: 3500 },
  { month: "Aug", revenue: 3700 },
  { month: "Sep", revenue: 2500 },
  { month: "Oct", revenue: 2800 },
  { month: "Nov", revenue: 3000 },
  { month: "Dec", revenue: 4800 },
];

const products = [
  {
    id: 1,
    name: "Sunset Serenity",
    description:
      "A breathtaking landscape painting capturing the beauty of a serene sunset.",
    category: "Painting",
    medium: "Oil",
    subject: "Landscape",
    price: 350.0,
    availability: true,
    image: "sunset_serenity.jpg",
  },
  {
    id: 2,
    name: "Abstract Harmony",
    description:
      "Vibrant and dynamic abstract artwork representing the harmony of colors and shapes.",
    category: "Abstract Art",
    medium: "Acrylic",
    subject: "Abstract",
    price: 280.0,
    availability: true,
    image: "abstract_harmony.jpg",
  },
  {
    id: 3,
    name: "Bronze Elegance Sculpture",
    description: "An exquisite bronze sculpture showcasing elegance and grace.",
    category: "Sculpture",
    medium: "Bronze",
    subject: "Sculpture",
    price: 500.0,
    availability: true,
    image: "bronze_elegance.jpg",
  },
  {
    id: 4,
    name: "Nature's Symphony Print",
    description:
      "High-quality print of a captivating nature scene, portraying the symphony of wildlife.",
    category: "Print",
    medium: "Digital",
    subject: "Nature",
    price: 50.0,
    availability: true,
    image: "natures_symphony.jpg",
  },
  {
    id: 5,
    name: "Digital Dreams",
    description:
      "Digital art piece expressing the surreal and dreamlike aspects of modern life.",
    category: "Digital Art",
    medium: "Digital",
    subject: "Surreal",
    price: 180.0,
    availability: true,
    image: "digital_dreams.jpg",
  },
  {
    id: 6,
    name: "Ceramic Vase Collection",
    description:
      "Set of three handcrafted ceramic vases, each uniquely designed with intricate patterns.",
    category: "Ceramics",
    medium: "Ceramic",
    subject: "Decorative",
    price: 120.0,
    availability: true,
    image: "ceramic_vases.jpg",
  },
  {
    id: 7,
    name: "Cityscape Canvas",
    description:
      "A captivating cityscape captured on canvas, depicting the energy of urban life.",
    category: "Painting",
    medium: "Acrylic",
    subject: "Cityscape",
    price: 300.0,
    availability: true,
    image: "cityscape_canvas.jpg",
  },
  {
    id: 8,
    name: "Whimsical Woodcarving",
    description:
      "Charming woodcarving featuring whimsical characters and intricate detailing.",
    category: "Wood Art",
    medium: "Wood",
    subject: "Whimsical",
    price: 160.0,
    availability: true,
    image: "whimsical_woodcarving.jpg",
  },
  {
    id: 9,
    name: "Photographic Reflections Book",
    description:
      "A collection of breathtaking photographic reflections capturing diverse moments in time.",
    category: "Photography",
    medium: "Photography",
    subject: "Reflections",
    price: 45.0,
    availability: true,
    image: "photographic_reflections.jpg",
  },
];

module.exports = {
  users,
  customers,
  invoices,
  revenue,
  products,
};
