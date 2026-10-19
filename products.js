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
  { id:5,  name:"Boné Boston Aba Curva",    price:38.90, oldPrice:null,  image:"Boneboston.webp", affiliateUrl:"https://s.shopee.com.br/1VzwMqXDM1", category:"Acessórios",    description:"Boné Moderno, Estiloso e Combina Com Vários Looks.",           badge:"Novo",   featured:false, demo:true },
  { id:6,  name:"Calça Cargo Jeans Baggy",   price:59.90, oldPrice:null, image:"jeansbaggy.webp", affiliateUrl:"https://s.shopee.com.br/3g4SBUWHqH", category:"Calças",    description:"Moda urbana skatista, caimento largo.",                    badge:"Destaque", featured:false, demo:true },
  { id:7,  name:"Tênis Tesla Hertz Unissex",        price:109.65, oldPrice:null,  image:"teslatenis.webp", affiliateUrl:"https://s.shopee.com.br/7faZhm2ReH", category:"Calçados",  description:"Perfeito para quem busca conforto, resistência e estilo no dia a dia.",                          badge:"Destaque", featured:true, demo:true },
  { id:8,  name:"Tênis Casual Red Nose Chunky",          price:159.99, oldPrice:null,  image:"tenisRN.webp", affiliateUrl:"https://s.shopee.com.br/1gJMX78kcG", category:"Calçados",  description:"Estilo Chunky/Retro: Design robusto e volumoso.",                      badge:"Novo",       featured:false, demo:true },
  { id:9,  name:"Moletom Masculino TennisClub Streetwear",  price:54.90, oldPrice:null,  image:"moletom florido.webp", affiliateUrl:"https://s.shopee.com.br/7ptzqEnxOj", category:"Moletons",  description:"Moletom com capuz e bolso frontal.",                    badge:"Novo",   featured:true,  demo:true },
  { id:10, name:"Jaqueta Coach Masculina",        price:222.98, oldPrice:null, image:"jaquetacoach.webp", affiliateUrl:"https://s.shopee.com.br/qkFXDuTtI", category:"Moletons",  description:"Jaqueta leve com fechamento por botões.",               badge:"Novo", featured:false, demo:true },
  { id:11, name:"Boné Aba Reta New York",       price:19.99,  oldPrice:null,  image:"BoneReta.webp", affiliateUrl:"https://s.shopee.com.br/20wEBwWweU", category:"Acessórios",description:"Boné ajustável de aba Reta.",                          badge:"",       featured:true,  demo:true },
  { id:12, name:"Corrente Ice Cravejada",          price:16.99,  oldPrice:null,  image:"Ice.webp", affiliateUrl:"https://s.shopee.com.br/9pf5W6rBFl", category:"Acessórios",description:"Corrente em elos grossos, acabamento Cravejado.",        badge:"Novo",   featured:false, demo:true },
  { id:13, name:"Calça Jeans Baggy Wide Leg", price:59.00, oldPrice:null, image:"IMG_2546.jpeg", affiliateUrl:"https://s.shopee.com.br/6q1SIpD4xg", category:"Calças", description:"Jeans baggy cinza lavado, perna larga.", badge:"Destaque", featured:false }
];
PRODUCTS.push(

  /* ---------- CASUAL ---------- */
  // procure: "camiseta básica algodão masculina"
  { id:101, name:"Camisa Polo Básica", price:44.90, oldPrice:null, image:"", affiliateUrl:"https://s.shopee.com.br/1gJVwZTkS6", style:"Casual", category:"Polos", description:"Camisa lisa de modelagem reta.", badge:"", featured:false, demo:true },
  // procure: "camisa polo piquet masculina"
  { id:102, name:"Camisa Social Gola Padre", price:35.64, oldPrice:null, image:"", affiliateUrl:"https://s.shopee.com.br/3g4aKXwztx", style:"Casual", category:"Camisas", description:"Camisa Social para o dia a dia.", badge:"", featured:false, demo:true },
  // procure: "camisa linho manga curta masculina"
  { id:103, name:"Kit 2 Calças Jeans", price:95.48, oldPrice:null, image:"", affiliateUrl:"https://s.shopee.com.br/6AlvJMdUff", style:"Casual", category:"Calças", description:"Calça Jeans Tradicional.", badge:"", featured:false, demo:true },
  // procure: "calça jeans reta masculina"
  { id:104, name:"Sapatênis Casual Masculino", price:31.69, oldPrice:null, image:"", affiliateUrl:"https://s.shopee.com.br/9V2NHnA7ii", style:"Casual", category:"Calçados", description:"Sapatênis Masculino Casual Simples.", badge:"", featured:false, demo:true },
  // procure: "calça chino masculina"
  { id:105, name:"Calça Chino Masculina", price:74.89, oldPrice:null, image:"", affiliateUrl:"https://s.shopee.com.br/4B0qwIE1P5", style:"Casual", category:"Calças", description:"Chino em sarja, visual limpo.", badge:"", featured:false, demo:true },
  // procure: "bermuda sarja masculina"
  { id:106, name:"Bermuda Sarja Masculina", price:49.89, oldPrice:null, image:"", affiliateUrl:"https://s.shopee.com.br/6VOlikwQtZ", style:"Casual", category:"Bermudas", description:"Bermuda de sarja para o verão.", badge:"", featured:false, demo:true },
  // procure: "tênis casual branco masculino"
  { id:107, name:"Tênis Casual Unissex", price:39.95, oldPrice:null, image:"", affiliateUrl:"https://s.shopee.com.br/1LgfZRteje", style:"Casual", category:"Calçados", description:"Tênis liso, combina com tudo.", badge:"", featured:false, demo:true },
  // procure: "moletom básico masculino"
  { id:108, name:"Moletom Gola Redonda Unissex", price:34.90, oldPrice:null, image:"", affiliateUrl:"https://s.shopee.com.br/4qGXk08AFf", style:"Casual", category:"Moletons", description:"Moletom liso, modelagem reta.", badge:"", featured:false, demo:true },
  // procure: "mochila casual preta"
  { id:109, name:"Mochila Casual Multiuso", price:37.99, oldPrice:null, image:"", affiliateUrl:"https://s.shopee.com.br/3g4aM2YUaB", style:"Casual", category:"Acessórios", description:"Mochila simples para o dia a dia.", badge:"", featured:false, demo:true },

  /* ---------- SOCIAL ---------- */
  // procure: "camisa social slim branca masculina"
  { id:110, name:"Camisa Social Slim", price:48.00, oldPrice:null, image:"", affiliateUrl:"https://s.shopee.com.br/8fTGJMuDur", style:"Social", category:"Camisas", description:"Camisa social de manga longa.", badge:"", featured:false, demo:true },
  // procure: "camisa social azul claro masculina"
  { id:111, name:"Camisa Social", price:43.90, oldPrice:null, image:"", affiliateUrl:"https://s.shopee.com.br/1BNFNkaXYz", style:"Social", category:"Camisas", description:"Camisa social de manga longa.", badge:"", featured:false, demo:true },
  // procure: "calça social alfaiataria masculina preta"
  { id:112, name:"Calça Alfaiataria Preta", price:78.89, oldPrice:null, image:"", affiliateUrl:"https://s.shopee.com.br/5AtO9D9cJi", style:"Social", category:"Alfaiataria", description:"Calça social de corte reto.", badge:"", featured:false, demo:true },
  // procure: "blazer slim masculino preto"
  { id:114, name:"Blazer + Calça Slim", price:181.90, oldPrice:null, image:"", affiliateUrl:"https://s.shopee.com.br/8fTGJvOckQ", style:"Social", category:"Blazers", description:"Blazer e Calça de corte slim.", badge:"", featured:false, demo:true },
  // procure: "sapato social masculino preto"
  { id:115, name:"Sapato Social Masculino", price:42.90, oldPrice:null, image:"", affiliateUrl:"https://s.shopee.com.br/qkOzeT97U", style:"Social", category:"Sapatos", description:"Sapato social clássico.", badge:"", featured:false, demo:true },
  // procure: "mocassim masculino marrom"
  { id:116, name:"Sapato Mocassim Loafer", price:113.99, oldPrice:null, image:"", affiliateUrl:"https://s.shopee.com.br/60SV9IjVVc", style:"Social", category:"Sapatos", description:"Mocassim para look social casual.", badge:"", featured:false, demo:true },
  // procure: "cinto social masculino preto"
  { id:117, name:"Cinto Social", price:18.99, oldPrice:null, image:"", affiliateUrl:"https://s.shopee.com.br/BUiCl1Gqu", style:"Social", category:"Acessórios", description:"Cinto liso com fivela clássica.", badge:"", featured:false, demo:true },
  // procure: "gravata slim azul marinho"
  { id:118, name:"Gravata Slim", price:26.90, oldPrice:null, image:"", affiliateUrl:"https://s.shopee.com.br/6L5LYE5Du7", style:"Social", category:"Acessórios", description:"Gravata slim listrada.", badge:"", featured:false, demo:true },
  // procure: "relógio social masculino prata"
  { id:119, name:"Relógio Com Pulseira de Couro", price:48.00, oldPrice:null, image:"", affiliateUrl:"https://s.shopee.com.br/8pmgWxIsAT", style:"Social", category:"Acessórios", description:"Relógio de pulso clássico.", badge:"", featured:false, demo:true }

);
