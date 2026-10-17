
"use strict";

// ==========================================
// RAÍZES DA NOSSA HISTÓRIA — CEPG
// VERSÃO ORIGINAL — SEM CONTINENTES ILUMINADOS
// ==========================================

// Países da turma com bolinhas clicáveis.
// Raízes e fios verdes animados.
// Pesquisa de sobrenome pelo Netlify.
// Animação compacta com raízes e globo.

// ==========================================
// 1. ORIGENS DA TURMA
// ==========================================

const familias = [
  {
    pais: "Brasil",
    codigo: "BR",
    x: 31,
    y: 67,
    descricao:
      "Origens em São Paulo, Minas Gerais, Pernambuco, Paraíba, Bahia e Paraná, além de cidades como Boituva, Sorocaba, Porto Feliz, Tatuí, Laranjal Paulista, Arcos e outras.",
    localidades: [
      "São Paulo",
      "Minas Gerais",
      "Pernambuco",
      "Paraíba",
      "Bahia",
      "Paraná",
      "Boituva",
      "Sorocaba",
      "Porto Feliz",
      "Tatuí",
      "Laranjal Paulista",
      "Arcos",
      "Outras localidades"
    ]
  },
  {
    pais: "Itália",
    codigo: "IT",
    x: 52,
    y: 40,
    descricao:
      "Registros familiares de Treviso, Calábria, Alberobello e outras regiões italianas.",
    localidades: [
      "Treviso",
      "Calábria",
      "Alberobello",
      "Outras regiões"
    ]
  },
  {
    pais: "Portugal",
    codigo: "PT",
    x: 46.5,
    y: 39,
    descricao:
      "Registros familiares de diferentes localidades portuguesas.",
    localidades: [
      "Diferentes localidades portuguesas"
    ]
  },
  {
    pais: "Síria",
    codigo: "SY",
    x: 59.5,
    y: 46,
    descricao:
      "Um registro de origem familiar foi informado inicialmente.",
    localidades: [
      "1 registro informado inicialmente"
    ]
  },
  {
    pais: "Líbano",
    codigo: "LB",
    x: 59,
    y: 48,
    descricao:
      "Origem familiar ligada ao Líbano identificada no estudo.",
    localidades: [
      "Origem familiar identificada"
    ]
  },
  {
    pais: "Espanha",
    codigo: "ES",
    x: 47,
    y: 42,
    descricao:
      "Origem familiar ligada à Espanha identificada no estudo.",
    localidades: [
      "Origem familiar identificada"
    ]
  },
  {
    pais: "Países Baixos (Holanda)",
    codigo: "NL",
    x: 50,
    y: 34,
    descricao:
      "Origem familiar ligada à Holanda (Países Baixos) identificada no estudo.",
    localidades: [
      "Origem familiar identificada"
    ]
  },
  {
    pais: "Alemanha",
    codigo: "DE",
    x: 51.6,
    y: 36,
    descricao:
      "Origem familiar ligada à Alemanha identificada no estudo.",
    localidades: [
      "Origem familiar identificada"
    ]
  },
  {
    pais: "Hungria",
    codigo: "HU",
    x: 55.3,
    y: 39,
    descricao:
      "Um registro de origem familiar ligado à Hungria foi informado.",
    localidades: [
      "1 registro informado"
    ]
  },
  {
    pais: "Bessarábia / Moldávia",
    codigo: "MD",
    x: 58.3,
    y: 39,
    descricao:
      "Uma trajetória familiar ligada à Bessarábia foi descrita. Trata-se de uma região histórica hoje dividida principalmente entre Moldávia e Ucrânia.",
    localidades: [
      "1 trajetória familiar descrita",
      "Região histórica da Bessarábia"
    ]
  }
];

// ==========================================
// 2. PAÍSES DISPONÍVEIS NA PESQUISA
// ==========================================

const paises = {
  BR: ["Brasil", 31, 67],
  PT: ["Portugal", 46.5, 39],
  ES: ["Espanha", 47, 42],
  IT: ["Itália", 52, 40],
  DE: ["Alemanha", 51.6, 36],
  FR: ["França", 49, 39],
  GB: ["Reino Unido", 47, 32],
  IE: ["Irlanda", 44, 33],
  NL: ["Países Baixos", 50, 34],
  BE: ["Bélgica", 50, 36],
  CH: ["Suíça", 50, 39],
  AT: ["Áustria", 53, 39],
  PL: ["Polônia", 55, 35],
  RU: ["Rússia", 67, 30],
  UA: ["Ucrânia", 59, 35],
  GR: ["Grécia", 56, 45],
  SE: ["Suécia", 54, 26],
  NO: ["Noruega", 52, 24],
  DK: ["Dinamarca", 52, 31],
  FI: ["Finlândia", 57, 25],
  TR: ["Turquia", 59, 43],
  CN: ["China", 76, 46],
  JP: ["Japão", 86, 42],
  KR: ["Coreia do Sul", 83, 43],
  IN: ["Índia", 70, 51],
  LB: ["Líbano", 59, 48],
  SY: ["Síria", 59.5, 46],
  MD: ["Moldávia", 58.3, 39],
  IL: ["Israel", 59, 50],
  US: ["Estados Unidos", 22, 38],
  CA: ["Canadá", 21, 25],
  MX: ["México", 21, 49],
  AR: ["Argentina", 29, 82],
  CL: ["Chile", 26, 79],
  PE: ["Peru", 27, 69],
  CO: ["Colômbia", 29, 61],
  UY: ["Uruguai", 33, 82],
  PY: ["Paraguai", 32, 73],
  BO: ["Bolívia", 29, 72],
  VE: ["Venezuela", 30, 58],
  AU: ["Austrália", 84, 75],
  NZ: ["Nova Zelândia", 91, 81],
  CZ: ["Tchéquia", 54, 37],
  HU: ["Hungria", 55.3, 39],
  RO: ["Romênia", 58, 41],
  EG: ["Egito", 56, 52],
  MA: ["Marrocos", 47, 48],
  ZA: ["África do Sul", 55, 83],
  AO: ["Angola", 52, 71],
  MZ: ["Moçambique", 58, 77],
  SA: ["Arábia Saudita", 61, 52],
  IR: ["Irã", 64, 45],
  TH: ["Tailândia", 77, 55],
  VN: ["Vietnã", 80, 55],
  ID: ["Indonésia", 80, 68],
  PH: ["Filipinas", 85, 57],
  MY: ["Malásia", 79, 65]
};

