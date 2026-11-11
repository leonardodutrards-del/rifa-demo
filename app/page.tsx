const features = [
  { n: "01", title: "Cadastro de campanhas", text: "Organize nome, prêmio, categoria e período em poucos passos." },
  { n: "02", title: "Controle documental", text: "Registre certificado e regulamento para manter a documentação à mão." },
  { n: "03", title: "Painel de gestão", text: "Acompanhe rascunhos, etapas e exporte seus registros em CSV." },
];

export default function Home() {
  return <main>
    <header className="header wrap">
      <a className="logo" href="/" aria-label="GiraPrêmio - início"><span className="logo-icon"><svg viewBox="0 0 40 40" role="img" aria-label="Símbolo GiraPrêmio"><path d="M29.5 12.5A13 13 0 1 0 32 23h-7a6.5 6.5 0 1 1-1.2-7.1l-4 4h13v-13z" fill="currentColor"/><path d="M21 19h13" stroke="#b8f36a" strokeWidth="2.5" strokeLinecap="round"/></svg></span> gira<span className="logo-light">prêmio</span></a>
      <nav aria-label="Navegação principal"><a href="#recursos">Recursos</a><a href="/campanhas/">Exemplos</a><a className="nav-button" href="/painel-demo/">Testar painel ↗</a></nav>
    </header>
    <section className="hero wrap">
      <div className="hero-copy">
        <div className="eyebrow"><i/> GIRAPRÊMIO · GESTÃO DE CAMPANHAS</div>
        <h1>Suas campanhas organizadas. <em>Sua próxima campanha começa aqui.</em></h1>
        <p className="lead">Uma solução simples para cadastrar campanhas promocionais, organizar prêmios e acompanhar documentos em um painel intuitivo.</p>
        <div className="actions"><a className="primary" href="/painel-demo/">Experimentar o painel <span>↗</span></a><a className="secondary" href="#planos">Ver opções de aquisição ↓</a></div>
        <div className="proof"><span>✓ Cadastro simples</span><span>✓ Painel responsivo</span><span>✓ Exportação CSV</span></div>
      </div>
      <div className="visual" aria-label="Prévia ilustrativa do painel GiraPrêmio">
        <div className="glow"/>
        <div className="mock">
          <div className="mock-top"><span className="dots">● ● ●</span><span>PAINEL DE CAMPANHAS</span><span className="status">● PRÉVIA</span></div>
          <div className="mock-banner"><small>GIRAPRÊMIO</small><strong>Organize hoje.<br/>Acompanhe com clareza.</strong><span>Campanhas, prêmios e documentos em um só lugar.</span></div>
          <div className="mock-items"><div><b>✦</b><span>Campanhas</span><strong>Cadastro rápido</strong></div><div><b>▤</b><span>Documentos</span><strong>Controle simples</strong></div></div>
          <div className="mock-bottom"><span>✦ Protótipo demonstrativo</span><span>Adaptável ao celular</span></div>
        </div>
        <div className="float-card"><span>↗</span><div><b>Comece com o essencial</b><small>Uma base pronta para evoluir.</small></div></div>
      </div>
    </section>
    <section className="metrics"><div className="wrap metrics-inner"><div><b>01</b><span>cadastro de campanhas</span></div><div><b>02</b><span>controle documental</span></div><div><b>03</b><span>gestão e exportação</span></div></div></section>
    <section className="section wrap" id="recursos">
      <div className="section-heading"><div className="eyebrow">RECURSOS</div><h2>O essencial para organizar.<br/><em>Sem complicação.</em></h2><p>Uma interface direta para estruturar campanhas e acompanhar as informações mais importantes.</p></div>
      <div className="benefits">{features.map(item=><article className="benefit" key={item.n}><span>{item.n}</span><h3>{item.title}</h3><p>{item.text}</p><i>↗</i></article>)}</div>
    </section>
    <section className="showcase"><div className="wrap"><div className="showcase-head"><div><div className="eyebrow">EXEMPLOS ILUSTRATIVOS</div><h2>Visualize suas campanhas.</h2></div><span className="demo-pill">DADOS FICTÍCIOS · DEMONSTRAÇÃO</span></div>
      <div className="products"><article className="product"><div className="product-image"><span>TECNOLOGIA</span><b>📱</b></div><div className="product-info"><small>Exemplo de prêmio</small><h3>Smartphone</h3><strong>Modelo ilustrativo</strong></div></article><article className="product"><div className="product-image"><span>VAREJO</span><b>🎁</b></div><div className="product-info"><small>Exemplo de prêmio</small><h3>Kit especial</h3><strong>Modelo ilustrativo</strong></div></article><article className="product"><div className="product-image"><span>LAZER</span><b>🚲</b></div><div className="product-info"><small>Exemplo de prêmio</small><h3>Bicicleta</h3><strong>Modelo ilustrativo</strong></div></article></div>
    </div></section>
    <section className="pricing-section" id="planos"><div className="wrap"><div className="section-heading pricing-heading"><div className="eyebrow">ESCOLHA COMO COMEÇAR</div><h2>Um ponto de partida.<br/><em>Um projeto completo.</em></h2><p>Valores de referência para aquisição do código atual ou contratação de uma evolução sob medida.</p></div>
      <div className="pricing-grid">
        <article className="price-card"><span className="price-tag">ENTREGA ATUAL</span><h3>Código do projeto</h3><div className="price">R$ 250</div><p>Para quem quer adquirir a base atual e continuar o desenvolvimento por conta própria.</p><ul><li>Projeto-fonte atual</li><li>Vitrine e painel demonstrativo</li><li>Cadastro local no navegador</li><li>Exportação CSV</li><li>Sem banco de dados ou hospedagem gerenciada</li></ul><a className="secondary price-link" href="/painel-demo/">Ver o que está incluído ↗</a></article>
        <article className="price-card price-featured"><span className="price-tag">EVOLUÇÃO SOB MEDIDA</span><h3>Projeto completo</h3><div className="price">R$ 3.000</div><p>Proposta para desenvolver uma solução personalizada, com escopo e etapas definidos.</p><ul><li>Banco de dados e autenticação</li><li>Painel administrativo completo</li><li>Publicação e configuração</li><li>Testes e documentação</li><li>Integrações e recursos definidos em contrato</li></ul><a className="primary price-link" href="/painel-demo/">Conhecer a demonstração <span>↗</span></a></article>
      </div><p className="pricing-footnote">O valor de R$ 3.000 é uma referência comercial para um projeto a desenvolver, não uma funcionalidade já entregue. Escopo, prazo, custos de serviços externos e condições serão combinados antes do início.</p>
    </div></section>
    <section className="closing wrap"><div><div className="eyebrow">IMPORTANTE</div><h2>Campanhas responsáveis.<br/><em>Operação regular.</em></h2><p>Esta versão é um protótipo. Não vende números, não recebe pagamentos e não realiza sorteios. No Brasil, rifas com venda de bilhetes são proibidas como regra geral; promoções comerciais dependem do enquadramento e das autorizações aplicáveis.</p><a className="secondary-link" href="https://www.gov.br/fazenda/pt-br/composicao/orgaos/secretaria-de-premios-e-apostas/promocao-comercial/promocao-comercial" target="_blank" rel="noreferrer">Consultar orientações oficiais ↗</a></div><a className="primary" href="/painel-demo/">Abrir demonstração <span>↗</span></a></section>
    <footer><div className="wrap footer-inner"><a className="logo" href="/"><span className="logo-icon">CH</span> gira<span className="logo-light">prêmio</span></a><span>Protótipo demonstrativo · © {new Date().getFullYear()} GiraPrêmio</span></div></footer>
  </main>;
}
