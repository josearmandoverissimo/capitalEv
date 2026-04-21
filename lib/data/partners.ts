export interface Partner {
  slug: string;
  name: string;
  category: string;
  logo: string;
  description: string;
  longDescription: string;
  website?: string;
  details: { label: string; value: string }[];
}

export const partners: Partner[] = [
  {
    slug: "qualisaude",
    name: "Qualisaúde",
    category: "Qualidade & Acreditação",
    logo: "/images/logos/loogo-quali.png",
    description:
      "Administradora de benefícios com mais de 8 anos dedicados à saúde. Atua com planos empresariais e coletivos por adesão para entidades de classe e órgãos públicos em todo o Brasil.",
    longDescription:
      "A Qualisaúde é uma administradora de benefícios com mais de 8 anos de experiência no setor de saúde suplementar. Especializada em planos empresariais e coletivos por adesão, a empresa atende entidades de classe e órgãos públicos em mais de 18 estados brasileiros. Com um modelo de gestão centrado no beneficiário, a Qualisaúde combina tecnologia e atendimento humanizado para garantir acesso a planos de saúde de qualidade com custos competitivos. Sua atuação abrange desde a implantação dos planos até o suporte contínuo aos beneficiários, passando por gestão de elegibilidades e conciliação de faturas.",
    details: [
      { label: "Atuação", value: "18+ estados" },
      { label: "Segmento", value: "Administradora de Benefícios" },
      { label: "Especialidade", value: "Planos coletivos & empresariais" },
      { label: "Público", value: "Entidades de classe e órgãos públicos" },
    ],
  },
  {
    slug: "vycare-brasil",
    name: "Vycare Brasil",
    category: "Saúde Digital",
    logo: "/images/logos/logo-vycaree.jpg",
    description:
      "Administradora de benefícios especializada em planos de saúde e soluções para empresas e entidades de classe. Intermediária entre operadoras e beneficiários, com foco em atendimento personalizado.",
    longDescription:
      "A Vycare Brasil é uma administradora de benefícios que atua como elo estratégico entre operadoras de saúde, empresas e entidades de classe. Com cobertura nacional e um portfólio diversificado de planos, a Vycare se destaca pelo atendimento humanizado e pela capacidade de personalizar soluções de acordo com o perfil de cada cliente. A empresa oferece suporte completo desde a negociação com operadoras até a gestão do dia a dia dos beneficiários, garantindo agilidade, transparência e qualidade em cada etapa do processo.",
    details: [
      { label: "Atuação", value: "Nacional" },
      { label: "Segmento", value: "Benefícios de Saúde" },
      { label: "Especialidade", value: "Planos coletivos" },
      { label: "Destaque", value: "Atendimento humanizado" },
    ],
  },
  {
    slug: "concilium-beneficios",
    name: "Concilium Benefícios",
    category: "Gestão de Planos",
    logo: "/images/logos/logo-concilium.jpg",
    description:
      "Corretora e consultora de seguros sediada em Vitória/ES. Especializada em planos de saúde, previdência complementar e seguros. Integra o mesmo grupo da Qualisaúde como braço comercial no mercado capixaba.",
    longDescription:
      "A Concilium Benefícios é uma corretora e consultora de seguros com sede em Vitória, Espírito Santo. Fundada em 2020, a empresa atua como o braço comercial do Grupo Qualisaúde no mercado capixaba, oferecendo soluções em planos de saúde, previdência complementar e seguros. Com equipe especializada e foco consultivo, a Concilium guia seus clientes na escolha das melhores opções de proteção, sempre alinhando necessidades individuais e empresariais com as melhores coberturas disponíveis no mercado.",
    details: [
      { label: "Sede", value: "Vitória – ES" },
      { label: "Segmento", value: "Corretora de Seguros" },
      { label: "Status", value: "Ativa desde 2020" },
      { label: "Destaque", value: "Grupo Qualisaúde" },
    ],
  },
  {
    slug: "conciliar-saude",
    name: "Conciliar Saúde",
    category: "Conciliação Financeira",
    logo: "/images/logos/logo-conciliar.jpg",
    description:
      "Administradora focada na gestão de planos de saúde coletivos. Simplifica o acesso a planos de qualidade com suporte em conciliação de faturas e glosas.",
    longDescription:
      "A Conciliar Saúde é uma administradora especializada na gestão de planos de saúde coletivos, com forte atuação em conciliação de faturas e controle de glosas. Seu diferencial está na capacidade de simplificar processos complexos do setor de saúde suplementar, tornando o acesso a planos de qualidade mais ágil e transparente para empresas e beneficiários. A empresa atua com foco regional, construindo relações próximas com seus clientes e garantindo suporte contínuo na gestão financeira dos contratos de saúde.",
    details: [
      { label: "Segmento", value: "Administradora de Benefícios" },
      { label: "Especialidade", value: "Planos coletivos" },
      { label: "Destaque", value: "Conciliação de faturas" },
      { label: "Atuação", value: "Regional" },
    ],
  },
  {
    slug: "central-elegibilidades",
    name: "Central Elegibilidades",
    category: "Gestão de Benefícios",
    logo: "/images/logos/logo-centralelegibilidades.jpg",
    description:
      "Especializada na integração de administradoras de benefícios às entidades de classe. Torna possível a venda de planos coletivos por adesão de forma tecnológica, segura e ágil em todo o Brasil.",
    longDescription:
      "Fundada em 2022 em Belo Horizonte, a Central Elegibilidades é uma plataforma tecnológica que integra administradoras de benefícios e entidades de classe, viabilizando a comercialização de planos de saúde coletivos por adesão em todo o Brasil. Por meio de sua tecnologia proprietária, a empresa garante processos de elegibilidade seguros, rastreáveis e ágeis, reduzindo a burocracia e acelerando o acesso dos beneficiários aos planos. Com atuação nacional e crescimento acelerado desde sua fundação, a Central Elegibilidades representa a modernização da gestão de benefícios no setor de saúde suplementar.",
    details: [
      { label: "Atuação", value: "Nacional" },
      { label: "Segmento", value: "Plataforma de Elegibilidades" },
      { label: "Fundação", value: "2022" },
      { label: "Sede", value: "Belo Horizonte – MG" },
    ],
  },
  {
    slug: "vidapay",
    name: "VidaPay",
    category: "Soluções de Pagamento",
    logo: "/images/logos/logo-vidapay.jpg",
    description:
      "Plataforma de benefícios e pagamentos voltada ao mercado de saúde. Integra gestão de benefícios e pagamentos em uma só solução, com agilidade e tecnologia para beneficiários e empresas.",
    longDescription:
      "A VidaPay é uma fintech especializada no mercado de saúde, oferecendo uma plataforma unificada de benefícios e pagamentos. Sua solução integrada permite que empresas gerenciem benefícios de saúde e realizem pagamentos relacionados em um único ambiente digital, com segurança e rastreabilidade. Para os beneficiários, a VidaPay simplifica o acesso e o uso dos benefícios de saúde, enquanto para as empresas oferece controle financeiro apurado e redução de custos operacionais. A empresa representa a convergência entre tecnologia financeira e gestão de saúde.",
    details: [
      { label: "Segmento", value: "Fintech de Saúde" },
      { label: "Especialidade", value: "Pagamentos integrados" },
      { label: "Destaque", value: "Tecnologia financeira" },
      { label: "Público", value: "Beneficiários e empresas" },
    ],
  },
  {
    slug: "auditore-saude",
    name: "Auditore Saúde",
    category: "Auditoria & Gestão",
    logo: "/images/logos/logo-auditoresaude.jpg",
    description:
      "Especializada em auditoria de contas hospitalares e gestão de sinistros. Atua na revisão de procedimentos, controle de custos e conformidade assistencial para operadoras de planos de saúde.",
    longDescription:
      "A Auditore Saúde é referência em auditoria médica e gestão de sinistros no setor de saúde suplementar. Sua equipe multidisciplinar, composta por médicos auditores e especialistas em saúde, atua na revisão criteriosa de contas hospitalares, identificando inconsistências, glosas indevidas e oportunidades de redução de sinistralidade. A empresa presta serviços a operadoras de planos de saúde que buscam conformidade assistencial, controle de custos efetivo e maior eficiência na gestão de contratos hospitalares. Com metodologia estruturada e uso de tecnologia de análise de dados, a Auditore entrega resultados mensuráveis e consistentes.",
    details: [
      { label: "Segmento", value: "Auditoria Médica" },
      { label: "Especialidade", value: "Contas hospitalares & glosas" },
      { label: "Destaque", value: "Controle de sinistralidade" },
      { label: "Público", value: "Operadoras de saúde" },
    ],
  },
  {
    slug: "segprime-brasil",
    name: "SegPrime Brasil",
    category: "Seguros & Proteção",
    logo: "/images/logos/logo-segurosprime.jpg",
    description:
      "Corretora especializada em seguros de vida, saúde, empresarial e benefícios corporativos. Soluções personalizadas para proteção de pessoas e patrimônios com atendimento consultivo.",
    longDescription:
      "A SegPrime Brasil é uma corretora de seguros com atuação nacional, especializada em soluções personalizadas de proteção para pessoas físicas e jurídicas. Seu portfólio abrange seguros de vida, saúde, empresarial e benefícios corporativos, sempre com abordagem consultiva para entender as reais necessidades de cada cliente. A empresa se diferencia pelo compromisso com a educação financeira e securitária de seus clientes, ajudando-os a fazer escolhas conscientes sobre proteção de pessoas e patrimônios. Com equipe experiente e parcerias com as principais seguradoras do mercado, a SegPrime entrega segurança, qualidade e tranquilidade.",
    details: [
      { label: "Segmento", value: "Corretora de Seguros" },
      { label: "Especialidade", value: "Vida, saúde e empresarial" },
      { label: "Destaque", value: "Atendimento consultivo" },
      { label: "Atuação", value: "Nacional" },
    ],
  },
];

export function getPartnerBySlug(slug: string): Partner | undefined {
  return partners.find((p) => p.slug === slug);
}
