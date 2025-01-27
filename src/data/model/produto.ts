export default interface Produto {
    id: number;
    nome: string;
    preco: number;
    categoria: string;
    regiao: string;
    descricao: string;
    imagem: string;
    video: string;
    sobre: string;
    pontos: number;
    codigo: string;
  }
  
  export const giftCards: Produto[] = [
    {
      id: 1,
      nome: "Steam 30US$",
      preco: 50.0,
      categoria: "Games",
      regiao: "Global",
      descricao: "Com o Steam Gift Card, você tem acesso à maior plataforma de jogos para PC do mundo. Use-o para adquirir jogos populares, edições especiais, pacotes de expansão ou até mesmo itens dentro de jogos. É uma excelente escolha para jogadores que buscam variedade, com opções que vão de indie games a grandes lançamentos AAA. Além disso, a flexibilidade de uso torna esse cartão o presente ideal para quem é apaixonado por jogos de PC e quer aproveitar o que há de melhor no universo gamer.",
      imagem: "https://i.postimg.cc/2SZ4k8qj/steam-logo-splash.avif",
      video: "https://www.youtube.com/embed/6Ljd7pDFl7A?si=z-fSS6BJNT-c9mJr",
      sobre: "A Steam é a maior plataforma de distribuição digital de jogos para PC, reunindo milhões de jogadores e uma vasta biblioteca de títulos. Desde jogos independentes até grandes lançamentos AAA, a Steam é o lugar ideal para descobrir e explorar diferentes gêneros. Além disso, a plataforma oferece funcionalidades exclusivas, como conquistas, mods e uma comunidade ativa para interações. A Steam também conta com promoções frequentes e recursos como o Steam Workshop, que permite a personalização e expansão dos jogos. É a escolha número um para quem ama jogar no PC.",
      pontos: 500,
      codigo: "jiucitçitiutciutciutciutci",
    },
    {
      id: 2,
      nome: "PlayStation 30US$",
      preco: 100.0,
      categoria: "Games",
      regiao: "Américas",
      descricao: "Com o Gift Card da PlayStation Store, você entra no universo épico dos jogos eletrônicos. Ele permite comprar os últimos lançamentos, DLCs, assinaturas do PlayStation Plus ou até mesmo créditos para jogos online. Ideal para jogadores de PlayStation 4 e PlayStation 5, este cartão é simples de resgatar e oferece flexibilidade para explorar uma vasta seleção de jogos, filmes e conteúdos exclusivos. Seja para um fã de ação, aventura, esportes ou RPG, este presente é sempre um acerto!",
      imagem: "https://i.postimg.cc/1tk8YDHp/playstation-store.webp",
      video: "https://www.youtube.com/embed/1iUdTOZ9-Qo?si=chJSEAqL-FrLzpJB",
      sobre: "A PlayStation é líder no mercado de consoles de videogame, reconhecida por suas experiências de jogo imersivas e inovadoras. Com dispositivos de última geração, como o PlayStation 4 e o PlayStation 5, a plataforma oferece uma biblioteca impressionante de jogos exclusivos, como The Last of Us, God of War e Horizon Forbidden West. Além disso, a PlayStation Store é o ponto de acesso para adquirir jogos digitais, DLCs, filmes e assinaturas, como o PlayStation Plus. Seja para explorar mundos incríveis ou competir online, a PlayStation é a escolha definitiva para gamers apaixonados.",
      pontos: 500,
      codigo: "jiucitçitiutciutciutciutci",
    },
    {
      id: 3,
      nome: "Xbox 30US$",
      preco: 70.0,
      categoria: "Games",
      regiao: "Global",
      descricao: "O Gift Card Xbox abre as portas para uma incrível experiência de jogos e entretenimento. Ele pode ser usado para adquirir os lançamentos mais recentes, conteúdos adicionais, assinaturas do Xbox Game Pass ou até filmes e séries na loja Xbox. Compatível com Xbox Series X|S, Xbox One e PC, este cartão é a escolha perfeita para gamers que desejam explorar novas aventuras ou expandir sua biblioteca de jogos. Um presente indispensável para fãs da marca Xbox.",
      imagem: "https://i.postimg.cc/RZSN8Scb/Xbox-mobile-gaming-store-696x392.jpg",
      video: "https://www.youtube.com/embed/NcZc7x31IkE?si=axYtSP0CAoYDcp0R",
      sobre: "A Xbox é uma plataforma de jogos e entretenimento da Microsoft, conhecida por sua experiência imersiva e conectividade. Com consoles como o Xbox Series X|S e serviços como o Xbox Game Pass, ela oferece acesso a centenas de jogos, incluindo lançamentos e clássicos. Além dos jogos, a plataforma permite a compra de filmes, séries e conteúdos adicionais. A Xbox Live conecta jogadores do mundo todo para partidas online e competições intensas. Seja para jogar sozinho, em equipe ou explorar novos mundos, a Xbox proporciona diversão ilimitada para gamers de todas as idades.",
      pontos: 500,
      codigo: "jiucitçitiutciutciutciutci",
    },
    {
      id: 4,
      nome: "Nintendo 30US$",
      preco: 60.0,
      categoria: "Games",
      regiao: "Américas",
      descricao: "Mergulhe no mundo mágico dos jogos com o Nintendo Gift Card. Ele oferece acesso a uma vasta biblioteca de títulos para consoles Nintendo Switch, como clássicos nostálgicos e os lançamentos mais recentes. Use-o para adquirir jogos digitais, conteúdos adicionais, assinaturas do Nintendo Switch Online ou até mesmo itens exclusivos. É o presente perfeito para gamers de todas as idades que amam a diversão e a criatividade que só a Nintendo pode proporcionar.",
      imagem: "https://i.postimg.cc/28pWHNcP/nintendo-eshop-logo-1.avif",
      video: "https://www.youtube.com/embed/gKb84h5_d_8?si=WxhJ8dnz6DQBV9ca",
      sobre: "A Nintendo é uma das marcas mais icônicas do mundo dos games, conhecida por seus jogos inovadores e consoles revolucionários, como o Nintendo Switch. Com franquias lendárias como Mario, Zelda, Pokémon e Animal Crossing, a Nintendo é sinônimo de diversão e criatividade. Sua plataforma oferece acesso a uma ampla biblioteca de jogos digitais, conteúdos adicionais e serviços online que conectam jogadores ao redor do mundo. Com uma abordagem única que une entretenimento familiar e experiências desafiadoras, a Nintendo continua a conquistar gerações de fãs ao redor do globo.",
      pontos: 500,
      codigo: "jiucitçitiutciutciutciutci",
    },
    {
      id: 5,
      nome: "Google Play 30US$",
      preco: 30.0,
      categoria: "Apps",
      regiao: "Global",
      descricao: "O Gift Card Google Play é a chave para um universo de possibilidades digitais. Com ele, você pode adquirir aplicativos, jogos, filmes, músicas, livros e muito mais na Google Play Store. É uma escolha ideal para gamers que buscam vantagens nos jogos, cinéfilos que adoram assistir a lançamentos e leitores apaixonados por e-books. Sem necessidade de cartão de crédito, ele é fácil de usar e oferece flexibilidade máxima. Um presente perfeito para qualquer pessoa com um dispositivo Android ou que utilize os serviços da Google Play.",
      imagem: "https://i.postimg.cc/zvh09S15/Google-Play.jpg",
      video: "https://www.youtube.com/embed/CEwYSoeEV0A?si=cPwX5dATwhXNjSF6",
      sobre: "O Google Play é o ecossistema digital oficial do Android, onde você encontra uma infinidade de aplicativos, jogos, filmes, músicas, e-books e mais. Perfeito para usuários de dispositivos Android, ele é um centro global de entretenimento e produtividade. Desde aplicativos úteis para o dia a dia até jogos envolventes e compras dentro de apps, o Google Play atende a todas as necessidades digitais. Além disso, a plataforma oferece segurança e facilidade para transações, sendo uma das melhores opções para explorar o universo tecnológico com praticidade e conveniência.",
      pontos: 500,
      codigo: "jiucitçitiutciutciutciutci",
    },
    {
      id: 6,
      nome: "Apple 30US$",
      preco: 80.0,
      categoria: "Apps",
      regiao: "Global",
      descricao: "O Apple Gift Card é o presente perfeito para quem vive o ecossistema Apple. Ele pode ser usado para adquirir aplicativos na App Store, músicas no Apple Music, filmes no iTunes, livros na Apple Books e até mesmo para expandir o armazenamento no iCloud. Além disso, é compatível com assinaturas como Apple Arcade, Apple TV+ e muito mais. Um presente versátil e sofisticado para quem valoriza tecnologia, entretenimento e praticidade no dia a dia.",
      imagem: "https://i.postimg.cc/zGxS2PRK/500-333.webp",
      video: "https://www.youtube.com/embed/Rg0zwUUb2U4?si=V2lv_soa3a3Y_dTo",
      sobre: "A Apple é uma das maiores empresas de tecnologia do mundo, conhecida por seus produtos premium, como o iPhone, iPad, Mac e Apple Watch. Seu ecossistema integrado oferece serviços como a App Store, onde é possível baixar aplicativos, e o Apple Music, que fornece acesso a milhões de músicas. Além disso, com o iCloud, os usuários podem armazenar e sincronizar arquivos com segurança em todos os dispositivos. Serviços como Apple Arcade, Apple TV+ e Apple Books ampliam ainda mais as possibilidades de entretenimento. A Apple é sinônimo de inovação, qualidade e sofisticação.",
      pontos: 500,
      codigo: "jiucitçitiutciutciutciutci",
    },
    {
      id: 7,
      nome: "Netflix 30US$",
      preco: 10000,
      categoria: "Entretenimento",
      regiao: "Global",
      descricao: "O Gift Card da Netflix é a maneira perfeita de presentear quem ama entretenimento. Com ele, você pode acessar milhares de filmes, séries, documentários e produções originais de sucesso em alta definição, tudo sem anúncios. Ideal para maratonar suas séries favoritas ou descobrir novos conteúdos, o cartão oferece total flexibilidade. Ele é fácil de resgatar e pode ser usado para renovar assinaturas ou iniciar uma nova. Este presente é ideal para qualquer pessoa que ama assistir o que há de melhor no mundo do streaming",
      imagem: "https://i.postimg.cc/qR0cZVvJ/Group-2452.png",
      video: "https://www.youtube.com/embed/UtKuwFnvKr4?si=9vLArTZGstBg8ZDG",
      sobre: "A Netflix é a principal plataforma de streaming do mundo, oferecendo um catálogo vasto e diversificado de filmes, séries, documentários e animações para todos os gostos. Conhecida por suas produções originais premiadas, como Stranger Things, The Witcher e The Crown, a Netflix é ideal para maratonar séries ou descobrir novas histórias envolventes. Disponível em diversos dispositivos, ela oferece uma experiência personalizada com recomendações baseadas nos seus interesses. Com conteúdos para toda a família e qualidade de transmissão impecável, é a escolha perfeita para quem busca entretenimento de alta qualidade a qualquer momento.",
      pontos: 500,
      codigo: "jiucitçitiutciutciutciutci",
    },
    {
      id: 8,
      nome: "Spotify 30US$",
      preco: 20.0,
      categoria: "Música",
      regiao: "Global",
      descricao: "O Gift Card Spotify é o presente ideal para os amantes de música. Com ele, você pode desbloquear o Spotify Premium e aproveitar músicas sem anúncios, playlists personalizadas e a opção de ouvir offline. Seja para descobrir novos artistas, criar trilhas sonoras para momentos especiais ou mergulhar em podcasts cativantes, este cartão oferece acesso ilimitado a uma experiência musical completa. Um presente perfeito para quem valoriza qualidade e praticidade ao ouvir suas músicas favoritas.",
      imagem: "https://i.postimg.cc/NFv123Wq/2024-spotify-brand-assets-media-kit.jpg",
      video: "https://www.youtube.com/embed/2SdoZ-uva88?si=qn0Smvwl8dieE3LH",
      sobre: "O Spotify é o maior serviço de streaming de áudio do mundo, proporcionando acesso a milhões de músicas, playlists e podcasts em uma única plataforma. Com uma interface intuitiva e ferramentas avançadas de recomendação, o Spotify permite que você descubra novas músicas e crie trilhas sonoras para cada momento da sua vida. Com o Spotify Premium, os usuários podem ouvir suas faixas favoritas sem anúncios, em alta qualidade e até mesmo offline. Seja para relaxar, treinar ou se inspirar, o Spotify é o destino perfeito para os amantes de música.",
      pontos: 500,
      codigo: "jiucitçitiutciutciutciutci",
    }
  ];
  