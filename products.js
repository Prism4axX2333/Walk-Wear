/* ============================================================
   PRODUTOS DA WALK&WEAR  — edite apenas este arquivo.
   Para adicionar um produto: copie um bloco { ... }, cole abaixo,
   troque o id (único) e preencha os campos.
   Categorias válidas: "Camisetas", "Calças", "Calçados",
   "Moletons", "Acessórios", "Ofertas"
   Campos opcionais: oldPrice (null se não houver), badge ("" se não houver)
   Os itens abaixo são EXEMPLOS (demo:true). Remova demo:true nos reais.
   ============================================================ */
const PRODUCTS = [
  { id:1,  name:"Camiseta Oversized Casual Básica",   price:49.90,  oldPrice:null,  image:"overblack.webp", affiliateUrl:"https://s.shopee.com.br/3LRaUDPI1E", category:"Camisetas", description:"Camiseta oversized com caimento solto e estilo urbano.", badge:"Novo",   featured:true,  demo:true },
  { id:2,  name:"Camiseta Boxy Oversized",    price:34.99,  oldPrice:null,  image:"boxyoff.webp", affiliateUrl:"https://s.shopee.com.br/3B8AIC1BvH", category:"Camisetas", description:"Modelagem boxy oversized, visual limpo.",              badge:"Destaque",       featured:false, demo:true },
  { id:3,  name:"Camisa Polo Streetwear",     price:46.99,  oldPrice:null,  image:"polostreet.webp", affiliateUrl:"https://s.shopee.com.br/BUYlQefNk", category:"Camisetas", description:"Camisa Polo Básica Com Corte Diferenciado.",           badge:"Destaque", featured:false, demo:true },
  { id:4,  name:"Calça Cargo Unissex",    price:74.90, oldPrice:null,  image:"cargob.webp", affiliateUrl:"https://s.shopee.com.br/AKbKqQzq9A", category:"Calças",    description:"Calça cargo com bolsos laterais e perna ampla.",        badge:"Destaque", featured:true, demo:true },
  { id:5,  name:"Calça Baggy Jeans Preta",    price:169.90, oldPrice:null,  image:"", affiliateUrl:"", category:"Calças",    description:"Jeans baggy de cintura média e perna larga.",           badge:"Novo",   featured:false, demo:true },
  { id:6,  name:"Calça Baggy Cinza Lavada",   price:139.90, oldPrice:179.90, image:"", affiliateUrl:"", category:"Calças",    description:"Lavagem desbotada, caimento largo.",                    badge:"Oferta", featured:false, demo:true },
  { id:7,  name:"Tênis Tesla Hertz Unissex",        price:109.65, oldPrice:null,  image:"teslatenis.webp", affiliateUrl:"https://s.shopee.com.br/7faZhm2ReH", category:"Calçados",  description:"Perfeito para quem busca conforto, resistência e estilo no dia a dia.",                          badge:"Destaque", featured:true, demo:true },
  { id:8,  name:"Tênis Casual Red Nose Chunky",          price:159.99, oldPrice:null,  image:"tenisRN.webp", affiliateUrl:"https://s.shopee.com.br/1gJMX78kcG", category:"Calçados",  description:"Estilo Chunky/Retro: Design robusto e volumoso.",                      badge:"Novo",       featured:false, demo:true },
  { id:9,  name:"Moletom Masculino TennisClub Streetwear",  price:54.90, oldPrice:null,  image:"moletom florido.webp", affiliateUrl:"https://s.shopee.com.br/7ptzqEnxOj", category:"Moletons",  description:"Moletom com capuz e bolso frontal.",                    badge:"Novo",   featured:true,  demo:true },
  { id:10, name:"Jaqueta Coach Masculina",        price:222.98, oldPrice:null, image:"jaquetacoach.png", affiliateUrl:"https://s.shopee.com.br/qkFXDuTtI", category:"Moletons",  description:"Jaqueta leve com fechamento por botões.",               badge:"Novo", featured:false, demo:true },
  { id:11, name:"Boné Aba Curva Preto",       price:49.90,  oldPrice:null,  image:"", affiliateUrl:"", category:"Acessórios",description:"Boné ajustável de aba curva.",                          badge:"",       featured:true,  demo:true },
  { id:12, name:"Corrente Aço Inox",          price:39.90,  oldPrice:null,  image:"", affiliateUrl:"", category:"Acessórios",description:"Corrente em elos grossos, acabamento prateado.",        badge:"Novo",   featured:false, demo:true },
  { id:13, name:"Calça Jeans Baggy Wide Leg", price:59.00, oldPrice:null, image:"IMG_2546.jpeg", affiliateUrl:"https://s.shopee.com.br/6q1SIpD4xg", category:"Calças", description:"Jeans baggy cinza lavado, perna larga.", badge:"Destaque", featured:false }
];
