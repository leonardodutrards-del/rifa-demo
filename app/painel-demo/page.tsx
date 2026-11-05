"use client";

import { useEffect, useMemo, useState } from "react";
import type { FormEvent } from "react";

type Campaign = {
  id: string;
  title: string;
  prize: string;
  category: string;
  startDate: string;
  endDate: string;
  certificate: string;
  rulesUrl: string;
  status: "Rascunho" | "Aguardando autorização" | "Autorizada" | "Encerrada";
  createdAt: string;
};

const STORAGE_KEY = "giro-campaigns-v1";
const initialCampaigns: Campaign[] = [
  { id: "CH-001", title: "Campanha de lançamento", prize: "Smartphone de última geração", category: "Tecnologia", startDate: "2026-12-01", endDate: "2027-01-15", certificate: "", rulesUrl: "", status: "Rascunho", createdAt: "2026-11-05" },
  { id: "CH-002", title: "Natal premiado", prize: "Kit de produtos especiais", category: "Varejo", startDate: "2026-12-01", endDate: "2026-12-24", certificate: "", rulesUrl: "", status: "Aguardando autorização", createdAt: "2026-11-05" },
];

export default function CampaignManager() {
  const [campaigns, setCampaigns] = useState<Campaign[]>(initialCampaigns);
  const [ready, setReady] = useState(false);
  const [message, setMessage] = useState("");
  const [title, setTitle] = useState("");
  const [prize, setPrize] = useState("");
  const [category, setCategory] = useState("Geral");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [certificate, setCertificate] = useState("");
  const [rulesUrl, setRulesUrl] = useState("");

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) setCampaigns(JSON.parse(saved) as Campaign[]);
    } catch {
      setMessage("Não foi possível carregar os dados salvos neste navegador.");
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (ready) localStorage.setItem(STORAGE_KEY, JSON.stringify(campaigns));
  }, [campaigns, ready]);

  const counts = useMemo(() => ({
    total: campaigns.length,
    drafts: campaigns.filter(c => c.status === "Rascunho").length,
    review: campaigns.filter(c => c.status === "Aguardando autorização").length,
    approved: campaigns.filter(c => c.status === "Autorizada").length,
  }), [campaigns]);

  function createCampaign(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!title.trim() || !prize.trim() || !startDate || !endDate) {
      setMessage("Preencha o nome, o prêmio e o período da campanha.");
      return;
    }
    if (endDate < startDate) {
      setMessage("A data final precisa ser igual ou posterior à data inicial.");
      return;
    }
    const item: Campaign = {
      id: `CH-${Date.now().toString().slice(-7)}`,
      title: title.trim(),
      prize: prize.trim(),
      category,
      startDate,
      endDate,
      certificate: certificate.trim(),
      rulesUrl: rulesUrl.trim(),
      status: "Rascunho",
      createdAt: new Date().toISOString().slice(0, 10),
    };
    setCampaigns(current => [item, ...current]);
    setTitle(""); setPrize(""); setCategory("Geral"); setStartDate(""); setEndDate(""); setCertificate(""); setRulesUrl("");
    setMessage("Campanha criada como rascunho neste navegador. Ela ainda não está publicada nem autorizada.");
  }

  function updateStatus(item: Campaign, status: Campaign["status"]) {
    if (status === "Autorizada" && (!item.certificate.trim() || !item.rulesUrl.trim())) {
      setMessage("Para marcar como autorizada, registre o certificado e o link do regulamento aprovado. A conferência documental continua sendo responsabilidade do promotor.");
      return;
    }
    setCampaigns(current => current.map(c => c.id === item.id ? { ...c, status } : c));
    setMessage(`Status de "${item.title}" atualizado para ${status}.`);
  }

  function removeCampaign(id: string) {
    setCampaigns(current => current.filter(c => c.id !== id));
    setMessage("Campanha removida deste navegador.");
  }

  function exportCsv() {
    const header = ["Código","Campanha","Prêmio","Categoria","Início","Fim","Certificado","Regulamento","Status"];
    const rows = campaigns.map(c => [c.id,c.title,c.prize,c.category,c.startDate,c.endDate,c.certificate,c.rulesUrl,c.status]);
    const csv = [header, ...rows].map(row => row.map(value => `"${String(value).replaceAll('"','""')}"`).join(";")).join("\n");
    const blob = new Blob(["\\uFEFF", csv], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url; link.download = "girapremio-campanhas.csv"; link.click();
    URL.revokeObjectURL(url);
  }

  return <main className="dashboard-page">
    <aside className="dash-side">
      <a className="logo" href="/rifa-demo/"><span className="logo-icon">CH</span> gira<span className="logo-light">prêmio</span></a>
      <div className="dash-label">GESTÃO DE CAMPANHAS</div>
      <a className="dash-active" href="#overview">▦　Visão geral</a>
      <a href="#new-campaign">＋　Nova campanha</a>
      <a href="#campaign-list">◇　Campanhas</a>
      <a href="#compliance">▤　Conformidade</a>
      <div className="dash-bottom"><span className="avatar">CH</span><div><b>Área de gestão</b><small>Protótipo local</small></div></div>
    </aside>
    <section className="dash-main">
      <header className="dash-top"><div><span className="eyebrow">GIRAPRÊMIO · GESTÃO PROMOCIONAL</span><h1>Painel de campanhas</h1></div><a className="dash-preview" href="/rifa-demo/">← Voltar ao site</a></header>
      <div className="demo-alert"><strong>Ambiente de demonstração.</strong> Os registros ficam somente neste navegador. Não há cadastro de participantes, cobrança, venda de números ou realização de sorteios.</div>
      {message && <div className="manager-message" role="status"><span>{message}</span><button type="button" onClick={() => setMessage("")} aria-label="Fechar aviso">×</button></div>}
      <div className="stats-grid" id="overview">
        <article className="stat-card"><span>Campanhas cadastradas</span><b>{counts.total}</b><small>Registros neste navegador</small></article>
        <article className="stat-card"><span>Rascunhos</span><b>{counts.drafts}</b><small>Em preparação</small></article>
        <article className="stat-card"><span>Aguardando autorização</span><b>{counts.review}</b><small>Não iniciar a divulgação</small></article>
        <article className="stat-card"><span>Marcadas como autorizadas</span><b>{counts.approved}</b><small>Exigem conferência documental</small></article>
      </div>

      <section className="dash-panel manager-form" id="new-campaign">
        <div className="panel-head"><div><h2>Cadastrar campanha</h2><p>Organize os dados básicos e a documentação da promoção</p></div><span className="period">NOVO REGISTRO</span></div>
        <form onSubmit={createCampaign}>
          <div className="manager-fields">
            <label>Nome da campanha<input value={title} onChange={e=>setTitle(e.target.value)} placeholder="Ex.: Natal premiado" required maxLength={90}/></label>
            <label>Prêmio principal<input value={prize} onChange={e=>setPrize(e.target.value)} placeholder="Ex.: Smartphone modelo..." required maxLength={120}/></label>
            <label>Categoria<select value={category} onChange={e=>setCategory(e.target.value)}><option>Geral</option><option>Tecnologia</option><option>Varejo</option><option>Alimentos</option><option>Serviços</option><option>Filantropia</option><option>Outra</option></select></label>
            <label>Início previsto<input type="date" value={startDate} onChange={e=>setStartDate(e.target.value)} required/></label>
            <label>Encerramento previsto<input type="date" value={endDate} onChange={e=>setEndDate(e.target.value)} min={startDate || undefined} required/></label>
            <label>Certificado de autorização (se já emitido)<input value={certificate} onChange={e=>setCertificate(e.target.value)} placeholder="Número do certificado"/></label>
            <label className="field-wide">Link do regulamento aprovado<input type="url" value={rulesUrl} onChange={e=>setRulesUrl(e.target.value)} placeholder="https://..."/></label>
          </div>
          <div className="form-actions"><p>Novos registros começam como <strong>Rascunho</strong>. O cadastro não solicita nem substitui autorização oficial.</p><button className="primary" type="submit">＋ Criar campanha</button></div>
        </form>
      </section>

      <section className="dash-panel orders-panel" id="campaign-list">
        <div className="panel-head"><div><h2>Suas campanhas</h2><p>Atualize o fluxo interno e exporte os registros</p></div><button type="button" className="period action-period" onClick={exportCsv}>↓ Exportar CSV</button></div>
        <div className="manager-list">
          {campaigns.length === 0 && <p className="empty-state">Nenhuma campanha cadastrada. Use o formulário acima para criar a primeira.</p>}
          {campaigns.map(item=><article className="manager-campaign" key={item.id}>
            <div className="manager-campaign-main"><span className="campaign-id">{item.id} · {item.category}</span><h3>{item.title}</h3><p>Prêmio: {item.prize}</p><small>{item.startDate ? new Date(item.startDate+"T12:00:00").toLocaleDateString("pt-BR") : "—"} até {item.endDate ? new Date(item.endDate+"T12:00:00").toLocaleDateString("pt-BR") : "—"}</small></div>
            <div className="manager-campaign-actions"><span className={`status-chip ${item.status === "Autorizada" ? "status-approved" : item.status === "Aguardando autorização" ? "status-review" : ""}`}>{item.status}</span><label className="status-select-label">Etapa<select value={item.status} onChange={e=>updateStatus(item,e.target.value as Campaign["status"])}><option>Rascunho</option><option>Aguardando autorização</option><option>Autorizada</option><option>Encerrada</option></select></label><button type="button" className="remove-campaign" onClick={()=>removeCampaign(item.id)}>Excluir</button></div>
          </article>)}
        </div>
      </section>

      <section className="dash-panel compliance-panel" id="compliance">
        <div className="panel-head"><div><h2>Conformidade antes de divulgar</h2><p>Checklist de responsabilidade do organizador</p></div></div>
        <ul><li>Verificar o enquadramento jurídico da campanha e quem pode promovê-la.</li><li>Obter a autorização aplicável antes de iniciar a divulgação ou execução.</li><li>Publicar o regulamento aprovado e cumprir exatamente suas condições.</li><li>Registrar a prestação de contas e a entrega dos prêmios quando exigidas.</li></ul>
        <p>O painel não verifica certificados em bases oficiais e não habilita a campanha automaticamente. Consulte as regras e o sistema oficial do Ministério da Fazenda.</p>
        <a className="secondary-link" href="https://www.gov.br/fazenda/pt-br/composicao/orgaos/secretaria-de-premios-e-apostas/promocao-comercial/promocao-comercial" target="_blank" rel="noreferrer">Consultar regras oficiais ↗</a>
      </section>
      <p className="legal-note">Este é um protótipo de gestão local, sem backend ou autenticação. Não recebe dados de participantes, não vende bilhetes, não processa pagamentos, não realiza sorteios e não substitui assessoria jurídica nem autorização governamental.</p>
    </section>
  </main>;
}
