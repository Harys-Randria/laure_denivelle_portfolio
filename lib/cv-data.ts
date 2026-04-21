export interface CVData {
  fr: {
    name: string;
    title: string;
    subtitle: string;
    email: string;
    phone: string;
    linkedin: string;
    about: string;
    stats: Array<{ label: string; value: string }>;
    skills: Array<{
      category: string;
      items: string[];
    }>;
    experience: Array<{
      company: string;
      sector: string;
      position: string;
      duration: string;
      isCurrent?: boolean;
      description: string;
      achievements: string[];
      technologies: string[];
    }>;
    education: Array<{
      school: string;
      degree: string;
      year: string;
      location: string;
    }>;
    certifications: Array<{
      name: string;
      issuer: string;
      year?: string;
    }>;
    languages: Array<{
      language: string;
      level: string;
    }>;
  };
  en: {
    name: string;
    title: string;
    subtitle: string;
    email: string;
    phone: string;
    linkedin: string;
    about: string;
    stats: Array<{ label: string; value: string }>;
    skills: Array<{
      category: string;
      items: string[];
    }>;
    experience: Array<{
      company: string;
      sector: string;
      position: string;
      duration: string;
      isCurrent?: boolean;
      description: string;
      achievements: string[];
      technologies: string[];
    }>;
    education: Array<{
      school: string;
      degree: string;
      year: string;
      location: string;
    }>;
    certifications: Array<{
      name: string;
      issuer: string;
      year?: string;
    }>;
    languages: Array<{
      language: string;
      level: string;
    }>;
  };
}