// ==========================================
// 3. ELEMENTOS DO SITE
// ==========================================

const $ = id => document.getElementById(id);

const rootsScene = $("rootsScene");
const rootsImage = $("rootsImage");
const rootsFlow = $("rootsFlow");
const rootsSvg = $("rootsSvg");

const mapStage = $("mapStage");
const mapSvg = $("mapSvg");

const countryPins = $("countryPins");
const familyNames = $("familyNames");
const searchMarker = $("searchMarker");

const searchForm = $("searchForm");
const surnameInput = $("surnameInput");
const searchButton = $("searchButton");
const searchStatus = $("searchStatus");
const resetButton = $("resetButton");

const menuToggle = $("menuToggle");
const navMenu = $("navMenu");

const NS = "http://www.w3.org/2000/svg";

const mobile = matchMedia("(max-width: 620px)");

const reducedMotion = matchMedia(
  "(prefers-reduced-motion: reduce)"
);

const clamp = (v, min, max) =>
  Math.max(min, Math.min(v, max));

function make(tag, className = "", value) {
  const element = document.createElement(tag);

  element.className = className;

  if (value !== undefined) {
    element.textContent = value;
  }

  return element;
}

const svgEl = tag =>
  document.createElementNS(NS, tag);

const normalize = text =>
  String(text || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();

// ==========================================
// 4. VARIÁVEIS
// ==========================================

let familyVisuals = [];
let paths = [];
let selectedFamily = 0;

let searched = null;
let searchMode = false;
let searchStart = 0;

let requestId = 0;
let activeController = null;

let rebuildQueued = false;
let animationQueued = false;

// ==========================================
// 5. TEXTOS ORIGINAIS DO MAPA
// ==========================================

$("mapHint").textContent =
  "Selecione um país no mapa ou nos botões abaixo para conhecer as origens da turma.";

const avisoOriginal = $("familyPanel")
  .querySelector(".demo-notice");

if (avisoOriginal) {
  avisoOriginal.textContent =
    "As origens e localidades foram informadas no levantamento da turma. Os pontos no mapa são aproximados e não representam endereços familiares.";
}

$("familyPanel")
  .querySelectorAll(".eyebrow")
  .forEach(element => {
    const text = element.textContent.trim();

    if (text === "SOBRENOMES") {
      element.textContent =
        "LOCALIDADES E REGISTROS";
    }

    if (text === "PAÍS SELECIONADO") {
      element.textContent =
        "ORIGEM SELECIONADA";
    }
  });

// ==========================================
// 6. ESTILOS DISCRETOS DO MAPA
// ==========================================

const style = make("style");

style.textContent = `

  .cepg-origin-focus {
    position: absolute;
    right: 13px;
    bottom: 13px;
    z-index: 8;

    width: min(260px, 46%);
    padding: 11px 13px;

    border: 1px solid rgba(220,250,184,.35);
    border-radius: 11px;

    background: rgba(8,30,49,.92);
    color: #f3fee4;

    box-shadow: 0 8px 22px rgba(0,0,0,.22);

    pointer-events: none;
  }

  .cepg-origin-focus strong {
    display: block;
    font-size: 12px;
    line-height: 1.4;
    overflow-wrap: anywhere;
  }

  .cepg-origin-focus span {
    display: block;
    margin-top: 4px;
    font-size: 9px;
    color: #c6dfa9;
  }

  .map-stage.searching .cepg-origin-focus {
    display: none;
  }

  .cepg-mobile-legend {
    display: none;
  }

  @media (max-width: 620px) {

    .cepg-origin-focus {
      display: none;
    }

    .map-stage:not(.searching)
    .cepg-mobile-legend {
      position: absolute;
      z-index: 12;

      display: flex;
      align-items: center;
      justify-content: center;

      gap: 7px;

      bottom: 7px;
      left: 8px;
      right: 8px;

      padding: 7px 8px;

      border-radius: 10px;
      border: 1px solid rgba(224,250,183,.3);

      background: rgba(8,32,53,.93);
      color: #e9f9d1;

      font: 700 9px/1.3 Manrope, sans-serif;
    }

    .cepg-mobile-legend button {
      border: 1px solid #cfe7a7;
      border-radius: 6px;

      background: #f6fbea;
      color: #18334a;

      padding: 5px;

      font: 800 9px Manrope, sans-serif;

      max-width: 100px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }

`;

document.head.append(style);

// ==========================================
// 7. LEGENDA DO CELULAR
// ==========================================

const mobileLegend = make(
  "div",
  "cepg-mobile-legend"
);

mapStage.append(mobileLegend);

const focus = make(
  "div",
  "cepg-origin-focus"
);

focus.setAttribute(
  "aria-live",
  "polite"
);

mapStage.append(focus);

function updateMobileLegend(index) {
  const family = familias[index];

  mobileLegend.replaceChildren(
    make(
      "span",
      "",
      `${index + 1}/${familias.length} · ${family.pais}`
    )
  );

  family.localidades
    .slice(0, 2)
    .forEach(local => {
      const button = make(
        "button",
        "",
        local
      );

      button.type = "button";

      button.addEventListener("click", () => {
        $("familyPanel").scrollIntoView({
          behavior: reducedMotion.matches
            ? "auto"
            : "smooth",
          block: "center"
        });
      });

      mobileLegend.append(button);
    });

  if (family.localidades.length > 2) {
    const more = make(
      "button",
      "",
      `+${family.localidades.length - 2}`
    );

    more.type = "button";

    more.addEventListener("click", () => {
      $("familyPanel").scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
    });

    mobileLegend.append(more);
  }
}

// ==========================================
// 8. CURVAS DOS FIOS
// ==========================================

function curve(a, b) {
  const dx = b.x - a.x;
  const dy = b.y - a.y;

  return `
    M ${a.x} ${a.y}
    C ${a.x + dx * .1} ${a.y + dy * .43},
      ${b.x - dx * .16} ${b.y - dy * .31},
      ${b.x} ${b.y}
  `;
}

function addPath(
  svg,
  d,
  kind,
  segment,
  fromY,
  toY,
  target = null,
  family = -1,
  delay = 0
) {
  const path = svgEl("path");

  path.setAttribute("d", d);
  path.setAttribute(
    "class",
    `root-path ${kind}`
  );

  svg.append(path);

  const length = Math.max(
    path.getTotalLength(),
    1
  );

  path.style.strokeDasharray =
    String(length);

  path.style.strokeDashoffset =
    String(length);

  paths.push({
    path,
    length,
    segment,
    fromY,
    toY,
    target,
    family,
    delay
  });

  if (target) {
    target.style.opacity = "0";

    if (target.tagName === "BUTTON") {
      target.style.pointerEvents = "none";
    }
  }
}

// ==========================================
// 9. MARCADORES DOS PAÍSES
// ==========================================

function buildMarkers() {
  countryPins.replaceChildren();
  familyNames.replaceChildren();
  $("countryButtons").replaceChildren();

  familyVisuals = familias.map(
    (family, index) => {
      const pin = make(
        "button",
        "country-pin"
      );

      pin.type = "button";

      pin.style.left = `${family.x}%`;
      pin.style.top = `${family.y}%`;

      pin.title = family.pais;

      pin.setAttribute(
        "aria-label",
        `Ver origem: ${family.pais}`
      );

      pin.setAttribute(
        "aria-pressed",
        "false"
      );

      pin.addEventListener("click", () => {
        selectFamily(index);
      });

      countryPins.append(pin);

      const button = make(
        "button",
        "country-button",
        family.pais
      );

      button.type = "button";

      button.setAttribute(
        "aria-pressed",
        "false"
      );

      button.addEventListener("click", () => {
        selectFamily(index);
      });

      $("countryButtons").append(button);

      return {
        pin,
        button
      };
    }
  );
}

// ==========================================
// 10. SELECIONAR PAÍS
// ==========================================

function selectFamily(index) {
  if (!familias[index]) {
    return;
  }

  selectedFamily = index;

  const family = familias[index];

  $("selectedCountry").textContent =
    family.pais;

  $("selectedDescription").textContent =
    family.descricao;

  $("selectedNames").replaceChildren(
    ...family.localidades.map(local =>
      make("span", "", local)
    )
  );

  focus.replaceChildren(
    make(
      "strong",
      "",
      `${index + 1} · ${family.pais}`
    ),
    make(
      "span",
      "",
      "Origem informada no levantamento da turma"
    )
  );

  familyVisuals.forEach((view, i) => {
    const active = i === index;

    view.pin.classList.toggle(
      "active",
      active
    );

    view.button.classList.toggle(
      "active",
      active
    );

    view.pin.setAttribute(
      "aria-pressed",
      String(active)
    );

    view.button.setAttribute(
      "aria-pressed",
      String(active)
    );
  });

  paths.forEach(item => {
    if (item.family >= 0) {
      item.path.classList.toggle(
        "highlight",
        item.family === index
      );
    }
  });

  updateMobileLegend(index);
}

// ==========================================
// 11. RAÍZES DA ÁRVORE
// ==========================================

const rootTips = [
  [.055, .765],
  [.105, .830],
  [.182, .866],
  [.323, .941],
  [.492, .984],
  [.687, .972],
  [.761, .931],
  [.866, .851],
  [.943, .783]
];

function buildRoots() {
  rootsSvg.replaceChildren();

  const w = rootsFlow.clientWidth;
  const h = rootsFlow.clientHeight;

  const flowRect =
    rootsFlow.getBoundingClientRect();

  const imgRect =
    rootsImage.getBoundingClientRect();

  const left =
    imgRect.left - flowRect.left;

  const top =
    imgRect.top - flowRect.top;

  const bottom =
    top + imgRect.height;

  const gap = Math.max(
    5,
    h - bottom
  );

  const merge = {
    x: w / 2,
    y: bottom + gap * .62
  };

  rootsSvg.setAttribute(
    "viewBox",
    `0 0 ${w} ${h}`
  );

  // GRADIENTE DOS FIOS

  const defs = svgEl("defs");
  const gradient = svgEl(
    "linearGradient"
  );

  gradient.id = "rootLineGradient";

  gradient.setAttribute("x1", "0");
  gradient.setAttribute("y1", "0");
  gradient.setAttribute("x2", "0");
  gradient.setAttribute("y2", "1");

  [
    ["0%", "#f1e1b3"],
    ["22%", "#e3f0b4"],
    ["100%", "#c7ff85"]
  ].forEach(([offset, color]) => {
    const stop = svgEl("stop");

    stop.setAttribute(
      "offset",
      offset
    );

    stop.setAttribute(
      "stop-color",
      color
    );

    gradient.append(stop);
  });

  defs.append(gradient);
  rootsSvg.append(defs);

  // FIOS SAINDO DAS RAÍZES

  for (const [fx, fy] of rootTips) {
    const a = {
      x: left + imgRect.width * fx,
      y: top + imgRect.height * fy
    };

    const dx = merge.x - a.x;
    const dy = merge.y - a.y;

    const c1 = {
      x: a.x + dx * .075,
      y: a.y + Math.min(
        imgRect.height * .085,
        dy * .24
      )
    };

    const c2 = {
      x: merge.x - dx * .18,
      y: merge.y - Math.min(
        gap * .8,
        dy * .30
      )
    };

    const d = `
      M ${a.x} ${a.y}
      C ${c1.x} ${c1.y},
        ${c2.x} ${c2.y},
        ${merge.x} ${merge.y}
    `;

    addPath(
      rootsSvg,
      d,
      "tip",
      "roots",
      a.y,
      merge.y
    );
  }

  // LINHA CENTRAL ATÉ O MAPA

  addPath(
    rootsSvg,
    curve(
      merge,
      {
        x: w / 2,
        y: h
      }
    ),
    "trunk",
    "roots",
    merge.y,
    h
  );
}

// ==========================================
// 12. IDENTIFICAR PAÍS PESQUISADO
// ==========================================

function identifyCountry(data) {
  if (!data) {
    return null;
  }

  if (
    ["baixa", "desconhecida"].includes(
      normalize(data.confianca)
    )
  ) {
    return null;
  }

  let code = String(
    data.codigo || ""
  ).trim().toUpperCase();

  if (!paises[code] && data.pais) {
    const found = Object.entries(
      paises
    ).find(
      ([, p]) =>
        normalize(p[0]) ===
        normalize(data.pais)
    );

    if (found) {
      code = found[0];
    }
  }

  if (paises[code]) {
    const [name, x, y] = paises[code];

    return {
      code,
      name,
      x,
      y
    };
  }

  const lat =
    data.latitude == null
      ? NaN
      : Number(data.latitude);

  const lon =
    data.longitude == null
      ? NaN
      : Number(data.longitude);

  if (
    !/^[A-Z]{2}$/.test(code) ||
    !Number.isFinite(lat) ||
    !Number.isFinite(lon) ||
    Math.abs(lat) > 90 ||
    Math.abs(lon) > 180
  ) {
    return null;
  }

  return {
    code,
    name: String(data.pais || code),

    x: clamp(
      (lon + 180) / 3.6,
      7,
      93
    ),

    y: clamp(
      52 - lat * .52,
      12,
      88
    )
  };
}

// ==========================================
// 13. DESENHAR MAPA
// ==========================================

function buildMap() {
  mapSvg.replaceChildren();
  searchMarker.replaceChildren();

  mapStage.classList.toggle(
    "searching",
    searchMode
  );

  const w = mapStage.clientWidth;
  const h = mapStage.clientHeight;

  mapSvg.setAttribute(
    "viewBox",
    `0 0 ${w} ${h}`
  );

  const start = {
    x: w / 2,
    y: 0
  };

  const junction = {
    x: w / 2,
    y: h * .09
  };

  addPath(
    mapSvg,
    curve(start, junction),
    "trunk",
    "map",
    0,
    junction.y
  );

  // ========================================
  // MODO DE PESQUISA
  // ========================================

  if (searchMode) {
    const country =
      identifyCountry(searched);

    if (!country) {
      return;
    }

    const target = {
      x: w * country.x / 100,
      y: h * country.y / 100
    };

    const pin = make(
      "span",
      "country-pin"
    );

    pin.style.left = `${country.x}%`;
    pin.style.top = `${country.y}%`;

    pin.style.pointerEvents = "none";

    searchMarker.append(pin);

    const labelX = clamp(
      country.x + (
        country.x > 68 ? -14 : 14
      ),
      12,
      88
    );

    const labelY = clamp(
      country.y + (
        country.y > 70 ? -15 : 15
      ),
      12,
      86
    );

    const tag = make(
      "button",
      "search-tag",
      `${searched.sobrenome} · ${country.name}`
    );

    tag.type = "button";

    tag.style.left = `${labelX}%`;
    tag.style.top = `${labelY}%`;

    tag.addEventListener("click", () => {
      $("resultPanel").scrollIntoView({
        behavior: reducedMotion.matches
          ? "auto"
          : "smooth",
        block: "start"
      });
    });

    searchMarker.append(tag);

    addPath(
      mapSvg,
      curve(junction, target),
      "country highlight",
      "map",
      junction.y,
      target.y,
      pin
    );

    addPath(
      mapSvg,
      curve(
        target,
        {
          x: w * labelX / 100,
          y: h * labelY / 100
        }
      ),
      "surname highlight",
      "map",
      target.y,
      h * labelY / 100,
      tag,
      -1,
      .55
    );

    return;
  }

  // ========================================
  // MAPA ORIGINAL COM OS 10 PAÍSES
  // ========================================

  familias.forEach((family, index) => {
    const country = {
      x: w * family.x / 100,
      y: h * family.y / 100
    };

    addPath(
      mapSvg,
      curve(junction, country),
      "country",
      "map",
      junction.y,
      country.y,
      familyVisuals[index].pin,
      index
    );
  });

  selectFamily(selectedFamily);
}

// ==========================================
// 14. ANIMAÇÃO DOS FIOS NA ROLAGEM
// ==========================================

function updateAnimation() {
  const reveal =
    scrollY + innerHeight * .82;

  const rootsTop =
    rootsFlow.getBoundingClientRect().top +
    scrollY;

  const mapTop =
    mapStage.getBoundingClientRect().top +
    scrollY;

  const elapsed = clamp(
    (
      performance.now() -
      searchStart
    ) / 2100,
    0,
    1
  );

  for (const item of paths) {
    let progress;

    if (reducedMotion.matches) {
      progress = 1;
    }

    else if (item.segment === "roots") {
      progress = clamp(
        (
          reveal -
          rootsTop -
          item.fromY
        ) /
        Math.max(
          65,
          item.toY - item.fromY
        ),
        0,
        1
      );
    }

    else if (searchMode) {
      progress = clamp(
        (
          elapsed -
          item.delay
        ) /
        Math.max(
          .01,
          1 - item.delay
        ),
        0,
        1
      );
    }

    else {
      progress = clamp(
        (
          reveal -
          mapTop -
          item.fromY
        ) /
        Math.max(
          40,
          item.toY - item.fromY
        ),
        0,
        1
      );
    }

    item.path.style.strokeDashoffset =
      String(
        item.length * (1 - progress)
      );

    if (item.target) {
      const opacity = clamp(
        (progress - .78) / .22,
        0,
        1
      );

      item.target.style.opacity =
        String(opacity);

      if (item.target.tagName === "BUTTON") {
        item.target.style.pointerEvents =
          opacity > .95
            ? "auto"
            : "none";
      }
    }
  }
}

// ==========================================
// 15. ATUALIZAR ANIMAÇÃO
// ==========================================

function rebuild() {
  if (
    !rootsImage.complete ||
    !rootsImage.naturalWidth ||
    !rootsFlow.clientWidth ||
    !mapStage.clientWidth
  ) {
    return;
  }

  paths = [];

  buildRoots();
  buildMap();
  updateAnimation();
}

function queueRebuild() {
  if (rebuildQueued) {
    return;
  }

  rebuildQueued = true;

  requestAnimationFrame(() => {
    rebuildQueued = false;
    rebuild();
  });
}

function queueAnimation() {
  if (animationQueued) {
    return;
  }

  animationQueued = true;

  requestAnimationFrame(() => {
    animationQueued = false;
    updateAnimation();
  });
}

function animateSearch() {
  const started = searchStart;

  function frame() {
    if (
      !searchMode ||
      started !== searchStart
    ) {
      return;
    }

    updateAnimation();

    if (
      performance.now() - started <
      2300
    ) {
      requestAnimationFrame(frame);
    }
  }

  requestAnimationFrame(frame);
}

// ==========================================
// 16. ANIMAÇÃO COMPACTA DA PESQUISA
// ==========================================

const loaderStyle = make("style");

loaderStyle.textContent = `

.cepg-loading-layer {
  position: fixed;
  inset: 0;
  z-index: 9999;

  display: grid;
  place-items: center;

  padding: 20px;

  background: rgba(5,20,34,.76);

  backdrop-filter: blur(9px);
  -webkit-backdrop-filter: blur(9px);

  opacity: 0;
  transition: opacity .28s ease;
}

.cepg-loading-layer[hidden] {
  display: none !important;
}

.cepg-loading-layer.visible {
  opacity: 1;
}

.cepg-loading-card {
  width: min(570px,100%);

  padding: 25px 25px 22px;

  border: 1px solid rgba(213,247,164,.29);
  border-radius: 24px;

  background:
    radial-gradient(
      ellipse at 78% 28%,
      #254b60,
      transparent 54%
    ),
    linear-gradient(
      145deg,
      #142f44,
      #081f33 82%
    );

  color: white;
  text-align: center;

  box-shadow:
    0 25px 80px rgba(0,0,0,.38);
}

.cepg-loading-head {
  color: #d0e9a6;

  font:
    800 10px/1.5
    Manrope,sans-serif;

  letter-spacing: 2px;
}

.cepg-loading-graphic {
  width: min(470px,100%);
  margin: 8px auto;
}

.cepg-loading-graphic svg {
  display: block;
  width: 100%;
  height: auto;
  overflow: visible;
}

.cepg-loading-root {
  fill: none;

  stroke: #caef9d;
  stroke-width: 3;

  stroke-linecap: round;

  stroke-dasharray: 520;
  stroke-dashoffset: 520;

  animation:
    cepgRootGrow 6.5s ease-in-out infinite;
}

.cepg-loading-trail {
  fill: none;

  stroke: #dcffac;
  stroke-width: 4;

  stroke-linecap: round;

  stroke-dasharray: 520;
  stroke-dashoffset: 520;

  filter:
    drop-shadow(0 0 5px #b3f269);

  animation:
    cepgTrailGrow 6.5s ease-in-out infinite;
}

.cepg-loading-orbit {
  fill: none;

  stroke: #d5ffa7;
  stroke-width: 3;

  stroke-linecap: round;

  stroke-dasharray: 380;
  stroke-dashoffset: 380;

  animation:
    cepgOrbitDraw 6.5s ease-in-out infinite;
}

.cepg-loading-title {
  font:
    600 clamp(37px,6vw,51px)/1
    "Cormorant Garamond",
    Georgia,serif;

  margin: 5px 0 12px;
}

.cepg-loading-title em {
  color: #c6e98e;
}

.cepg-loading-description {
  max-width: 410px;
  margin: 0 auto;

  color: #d2dfdd;

  font:
    500 12px/1.8
    Manrope,sans-serif;
}

.cepg-loading-surname {
  color: #edffcf;
  font-weight: 800;
}

.cepg-loading-stage {
  margin: 17px auto;

  color: #bbdd9d;

  font:
    700 11px/1.5
    Manrope,sans-serif;
}

.cepg-loading-foot {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;

  margin-top: 18px;
  padding-top: 16px;

  border-top:
    1px solid rgba(213,247,164,.19);
}

.cepg-loading-note {
  color: #9db5b5;

  font:
    500 10px/1.5
    Manrope,sans-serif;

  text-align: left;
}

.cepg-loading-cancel {
  border: 1px solid rgba(160,189,154,.47);
  border-radius: 9px;

  padding: 10px 14px;

  background: rgba(239,255,215,.055);
  color: white;

  font:
    800 11px
    Manrope,sans-serif;

  cursor: pointer;
}

@keyframes cepgRootGrow {
  0%,6% {
    stroke-dashoffset: 520;
    opacity: .15;
  }

  37%,72% {
    stroke-dashoffset: 0;
    opacity: 1;
  }

  97%,100% {
    stroke-dashoffset: 520;
    opacity: .12;
  }
}

@keyframes cepgTrailGrow {
  0%,32% {
    stroke-dashoffset: 520;
    opacity: 0;
  }

  61%,77% {
    stroke-dashoffset: 0;
    opacity: 1;
  }

  99%,100% {
    stroke-dashoffset: 520;
    opacity: 0;
  }
}

@keyframes cepgOrbitDraw {
  0%,50% {
    stroke-dashoffset: 380;
    opacity: 0;
  }

  76%,85% {
    stroke-dashoffset: 0;
    opacity: 1;
  }

  100% {
    stroke-dashoffset: 380;
    opacity: 0;
  }
}

@media (prefers-reduced-motion: reduce) {
  .cepg-loading-root,
  .cepg-loading-trail,
  .cepg-loading-orbit {
    animation: none;
    stroke-dashoffset: 0;
    opacity: 1;
  }
}

`;

document.head.append(loaderStyle);

// ==========================================
// 17. CRIAR JANELA DE PESQUISA
// ==========================================

const loader = make(
  "div",
  "cepg-loading-layer"
);

loader.hidden = true;

loader.setAttribute("role", "dialog");

loader.setAttribute(
  "aria-modal",
  "true"
);

loader.innerHTML = `

<div class="cepg-loading-card">

  <div class="cepg-loading-head">
    ARQUIVO DE ORIGENS · CEPG
  </div>

  <div class="cepg-loading-graphic">

    <svg
      viewBox="0 0 660 360"
      aria-hidden="true"
    >

      <!-- GLOBO -->

      <circle
        cx="520"
        cy="176"
        r="122"
        fill="#b5ec84"
        opacity=".10"
      />

      <circle
        cx="520"
        cy="176"
        r="103"
        fill="#21445c"
        stroke="#a4caac"
        stroke-width="2"
      />

      <!-- LINHAS DO GLOBO -->

      <g
        fill="none"
        stroke="#93bfa4"
        stroke-width="1.3"
        opacity=".6"
      >

        <ellipse
          cx="520"
          cy="176"
          rx="43"
          ry="103"
        />

        <ellipse
          cx="520"
          cy="176"
          rx="76"
          ry="103"
        />

        <path
          d="
            M417 176h206
            M427 126 Q520 158 613 126
            M427 226 Q520 194 613 226
          "
        />

      </g>

      <!-- RAÍZES CRESCENDO -->

      <g class="cepg-loading-root">

        <path
          d="M52 42 C96 58 118 102 168 115 C215 130 232 165 258 182"
        />

        <path
          d="M86 91 C120 98 130 146 183 149 C219 152 232 176 258 182"
        />

        <path
          d="M45 157 C100 156 129 169 176 175 C221 179 239 181 258 182"
        />

        <path
          d="M65 233 C110 220 128 197 178 200 C219 201 233 185 258 182"
        />

        <path
          d="M90 299 C125 277 129 235 178 225 C218 217 238 191 258 182"
        />

        <path
          d="M160 329 C167 276 194 257 222 223 C238 206 246 189 258 182"
        />

      </g>

      <!-- FIO ATÉ O GLOBO -->

      <path
        class="cepg-loading-trail"
        d="M258 182 C314 148 368 218 423 179"
      />

      <!-- FIO PERCORRENDO O GLOBO -->

      <path
        class="cepg-loading-orbit"
        d="M423 179 C463 100 568 81 614 158 C640 224 577 271 515 257 C461 244 449 184 503 151"
      />

      <!-- PONTO LUMINOSO -->

      <circle
        r="5"
        fill="#eaffc1"
      >

        <animateMotion
          dur="6.5s"
          repeatCount="indefinite"
          path="M258 182 C314 148 368 218 423 179 C463 100 568 81 614 158 C640 224 577 271 515 257 C461 244 449 184 503 151"
        />

      </circle>

    </svg>

  </div>

  <h2 class="cepg-loading-title">
    Explorando suas <em>raízes...</em>
  </h2>

  <p class="cepg-loading-description">

    Estamos buscando pistas sobre

    <strong class="cepg-loading-surname"></strong>

    e suas possíveis origens pelo mundo.

  </p>

  <div class="cepg-loading-stage">
    Conectando histórias...
  </div>

  <div class="cepg-loading-foot">

    <span class="cepg-loading-note">
      Pesquisa histórica por IA · resultado estimado
    </span>

    <button
      class="cepg-loading-cancel"
      type="button"
    >
      Cancelar pesquisa
    </button>

  </div>

</div>

`;

document.body.append(loader);

// ==========================================
// 18. CONTROLAR ANIMAÇÃO DE PESQUISA
// ==========================================

let loaderInterval = null;
let loaderToken = 0;
let previousOverflow = "";
let previousFocus = null;

const stages = [
  "Conectando histórias...",
  "Percorrendo caminhos pelo mundo...",
  "Reunindo pistas sobre o sobrenome...",
  "Explorando possíveis origens..."
];

function openLoader(surname) {
  loaderToken++;

  clearInterval(loaderInterval);

  previousFocus =
    document.activeElement;

  previousOverflow =
    document.body.style.overflow;

  document.body.style.overflow =
    "hidden";

  loader.querySelector(
    ".cepg-loading-surname"
  ).textContent = surname;

  loader.querySelector(
    ".cepg-loading-stage"
  ).textContent = stages[0];

  loader.querySelector(
    ".cepg-loading-cancel"
  ).disabled = false;

  loader.hidden = false;

  requestAnimationFrame(() => {
    loader.classList.add("visible");
  });

  let index = 0;

  loaderInterval = setInterval(() => {
    index = (index + 1) % stages.length;

    loader.querySelector(
      ".cepg-loading-stage"
    ).textContent = stages[index];
  }, 2200);

  loader.querySelector(
    ".cepg-loading-cancel"
  ).focus({
    preventScroll: true
  });
}

function closeLoader() {
  const token = ++loaderToken;

  clearInterval(loaderInterval);
  loaderInterval = null;

  loader.classList.remove("visible");

  document.body.style.overflow =
    previousOverflow;

  if (
    previousFocus &&
    previousFocus.isConnected
  ) {
    previousFocus.focus({
      preventScroll: true
    });
  }

  return new Promise(resolve => {
    setTimeout(() => {
      if (token === loaderToken) {
        loader.hidden = true;
      }

      resolve();
    }, reducedMotion.matches ? 0 : 290);
  });
}

async function finishLoader() {
  clearInterval(loaderInterval);

  loaderInterval = null;

  loader.querySelector(
    ".cepg-loading-stage"
  ).textContent =
    "Pesquisa concluída!";

  loader.querySelector(
    ".cepg-loading-cancel"
  ).disabled = true;

  await new Promise(resolve =>
    setTimeout(
      resolve,
      reducedMotion.matches ? 0 : 650
    )
  );

  await closeLoader();
}

// ==========================================
// 19. CANCELAR PESQUISA
// ==========================================

loader.querySelector(
  ".cepg-loading-cancel"
).addEventListener("click", () => {
  requestId++;

  activeController?.abort();

  activeController = null;

  closeLoader();

  searchButton.disabled = false;

  searchButton.textContent =
    "Pesquisar";

  searchStatus.textContent =
    "Pesquisa cancelada. Você pode tentar novamente.";
});

document.addEventListener(
  "keydown",
  event => {
    if (
      event.key === "Escape" &&
      !loader.hidden &&
      !loader.querySelector(
        ".cepg-loading-cancel"
      ).disabled
    ) {
      event.preventDefault();

      loader.querySelector(
        ".cepg-loading-cancel"
      ).click();
    }
  }
);

// ==========================================
// 20. CONSULTAR GEMINI PELO NETLIFY
// ==========================================

async function querySurname(
  name,
  controller
) {
  const timeout = setTimeout(() => {
    controller.abort();
  }, 24000);

  try {
    const response = await fetch(
      "/api/sobrenome",
      {
        method: "POST",

        headers: {
          "Content-Type":
            "application/json"
        },

        body: JSON.stringify({
          sobrenome: name
        }),

        signal: controller.signal
      }
    );

    const data = await response
      .json()
      .catch(() => null);

    if (!response.ok) {
      throw new Error(
        data?.erro ||
        `Falha na pesquisa (HTTP ${response.status}).`
      );
    }

    if (!data) {
      throw new Error(
        "A pesquisa retornou uma resposta vazia."
      );
    }

    return data;

  } finally {
    clearTimeout(timeout);
  }
}

// ==========================================
// 21. LINKS PARA PESQUISAR MAIS
// ==========================================

function addSource(label, url) {
  const link = make(
    "a",
    "",
    label
  );

  link.href = url;

  link.target = "_blank";

  link.rel = "noopener noreferrer";

  $("sourceLinks").append(link);
}

// ==========================================
// 22. MOSTRAR RESULTADO DE SOBRENOME
// ==========================================

function showResult(data, manual = false) {
  searched = data;
  searchMode = true;

  const country =
    identifyCountry(data);

  $("familyPanel").hidden = true;
  $("resultPanel").hidden = false;

  resetButton.hidden = false;

  $("resultSurname").textContent =
    data.sobrenome;

  $("confidenceBadge").textContent =
    manual
      ? "País informado pela família"
      : `IA · confiança ${data.confianca || "desconhecida"}`;

  $("resultCountry").textContent =
    country
      ? `${country.name} — possível associação histórica do sobrenome. Isso não comprova a ancestralidade da sua família.`
      : "Não foi possível apontar um país com segurança.";

  $("resultExplanation").textContent =
    data.explicacao ||
    "Não há explicação disponível.";

  $("resultCuriosity").textContent =
    data.curiosidade ||
    "Sobrenomes podem vir de lugares, profissões e nomes de antepassados.";

  const alternatives =
    Array.isArray(data.alternativas)
      ? data.alternativas
          .slice(0, 3)
          .filter(
            s => typeof s === "string"
          )
      : [];

  $("otherOrigins").hidden =
    !alternatives.length;

  $("otherOrigins").textContent =
    alternatives.length
      ? `Outras possibilidades: ${alternatives.join(" · ")}`
      : "";

  $("sourceLinks").replaceChildren();

  addSource(
    "Pesquisar no FamilySearch",
    `https://www.familysearch.org/en/surname?surname=${encodeURIComponent(data.sobrenome)}`
  );

  addSource(
    "Pesquisar na Wikipédia",
    `https://pt.wikipedia.org/w/index.php?search=${encodeURIComponent(data.sobrenome + " sobrenome origem")}`
  );

  $("manualCountryBox").hidden =
    Boolean(country);

  $("mapTitle").textContent =
    `As raízes de ${data.sobrenome}`;

  $("mapSubtitle").textContent =
    country
      ? `A rota destaca ${country.name} como possível origem histórica.`
      : "Não há país identificado com segurança. Você pode informar um país conhecido da sua família.";

  searchStatus.textContent =
    country
      ? `Destino sugerido: ${country.name}. Veja a rota no mapa.`
      : "Origem incerta: não será desenhada uma rota inventada.";

  searchStart = performance.now();

  rebuild();
  animateSearch();

  $("mapa").scrollIntoView({
    behavior: reducedMotion.matches
      ? "auto"
      : "smooth",
    block: "center"
  });
}

// ==========================================
// 23. TEMPO MÍNIMO DE 5 SEGUNDOS
// ==========================================

const MIN_LOADING_MS = 5000;

function minimumLoadingTime(signal) {
  return new Promise((resolve, reject) => {
    if (signal.aborted) {
      reject(
        new DOMException(
          "Pesquisa cancelada",
          "AbortError"
        )
      );

      return;
    }

    const timer = setTimeout(
      () => {
        signal.removeEventListener(
          "abort",
          onAbort
        );

        resolve();
      },
      MIN_LOADING_MS
    );

    function onAbort() {
      clearTimeout(timer);

      signal.removeEventListener(
        "abort",
        onAbort
      );

      reject(
        new DOMException(
          "Pesquisa cancelada",
          "AbortError"
        )
      );
    }

    signal.addEventListener(
      "abort",
      onAbort,
      { once: true }
    );
  });
}

// ==========================================
// 24. FORMULÁRIO DE PESQUISA
// ==========================================

searchForm.addEventListener(
  "submit",
  async event => {
    event.preventDefault();

    const name = surnameInput.value
      .trim()
      .replace(/\s+/g, " ");

    if (name.length < 2) {
      searchStatus.textContent =
        "Digite ao menos duas letras.";

      return;
    }

    const current = ++requestId;

    const controller =
      new AbortController();

    activeController = controller;

    searchButton.disabled = true;

    searchButton.textContent =
      "Pesquisando...";

    searchStatus.textContent =
      `Consultando a história de “${name}”...`;

    openLoader(name);

    try {
      const [data] = await Promise.all([
        querySurname(name, controller),
        minimumLoadingTime(
          controller.signal
        )
      ]);

      if (current !== requestId) {
        return;
      }

      await finishLoader();

      if (current !== requestId) {
        return;
      }

      showResult({
        ...data,
        sobrenome: name
      });

    } catch (error) {
      if (current !== requestId) {
        return;
      }

      await closeLoader();

      if (current !== requestId) {
        return;
      }

      searchStatus.textContent =
        error.name === "AbortError"
          ? "A consulta demorou demais. Tente novamente."
          : error.message;

    } finally {
      if (current === requestId) {
        activeController = null;

        searchButton.disabled = false;

        searchButton.textContent =
          "Pesquisar";
      }
    }
  }
);

// ==========================================
// 25. VOLTAR AO MAPA DA TURMA
// ==========================================

resetButton.addEventListener(
  "click",
  () => {
    requestId++;

    activeController?.abort();

    activeController = null;

    if (!loader.hidden) {
      closeLoader();
    }

    searchMode = false;
    searched = null;

    surnameInput.value = "";

    searchStatus.textContent =
      "Digite um sobrenome para começar.";

    searchButton.disabled = false;

    searchButton.textContent =
      "Pesquisar";

    resetButton.hidden = true;

    $("resultPanel").hidden = true;
    $("familyPanel").hidden = false;

    $("mapTitle").replaceChildren(
      document.createTextNode(
        "Um mundo de "
      ),
      make(
        "em",
        "",
        "histórias."
      )
    );

    $("mapSubtitle").textContent =
      "Diferentes caminhos, diferentes origens. Uma história que construímos juntos.";

    rebuild();
  }
);

// ==========================================
// 26. SELECIONAR PAÍS MANUALMENTE
// ==========================================

Object.entries(paises)
  .sort(
    (a, b) =>
      a[1][0].localeCompare(
        b[1][0],
        "pt-BR"
      )
  )
  .forEach(([code, details]) => {
    const option = make(
      "option",
      "",
      details[0]
    );

    option.value = code;

    $("manualCountry").append(option);
  });

$("manualCountryButton").addEventListener(
  "click",
  () => {
    const code =
      $("manualCountry").value;

    if (
      !code ||
      !searched ||
      !paises[code]
    ) {
      return;
    }

    showResult(
      {
        ...searched,
        codigo: code,
        pais: paises[code][0],
        confianca: "informada"
      },
      true
    );
  }
);

// ==========================================
// 27. MENU DO CELULAR
// ==========================================

menuToggle.addEventListener(
  "click",
  () => {
    const open =
      navMenu.classList.toggle(
        "open"
      );

    menuToggle.setAttribute(
      "aria-expanded",
      String(open)
    );

    menuToggle.setAttribute(
      "aria-label",
      open
        ? "Fechar menu"
        : "Abrir menu"
    );
  }
);

navMenu.querySelectorAll("a")
  .forEach(link => {
    link.addEventListener(
      "click",
      () => {
        navMenu.classList.remove(
          "open"
        );

        menuToggle.setAttribute(
          "aria-expanded",
          "false"
        );

        menuToggle.setAttribute(
          "aria-label",
          "Abrir menu"
        );
      }
    );
  });

// ==========================================
// 28. EVENTOS DA PÁGINA
// ==========================================

window.addEventListener(
  "scroll",
  queueAnimation,
  { passive: true }
);

window.addEventListener(
  "resize",
  queueRebuild
);

window.addEventListener(
  "load",
  queueRebuild
);

rootsImage.addEventListener(
  "load",
  queueRebuild
);

mobile.addEventListener(
  "change",
  queueRebuild
);

if (document.fonts) {
  document.fonts.ready.then(
    queueRebuild
  );
}

if ("ResizeObserver" in window) {
  const observer =
    new ResizeObserver(queueRebuild);

  observer.observe(rootsScene);
  observer.observe(mapStage);
}

// ==========================================
// 29. INICIAR SITE
// ==========================================

buildMarkers();
selectFamily(0);
queueRebuild();
