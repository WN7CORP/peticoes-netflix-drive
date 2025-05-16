
export interface Area {
  slug: string;
  nome: string;
  modelos: number;
  driveUrl: string;
}

export const areas: Area[] = [
  {
    slug: "trabalhista",
    nome: "Trabalhista",
    modelos: 1670,
    driveUrl: "https://drive.google.com/folderview?id=PASTA_TRABALHISTA",
  },
  {
    slug: "direito-adm",
    nome: "Direito Administrativo e Municipal-Estado",
    modelos: 260,
    driveUrl: "https://drive.google.com/folderview?id=PASTA_DIREITO_ADM",
  },
  {
    slug: "direito-bancario",
    nome: "Direito Bancário",
    modelos: 350,
    driveUrl: "https://drive.google.com/folderview?id=PASTA_DIREITO_BANCARIO",
  },
  {
    slug: "tributario",
    nome: "Tributário",
    modelos: 395,
    driveUrl: "https://drive.google.com/folderview?id=PASTA_TRIBUTARIO",
  },
  {
    slug: "familia",
    nome: "Família - Infância e Juventude",
    modelos: 721,
    driveUrl: "https://drive.google.com/folderview?id=PASTA_FAMILIA",
  },
  {
    slug: "advocacia",
    nome: "Advocacia",
    modelos: 38,
    driveUrl: "https://drive.google.com/folderview?id=PASTA_ADVOCACIA",
  },
  {
    slug: "consumidor",
    nome: "Consumidor",
    modelos: 234,
    driveUrl: "https://drive.google.com/folderview?id=PASTA_CONSUMIDOR",
  },
  {
    slug: "previdenciario",
    nome: "Previdenciário",
    modelos: 2497,
    driveUrl: "https://drive.google.com/folderview?id=PASTA_PREVIDENCIARIO",
  },
  {
    slug: "agricola",
    nome: "Agrícola-Agrário",
    modelos: 107,
    driveUrl: "https://drive.google.com/folderview?id=PASTA_AGRICOLA",
  },
  {
    slug: "plano-saude",
    nome: "Plano de saúde",
    modelos: 156,
    driveUrl: "https://drive.google.com/folderview?id=PASTA_PLANO_SAUDE",
  },
];

export const totalModelos =
  1670 + 260 + 350 + 395 + 721 + 38 + 234 + 2497 + 107 + 156;