export const cvData: CVData = {
  fr: {
    name: 'Laure Denivelle',
    title: 'Consultante BI Senior',
    subtitle: 'Experte Qlik Sense / QlikView / Qlik Cloud',
    email: 'laure_d94@hotmail.com',
    phone: '+33 6 66 51 00 38',
    linkedin: 'linkedin.com/in/laure-denivelle-33890544',
    about: 'Consultante BI Senior avec +10 ans d\'expérience en conception, développement et optimisation de solutions décisionnelles pour secteurs Agro-alimentaire, Logement, Industrie et Formation. Experte Qlik (Sense, Cloud, View) certifiée Qlik Data Architect et Microsoft Power BI (PL-300). Spécialisée en pilotage de projets BI, modélisation de données, architectures Qlik et industrialisation des reportings. Intervention sur l\'ensemble du cycle BI : cadrage, modélisation, développement, migration Cloud, mise en production et accompagnement utilisateurs. Coordination transverse entre équipes métier, IT et partenaires avec capacité démontrée à moderniser des infrastructures BI et automatiser des reportings à grande échelle.',
    stats: [
      { label: 'Années d\'expérience', value: '10+' },
      { label: 'Projets BI réalisés', value: '50+' },
      { label: 'Applications Qlik gérées', value: '40+' },
      { label: 'Utilisateurs formés', value: '150+' },
    ],
    skills: [
      {
        category: 'Gestion de Projet BI',
        items: ['Pilotage de projet BI', 'Cadrage et recueil des besoins', 'Planification et priorisation', 'Gestion des risques', 'Animation de comités projet', 'Coordination équipes métier/IT', 'Agile/Scrum', 'Suivi des recettes fonctionnelles', 'Accompagnement au changement', 'Formation utilisateurs'],
      },
      {
        category: 'Qlik Expertise',
        items: ['Qlik Sense', 'Qlik Cloud', 'QlikView', 'NPrinting', 'Qlik Reporting (Tabular)', 'Qlik Data Gateway', 'Section Access', 'Ordonnancement', 'Administration Qlik (licences, droits utilisateurs)'],
      },
      {
        category: 'Migration & Architecture',
        items: ['Migration Qlik Sense vers Qlik Cloud', 'Industrialisation BI', 'Architecture en couches (extraction/transformation/restitution)', 'Automations rechargements', 'Applications de monitoring'],
      },
      {
        category: 'Modélisation & Performance',
        items: ['Modélisation de données (schéma étoile)', 'Optimisation des modèles de données', 'Optimisation des scripts de chargement', 'Réduction temps de rechargement', 'Méthode DAR (Dashboard/Analytics/Reports)'],
      },
      {
        category: 'Business Intelligence',
        items: ['Power BI (certifié PL-300)', 'DAX', 'Power Query', 'SAP Business Objects', 'Développement de KPI et indicateurs', 'Tableaux de bord', 'Dataviz', 'Reporting automatisé'],
      },
      {
        category: 'Data Management',
        items: ['SQL Server', 'PostgreSQL', 'MySQL', 'Talend (ETL)', 'Microsoft Dynamics', 'SharePoint', 'Qualité des données', 'Contrôle de cohérence', 'K4 (saisie budgétaire)'],
      },
      {
        category: 'Gouvernance & Sécurité',
        items: ['Data Gouvernance', 'Gestion des droits d\'accès', 'Section Access', 'Sécurisation des données', 'SSIS'],
      },
    ],
    experience: [
      {
        company: 'Intersnack',
        sector: 'Agro-alimentaire',
        position: 'Cheffe de Projet BI',
        duration: 'Mission au forfait',
        description: 'Pilotage et réalisation d\'un projet BI sous Qlik Cloud destiné au contrôle de gestion avec engagement sur délais, livrables et coordination des parties prenantes.',
        achievements: [
          'Pilotage complet du projet BI sous Qlik Cloud avec cadrage, planification, priorisation, suivi des charges, gestion des risques et animation de comités projet hebdomadaires en environnement Agile',
          'Recueil et formalisation des besoins métiers (contrôle de gestion) avec conception et validation d\'un modèle de données dédié au pilotage financier incluant indicateurs financiers avancés (analyse temporelle Year vs LY/Month vs LM/YTD, rolling forecast, analyse des écarts réalisé vs budget/forecast, projection dynamique de fin de période)',
          'Remplacement de 5 reportings Excel manuels par applications Qlik industrialisées avec supervision des développements, garantie de la qualité des livrables et mise en production sécurisée',
          'Formation de 3 utilisateurs clés (contrôle de gestion) avec accompagnement au changement et réduction estimée de 2 à 3 jours/homme par mois dans la production des reportings',
        ],
        technologies: ['Qlik Cloud', 'Office 365', 'SharePoint', 'Teams', 'Analyse financière', 'KPI'],
      },
      {
        company: 'Aegide / Domitys',
        sector: 'Logement sénior',
        position: 'Experte Qlik',
        duration: '2021 - 2025',
        isCurrent: true,
        description: 'Maintenance, évolution et modernisation d\'un parc décisionnel d\'environ 40 applications Qlik. Migration Qlik Sense Enterprise vers Qlik Cloud.',
        achievements: [
          'Conception, évolution et maintenance d\'un parc applicatif Qlik multi-directions (finance, marketing, exploitation, relation client, juridique, qualité, hôtellerie) avec modélisation de données issues de multiples outils sources et création d\'indicateurs opérationnels/financiers via méthode DAR (Dashboard/Analytics/Reports)',
          'Migration complète d\'environnement Qlik Sense on-premise vers Qlik Cloud avec installation Qlik Data Gateway, création des connexions, import Active Directory, adaptation des scripts/Section Access/design, optimisation des modèles pour le Cloud et industrialisation via automations et découpage en couches (extraction/transformation/restitution)',
          'Mise en place de reporting automatisé à grande échelle (130 résidences) via NPrinting avec génération de rapports Excel/PDF et diffusion automatique nationale. Création d\'applications de monitoring et reporting via Qlik Reporting (tabular/Excel)',
          'Administration Qlik avec gestion des licences, accès utilisateurs, Section Access et ordonnancement. Coordination transverse IT/métiers avec participation aux rituels Agile/Scrum et suivi des recettes. Impact direct sur +500 utilisateurs métiers',
        ],
        technologies: ['QlikView', 'Qlik Sense', 'Qlik Cloud', 'NPrinting', 'Qlik Reporting', 'SQL Server', 'PostgreSQL', 'Office 365', 'SharePoint', 'Teams', 'Microsoft Dynamics', 'Agile', 'SCRUM'],
      },
      {
        company: 'CDC Habitat',
        sector: 'Logement social',
        position: 'Consultante BI',
        duration: '2019 - 2021',
        description: 'Développement d\'applications QlikView pour le pilotage du parc immobilier.',
        achievements: [
          'Conception et maintenance de tableaux de bord QlikView dédiées au pilotage du parc immobilier avec développement des scripts de chargement et création d\'indicateurs métier (taux d\'occupation, délai de remplissage, gestion patrimoniale, statistiques d\'hébergement)',
          'Création de visualisations (KPI, graphiques combinés, nuages de points, graphiques cascade waterfall, jauges objectifs/budgets, pie charts) avec extraction via Talend et contrôle qualité des données',
          'Mise en place de reporting automatisé NPrinting Word avec planification et diffusion automatisée. Maintenance corrective et évolutive avec gestion des tickets utilisateurs et administration des droits d\'accès',
        ],
        technologies: ['QlikView', 'NPrinting', 'SQL Server', 'Talend', 'ETL', 'Data Quality'],
      },
      {
        company: 'Imerys',
        sector: 'Industrie',
        position: 'Consultante BI',
        duration: '2019 - 2020',
        description: 'Optimisation et maintenance d\'applications QlikView.',
        achievements: [
          'Maintenance des applications QlikView avec optimisation des modèles de données et amélioration des performances des applications',
          'Mise en place d\'un outil de saisie budgétaire avec K4 incluant création d\'une interface de saisie et enregistrement des données dans SQL Server',
          'Mise en place d\'un algorithme de complétion automatique de valeurs manquantes avec création d\'une application de contrôle de cohérence des données. Administration avec gestion des droits utilisateurs et configuration des chargements',
        ],
        technologies: ['QlikView', 'SQL Server', 'MySQL', 'K4', 'Data Quality', 'Algorithmes'],
      },
      {
        company: 'Organisme de formation (OPCO)',
        sector: 'Formation',
        position: 'Chargée de Mission Reporting',
        duration: '2014 - 2018',
        description: 'Responsable du volet restitution dans la mise en place d\'un système d\'information décisionnel basé sur QlikView.',
        achievements: [
          'État des lieux des reportings existants (SAP BO et SSIS) avec participation au choix de l\'outil décisionnel (QlikView retenu)',
          'Recueil et formalisation des besoins auprès d\'environ 50 utilisateurs avec analyse des besoins métier et création de dashboards QlikView dédiés à chaque direction métier',
          'Formation de 150 utilisateurs avec création de supports pédagogiques et support aux utilisateurs. Administration Qlik avec gestion des droits utilisateurs, licences et ordonnancement des rechargements',
        ],
        technologies: ['QlikView', 'SQL Server', 'SAP Business Objects', 'SSIS', 'SharePoint', 'Formation', 'Gouvernance BI'],
      },
    ],
    education: [
      {
        school: 'École Centrale Paris',
        degree: 'Master Spécialisé Management des Systèmes d\'Information',
        year: '2013',
        location: 'Châtenay-Malabry, France',
      },
      {
        school: 'ESIEE Management',
        degree: 'Master Management et Systèmes d\'Information',
        year: '2009-2012',
        location: 'Noisy-le-Grand, France',
      },
      {
        school: 'Lycée Turgot',
        degree: 'BTS Informatique de gestion - Développement d\'application',
        year: '2007-2009',
        location: 'Paris, France',
      },
      {
        school: 'Lycée Hector Berlioz',
        degree: 'Bac STG spécialité Comptabilité et finance des entreprises',
        year: '2007',
        location: 'Vincennes, France',
      },
    ],
    certifications: [
      {
        name: 'Certification Microsoft PL-300 Power BI Data Analyst Associate',
        issuer: 'Microsoft',
      },
      {
        name: 'Certification Qlik Data Architect',
        issuer: 'Qlik',
      },
    ],
    languages: [
      {
        language: 'Français',
        level: 'Natif',
      },
      {
        language: 'Anglais',
        level: 'Professionnel',
      },
    ],
  },
  en: {
    name: 'Laure Denivelle',
    title: 'Senior BI Consultant',
    subtitle: 'Qlik Sense / QlikView / Qlik Cloud Expert',
    email: 'ldecision@outlook.com',
    phone: '+33 6 66 51 00 38',
    linkedin: 'linkedin.com/in/laure-denivelle-33890544',
    about: 'Senior BI Consultant with 10+ years of experience in designing, developing, and optimizing business intelligence solutions for Agro-food, Housing, Manufacturing, and Training sectors. Qlik expert (Sense, Cloud, View) certified as Qlik Data Architect and Microsoft Power BI (PL-300). Specialized in BI project management, data modeling, Qlik architectures, and reporting industrialization. Full BI lifecycle expertise: scoping, modeling, development, Cloud migration, production deployment, and user training. Cross-functional coordination between business, IT, and partner teams with proven ability to modernize BI infrastructures and automate large-scale reporting.',
    stats: [
      { label: 'Years of Experience', value: '10+' },
      { label: 'BI Projects Delivered', value: '50+' },
      { label: 'Qlik Applications Managed', value: '40+' },
      { label: 'Users Trained', value: '150+' },
    ],
    skills: [
      {
        category: 'BI Project Management',
        items: ['BI project management', 'Scoping and requirements gathering', 'Planning and prioritization', 'Risk management', 'Project committee facilitation', 'Business/IT team coordination', 'Agile/Scrum', 'Functional testing follow-up', 'Change management', 'User training'],
      },
      {
        category: 'Qlik Expertise',
        items: ['Qlik Sense', 'Qlik Cloud', 'QlikView', 'NPrinting', 'Qlik Reporting (Tabular)', 'Qlik Data Gateway', 'Section Access', 'Scheduling', 'Qlik Administration (licenses, user rights)'],
      },
      {
        category: 'Migration & Architecture',
        items: ['Qlik Sense to Qlik Cloud migration', 'BI industrialization', 'Layered architecture (extraction/transformation/delivery)', 'Reload automations', 'Monitoring applications'],
      },
      {
        category: 'Modeling & Performance',
        items: ['Data modeling (star schema)', 'Data model optimization', 'Load script optimization', 'Reload time reduction', 'DAR method (Dashboard/Analytics/Reports)'],
      },
      {
        category: 'Business Intelligence',
        items: ['Power BI (PL-300 certified)', 'DAX', 'Power Query', 'SAP Business Objects', 'KPI and indicator development', 'Dashboards', 'Data visualization', 'Automated reporting'],
      },
      {
        category: 'Data Management',
        items: ['SQL Server', 'PostgreSQL', 'MySQL', 'Talend (ETL)', 'Microsoft Dynamics', 'SharePoint', 'Data quality', 'Consistency control', 'K4 (budget entry)'],
      },
      {
        category: 'Governance & Security',
        items: ['Data Governance', 'Access rights management', 'Section Access', 'Data security', 'SSIS'],
      },
    ],
    experience: [
      {
        company: 'Intersnack',
        sector: 'Agro-food',
        position: 'BI Project Manager',
        duration: 'Fixed-price engagement',
        description: 'BI project management and delivery under Qlik Cloud for management control with commitment to deadlines, deliverables, and stakeholder coordination.',
        achievements: [
          'Complete BI project management under Qlik Cloud with scoping, planning, prioritization, workload tracking, risk management, and weekly project committee facilitation in Agile environment',
          'Business requirements gathering and formalization (management control) with design and validation of financial management data model including advanced financial indicators (Year vs LY/Month vs LM/YTD temporal analysis, rolling forecast, actual vs budget/forecast variance analysis, dynamic period-end projection)',
          'Replacement of 5 manual Excel reports with industrialized Qlik applications including development supervision, deliverable quality assurance, and secured production deployment',
          'Training of 3 key users (management control) with change management support and estimated reduction of 2 to 3 man-days per month in reporting production',
        ],
        technologies: ['Qlik Cloud', 'Office 365', 'SharePoint', 'Teams', 'Financial analysis', 'KPI'],
      },
      {
        company: 'Aegide / Domitys',
        sector: 'Senior Housing',
        position: 'Qlik Expert',
        duration: '2021 - 2025',
        isCurrent: true,
        description: 'Maintenance, evolution, and modernization of a decision-support portfolio of approximately 40 Qlik applications. Migration from Qlik Sense Enterprise to Qlik Cloud.',
        achievements: [
          'Design, evolution, and maintenance of multi-directional Qlik application portfolio (finance, marketing, operations, customer relations, legal, quality, hospitality) with modeling of data from multiple source tools and creation of operational/financial indicators via DAR method (Dashboard/Analytics/Reports)',
          'Complete migration from Qlik Sense on-premise to Qlik Cloud with Qlik Data Gateway installation, connection creation, Active Directory import, script/Section Access/design adaptation, Cloud model optimization, and industrialization via automations and layered architecture (extraction/transformation/delivery)',
          'Large-scale automated reporting setup (130 residences) via NPrinting with Excel/PDF report generation and nationwide automatic distribution. Creation of monitoring applications and reporting via Qlik Reporting (tabular/Excel)',
          'Qlik administration with license management, user access, Section Access, and scheduling. Cross-functional IT/business coordination with Agile/Scrum ritual participation and testing follow-up. Direct impact on 500+ business users',
        ],
        technologies: ['QlikView', 'Qlik Sense', 'Qlik Cloud', 'NPrinting', 'Qlik Reporting', 'SQL Server', 'PostgreSQL', 'Office 365', 'SharePoint', 'Teams', 'Microsoft Dynamics', 'Agile', 'SCRUM'],
      },
      {
        company: 'CDC Habitat',
        sector: 'Social Housing',
        position: 'BI Consultant',
        duration: '2019 - 2021',
        description: 'QlikView application development for property portfolio management.',
        achievements: [
          'Design and maintenance of QlikView dashboards dedicated to property portfolio management with load script development and business indicator creation (occupancy rate, fill time, asset management, accommodation statistics)',
          'Visualization creation (KPI, combined charts, scatter plots, waterfall charts, objective/budget gauges, pie charts) with Talend extraction and data quality control',
          'Automated NPrinting Word reporting setup with scheduled automatic distribution. Corrective and evolutionary maintenance with user ticket management and access rights administration',
        ],
        technologies: ['QlikView', 'NPrinting', 'SQL Server', 'Talend', 'ETL', 'Data Quality'],
      },
      {
        company: 'Imerys',
        sector: 'Manufacturing',
        position: 'BI Consultant',
        duration: '2019 - 2020',
        description: 'QlikView application optimization and maintenance.',
        achievements: [
          'QlikView application maintenance with data model optimization and application performance improvement',
          'Budget entry tool implementation with K4 including entry interface creation and data recording in SQL Server',
          'Automatic missing value completion algorithm implementation with data consistency control application creation. Administration with user rights management and load configuration',
        ],
        technologies: ['QlikView', 'SQL Server', 'MySQL', 'K4', 'Data Quality', 'Algorithms'],
      },
      {
        company: 'Training Organization (OPCO)',
        sector: 'Training',
        position: 'Reporting Manager',
        duration: '2014 - 2018',
        description: 'Responsible for the delivery component in implementing a QlikView-based decision support system.',
        achievements: [
          'Assessment of existing reports (SAP BO and SSIS) with participation in decision-support tool selection (QlikView selected)',
          'Requirements gathering and formalization with approximately 50 users including business needs analysis and QlikView dashboard creation dedicated to each business department',
          'Training of 150 users with training material creation and user support. Qlik administration with user rights management, licensing, and reload scheduling',
        ],
        technologies: ['QlikView', 'SQL Server', 'SAP Business Objects', 'SSIS', 'SharePoint', 'Training', 'BI Governance'],
      },
    ],
    education: [
      {
        school: 'École Centrale Paris',
        degree: 'Specialized Master\'s Degree in Information Systems Management',
        year: '2013',
        location: 'Châtenay-Malabry, France',
      },
      {
        school: 'ESIEE Management',
        degree: 'Master\'s Degree in Management and Information Systems',
        year: '2009-2012',
        location: 'Noisy-le-Grand, France',
      },
      {
        school: 'Lycée Turgot',
        degree: 'BTS Computer Science - Application Development',
        year: '2007-2009',
        location: 'Paris, France',
      },
      {
        school: 'Lycée Hector Berlioz',
        degree: 'Baccalaureate STG specializing in Accounting and Corporate Finance',
        year: '2007',
        location: 'Vincennes, France',
      },
    ],
    certifications: [
      {
        name: 'Microsoft PL-300 Power BI Data Analyst Associate Certification',
        issuer: 'Microsoft',
      },
      {
        name: 'Qlik Data Architect Certification',
        issuer: 'Qlik',
      },
    ],
    languages: [
      {
        language: 'French',
        level: 'Native',
      },
      {
        language: 'English',
        level: 'Professional',
      },
    ],
  },
};
