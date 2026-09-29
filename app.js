/* MAWRELLE — site script */
(() => {
'use strict';
document.documentElement.classList.add('js');

/* ================================================================ i18n */
const T = {
  ru: {
    skip:'К товарам', sound:'Звук щелчка', about:'О сайте', cart:'Корзина',
    est:'Maison de monstres · Est. 2026', collection:'Коллекция 01 — MAW-CLICK',
    claim1:'Уродливо.', claim2:'Дорого.', claim3:'Очень мягко.',
    from:'от $150', pull:'Потяни вниз — MAW-CLICK', altToy:'Плюшевый монстр MAWRELLE',
    insideKicker:'Ты внутри', insideTitle:'Пасть открыта.',
    insideLead:'Всё, что мы сшили, лежит здесь, между зубами. Листай вниз, пока она не закрылась.',
    fact1:'зубов с буквами', fact2:'щелчков до полного раскрытия', fact3:'симметричных швов',
    catsTitle:'Категории', catsNote:'Цена растёт вместе с редкостью. Как и пасть.',
    featured:'Нарасхват', prev:'Назад', next:'Вперёд', close:'Закрыть',
    techKicker:'Технология',
    step1t:'Потяни', step1:'Берёшь за макушку и тянешь вверх. Обе половины сшиты из одного куска меха.',
    step2t:'Щёлк × 12', step2:'Гармошка внутри раскладывается с сухим трескучим звуком. Двенадцать раз.',
    step3t:'Открыто', step3:'Внутри бархатный карман. Туда помещаются ключи, наушники или чужие секреты.',
    limKicker:'Только 12 штук в мире', limTitle:'Последний зевок',
    limLead:'Каждый Limited пронумерован, у каждого свой сертификат и своё выражение лица. Мы не повторяемся. Даже если попросите.',
    limBtn:'Забрать №09 за $4 900',
    footMaison:'Maison', footMaisonT:'MAWRELLE шьёт игрушки, которые стыдно любить и невозможно не трогать.',
    footCare:'Уход', footCareT:'Не стирать. Не расчёсывать. Не кормить после полуночи.',
    footTruth:'Правда', footTruthT:'Этого бренда не существует.', footMore:'Подробнее', footConcept:'Концепт для портфолио',
    cartTitle:'Корзина', subtotal:'Итого', checkout:'Оформить',
    emptyT:'Пасть пустая', emptyS:'Скорми ей кого-нибудь из коллекции.',
    add:'В корзину', added:'В пасти', toast:'Скормлено корзине:',
    revealT:'Сюрприз.', revealP1:'MAWRELLE не существует, так что заказ никуда не поедет, а деньги остались при тебе.',
    revealP2:'Это концепт-сайт для портфолио. Спасибо, что дошёл до кассы, это было смело.', revealBtn:'Закрыть пасть',
    aboutKicker:'О сайте', aboutTitle:'MAWRELLE не существует.',
    aboutP1:'Бренд, игрушки, цены и механизм MAW-CLICK придуманы. Никаких заводов, складов и доставки нет, купить здесь ничего нельзя, и деньги никто не спишет.',
    aboutP2:'Это концепт-сайт для портфолио: выдуманный бренд, монстр нарисован кодом в векторе, сайт собран с нуля.',
    aboutBy:'Автор:', sold:'Распродано', pcs:'шт.', flagship:'Флагман', qtyMinus:'Меньше', qtyPlus:'Больше', from2:'от',
    cur:{ add:'ням', open:'открыть', drag:'листай', read:'читать', close:'закрыть', nope:'продано' },
    marquee:['MAW-CLICK™','12 щелчков до полного раскрытия','Сшито вручную и немного криво','Уродливо намеренно','От $150','Пасть закрывается в полночь']
  },
  en: {
    skip:'Skip to shop', sound:'Click sound', about:'About', cart:'Cart',
    est:'Maison de monstres · Est. 2026', collection:'Collection 01 — MAW-CLICK',
    claim1:'Ugly.', claim2:'Expensive.', claim3:'Very soft.',
    from:'from $150', pull:'Pull down — MAW-CLICK', altToy:'MAWRELLE plush monster',
    insideKicker:'You are inside', insideTitle:'The maw is open.',
    insideLead:'Everything we ever stitched lives here, between the teeth. Keep scrolling before it shuts.',
    fact1:'teeth with letters', fact2:'clicks to fully open', fact3:'symmetrical seams',
    catsTitle:'Categories', catsNote:'Price grows with rarity. So does the mouth.',
    featured:'Everyone’s grabbing', prev:'Previous', next:'Next', close:'Close',
    techKicker:'Technology',
    step1t:'Pull', step1:'Grab the crown and pull up. Both halves are cut from a single piece of fur.',
    step2t:'Click × 12', step2:'The accordion inside unfolds with a dry crackle. Twelve times.',
    step3t:'Open', step3:'Inside is a velvet pocket. Fits keys, earbuds or other people’s secrets.',
    limKicker:'Only 12 in the world', limTitle:'The Last Yawn',
    limLead:'Every Limited is numbered, certified and wears its own facial expression. We never repeat. Not even if you ask nicely.',
    limBtn:'Claim No. 09 for $4,900',
    footMaison:'Maison', footMaisonT:'MAWRELLE makes toys that are embarrassing to love and impossible not to touch.',
    footCare:'Care', footCareT:'Do not wash. Do not brush. Do not feed after midnight.',
    footTruth:'Truth', footTruthT:'This brand does not exist.', footMore:'Read more', footConcept:'Portfolio concept',
    cartTitle:'Cart', subtotal:'Subtotal', checkout:'Check out',
    emptyT:'The maw is empty', emptyS:'Feed it something from the collection.',
    add:'Add to cart', added:'In the maw', toast:'Fed to the cart:',
    revealT:'Surprise.', revealP1:'MAWRELLE does not exist, so nothing ships and your money stays exactly where it is.',
    revealP2:'This is a portfolio concept site. Thanks for making it to checkout, that was brave.', revealBtn:'Close the maw',
    aboutKicker:'About', aboutTitle:'MAWRELLE does not exist.',
    aboutP1:'The brand, the toys, the prices and the MAW-CLICK mechanism are invented. There is no factory, no warehouse and no shipping. Nothing here can be bought and nobody will charge you.',
    aboutP2:'This is a portfolio concept: a made-up brand, a monster drawn in code as vector art, and a site built from scratch.',
    aboutBy:'Made by:', sold:'Sold out', pcs:'pcs', flagship:'Flagship', qtyMinus:'Fewer', qtyPlus:'More', from2:'from',
    cur:{ add:'nom', open:'open', drag:'swipe', read:'read', close:'close', nope:'sold' },
    marquee:['MAW-CLICK™','12 clicks to fully open','Hand-stitched, slightly crooked','Ugly on purpose','From $150','The maw closes at midnight']
  }
};

/* ================================================================ catalog */
const CATS = [
  { id:'minis',   ru:'Минис',      en:'Minis',   floor:150,  dru:'Маленькие, но уже кусаются.', den:'Small, but they already bite.' },
  { id:'classic', ru:'Классика',   en:'Classic', floor:300,  dru:'Базовая линейка. Каждый сшит вручную и немного криво.', den:'The core line. Each one hand-sewn and slightly off.' },
  { id:'rare',    ru:'Редкие',     en:'Rare',    floor:750,  dru:'Их меньше. Шерсти больше.', den:'Fewer of them. More fur.' },
  { id:'mythic',  ru:'Мифические', en:'Mythic',  floor:1800, dru:'Слишком большие, чтобы объяснить гостям.', den:'Too big to explain to your guests.' },
  { id:'limited', ru:'Лимитед',    en:'Limited', floor:4900, dru:'Двенадцать штук. Потом пасть закрывается навсегда.', den:'Twelve pieces. Then the maw shuts for good.' }
];
const P = [
  { id:'mawlet', cat:'minis', name:'MAWLET', sku:'MN-01', price:150, s:{w:.56,h:.5,eye:'pill',ring:1,fur:7,seed:3},
    ru:'Брелок, который кусает ключи. Открывается на 3 щелчка.', en:'A keychain that bites your keys. Opens in 3 clicks.' },
  { id:'gnash', cat:'minis', name:'GNASH MINI', sku:'MN-02', price:180, s:{w:.6,h:.56,eye:'pill',legs:1,arms:1,fur:11,seed:8},
    ru:'Карманный и злой. Шерсть торчит во все стороны.', en:'Pocket-sized and furious. Fur in every direction.' },
  { id:'blip', cat:'minis', name:'BLIP MINI', sku:'MN-03', price:190, s:{w:.5,h:.62,eye:'one',legs:1,fur:8,seed:14},
    ru:'Один глаз, ноль сожалений.', en:'One eye, zero regrets.' },
  { id:'snug', sold:1, cat:'minis', name:'SNUG MINI', sku:'MN-04', price:220, s:{w:.66,h:.46,eye:'wide',legs:1,arms:1,fur:6,seed:21},
    ru:'Помещается в ладонь. И в неё же вцепляется.', en:'Fits in your palm. Then grips it.' },

  { id:'moss', cat:'classic', name:'MOSS', sku:'MAW-01', price:300, img:'assets/mawrelle-closed.svg', badge:'flagship',
    ru:'Тот самый. Кислотный лайм, фиолетовые дёсны, восемь зубов с именем бренда.', en:'The original. Acid lime, violet gums, eight teeth spelling the brand.' },
  { id:'grumb', cat:'classic', name:'GRUMB', sku:'MAW-02', price:320, s:{w:.74,h:.66,eye:'pill',legs:1,arms:1,fur:10,seed:33},
    ru:'Квадратный ворчун. Осуждает тебя через пилюлю.', en:'A square grump. Judges you through a pill.' },
  { id:'wamble', cat:'classic', name:'WAMBLE', sku:'MAW-03', price:360, s:{w:.5,h:.82,eye:'pill',legs:1,arms:1,fur:9,seed:41,tilt:6},
    ru:'Длинный и шатается. Ровно стоять не умеет, так задумано.', en:'Tall and wobbly. Cannot stand straight, by design.' },
  { id:'oglo', cat:'classic', name:'OGLO', sku:'MAW-04', price:420, s:{w:.7,h:.6,eye:'two',legs:1,arms:1,fur:12,seed:52},
    ru:'Два глаза вместо одного. Двойной осуждающий взгляд.', en:'Two eyes instead of one. Double the judgement.' },

  { id:'slobbo', cat:'rare', name:'SLOBBERINE', sku:'RR-01', price:750, s:{w:.8,h:.62,eye:'pill',legs:1,arms:1,fur:14,seed:60,mouth:2},
    ru:'Складок в пасти вдвое больше. Щёлкает 24 раза.', en:'Twice the folds inside. Clicks 24 times.' },
  { id:'knook', cat:'rare', name:'KNOOK', sku:'RR-02', price:820, s:{w:.66,h:.64,eye:'pill',legs:1,arms:1,fur:9,seed:66,horns:1},
    ru:'Рога из мягкого фетра. Бодается нежно.', en:'Soft felt horns. Headbutts gently.' },
  { id:'tuftel', sold:1, cat:'rare', name:'TUFTEL', sku:'RR-03', price:980, s:{w:.62,h:.6,eye:'one',legs:1,fur:22,seed:77},
    ru:'Шерсть длиной 9 см. Требует личного парикмахера.', en:'9 cm fur. Requires a personal stylist.' },
  { id:'plummox', cat:'rare', name:'PLUMMOX', sku:'RR-04', price:1100, s:{w:.84,h:.52,eye:'wide',legs:1,arms:1,fur:10,seed:83},
    ru:'Широкий, низкий, тяжёлый. Садится на колени и не уходит.', en:'Wide, low, heavy. Sits on your lap and stays.' },

  { id:'grand-maw', cat:'mythic', name:'GRAND MAW', sku:'MY-01', price:1800, s:{w:.86,h:.8,eye:'pill',legs:1,arms:1,fur:13,seed:88,mouth:3},
    ru:'90 см в высоту. Проглатывает подушки целиком.', en:'90 cm tall. Swallows pillows whole.' },
  { id:'velvetusk', cat:'mythic', name:'VELVETUSK', sku:'MY-02', price:2400, s:{w:.76,h:.7,eye:'wide',legs:1,arms:1,fur:8,seed:95,tusks:1},
    ru:'Бархат снаружи, бархат внутри, клыки из смолы.', en:'Velvet outside, velvet inside, resin tusks.' },
  { id:'hushmaw', sold:1, cat:'mythic', name:'HUSHMAW', sku:'MY-03', price:2900, s:{w:.7,h:.84,eye:'one',legs:1,arms:1,fur:15,seed:99},
    ru:'Открывает пасть беззвучно. Только ночью.', en:'Opens its maw silently. Only at night.' },
  { id:'colossomaw', cat:'mythic', name:'COLOSSOMAW', sku:'MY-04', price:3400, s:{w:.9,h:.74,eye:'pill',legs:1,arms:1,fur:17,seed:103,mouth:3},
    ru:'Занимает кресло целиком. Кресло в комплект не входит.', en:'Takes up an entire armchair. Armchair not included.' },

  { id:'last-yawn', cat:'limited', name:'THE LAST YAWN', sku:'LT-09/12', price:4900, badge:'12', s:{w:.78,h:.72,eye:'pill',legs:1,arms:1,fur:16,seed:109,mouth:4},
    ru:'Последний зевок сезона. Пронумерован, подписан, обижен.', en:'The final yawn of the season. Numbered, signed, offended.' },
  { id:'yawnling', cat:'limited', name:'YAWNLING PRIME', sku:'LT-11/12', price:5600, badge:'12', s:{w:.6,h:.66,eye:'pill',legs:1,arms:1,fur:18,seed:131,horns:1},
    ru:'Младший брат Последнего зевка. Такой же обиженный, но с рогами.', en:'The Last Yawn’s younger sibling. Equally offended, now with horns.' },
  { id:'maw-royale', sold:1, cat:'limited', name:'MAW ROYALE', sku:'LT-03/07', price:7700, badge:'7', s:{w:.72,h:.7,eye:'two',legs:1,arms:1,fur:12,seed:121,crown:1,goldTooth:3},
    ru:'Золотой зуб. Один. Больше и не нужно.', en:'One gold tooth. One is enough.' },
  { id:'nullmaw', sold:1, cat:'limited', name:'NULLMAW', sku:'LT-01/01', price:12000, badge:'1', s:{w:.74,h:.74,eye:'wide',legs:1,arms:1,fur:20,seed:140,crown:1,tusks:1},
    ru:'Единственный экземпляр. Существует ровно так же, как и весь бренд.', en:'One of one. Exists exactly as much as the brand does.' }
];
const BY = Object.fromEntries(P.map(p => [p.id, p]));
const FEATURED = ['moss','last-yawn','grand-maw','gnash'];

/* ================================================================ utils */
const store = {
  get(k, d){ try{ const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; }catch(e){ return d; } },
  set(k, v){ try{ localStorage.setItem(k, JSON.stringify(v)); }catch(e){} }
};
let lang = store.get('mawrelle-lang', (navigator.language||'ru').toLowerCase().startsWith('ru') ? 'ru' : 'en');
if(!T[lang]) lang = 'ru';
let cart = store.get('mawrelle-cart', {});
Object.keys(cart).forEach(k => { if(!BY[k] || !(cart[k] > 0)) delete cart[k]; });
const t = k => T[lang][k] ?? k;
const money = n => '$' + new Intl.NumberFormat(lang === 'ru' ? 'ru-RU' : 'en-US').format(n);
const $ = (s, r=document) => r.querySelector(s);
const $$ = (s, r=document) => [...r.querySelectorAll(s)];
const esc = s => String(s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const clamp = (v,a,b) => Math.max(a, Math.min(b, v));
const reduced = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
function restart(el, cls){ if(!el) return; el.classList.remove(cls); void el.offsetWidth; el.classList.add(cls); }
function once(el, cls, ms){ restart(el, cls); setTimeout(() => el.classList.remove(cls), ms); }

/* ================================================================ true spring easing via CSS linear() */
function springCurve(stiff, damp, mass=1){
  const pts = []; let x = 0, v = 0; const dt = 1/240; let tEnd = 0;
  const samples = [];
  for(let i=0;i<240*3;i++){
    const a = (-stiff*(x-1) - damp*v)/mass; v += a*dt; x += v*dt; samples.push(x);
    if(i > 30 && Math.abs(x-1) < 0.001 && Math.abs(v) < 0.01){ tEnd = i; break; }
  }
  if(!tEnd) tEnd = samples.length - 1;
  const n = 48;
  for(let i=0;i<=n;i++) pts.push(samples[Math.round(i/n*tEnd)].toFixed(4));
  pts[n] = '1';
  return `linear(${pts.join(',')})`;
}
if(window.CSS && CSS.supports('transition-timing-function','linear(0, 1)')){
  const r = document.documentElement.style;
  r.setProperty('--spring', springCurve(180, 12));
  r.setProperty('--spring-soft', springCurve(120, 14));
  r.setProperty('--spring-big', springCurve(220, 9));
}

/* ================================================================ sound */
let actx = null, soundOn = store.get('mawrelle-sound', true);
function wakeAudio(){
  if(!soundOn) return;
  try{ actx = actx || new (window.AudioContext || window.webkitAudioContext)(); if(actx.state === 'suspended') actx.resume(); }catch(err){}
}
['pointerdown','keydown','touchstart','wheel'].forEach(ev => addEventListener(ev, wakeAudio, {passive:true, capture:true}));
function noiseClick(freq, gain, len=0.03){
  if(!soundOn || !actx) return;
  const buf = actx.createBuffer(1, Math.floor(actx.sampleRate*len), actx.sampleRate), ch = buf.getChannelData(0);
  for(let i=0;i<ch.length;i++) ch[i] = (Math.random()*2-1) * Math.pow(1 - i/ch.length, 3);
  const src = actx.createBufferSource(); src.buffer = buf;
  const bp = actx.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = freq; bp.Q.value = 1.3;
  const gn = actx.createGain(); gn.gain.value = gain;
  src.connect(bp).connect(gn).connect(actx.destination); src.start();
}
const tick = strong => noiseClick(strong ? 1300 : 2400 + Math.random()*900, strong ? .45 : .22);
const crunch = () => { for(let i=0;i<3;i++) setTimeout(() => noiseClick(3000 + Math.random()*2500, .18, .018), i*22); };
function clicks(n, gap=55){ for(let i=0;i<n;i++) setTimeout(() => tick(i === n-1), i*gap); }
$('#soundBtn').setAttribute('aria-pressed', soundOn);
$('#soundBtn').addEventListener('click', e => {
  soundOn = !soundOn; e.currentTarget.setAttribute('aria-pressed', soundOn); store.set('mawrelle-sound', soundOn);
  if(soundOn){ wakeAudio(); clicks(3); }
});

/* ================================================================ fx: crumbs, confetti, flyers */
const fx = $('#fx');
const CRUMB_SHAPES = [
  c => `<svg viewBox="-10 -10 20 20"><path d="M0-8V8M-6.9-4L6.9 4M-6.9 4L6.9-4" stroke="${c}" stroke-width="3.2" stroke-linecap="round"/></svg>`,
  c => `<svg viewBox="0 0 10 10"><rect width="10" height="10" rx="2" fill="${c}"/></svg>`,
  c => `<svg viewBox="0 0 10 10"><path d="M5 0L10 10H0Z" fill="${c}"/></svg>`,
  c => `<svg viewBox="0 0 10 10"><circle cx="5" cy="5" r="5" fill="${c}"/></svg>`
];
function crumbs(x, y, n=8, colors=['#9D00FF','#0A0A0B','#C2E42A','#FFFFFF'], power=1){
  if(reduced()) return;
  for(let i=0;i<n;i++){
    const el = document.createElement('div'); el.className = 'crumb';
    const c = colors[i % colors.length];
    el.innerHTML = CRUMB_SHAPES[(Math.random()*CRUMB_SHAPES.length)|0](c);
    const size = 7 + Math.random()*9; el.style.width = el.style.height = size + 'px';
    fx.appendChild(el);
    const a = (i/n)*Math.PI*2 + Math.random()*.6, d = (40 + Math.random()*60) * power;
    const dx = Math.cos(a)*d, dy = Math.sin(a)*d - 20*power, rot = (Math.random()-.5)*720;
    el.animate([
      { transform:`translate(${x}px,${y}px) scale(.3) rotate(0deg)`, opacity:1 },
      { transform:`translate(${x+dx*.7}px,${y+dy*.7}px) scale(1.1) rotate(${rot*.6}deg)`, opacity:1, offset:.45 },
      { transform:`translate(${x+dx}px,${y+dy+40*power}px) scale(.6) rotate(${rot}deg)`, opacity:0 }
    ], { duration: 650 + Math.random()*300, easing:'cubic-bezier(.15,.8,.3,1)' }).onfinish = () => el.remove();
  }
}
function confetti(){
  if(reduced()) return;
  const w = innerWidth;
  for(let i=0;i<70;i++){
    const el = document.createElement('div'); el.className = 'crumb';
    el.innerHTML = CRUMB_SHAPES[(Math.random()*CRUMB_SHAPES.length)|0](['#9D00FF','#39FF14','#0A0A0B','#C2E42A','#FFFFFF'][i%5]);
    const size = 9 + Math.random()*12; el.style.width = el.style.height = size + 'px';
    fx.appendChild(el);
    const x = Math.random()*w, drift = (Math.random()-.5)*200, rot = (Math.random()-.5)*1080;
    el.animate([
      { transform:`translate(${x}px,-30px) rotate(0)` },
      { transform:`translate(${x+drift}px,${innerHeight+40}px) rotate(${rot}deg)` }
    ], { duration: 1600 + Math.random()*1400, delay: Math.random()*400, easing:'cubic-bezier(.3,.2,.6,1)', fill:'backwards' }).onfinish = () => el.remove();
  }
}

/* ================================================================ magnetic pills + press squish + crunch */
function bindMagnet(el){
  if(!fine || reduced() || el.__mag) return; el.__mag = true;
  el.addEventListener('pointermove', e => {
    const r = el.getBoundingClientRect();
    const dx = (e.clientX - r.left - r.width/2) / r.width, dy = (e.clientY - r.top - r.height/2) / r.height;
    el.style.transform = `translate(${dx*10}px,${dy*8}px) rotate(${dx*4}deg)`;
  });
  el.addEventListener('pointerleave', () => { el.style.transform = ''; });
}
document.addEventListener('pointerdown', e => {
  const b = e.target.closest('button, .bar__mark');
  if(!b) return;
  restart(b, 'press'); setTimeout(() => b.classList.remove('press'), 450);
});
document.addEventListener('click', e => {
  const b = e.target.closest('button');
  if(!b || !e.clientX) return;
  const onViolet = !!b.closest('.mouth, .limited');
  crumbs(e.clientX, e.clientY, 7, onViolet ? ['#FFFFFF','#39FF14','#C2E42A'] : ['#9D00FF','#0A0A0B','#C2E42A'], .7);
  crunch();
}, true);

/* ================================================================ text effects */
const GLYPHS = 'MAWRELLE#*%&@01ЖЩФЪ§¶';
function scramble(el){
  if(reduced() || el.__scr) return;
  const final = el.textContent; el.__scr = true;
  let frame = 0; const total = 18;
  const iv = setInterval(() => {
    frame++;
    el.textContent = final.split('').map((ch, i) => {
      if(ch === ' ' ) return ch;
      return i < (frame/total)*final.length ? ch : GLYPHS[(Math.random()*GLYPHS.length)|0];
    }).join('');
    if(frame >= total){ clearInterval(iv); el.textContent = final; el.__scr = false; }
  }, 35);
}
function splitText(el){
  const text = el.dataset.i18n ? t(el.dataset.i18n) : el.textContent;
  const sup = el.querySelector('sup'); const supHTML = sup ? sup.outerHTML : '';
  const plain = sup ? text.replace(sup.textContent, '') : text;
  let c = 0;
  el.innerHTML = plain.split(' ').map(w => `<span style="display:inline-block;white-space:nowrap">${[...w].map(ch => `<span class="ch" style="--c:${c++}">${esc(ch)}</span>`).join('')}</span>`).join(' ') + supHTML;
  el.classList.add('split');
}
function countUp(el){
  const to = +el.dataset.count; if(reduced()){ el.textContent = to; return; }
  const from = to === 0 ? 99 : 0, dur = 900, t0 = performance.now();
  (function step(now){
    const p = Math.min(1, (now - t0) / dur), e = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.round(from + (to - from) * e);
    if(p < 1) requestAnimationFrame(step); else restart(el, 'bump');
  })(t0);
}

/* ================================================================ silhouettes */
function rng(seed){ let a = seed*9301 + 49297; return () => { a |= 0; a = a + 0x6D2B79F5 | 0; let t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
function furBlob(cx, cy, rx, ry, fur, r, n=120, p=4.2){
  let d = '';
  for(let i=0;i<n;i++){
    const a = i/n*Math.PI*2, c = Math.cos(a), s = Math.sin(a);
    const bx = cx + rx*Math.sign(c)*Math.pow(Math.abs(c), 2/p);
    const by = cy + ry*Math.sign(s)*Math.pow(Math.abs(s), 2/p);
    const out = (i % 2) ? fur*(0.45 + 0.75*r()) : fur*0.1*r();
    const nx = bx - cx, ny = by - cy, l = Math.hypot(nx/rx, ny/ry) || 1;
    const dx = nx/rx/l, dy = ny/ry/l, dl = Math.hypot(dx,dy) || 1;
    const j = (r()-.5)*0.35;
    const ux = (dx*Math.cos(j) - dy*Math.sin(j))/dl, uy = (dx*Math.sin(j) + dy*Math.cos(j))/dl;
    d += (i ? 'L' : 'M') + (bx + ux*out).toFixed(1) + ' ' + (by + uy*out).toFixed(1);
  }
  return d + 'Z';
}
/* colourways: fur, fur shadow, fur light, velvet, gum, extra (horns/crown) */
const PALS = {
  mawlet:    ['#FF4FB8','#B0147A','#FFA6DE','#2A0660','#8B3CFF','#FFFFFF'],
  gnash:     ['#FF7A1A','#B8440A','#FFB070','#2A0660','#8B3CFF','#FFFFFF'],
  blip:      ['#22DDFF','#0788B0','#9FF2FF','#2A0660','#8B3CFF','#FFFFFF'],
  snug:      ['#C9A2FF','#7F4FD9','#EBDCFF','#22064F','#FF4FB8','#FFFFFF'],
  grumb:     ['#F2FF3A','#9CA60A','#FBFFB0','#2A0660','#8B3CFF','#FFFFFF'],
  wamble:    ['#FF4545','#A8121E','#FF9E9E','#2A0660','#8B3CFF','#FFFFFF'],
  oglo:      ['#3D5BFF','#1B2A9E','#9DB0FF','#16053F','#FF4FB8','#FFFFFF'],
  slobbo:    ['#14E0B0','#077A60','#9DF7E0','#2A0660','#8B3CFF','#FFFFFF'],
  knook:     ['#B04BFF','#5E13A8','#DDB3FF','#16053F','#39FF14','#F2EFE6'],
  tuftel:    ['#F4F0E6','#B5AE9A','#FFFFFF','#2A0660','#8B3CFF','#FFFFFF'],
  plummox:   ['#D9782E','#82420F','#F5B77F','#2A0660','#8B3CFF','#FFFFFF'],
  'grand-maw':['#2A2A33','#0E0E12','#5B5B6B','#3A0B8E','#39FF14','#FFFFFF'],
  velvetusk: ['#5B2BD9','#2A0E80','#9C7BFF','#12033A','#FF4FB8','#FFF5D6'],
  hushmaw:   ['#1D2C73','#0B1238','#4D62C2','#0A0226','#8B3CFF','#FFFFFF'],
  colossomaw:['#E6007E','#86004A','#FF6FBC','#2A0660','#8B3CFF','#FFFFFF'],
  'last-yawn':['#C9CCD6','#7A7E8C','#F1F2F6','#2A0660','#8B3CFF','#FFFFFF'],
  yawnling:  ['#FFC21A','#A86E00','#FFE28A','#2A0660','#8B3CFF','#1A1A1F'],
  'maw-royale':['#141418','#000000','#44444F','#3A0B8E','#FFC21A','#FFC21A'],
  nullmaw:   ['#0B0B0D','#000000','#2E2E36','#9D00FF','#39FF14','#39FF14'],
  empty:     ['#B4B0C2','#8E8A9E','#D6D3E0','#6E6A80','#8E8A9E','#FFFFFF']
};
let silN = 0;
function silhouette(s, palKey){
  const [fur, shade, light, velvet, gum, extra] = PALS[palKey] || PALS.empty;
  const r = rng(s.seed), id = 'm' + (silN++);
  const cx = 100, rx = s.w*70, ry = s.h*70, cy = 102 - (s.legs ? 8 : 0);
  const f = s.fur*0.7;
  let g = `<ellipse cx="${cx}" cy="${cy+ry+(s.legs?22:8)}" rx="${rx*.9}" ry="7" fill="#0A0028" opacity=".35"/>`;
  if(s.ring) g += `<circle cx="${cx}" cy="${cy-ry-16}" r="11" fill="none" stroke="${extra === '#FFFFFF' ? shade : extra}" stroke-width="5"/>`;
  if(s.legs) [-1,1].forEach(k => g += `<path d="${furBlob(cx+k*rx*0.45, cy+ry+8, rx*0.24, 13, f*0.5, r, 40, 3)}" fill="${shade}"/>`);
  if(s.horns) [-1,1].forEach(k => g += `<path d="M${cx+k*rx*0.45} ${cy-ry+8} q ${k*6} -30 ${k*26} -34 q ${-k*8} 16 ${-k*8} 36z" fill="${extra}" stroke="${shade}" stroke-width="2"/>`);
  if(s.crown) g += `<path d="M${cx-24} ${cy-ry} l6 -22 l10 14 l8 -20 l8 20 l10 -14 l6 22z" fill="${extra === '#FFFFFF' ? '#FFC21A' : extra}" stroke="#0A0A0B" stroke-width="2" stroke-linejoin="round"/>`;
  const body = furBlob(cx, cy, rx, ry, f, r);
  const tilt = `rotate(${s.tilt||0} ${cx} ${cy})`;
  // shadow rim + body
  g += `<path transform="${tilt} translate(2.5 4)" d="${body}" fill="${shade}"/>`;
  g += `<path transform="${tilt}" d="${body}" fill="${fur}"/>`;
  // fur texture: tufts clipped to the body
  let tufts = '';
  for(let i=0;i<46;i++){
    const a = r()*Math.PI*2, d = Math.sqrt(r());
    const x = cx + Math.cos(a)*rx*d*.95, y = cy + Math.sin(a)*ry*d*.95;
    const len = 4 + r()*6, ang = Math.PI/2 + (r()-.5)*1.6, lightSide = (x - cx) + (y - cy) < 0;
    const dx = Math.cos(ang)*len, dy = Math.sin(ang)*len, bend = (r()-.5)*7;
    const col = r() < (lightSide ? .7 : .3) ? light : shade;
    tufts += `<path d="M${x.toFixed(1)} ${y.toFixed(1)}q${(dx*.5+bend).toFixed(1)} ${(dy*.5).toFixed(1)} ${dx.toFixed(1)} ${dy.toFixed(1)}" stroke="${col}" stroke-width="${(1.8+r()*1.4).toFixed(1)}" stroke-linecap="round" fill="none" opacity=".8"/>`;
  }
  g += `<clipPath id="${id}"><path transform="${tilt}" d="${body}"/></clipPath><g clip-path="url(#${id})">${tufts}</g>`;
  if(s.arms) [-1,1].forEach(k => g += `<path transform="rotate(${k*-40} ${cx+k*(rx+6)} ${cy+ry*0.2})" d="${furBlob(cx+k*(rx+6), cy+ry*0.2, 12, 17, f*0.5, r, 40, 3)}" fill="${fur}" stroke="${shade}" stroke-width="1.5"/>`);
  // eye
  const ey = cy - ry*0.4, ink = '#111016';
  const star = (x,y,k=4.5) => `<path d="M${x} ${y-k}V${y+k}M${x-k*.87} ${y-k*.5}L${x+k*.87} ${y+k*.5}M${x-k*.87} ${y+k*.5}L${x+k*.87} ${y-k*.5}" stroke="${ink}" stroke-width="2.4" stroke-linecap="round"/>`;
  const eyeBox = (x,y,w,h,rr) => `<rect x="${x}" y="${y+2}" width="${w}" height="${h}" rx="${rr}" fill="#0A0028" opacity=".3"/><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rr}" fill="#FFFFFF" stroke="#CFCADD" stroke-width="1"/><rect x="${x+w*.18}" y="${y+2.5}" width="${w*.4}" height="3" rx="1.5" fill="#FFFFFF" opacity=".9"/>`;
  let eye = '';
  if(s.eye === 'pill' || s.eye === 'wide'){
    const ew = rx*(s.eye==='wide' ? 1.6 : 1.35), eh = s.eye==='wide' ? 17 : 21;
    eye = eyeBox(cx-ew/2, ey-eh/2, ew, eh, eh/2) + star(cx-ew/2+eh*0.55, ey) + star(cx+ew/2-eh*0.55, ey);
  } else if(s.eye === 'two'){
    [-1,1].forEach(k => eye += eyeBox(cx+k*rx*0.38-15, ey-10, 30, 20, 10) + star(cx+k*rx*0.38, ey));
  } else if(s.eye === 'one'){
    eye = `<circle cx="${cx}" cy="${ey+2}" r="15" fill="#0A0028" opacity=".3"/><circle cx="${cx}" cy="${ey}" r="15" fill="#FFFFFF" stroke="#CFCADD"/>` + star(cx, ey, 6);
  }
  g += `<g class="sil-eye" style="--bd:${(s.seed%9)*.5}s">${eye}</g>`;
  // mouth: velvet, gums, two rows of teeth, letters on top
  const mw = Math.min(rx*1.75, rx*2 - 10), tw = (mw - 8) / 8;
  const th = Math.max(8, Math.min(13, tw*1.2));
  const gap = (s.mouth||1) > 1 ? (s.mouth-1)*6 : 0;
  const mh = th*2 + 7 + gap, my = cy + ry*0.12;
  const mx = cx - mw/2;
  g += `<rect x="${mx-2}" y="${my-2}" width="${mw+4}" height="${mh+4}" rx="6" fill="${shade}" opacity=".6"/>`;
  g += `<rect x="${mx}" y="${my}" width="${mw}" height="${mh}" rx="5" fill="${velvet}"/>`;
  g += `<rect x="${mx+2}" y="${my+1.5}" width="${mw-4}" height="${th*.55}" rx="3" fill="${gum}"/>`;
  g += `<rect x="${mx+2}" y="${my+mh-1.5-th*.55}" width="${mw-4}" height="${th*.55}" rx="3" fill="${gum}"/>`;
  const fs = Math.max(5.2, tw*.7), word = 'MAWRELLE';
  for(let i=0;i<8;i++){
    const x = mx + 4 + i*tw + .6, w = tw - 1.2;
    const gold = s.goldTooth === i;
    const tf = gold ? '#FFC21A' : '#FFFFFF';
    g += `<rect x="${x.toFixed(2)}" y="${(my+3).toFixed(2)}" width="${w.toFixed(2)}" height="${th.toFixed(2)}" rx="2.2" fill="${tf}" stroke="#BDB6D0" stroke-width=".6"/>`;
    g += `<text x="${(x+w/2).toFixed(2)}" y="${(my+3+th*.5+fs*.36).toFixed(2)}" font-family="Dela Gothic One, Arial Black, sans-serif" font-size="${fs.toFixed(2)}" text-anchor="middle" fill="#111016">${word[i]}</text>`;
    g += `<rect x="${x.toFixed(2)}" y="${(my+mh-3-th).toFixed(2)}" width="${w.toFixed(2)}" height="${th.toFixed(2)}" rx="2.2" fill="#FFFFFF" stroke="#BDB6D0" stroke-width=".6"/>`;
  }
  if(s.tusks) [-1,1].forEach(k => g += `<path d="M${cx+k*mw*0.36} ${my+mh-3} l${k*3} 15 l${k*6} -15z" fill="${extra === '#FFFFFF' ? '#FFF5D6' : extra}" stroke="#BDB6D0" stroke-width=".8"/>`);
  const top = cy - ry - (s.horns ? 40 : s.crown ? 34 : s.ring ? 34 : 16);
  const bot = cy + ry + (s.legs ? 32 : 18);
  const half = rx + (s.arms ? 34 : 20);
  const vw = Math.max(half*2, (bot-top)*.9), vx = cx - vw/2;
  return `<svg class="sil" viewBox="${vx.toFixed(1)} ${top.toFixed(1)} ${vw.toFixed(1)} ${(bot-top).toFixed(1)}" aria-hidden="true" focusable="false">${g}</svg>`;
}
const art = p => p.img ? `<img src="${p.img}" alt="" loading="lazy" width="1000" height="1300">` : silhouette(p.s, p.id);

/* ================================================================ render: categories + catalog */
const catName = c => c[lang];
function renderCats(){
  $('#cats').innerHTML = CATS.map((c,i) => `<li><button type="button" data-cat="${c.id}" ${i===0?'aria-current="true"':''}>${esc(catName(c))}<small>${P.filter(p=>p.cat===c.id).length}</small></button></li>`).join('');
  requestAnimationFrame(movePill);
}
const badgeText = p => !p.badge ? '' : p.badge === 'flagship' ? t('flagship') : `${p.badge} ${t('pcs')}`;
const RIBBON = '<span class="ribbon" aria-hidden="true"><span>' + 'SOLD OUT ✱ '.repeat(6) + '</span></span>';
function card(p){
  const inCart = cart[p.id] > 0;
  if(p.sold) return `<article class="card card--sold" data-id="${p.id}" data-r>
    ${p.badge ? `<span class="card__badge">${esc(badgeText(p))}</span>` : ''}
    <div class="card__art">${art(p)}${RIBBON}</div>
    <div class="card__row"><h4 class="card__name">${esc(p.name)}</h4><span class="card__sku">${esc(p.sku)}</span></div>
    <p class="card__meta">${esc(p[lang])}</p>
    <div class="card__buy"><span class="price is-sold">${money(p.price)}</span>
      <button type="button" class="btn btn--sold" aria-disabled="true" data-sold>${t('sold')}</button></div>
  </article>`;
  return `<article class="card" data-id="${p.id}" data-r>
    ${p.badge ? `<span class="card__badge">${esc(badgeText(p))}</span>` : ''}
    <div class="card__art">${art(p)}</div>
    <div class="card__row"><h4 class="card__name">${esc(p.name)}</h4><span class="card__sku">${esc(p.sku)}</span></div>
    <p class="card__meta">${esc(p[lang])}</p>
    <div class="card__buy"><span class="price">${money(p.price)}</span>
      <button type="button" class="btn btn--white ${inCart?'added':''}" data-add="${p.id}">${inCart ? t('added') : t('add')}</button></div>
  </article>`;
}
function renderCatalog(){
  $('#catalog').innerHTML = CATS.map(c => `
    <section class="cat" id="cat-${c.id}" aria-labelledby="h-${c.id}">
      <div class="cat__head" data-r><h3 class="cat__name" id="h-${c.id}">${esc(catName(c))}</h3><span class="cat__floor">${t('from2')} ${money(c.floor)}</span></div>
      <p class="cat__desc" data-r>${esc(lang==='ru' ? c.dru : c.den)}</p>
      <div class="grid">${P.filter(p => p.cat === c.id).map(card).join('')}</div>
    </section>`).join('');
  $$('.card').forEach(bindTilt);
}
function bindTilt(el){
  if(!fine || reduced()) return;
  el.addEventListener('pointermove', e => {
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
    el.style.setProperty('--ry', (x * 14).toFixed(2) + 'deg');
    el.style.setProperty('--rx', (-y * 12).toFixed(2) + 'deg');
  });
  el.addEventListener('pointerleave', () => { el.style.setProperty('--rx','0deg'); el.style.setProperty('--ry','0deg'); });
}

/* category pill follows the active item */
function movePill(){
  const pill = $('#catPill'), act = $('#cats [aria-current="true"]');
  if(!pill || !act) return;
  const wrap = pill.parentElement.getBoundingClientRect(), r = act.getBoundingClientRect();
  const sl = pill.parentElement.scrollLeft || 0;
  pill.style.width = r.width + 'px'; pill.style.height = r.height + 'px';
  pill.style.transform = `translate(${r.left - wrap.left + sl}px,${r.top - wrap.top}px)`;
}
function setCat(id){
  let changed = false;
  $$('#cats [data-cat]').forEach(b => {
    const on = b.dataset.cat === id;
    if(on && b.getAttribute('aria-current') !== 'true') changed = true;
    b.setAttribute('aria-current', on ? 'true' : 'false');
  });
  if(changed){
    movePill();
    const act = $(`#cats [data-cat="${id}"]`), wrap = $('.cats__wrap');
    if(act && wrap.scrollWidth > wrap.clientWidth) wrap.scrollTo({ left: act.offsetLeft - 20, behavior: reduced() ? 'auto' : 'smooth' });
  }
}
$('.cats__wrap').addEventListener('scroll', movePill, {passive:true});

/* ================================================================ slider */
let slideIdx = 0, autoTimer = 0;
const track = $('#track');
function renderSlider(){
  track.innerHTML = FEATURED.map((id, i) => {
    const p = BY[id], c = CATS.find(c => c.id === p.cat);
    const inCart = cart[p.id] > 0;
    return `<div class="slide${i===slideIdx?' now':''}" role="group" aria-roledescription="slide" aria-label="${i+1} / ${FEATURED.length}">
      <div class="slide__art">${art(p)}</div>
      <div class="slide__info">
        <span class="slide__tag">${esc(catName(c))}${p.badge ? ' · ' + esc(badgeText(p)) : ''}</span>
        <h3 class="slide__name">${esc(p.name)}</h3>
        <p class="slide__desc">${esc(p[lang])}</p>
        <div class="slide__buy"><span class="price">${money(p.price)}</span>
          <button type="button" class="btn btn--white ${inCart?'added':''}" data-add="${p.id}">${inCart ? t('added') : t('add')}</button></div>
      </div>
    </div>`;
  }).join('');
  updateSlideUI(false);
}
function goSlide(i, user=true){
  slideIdx = (i + FEATURED.length) % FEATURED.length;
  track.scrollTo({ left: track.clientWidth * slideIdx, behavior: reduced() ? 'auto' : 'smooth' });
  updateSlideUI(true);
  if(user) resetAuto();
}
function updateSlideUI(anim){
  const n = FEATURED.length;
  const cnt = $('#slideCount');
  cnt.textContent = String(slideIdx+1).padStart(2,'0') + ' / ' + String(n).padStart(2,'0');
  if(anim) restart(cnt, 'tick');
  const bar = $('#slideBar'); bar.style.width = (100/n) + '%'; bar.style.transform = `translateX(${slideIdx*100}%)`;
  $$('.slide', track).forEach((s, i) => { if(i === slideIdx){ if(anim) restart(s, 'now'); else s.classList.add('now'); } else s.classList.remove('now'); });
  if(anim) tick(false);
}
let slideRaf = 0;
track.addEventListener('scroll', () => {
  cancelAnimationFrame(slideRaf);
  slideRaf = requestAnimationFrame(() => {
    const i = Math.round(track.scrollLeft / Math.max(1, track.clientWidth));
    if(i !== slideIdx){ slideIdx = i; updateSlideUI(true); resetAuto(); }
  });
}, {passive:true});
$('#prevSlide').addEventListener('click', () => goSlide(slideIdx-1));
$('#nextSlide').addEventListener('click', () => goSlide(slideIdx+1));
track.addEventListener('keydown', e => {
  if(e.key === 'ArrowRight'){ e.preventDefault(); goSlide(slideIdx+1); }
  if(e.key === 'ArrowLeft'){ e.preventDefault(); goSlide(slideIdx-1); }
});
let sliderHover = false;
$('#slider').addEventListener('pointerenter', () => sliderHover = true);
$('#slider').addEventListener('pointerleave', () => sliderHover = false);
function resetAuto(){
  clearInterval(autoTimer);
  if(reduced()) return;
  autoTimer = setInterval(() => {
    const r = track.getBoundingClientRect();
    if(!sliderHover && isOpen && r.bottom > 0 && r.top < innerHeight) goSlide(slideIdx+1, false);
  }, 5200);
}

/* ================================================================ cart */
const cartCount = () => Object.values(cart).reduce((a,b) => a+b, 0);
const cartSum = () => Object.entries(cart).reduce((a,[id,q]) => a + BY[id].price*q, 0);
const saveCart = () => store.set('mawrelle-cart', cart);
function renderCart(){
  $('#cartNum').textContent = cartCount();
  const body = $('#cartBody'), foot = $('#cartFoot');
  const ids = Object.keys(cart);
  if(!ids.length){
    body.innerHTML = `<div class="empty">${silhouette({w:.7,h:.6,eye:'pill',legs:1,arms:1,fur:10,seed:5}, 'empty')}<p>${t('emptyT')}</p><small>${t('emptyS')}</small></div>`;
    foot.hidden = true; return;
  }
  foot.hidden = false;
  body.innerHTML = ids.map((id, n) => { const p = BY[id]; return `
    <div class="line" data-line="${id}" style="--n:${n}">
      <div class="line__art">${art(p)}</div>
      <div><p class="line__name">${esc(p.name)}</p><p class="line__meta">${esc(p.sku)} · ${money(p.price)}</p></div>
      <div class="qty"><button type="button" data-dec="${id}" aria-label="${t('qtyMinus')}">−</button><span>${cart[id]}</span><button type="button" data-inc="${id}" aria-label="${t('qtyPlus')}">+</button></div>
    </div>`; }).join('');
  $('#cartSum').textContent = money(cartSum());
}
function updateQty(id){
  const line = $(`[data-line="${id}"]`);
  if(!cart[id]){
    if(line){ line.classList.add('out'); setTimeout(renderCart, 330); } else renderCart();
  } else if(line){
    const sp = $('.qty span', line); sp.textContent = cart[id]; restart(sp, 'bump');
    sp.animate([{transform:'scale(1.6) rotate(-12deg)'},{transform:'none'}], {duration:450, easing:'cubic-bezier(.2,1.8,.4,1)'});
  }
  $('#cartNum').textContent = cartCount();
  const sum = $('#cartSum'); sum.textContent = money(cartSum()); restart(sum, 'tick');
  saveCart(); syncAddButtons();
}
let toastTimer = 0;
function toast(html){
  const el = $('#toast'); el.innerHTML = html; el.classList.add('show');
  clearTimeout(toastTimer); toastTimer = setTimeout(() => el.classList.remove('show'), 2300);
}
function syncAddButtons(){
  $$('[data-add]').forEach(b => {
    if(b.hasAttribute('data-keep')) return;
    const on = cart[b.dataset.add] > 0;
    b.classList.toggle('added', on); b.textContent = on ? t('added') : t('add');
  });
}
function flyToCart(fromEl, p){
  const target = $('#cartBtn');
  const done = () => { restart(target, 'gulp'); $('#cartNum').textContent = cartCount(); };
  if(reduced() || !fromEl){ done(); return; }
  const a = fromEl.getBoundingClientRect(), b = target.getBoundingClientRect();
  const size = Math.min(140, Math.max(60, a.width * .6));
  const fl = document.createElement('div'); fl.className = 'flyer';
  fl.style.width = fl.style.height = size + 'px';
  fl.innerHTML = art(p);
  document.body.appendChild(fl);
  const x0 = a.left + a.width/2 - size/2, y0 = a.top + a.height/2 - size/2;
  const x1 = b.left + b.width/2 - size/2, y1 = b.top + b.height/2 - size/2;
  const peak = Math.min(y0, y1) - 140;
  const kf = [];
  for(let i=0;i<=12;i++){
    const u = i/12, x = x0 + (x1 - x0) * u;
    const y = (1-u)*(1-u)*y0 + 2*(1-u)*u*peak + u*u*y1;
    const s = 1 - u*.8, rot = u * 540;
    kf.push({ transform:`translate(${x}px,${y}px) rotate(${rot}deg) scale(${s * (i===1?1.15:1)})`, opacity: u > .92 ? 0 : 1 });
  }
  fl.animate(kf, { duration: 750, easing:'cubic-bezier(.4,0,.6,1)' }).onfinish = () => { fl.remove(); done(); crumbs(b.left + b.width/2, b.top + b.height/2, 10, ['#9D00FF','#39FF14','#0A0A0B'], 1); clicks(3, 40); };
}
function addToCart(id, btn){
  cart[id] = (cart[id] || 0) + 1; saveCart(); syncAddButtons();
  const art = btn && (btn.closest('.card, .slide')?.querySelector('.card__art, .slide__art') || btn);
  flyToCart(art, BY[id]);
  toast(`${t('toast')} <b>${esc(BY[id].name)}</b>`);
  once($('#toyBottom'), 'flap', 1900);
  once($('#toy'), 'chatter', 1100);
}
document.addEventListener('click', e => {
  const add = e.target.closest('[data-add]'); if(add){ addToCart(add.dataset.add, add); return; }
  const sold = e.target.closest('[data-sold]'); if(sold){ const c = sold.closest('.card'); once(c, 'nope', 500); toast(`<b>SOLD OUT.</b> ${lang === 'ru' ? 'Этого монстра уже кто-то приютил.' : 'Someone already adopted this one.'}`); return; }
  const inc = e.target.closest('[data-inc]'); if(inc){ cart[inc.dataset.inc]++; updateQty(inc.dataset.inc); return; }
  const dec = e.target.closest('[data-dec]');
  if(dec){ const id = dec.dataset.dec; cart[id]--; if(cart[id] <= 0) delete cart[id]; updateQty(id); return; }
  const cat = e.target.closest('[data-cat]');
  if(cat){ const sec = document.getElementById('cat-' + cat.dataset.cat); catLock = Date.now() + 900; if(sec) sec.scrollIntoView({behavior: reduced() ? 'auto' : 'smooth', block:'start'}); setCat(cat.dataset.cat); return; }
  const op = e.target.closest('[data-open]'); if(op){ openLayer(op.dataset.open, op); return; }
  if(e.target.closest('[data-close]') || e.target.id === 'scrim' || e.target.id === 'about'){ closeLayer(); return; }
});
$('#checkout').addEventListener('click', () => {
  $('#cartBody').innerHTML = `<div class="reveal"><p class="kicker kicker--ink">MAW-CLICK</p><h3>${t('revealT')}</h3><p>${t('revealP1')}</p><p>${t('revealP2')}</p>
    <button type="button" class="btn btn--violet btn--wide" id="revealClose">${t('revealBtn')}</button></div>`;
  $('#cartFoot').hidden = true;
  confetti(); clicks(12, 45);
  $('#revealClose').focus();
  $('#revealClose').addEventListener('click', () => { cart = {}; saveCart(); renderCart(); syncAddButtons(); closeLayer(); });
});

/* ================================================================ dialogs */
let layer = null, lastFocus = null;
function openLayer(id, from){
  closeLayer(true);
  lastFocus = from || document.activeElement;
  layer = document.getElementById(id);
  if(id === 'cart'){ renderCart(); $('#scrim').hidden = false; }
  layer.hidden = false;
  document.body.style.overflow = 'hidden';
  const ttl = $('[data-split]', layer); if(ttl){ splitText(ttl); ttl.classList.remove('in'); requestAnimationFrame(() => requestAnimationFrame(() => ttl.classList.add('in'))); }
  const f = layer.querySelector('[data-close]'); if(f) f.focus({preventScroll:true});
}
function closeLayer(silent){
  if(!layer) return;
  layer.hidden = true; $('#scrim').hidden = true; layer = null;
  document.body.style.overflow = '';
  if(!silent && lastFocus) lastFocus.focus({preventScroll:true});
}
document.addEventListener('keydown', e => {
  if(e.key === 'Escape' && layer) closeLayer();
  if(e.key === 'Tab' && layer){
    const f = $$('button, a[href], [tabindex]:not([tabindex="-1"])', layer).filter(el => !el.hidden && el.offsetParent !== null);
    if(!f.length) return;
    if(e.shiftKey && document.activeElement === f[0]){ e.preventDefault(); f[f.length-1].focus(); }
    else if(!e.shiftKey && document.activeElement === f[f.length-1]){ e.preventDefault(); f[0].focus(); }
  }
});

/* ================================================================ the monster: eye, blink, open/close */
const body = document.body, toy = $('#toy'), toyTop = $('#toyTop'), mouth = $('#mouth'), mouthIn = $('#mouthIn');
const lid = $('#lid'), pupils = [$('#pupL'), $('#pupR')];
function blink(){
  if(!lid || reduced()) return;
  restart(lid, 'blink'); setTimeout(() => lid.classList.remove('blink'), 300);
}
(function blinkLoop(){ setTimeout(() => { blink(); if(Math.random() < .25) setTimeout(blink, 320); blinkLoop(); }, 2600 + Math.random()*3400); })();
let lookX = 0, lookY = 0;
if(fine && !reduced()){
  addEventListener('pointermove', e => {
    const r = toyTop.getBoundingClientRect(); if(r.bottom < 0 || r.top > innerHeight) return;
    const ex = r.left + r.width/2, ey = r.top + r.height*.33;
    lookX = clamp((e.clientX - ex) / (innerWidth/2), -1, 1);
    lookY = clamp((e.clientY - ey) / (innerHeight/2), -1, 1);
    pupils.forEach(p => p && (p.style.transform = `translate(${lookX*14}px,${lookY*10}px) rotate(${lookX*40}deg)`));
  }, {passive:true});
}
function spinPupils(){
  pupils.forEach((p, i) => p && p.animate([{transform:getComputedStyle(p).transform},{transform:`rotate(${i?-360:360}deg) scale(1.4)`},{transform:'none'}], {duration:900, easing:'cubic-bezier(.2,1.4,.4,1)'}));
}
toyTop.addEventListener('click', () => {
  once(toy, 'squish', 650); spinPupils(); clicks(4, 50);
  if(!isOpen) openMaw(true);
});

let isOpen = false;
function tileH(){ return mouth.clientWidth * 240 / 1000; }
function targetHeight(){
  const th = tileH(); if(!th) return 0;
  return Math.max(1, Math.ceil(mouthIn.offsetHeight / th)) * th;
}
function openMaw(scrollAfter){
  if(isOpen) return;
  isOpen = true;
  mouth.style.setProperty('--mh', targetHeight() + 'px');
  body.classList.remove('is-closed'); body.classList.add('is-open');
  if(!reduced()){ once(toy, 'chatter', 1100); spinPupils(); once($('#toyBottom'), 'flap', 1900); }
  clicks(12);
  setTimeout(() => $$('[data-r]', mouthIn).forEach(checkReveal), 200);
  if(scrollAfter) setTimeout(() => $('#mawTitle').scrollIntoView({behavior: reduced() ? 'auto' : 'smooth', block:'center'}), 250);
  resetAuto();
}
function closeMaw(){
  if(!isOpen) return;
  isOpen = false;
  body.classList.add('is-closed'); body.classList.remove('is-open');
  clicks(2);
}
$('#mawBtn').addEventListener('click', () => {
  if(!isOpen) openMaw(true);
  else $('#mawTitle').scrollIntoView({behavior: reduced() ? 'auto' : 'smooth', block:'center'});
});
function snapMouth(){
  if(!isOpen) return;
  mouth.style.setProperty('--mh', targetHeight() + 'px');
}
new ResizeObserver(snapMouth).observe(mouthIn);
addEventListener('resize', () => { snapMouth(); movePill(); });

/* ================================================================ reveals */
const revealObs = new IntersectionObserver(entries => {
  entries.forEach(en => { if(en.isIntersecting){ revealEl(en.target); revealObs.unobserve(en.target); } });
}, { rootMargin:'0px 0px -8% 0px', threshold:.05 });
function revealEl(el){
  if(el.classList.contains('in')) return;
  el.classList.add('in');
  if(el.matches('[data-scramble]')) scramble(el);
  $$('[data-count]', el).forEach(countUp);
  if(el.matches('[data-count]')) countUp(el);
}
function checkReveal(el){
  const r = el.getBoundingClientRect();
  if(r.top < innerHeight*.95 && r.bottom > 0) revealEl(el);
}
function observeAll(){
  // stagger siblings
  $$('.grid, .facts, .tech__steps, .foot__grid').forEach(g => [...g.children].forEach((c, i) => c.style.setProperty('--d', (i*0.07).toFixed(2) + 's')));
  $$('[data-r], [data-split], [data-scramble]').forEach(el => { if(!el.classList.contains('in')) revealObs.observe(el); });
}

/* ================================================================ scroll: header, open, meter, cats, marquee velocity */
const meterTicks = $('#meterTicks');
meterTicks.innerHTML = Array.from({length:12}, () => '<li></li>').join('');
const ticksEls = [...meterTicks.children];
let lastTick = -1, lastY = scrollY, vel = 0;
function onScroll(){
  const y = scrollY;
  body.classList.toggle('is-scrolled', y > 260);
  if(isOpen) observeCats();
  if(!isOpen && y > 10) openMaw(false);
  else if(isOpen && y < 2) closeMaw();
  const max = Math.max(1, document.documentElement.scrollHeight - innerHeight);
  const p = clamp(y / max, 0, 1);
  const n = Math.round(p*12);
  if(n !== lastTick){
    ticksEls.forEach((li,i) => { li.classList.toggle('on', i < n); li.classList.toggle('now', i === n-1); });
    $('#meterNum').textContent = String(n).padStart(2,'0') + '/12';
    meter.setAttribute('aria-valuenow', n);
    if(lastTick >= 0 && isOpen) tick(n === 12);
    lastTick = n;
  }
}
/* the MAW meter is a scrollbar: drag it, click a notch, or use the arrow keys */
const meter = $('#meter');
function scrollToProgress(p, smooth){
  if(!isOpen && p > 0) openMaw(false);
  requestAnimationFrame(() => {
    const max = Math.max(1, document.documentElement.scrollHeight - innerHeight);
    scrollTo({ top: clamp(p, 0, 1) * max, behavior: smooth && !reduced() ? 'smooth' : 'auto' });
  });
}
function progressAt(clientY){
  const r = meterTicks.getBoundingClientRect();
  return clamp((clientY - r.top) / r.height, 0, 1);
}
let dragging = false;
meter.addEventListener('pointerdown', e => {
  dragging = true; meter.setPointerCapture(e.pointerId); meter.classList.add('is-drag');
  document.documentElement.style.scrollBehavior = 'auto';
  scrollToProgress(progressAt(e.clientY), true);
  e.preventDefault();
});
meter.addEventListener('pointermove', e => { if(dragging) scrollToProgress(progressAt(e.clientY), false); });
const endDrag = () => { dragging = false; meter.classList.remove('is-drag'); };
meter.addEventListener('pointerup', endDrag);
meter.addEventListener('pointercancel', endDrag);
meter.addEventListener('keydown', e => {
  const cur = lastTick < 0 ? 0 : lastTick;
  let to = null;
  if(e.key === 'ArrowDown' || e.key === 'ArrowRight' || e.key === 'PageDown') to = cur + 1;
  if(e.key === 'ArrowUp' || e.key === 'ArrowLeft' || e.key === 'PageUp') to = cur - 1;
  if(e.key === 'Home') to = 0;
  if(e.key === 'End') to = 12;
  if(to === null) return;
  e.preventDefault(); scrollToProgress(clamp(to, 0, 12) / 12, true);
});
let scrollRaf = 0;
addEventListener('scroll', () => { cancelAnimationFrame(scrollRaf); scrollRaf = requestAnimationFrame(onScroll); }, {passive:true});

function currentCat(){
  const line = Math.min(innerHeight * .35, 320);
  let cur = null;
  for(const s of $$('.cat')){ if(s.getBoundingClientRect().top <= line) cur = s; else break; }
  return cur ? cur.id.replace('cat-','') : CATS[0].id;
}
let catLock = 0;
function observeCats(){ if(Date.now() > catLock) setCat(currentCat()); }

/* marquee: speed and lean follow scroll velocity */
const mq = $('#marquee'); let mqX = 0;
function renderMarquee(){
  const run = T[lang].marquee.map(s => `<span>${esc(s)}</span><i>✱</i>`).join('');
  mq.innerHTML = run + run + run + run;
}
(function mqLoop(){
  const y = scrollY; const dy = y - lastY; lastY = y;
  vel += (dy - vel) * .12;
  if(!reduced()){
    const half = mq.scrollWidth / 2 || 1;
    mqX -= 0.9 + Math.abs(vel) * .35;
    if(mqX <= -half) mqX += half;
    mq.style.transform = `translateX(${mqX}px) skewX(${clamp(-vel*.6, -14, 14)}deg)`;
  }
  requestAnimationFrame(mqLoop);
})();

/* ================================================================ logo: letters hop, click to chomp */
const logoSvg = $('.logo__svg');
if(logoSvg){
  const letters = $$('.L', logoSvg);
  setTimeout(() => letters.forEach(l => l.style.animation = 'none'), 2200);   // intro done: free the letters
  logoSvg.addEventListener('pointermove', e => {
    const l = e.target.closest('.L'); if(!l || l.__hop) return;
    l.__hop = true; l.style.animation = ''; restart(l, 'hop'); tick(false);
    setTimeout(() => { l.classList.remove('hop'); l.style.animation = 'none'; l.__hop = false; }, 560);
  });
  logoSvg.addEventListener('click', () => {
    letters.forEach(l => l.style.animation = '');
    once(logoSvg, 'chomp', 900); clicks(8, 35);
    setTimeout(() => letters.forEach(l => l.style.animation = 'none'), 950);
  });
}
const footSvg = $('.foot__svg');
if(footSvg){
  new IntersectionObserver((en, o) => { if(en[0].isIntersecting){ once(footSvg, 'wave', 1300); } }, {threshold:.6}).observe(footSvg);
}
setTimeout(() => { $('#claim').classList.add('done'); toy.classList.add('done'); }, 2400);
/* the soft word wobbles on its own every so often */
setInterval(() => { const j = $('.jelly'); if(j && !reduced()) once(j, 'wob', 900); }, 5000);

/* ================================================================ limited grid */
$('#limNums').innerHTML = Array.from({length:12}, (_,i) => {
  const n = String(i+1).padStart(2,'0');
  return `<span class="${(i === 8 || i === 10) ? 'left' : 'gone'}">${n}</span>`;
}).join('');

/* ================================================================ language */
function applyLang(first){
  document.documentElement.lang = lang;
  $$('[data-i18n]').forEach(el => {
    const v = T[lang][el.dataset.i18n]; if(typeof v !== 'string') return;
    if(el.matches('[data-split]')){ splitText(el); if(!first){ el.classList.add('in'); } }
    else el.textContent = v;
  });
  $$('[data-split]:not([data-i18n])').forEach(el => { if(!el.classList.contains('split')) splitText(el); });
  $$('[data-i18n-aria]').forEach(el => el.setAttribute('aria-label', t(el.dataset.i18nAria)));
  $$('[data-lang]').forEach(b => b.setAttribute('aria-pressed', b.dataset.lang === lang));
  $('.lang').dataset.on = lang;
  renderMarquee(); renderCats(); renderCatalog(); renderSlider(); renderCart(); observeCats();
  if(!first){
    $$('[data-r]', mouthIn).forEach(el => el.classList.add('in'));
    $$('[data-scramble]').forEach(scramble);
  }
  observeAll();
  $$('[data-magnet]').forEach(bindMagnet);
  requestAnimationFrame(() => { track.scrollTo({left: track.clientWidth*slideIdx}); movePill(); snapMouth(); });
}
$$('[data-lang]').forEach(b => b.addEventListener('click', () => { if(lang === b.dataset.lang) return; lang = b.dataset.lang; store.set('mawrelle-lang', lang); applyLang(false); }));

/* ================================================================ boot */
applyLang(true);
if(scrollY > 10){ openMaw(false); }
onScroll();
if(document.fonts && document.fonts.ready) document.fonts.ready.then(() => { snapMouth(); movePill(); });
addEventListener('load', () => { snapMouth(); movePill(); });
})();
