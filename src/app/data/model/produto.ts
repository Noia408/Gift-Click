export default interface Produto {
    id: number;
    nome: string;
    preco: number;
    categoria: string;
    regiao: string;
    descricao: string;
    imagem: string;
    pontos: number;
  }
  
  export const giftCards: Produto[] = [
    {
      id: 1,
      nome: "Gift Card Steam",
      preco: 50.0,
      categoria: "Games",
      regiao: "Global",
      descricao: "Adicione créditos à sua conta Steam para comprar jogos, DLCs e mais.",
      imagem: "https://i.postimg.cc/2SZ4k8qj/steam-logo-splash.avif",
      pontos: 500,
    },
    {
      id: 2,
      nome: "Gift Card PlayStation",
      preco: 100.0,
      categoria: "Games",
      regiao: "Américas",
      descricao: "Créditos para jogos e serviços na PlayStation Store.",
      imagem: "https://i.postimg.cc/1tk8YDHp/playstation-store.webp",
      pontos: 1000,
    },
    {
      id: 3,
      nome: "Gift Card Xbox",
      preco: 70.0,
      categoria: "Games",
      regiao: "Global",
      descricao: "Use para comprar jogos, DLCs e assinaturas no Xbox.",
      imagem: "https://i.postimg.cc/RZSN8Scb/Xbox-mobile-gaming-store-696x392.jpg",
      pontos: 700,
    },
    {
      id: 4,
      nome: "Gift Card Nintendo",
      preco: 60.0,
      categoria: "Games",
      regiao: "Américas",
      descricao: "Créditos para jogos e serviços no Nintendo eShop.",
      imagem: "https://i.postimg.cc/28pWHNcP/nintendo-eshop-logo-1.avif",
      pontos: 600,
    },
    {
      id: 5,
      nome: "Google Play Gift Card",
      preco: 30.0,
      categoria: "Apps",
      regiao: "Global",
      descricao: "Adicione créditos à sua conta Google para apps, jogos e mais.",
      imagem: "https://i.postimg.cc/zvh09S15/Google-Play.jpg",
      pontos: 300,
    },
    {
      id: 6,
      nome: "Apple Gift Card",
      preco: 80.0,
      categoria: "Apps",
      regiao: "Global",
      descricao: "Use para comprar apps, músicas, filmes e muito mais na App Store.",
      imagem: "https://i.postimg.cc/zGxS2PRK/500-333.webp",
      pontos: 800,
    },
    {
      id: 7,
      nome: "Netflix Gift Card",
      preco: 40.0,
      categoria: "Entretenimento",
      regiao: "Global",
      descricao: "Assista aos seus filmes e séries favoritos na Netflix.",
      imagem: "https://i.postimg.cc/qR0cZVvJ/Group-2452.png",
      pontos: 400,
    },
    {
      id: 8,
      nome: "Spotify Gift Card",
      preco: 20.0,
      categoria: "Música",
      regiao: "Global",
      descricao: "Créditos para assinatura premium do Spotify.",
      imagem: "https://i.postimg.cc/NFv123Wq/2024-spotify-brand-assets-media-kit.jpg",
      pontos: 200,
    }
  ];
  