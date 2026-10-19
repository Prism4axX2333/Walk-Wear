(() => {
const $ = s => document.querySelector(s);
const money = n => Number(n).toLocaleString('pt-BR', {style:'currency', currency:'BRL'});
const CATS = ['Camisetas','Calças','Calçados','Moletons','Acessórios','Ofertas'];
const LABEL = {Camisetas:'Camisetas e oversized',Calças:'Calças cargo e baggy',Calçados:'Tênis e calçados urbanos',Moletons:'Moletons e jaquetas',Acessórios:'Bonés, correntes e acessórios',Ofertas:'Ofertas'};
const GROUPS = {roupas:['Camisetas','Calças','Moletons'], calcados:['Calçados'], acessorios:['Acessórios']};
const GRAD = ['#3a3d2a','#2b2b2b','#4a4a46','#1f2420','#55524a','#30332a'];
const STYLES = {Streetwear:['Oversized, baggy, tênis e acessórios.','#3a3d2a'], Casual:['Básicos confortáveis para o dia a dia.','#4a4a46'], Social:['Camisas, alfaiataria e sapatos sociais.','#1f2420']};
const sty = p => p.style || 'Streetwear';
const st = {q:'', style:'all', cat:'all', group:'all', sort:'new'};
const isOffer = p => p.category === 'Ofertas' || p.badge === 'Oferta' || (p.oldPrice && p.oldPrice > p.price);

function card(p, i) {
  const a = document.createElement('article'); a.className = 'card'; a.style.animationDelay = (i % 8) * 40 + 'ms';
  const pic = document.createElement('div'); pic.className = 'pic';
  const ph = () => { const d = document.createElement('div'); d.className = 'ph'; d.textContent = 'Foto em breve'; pic.appendChild(d); };
  if (p.image) {
    const img = new Image(); img.alt = p.name; img.loading = 'lazy'; img.decoding = 'async';
    img.onerror = () => { img.remove(); ph(); }; img.src = p.image; pic.appendChild(img);
  } else ph();
  if (p.badge) { const t = document.createElement('span'); t.className = 'tag'; t.textContent = p.badge; pic.appendChild(t); }
  if (p.demo) { const d = document.createElement('span'); d.className = 'demo'; d.textContent = 'Exemplo'; pic.appendChild(d); }
  const b = document.createElement('div'); b.className = 'body';
  const h = document.createElement('h3'); h.textContent = p.name;
  const d = document.createElement('p'); d.textContent = p.description || '';
  const pr = document.createElement('div'); pr.className = 'price'; pr.textContent = money(p.price);
  if (p.oldPrice) { const s = document.createElement('s'); s.textContent = money(p.oldPrice); pr.appendChild(s); }
  const go = document.createElement('a'); go.className = 'go';
  if (p.affiliateUrl) { go.href = p.affiliateUrl; go.target = '_blank'; go.rel = 'sponsored noopener noreferrer'; go.textContent = 'Ver produto'; go.setAttribute('aria-label', 'Ver produto: ' + p.name + ' (abre em nova aba)'); }
  else { go.setAttribute('aria-disabled', 'true'); go.textContent = 'Link em breve'; }
  b.append(h, d, pr, go); a.append(pic, b); return a;
}
const fill = (el, list) => { el.replaceChildren(...list.map(card)); };

function filtered() {
  const q = st.q.trim().toLowerCase();
  let l = PRODUCTS.filter(p => {
    if (q && !(p.name + ' ' + (p.description||'')).toLowerCase().includes(q)) return false;
    if (st.style !== 'all' && sty(p) !== st.style) return false;
    if (st.cat === 'Ofertas' || st.group === 'ofertas') return isOffer(p);
    if (st.cat !== 'all') return p.category === st.cat;
    if (GROUPS[st.group]) return GROUPS[st.group].includes(p.category);
    return true;
  });
  if (st.sort === 'asc') l.sort((a,b) => a.price - b.price);
  else if (st.sort === 'desc') l.sort((a,b) => b.price - a.price);
  else l.sort((a,b) => b.id - a.id);
  return l;
}
function mkChip(v, t, pressed, onclick) {
  const b = document.createElement('button'); b.className = 'chip'; b.textContent = t;
  b.setAttribute('aria-pressed', String(pressed)); b.onclick = onclick; return b;
}
function buildChips() {
  const inStyle = PRODUCTS.filter(p => st.style === 'all' || sty(p) === st.style);
  const cats = [...CATS.filter(c => c === 'Ofertas' ? inStyle.some(isOffer) : inStyle.some(p => p.category === c)),
                ...new Set(inStyle.map(p => p.category).filter(c => !CATS.includes(c)))];
  if (st.cat !== 'all' && !cats.includes(st.cat)) st.cat = 'all';
  $('#chips').replaceChildren(mkChip('all', 'Todos', st.cat === 'all' && st.group === 'all', () => setFilter({})),
    ...cats.map(c => mkChip(c, c, st.cat === c, () => setFilter({cat:c}))));
  $('#styleChips').replaceChildren(mkChip('all', 'Todos os estilos', st.style === 'all', () => setFilter({style:'all'})),
    ...Object.keys(STYLES).map(s => mkChip(s, s, st.style === s, () => setFilter({style:s}))));
}
function render() {
  buildChips();
  const l = filtered(); fill($('#grid'), l);
  $('#empty').hidden = l.length > 0;
  $('#empty').textContent = (!st.q && st.style !== 'all') ? 'Ainda não há produtos neste estilo. Volte em breve.' : 'Nenhum produto encontrado. Tente outra busca ou categoria.';
  $('#count').textContent = (st.style !== 'all' ? st.style + ' · ' : '') + l.length + (l.length === 1 ? ' produto' : ' produtos');
  document.querySelectorAll('.nav a').forEach(a => a.classList.toggle('on', a.dataset.go === st.group && st.group !== 'all'));
}
function setFilter(o) { Object.assign(st, {cat:'all', group:'all'}, o); render(); }

// Seções fixas
fill($('#popular'), PRODUCTS.filter(p => p.featured).slice(0, 4));
fill($('#news'), [...PRODUCTS].sort((a,b) => b.id - a.id).slice(0, 4));
fill($('#offers'), PRODUCTS.filter(isOffer).slice(0, 4));

// Elementos novos de estilos (inseridos aqui para o index.html continuar igual)
const goStyles = document.createElement('a'); goStyles.href = '#estilos'; goStyles.dataset.go = '__styles'; goStyles.textContent = 'Estilos';
$('#nav').children[0].after(goStyles);
const heroBtn = document.querySelector('.hero-in .btn'), cta = document.createElement('div'), ghost = document.createElement('a');
cta.className = 'cta'; ghost.className = 'btn ghost'; ghost.href = '#estilos'; ghost.dataset.go = '__styles'; ghost.textContent = 'Escolher estilo';
heroBtn.replaceWith(cta); cta.append(heroBtn, ghost);
const stySec = document.createElement('section'); stySec.className = 'wrap sec'; stySec.id = 'estilos';
stySec.innerHTML = '<h2>Escolha seu estilo</h2><div class="styles" id="styles"></div>';
$('#cats').closest('section').before(stySec);
const styChips = document.createElement('div'); styChips.className = 'chips stylechips'; styChips.id = 'styleChips';
styChips.setAttribute('role', 'group'); styChips.setAttribute('aria-label', 'Filtrar por estilo');
document.querySelector('.tools').before(styChips);

// Estilos (botões que levam ao catálogo do estilo)
Object.entries(STYLES).forEach(([name, [tag, g]]) => {
  const b = document.createElement('button'); b.className = 'style-card'; b.style.setProperty('--g', g);
  const s = document.createElement('strong'); s.textContent = name;
  const t = document.createElement('span'); t.textContent = tag;
  b.append(s, t); b.onclick = () => { setFilter({style:name}); $('#loja').scrollIntoView(); };
  $('#styles').appendChild(b);
});

// Categorias (cartões da página inicial)
CATS.forEach((c, i) => {
  const b = document.createElement('button'); b.className = 'cat'; b.style.setProperty('--g', GRAD[i]); b.textContent = LABEL[c];
  b.onclick = () => { setFilter({cat:c}); $('#loja').scrollIntoView(); }; $('#cats').appendChild(b);
});

// Navegação, busca, ordenação, menu móvel
const nav = $('#nav'), mb = $('#menuBtn');
mb.onclick = () => { const o = nav.classList.toggle('open'); mb.setAttribute('aria-expanded', o); };
document.querySelectorAll('[data-go]').forEach(a => a.addEventListener('click', () => {
  if (a.dataset.go !== '__styles') setFilter({group:a.dataset.go, style:'all'});
  nav.classList.remove('open'); mb.setAttribute('aria-expanded', 'false');
}));
const sb = $('#searchBar'), sbtn = $('#searchBtn');
sbtn.onclick = () => { sb.hidden = !sb.hidden; sbtn.setAttribute('aria-expanded', String(!sb.hidden)); if (!sb.hidden) $('#q').focus(); };
$('#q').addEventListener('input', e => { st.q = e.target.value; render(); if (st.q) $('#loja').scrollIntoView(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') { sb.hidden = true; nav.classList.remove('open'); } });
$('#sort').onchange = e => { st.sort = e.target.value; render(); };
render();
})();
