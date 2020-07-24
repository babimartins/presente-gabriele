export interface NoteContentInterface {
  content: string;
  signature: string;
}

export default () => {
  const notesContent: NoteContentInterface[] = [
    {
      content: `Ei Gabizinha! Passando só pra te desejar um feliz aniversário e tudo de bom que esse mundo tem 
      pra oferecer. Você é uma pessoa cheia de luz e tenho muita sorte de poder ter te conhecido. Espero que 
      mesmo com a distância você se sinta abraçada e seu dia seja top. Abração!`,
      signature: 'Lana',
    },
    {
      content: `Eii gabizinha. Só passando aqui pra te dizer o quão incrível, inteligente, talentosa e carismática você 
        é. Você é uma pessoa iluminada que eu amei ter conhecido nesses 3 aninhos de cefet. Quero te desejar tudo 
        de melhor nesse mundo pq vc merece demaisss. Beijos te adoro muito muito mesmo.`,
      signature: 'João Vitor',
    },
    {
      content: `Feliz aniversário Gabizinha, te desejo tudo de melhor que o mundo possa te oferecer e queria te 
        falar que adoro você, uma das pessoas mais incríveis que eu pude conhecer no cefet. Aproveita muito seu 
        aniversário, tô morrendo de saudades, espero poder te dar um abraço logo, beijãoooo.`,
      signature: 'Ana Beatriz',
    },
    {
      content: `Oi Gabss, feliz aniversárioo, to aqui pra te desejar absolutamente tudo de bom. C eh uma pessoa absolutamente 
      incrível zz, boba demais e um amorzin de pessoa msm. Nn sei se já te falei mas eu me sinto mt sortudo de ter vc como uma 
      das pessoas mais próximas nessa vida, espero q a gente continue assim por mt anos. Te amo bobona ❤`,
      signature: 'Vinícius',
    },
    {
      content: `Feliz aniversário Gabi! Desejo tudo de bom para você e seu dia seja ótimo! Parabéns por ser uma boa amiga 
      e por sempre ser forte o suficiente para lutar por aquilo que acredita. Tudo de bom para você sempre. ♥️`,
      signature: 'Laura',
    },
    {
      content: `Parabeeeeens Gabi!!! Te desejo muitas coisas boas, que vc a cada se sinta mais feliz! Espero 
      ainda poder comemorar muitos aniversários seu junto com vc!! Você é uma mulher maravilhosa, merece curtir 
      muito esse seu dia! Aproveite bastante! Te amo! Saudades!`,
      signature: 'Luiza',
    },
    {
      content: `Feeeeeliz vidaaaa Gabiiiiii! Hoje são exatamente 19 anos da sua existência. Caramba... eu tô tão 
      feliz de poder comemorar mais um aniversário com você amiga. Quem poderia imaginar que nossas vidas iriam 
      se cruzar em um extinto cursinho preparatório e que o impacto desse encontro seria tão forte hein kkkkk. 
      Que sorte a minha! Eu quero aproveitar esse dia de hoje para te agradecer...`,
      signature: 'Nathália (1)',
    },
    {
      content: `... por ter compartilhado um pouco de você comigo. Pelas risadas, pelos choros, pelos rolê culturais 
      (e por aqueles não tão culturais assim kkkkk), pelos desabafos, pelas broncas, pelas birras, pelo seu belíssimo 
      gosto musical... pela sua amizade tão genuína. Desejo que nesse seu novo ciclo a felicidade esteja sempre por 
      perto, que haja muito amor na sua vida, muito sucesso...`,
      signature: 'Nathália (2)',
    },
    {
      content: `...  Que você não tenha medo de tentar e experimentar as novas fases que estão por vir. Espero que você 
      consiga perceber, com carinho, a pessoa incrível que você é! Independente do que aconteça, espero que você não 
      perca isso de vista. Ah e só pra te lembrar: "tu te tornas eternamente responsável por aquilo que tu cativas". 
      Sendo assim, que venham mais e mais vidas para compartilharmos!`,
      signature: 'Nathália (3)',
    },
    {
      content: `Então.... passando para te dar parabéns! Eu torço para que tds os seus problemas se resolvam e 
      desejo tudo de melhor pra vc. Descobrimos q temos mais em comum do que imaginávamos (kk)e tem sido muito 
      bom ter vc como amiga durante todos esses anos. Enfim, feliz aniversário e como não sei finalizar mensagens 
      fofinhas, vou terminar essa com uma frase sua: "Mas vc pode smp cv cmg tá? Não sei se posso ajudar muito, 
      mas pro que precisar eu tô aqui".`,
      signature: 'Breno',
    },
    {
      content: `Amiga, você é uma das pessoas que mais gosto no mundo. Você é cheia de amor e brilho e só quem 
      te conhece sabe o tamanho do seu coração! Eu quero te desejar todas as coisas mais bonitas que existem, 
      muito amor e muita luz (pra poder conseguir enxergar as coisas bonitas lá de trás). Eu te amo e estarei 
      sempre aqui mesmo de longinho. Que você tenha um dia especial, feliz aniversário! Beijos.`,
      signature: 'Eve',
    },
    {
      content: `Parabéns princesaaaa. Eu penso nsses últimos (quase) 4 meses que a gente conversa e nem sei o que seria da 
      minha quaretena se não tivesse você. To honrada demais de estar aqui deixando um recadinho pra você. Você é uma pessoa 
      incrível, com um coração de ouro, engraçada, fofa, divertida, inteligente, linda... Sinceramente eu fico boba. Torço 
      pra que seu dia seja perfeito, que nem você. Obrigada por tudo mesmo, to maluca pra te ver já. Beijinhos.`,
      signature: 'Babi',
    },
    {
      content: `Parabéns, meu bem! Queria que você soubesse que te admiro absurdamente, na sua maturidade e inteligência 
      para interpretar as relações sociais e na sua empatia e seu coração enorme, que está sempre aberto às pessoas. E ainda 
      por cima é linda, vê se pode? Quando eu penso em você eu penso no quanto tive sorte em te conhecer. A gente começou a 
      se aproximar em um momento em que tudo na minha vida estava dando errado e eu me sentia muito sozinha.`,
      signature: 'Jamilly (1)',
    },
    {
      content: `Eu estava mal, e isso tornou nossa amizade ainda mais importante pra mim. Foram tantos momentos bons e 
      enriquecedores que vivemos juntas. Você foi minha companhia em alguns dos dias mais felizes da minha vida, principalmente 
      a META, a nossa formatura e a participação na peça, Banho de Sol. Mas, também tiveram as visitas técnicas, idas a museus, 
      festivais de sorvete com direito a futebol de sabão, festa junina... `,
      signature: 'Jamilly (2)',
    },
    {
      content: `Foram tantos dias incríveis que eu não poderia esquecer jamais. Obrigada  por estar aqui comigo e espero que 
      saiba que estarei sempre aqui também, te desejando as melhores coisas do mundo. A propósito, tenho certeza que vai conseguir 
      realizar todos os seus sonhos. E você pode contar comigo no processo, te incentivando, e na realização, comemorando com você. 
      Feliz aniversário! Te amo muito ♥️`,
      signature: 'Jamilly (3)',
    },
  ];
  return notesContent;
};
