(() => {
const $ = s => document.querySelector(s);
const money = n => Number(n).toLocaleString('pt-BR', {style:'currency', currency:'BRL'});
const CATS = ['Camisetas','Calças','Calçados','Moletons','Acessórios','Ofertas'];
const LABEL = {Camisetas:'Camisetas e oversized',Calças:'Calças cargo e baggy',Calçados:'Tênis e calçados urbanos',Moletons:'Moletons e jaquetas',Acessórios:'Bonés, correntes e acessórios',Ofertas:'Ofertas'};
const GROUPS = {roupas:['Camisetas','Calças','Moletons'], calcados:['Calçados'], acessorios:['Acessórios']};
const GRAD = ['#3a3d2a','#2b2b2b','#4a4a46','#1f2420','#55524a','#30332a'];
const st = {q:'', cat:'all', group:'all', sort:'new'};
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
function render() {
  const l = filtered(); fill($('#grid'), l);
  $('#empty').hidden = l.length > 0;
  $('#count').textContent = l.length + (l.length === 1 ? ' produto' : ' produtos');
  document.querySelectorAll('.chip').forEach(c => c.setAttribute('aria-pressed', String(c.dataset.cat === (st.group !== 'all' && st.cat === 'all' ? '__' : st.cat))));
  document.querySelectorAll('.nav a').forEach(a => a.classList.toggle('on', a.dataset.go === st.group && st.group !== 'all'));
}
function setFilter(o) { Object.assign(st, {cat:'all', group:'all'}, o); render(); }

// Seções fixas
fill($('#popular'), PRODUCTS.filter(p => p.featured).slice(0, 4));
fill($('#news'), [...PRODUCTS].sort((a,b) => b.id - a.id).slice(0, 4));
fill($('#offers'), PRODUCTS.filter(isOffer).slice(0, 4));

// Categorias e chips
const cats = $('#cats'), chips = $('#chips');
CATS.forEach((c, i) => {
  const b = document.createElement('button'); b.className = 'cat'; b.style.setProperty('--g', GRAD[i]); b.textContent = LABEL[c];
  b.onclick = () => { setFilter({cat:c}); $('#loja').scrollIntoView(); }; cats.appendChild(b);
});
[['all','Todos'], ...CATS.map(c => [c, c])].forEach(([v, t]) => {
  const b = document.createElement('button'); b.className = 'chip'; b.dataset.cat = v; b.textContent = t;
  b.onclick = () => setFilter({cat:v}); chips.appendChild(b);
});

// Navegação, busca, ordenação, menu móvel
const nav = $('#nav'), mb = $('#menuBtn');
mb.onclick = () => { const o = nav.classList.toggle('open'); mb.setAttribute('aria-expanded', o); };
document.querySelectorAll('[data-go]').forEach(a => a.addEventListener('click', () => { setFilter({group:a.dataset.go}); nav.classList.remove('open'); mb.setAttribute('aria-expanded', 'false'); }));
const sb = $('#searchBar'), sbtn = $('#searchBtn');
sbtn.onclick = () => { sb.hidden = !sb.hidden; sbtn.setAttribute('aria-expanded', String(!sb.hidden)); if (!sb.hidden) $('#q').focus(); };
$('#q').addEventListener('input', e => { st.q = e.target.value; render(); if (st.q) $('#loja').scrollIntoView(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') { sb.hidden = true; nav.classList.remove('open'); } });
$('#sort').onchange = e => { st.sort = e.target.value; render(); };
render();
})();
