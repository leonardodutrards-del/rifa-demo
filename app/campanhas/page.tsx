const examples = [
  { emoji: "📱", title: "Campanha de lançamento", category: "Tecnologia", description: "Exemplo de cadastro de campanha promocional e prêmio." },
  { emoji: "🎁", title: "Natal premiado", category: "Varejo", description: "Modelo ilustrativo para organizar período, prêmio e regulamento." },
  { emoji: "🚲", title: "Mobilidade e lazer", category: "Esporte", description: "Exemplo de ficha de prêmio e acompanhamento documental." },
  { emoji: "📺", title: "Casa conectada", category: "Tecnologia", description: "Modelo de organização de uma ação promocional." },
];

export default function CampaignsPage() {
  return <main className="subpage">
    <header className="header wrap"><a className="logo" href="/rifa-demo/"><span className="logo-icon">g</span> gira<span className="logo-light">prêmio</span></a><nav><a href="/rifa-demo/">Início</a><a className="nav-button" href="/rifa-demo/painel-demo/">Abrir painel ↗</a></nav></header>
    <section className="subhero wrap"><div className="eyebrow"><i/> CAMPANHAS E PRÊMIOS</div><h1>Organize suas campanhas<span>.</span></h1><p>Exemplos de como cadastrar prêmios, estruturar informações e acompanhar a documentação de uma promoção.</p><div className="demo-pill">CONTEÚDO FICTÍCIO · NÃO SÃO PROMOÇÕES ATIVAS</div></section>
    <section className="wrap catalog"><div className="catalog-head"><div><span className="eyebrow">MODELOS ILUSTRATIVOS</span><h2>Exemplos de cadastro</h2></div><a className="secondary-link" href="/rifa-demo/painel-demo/">Cadastrar campanha ↗</a></div>
      <div className="catalog-grid">{examples.map(item=><article className="catalog-card" key={item.title}><div className="catalog-art"><span>{item.category}</span><b>{item.emoji}</b></div><div className="catalog-copy"><small>EXEMPLO DE CAMPANHA</small><h3>{item.title}</h3><p>{item.description}</p><div className="catalog-buy"><strong>Modelo demonstrativo</strong><span className="demo-button">Ver exemplo</span></div></div></article>)}</div>
      <p className="legal-note">Importante: rifas com venda de bilhetes numerados são proibidas como regra geral no Brasil. Promoções comerciais com distribuição gratuita de prêmios dependem de autorização prévia quando enquadradas na Lei nº 5.768/1971. Consulte o Ministério da Fazenda antes de executar qualquer ação. Este site não oferece participação, venda de números ou sorteio.</p>
    </section>
    <footer><div className="wrap footer-inner"><a className="logo" href="/rifa-demo/"><span className="logo-icon">g</span> gira<span className="logo-light">prêmio</span></a><span>Exemplos fictícios para apresentação.</span></div></footer>
  </main>;
}
