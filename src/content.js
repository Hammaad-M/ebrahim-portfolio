// ---------------------------------------------------------------------------
// All editable site content lives here. Change text below — no need to touch
// any component files.
// ---------------------------------------------------------------------------

// EDIT ME: contact placeholders
export const contact = {
  email: 'ebrahim.sorathia@example.com',
  linkedin: 'https://www.linkedin.com/in/your-profile-here',
  resumeUrl: '/resume.pdf', // drop resume.pdf into /public
}

export const hero = {
  name: 'Ebrahim Sorathia',
  identity: 'Chemical Engineering @ IIT Bombay',
  thesis:
    'Engineering chemical processes that are sustainable by design, from the first flowsheet to full scale.',
  drawingNo: 'LAB NOTEBOOK № ES-26',
  location: 'MUMBAI, IN',
}

export const about = {
  label: 'UNIT-01 · ABOUT',
  title: 'Background',
  paragraphs: [
    "I'm Ebrahim, a B.Tech Chemical Engineering student at IIT Bombay, from Mumbai. I think in flows: inputs, transformations, outputs. My inputs right now are rigorous coursework and every research opportunity I can get my hands on. The output I'm designing toward is a career in sustainable chemical engineering, from the lab bench to the plant floor.",
    "I'm actively looking for research internships and research projects in chemical engineering, especially where sustainability is the constraint that makes the problem interesting. Alongside my core degree, I'm planning either a minor in Industrial Engineering and Operations Research or an Honours in the Chemical Engineering department, because the engineers I admire understand both the reactor and the balance sheet.",
    "The long view: a Ph.D. or Master's in chemical engineering, or a strong start in the chemical industry, followed by years of hands-on work turning research into processes that run cleanly at scale.",
  ],
}

export const education = {
  label: 'UNIT-02 · EDUCATION',
  title: 'Education',
  degree: {
    institution: 'Indian Institute of Technology Bombay',
    program: 'B.Tech, Chemical Engineering',
    status: 'In progress',
    code: 'CH-BTECH',
  },
  planned: [
    {
      name: 'Minor in IEOR',
      detail:
        'Industrial Engineering and Operations Research, the mathematics of running things well: optimization, logistics, and decision-making under constraint.',
      code: 'PLANNED · TRACK A',
    },
    {
      name: 'Honours, Chemical Engineering',
      detail:
        'Deeper specialization within the department, with advanced coursework and research credits toward a graduate-school-ready profile.',
      code: 'PLANNED · TRACK B',
    },
  ],
  plannedNote:
    'One of these two tracks will be locked in before graduation. Both point the same direction: depth plus range.',
}

export const research = {
  label: 'UNIT-03 · RESEARCH',
  title: 'Research interests & goals',
  intro:
    "My research interest is green chemical engineering: processes that are cleaner because they were engineered that way from the first flowsheet. I'm seeking research internships and projects where I can do real work on real problems, while building toward a Ph.D. or Master's on this track.",
  areas: [
    {
      name: 'Green process design',
      detail: 'Flowsheets where waste streams are design failures, not line items.',
      code: 'RA-01',
    },
    {
      name: 'Energy-efficient separations',
      detail: 'Separations dominate plant energy budgets, so this is where the leverage lives.',
      code: 'RA-02',
    },
    {
      name: 'Carbon capture & utilization',
      detail: 'Turning emissions from an end-of-pipe cost into a feedstock.',
      code: 'RA-03',
    },
    {
      name: 'Circular / waste valorization',
      detail: 'Closing loops: one process’s residue as another’s raw material.',
      code: 'RA-04',
    },
  ],
  seeking: {
    heading: 'Currently seeking',
    items: [
      'Research internships in chemical engineering',
      'Research projects, sustainability-focused preferred',
      'Mentorship toward a Ph.D. / Master’s trajectory',
    ],
  },
}

export const certifications = {
  label: 'UNIT-04 · CREDENTIALS',
  title: 'Certifications',
  intro:
    'Three Certificates of Merit from the UGAC Career Cell (Learners’ Space 2026), chosen deliberately as a set. Together they cover the intersection I’m building toward: core chemical engineering, commercial judgment, and fluency with data and AI.',
  issuer: 'UGAC Career Cell · Learners’ Space 2026 · Certificate of Merit',
  signedBy:
    'Signed by Siddhant Gupta (General Secretary, Academic Affairs, UG) and Preisha Desai (Institute Secretary, Academic Affairs and Head, Career Cell)',
  items: [
    {
      vertex: 'CORE',
      name: 'Techno-Commercial Aspects of Chemical Industry',
      angle: 'The engineering-business interface',
      detail:
        'How chemical plants make technical decisions that are also commercial ones: costing, feasibility, and the economics behind every process choice.',
      code: 'LS-26 / TC-01',
    },
    {
      vertex: 'AI',
      name: 'AI in Chemical Engineering',
      angle: 'The discipline’s next toolset',
      detail:
        'Applying machine learning to the problems chemical engineers actually have: modeling, optimization, and process intelligence.',
      code: 'LS-26 / AI-02',
    },
    {
      vertex: 'DATA',
      name: 'Data Science Fundamentals',
      angle: 'The common language of both worlds',
      detail:
        'The statistical and computational foundations that make both research and business decisions measurable.',
      code: 'LS-26 / DS-03',
    },
  ],
}

export const processWheel = {
  caption: 'FIG. 2 · PROCESS IN CONTINUOUS OPERATION',
  phases: [
    {
      code: 'PH-01 · INPUT',
      title: 'Research',
      text: 'Real problems, real data, and flowsheets designed to run clean from the very first pass.',
    },
    {
      code: 'PH-02 · TRANSFORM',
      title: 'Sustainability',
      text: 'Waste streams and emissions treated as design failures to engineer out, not costs to accept.',
    },
    {
      code: 'PH-03 · OUTPUT',
      title: 'Scale',
      text: 'Processes that hold up outside the lab: in plants, at throughput, year after year.',
    },
  ],
}

export const vision = {
  label: 'UNIT-05 · VISION',
  title: 'The path forward',
  intro:
    'Every process flow diagram reads left to right: feed, transformation, product. This is mine.',
  stages: [
    {
      id: 'V-01',
      name: 'Research',
      phase: 'NOW',
      summary: 'Internships & projects',
      detail:
        'Research internships and projects in sustainable chemical engineering at IIT Bombay, building the technical foundation and a graduate-school-ready profile.',
    },
    {
      id: 'V-02',
      name: 'Graduate study',
      phase: 'NEXT',
      summary: 'Ph.D. / Master’s track',
      detail:
        'Advanced study in green process engineering: deeper theory, serious research output, and a specialization worth hiring for.',
    },
    {
      id: 'V-03',
      name: 'Industry',
      phase: 'THEN',
      summary: 'Research applied at scale',
      detail:
        'Carrying that research into the chemical industry, where cleaner processes stop being papers and start being plants.',
    },
  ],
  streams: ['S-01', 'S-02'],
}

export const contactSection = {
  label: 'UNIT-06 · CONTACT',
  title: 'Get in touch',
  intro:
    'If you’re working on sustainable chemical engineering as a researcher, a lab, or a company, I’d like to hear from you. Research internship and project opportunities are especially welcome.',
}

export const footer = {
  titleBlock: {
    title: 'PERSONAL PORTFOLIO',
    drawnBy: 'E. SORATHIA',
    date: '2026',
  },
}

export const navSections = [
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'research', label: 'Research' },
  { id: 'certifications', label: 'Credentials' },
  { id: 'vision', label: 'Vision' },
  { id: 'contact', label: 'Contact' },
]
