export const ColegiosData = [
  {
    id: 1,
    escuela_name: "Erv",
    organization: "public",
    userName: "public_erv",
    password: "123456"
  },

];
export const AsignaturasData = [
  {
    id: 1,
    asignature: "Matemáticas",
    curricular: true,
    no_curricular: false,
    students: [
      { name: "Vyky Legier", grades: [] },
      { name: "Jocelyn Malinowski", grades: [] }
    ]
  },
  {
    id: 2,
    asignature: "Lengua",
    curricular: true,
    no_curricular: false,
    students: [
      { name: "Vyky Legier", grades: [] },
      { name: "Jocelyn Malinowski", grades: [] }
    ]
  },
  {
    id: 3,
    asignature: "Ciencias Naturales",
    curricular: true,
    no_curricular: false,
    students: [
      { name: "Vyky Legier", grades: [] },
      { name: "Jocelyn Malinowski", grades: [] }
    ]
  },
  {
    id: 4,
    asignature: "Ciencias Sociales",
    curricular: true,
    no_curricular: false,
    students: [
      { name: "Vyky Legier", grades: [] },
      { name: "Jocelyn Malinowski", grades: [] }
    ]
  }
];

export const AlumnosData = [
  {
    id: 1,
    first_name: "Vyky",
    last_name: "Legier",
    dni: 18548471,
    edad: 15,
    email: "vlegier0@bandcamp.com",
    userName: "vyky_legier",
    password: 123456,
    gender: "Female",
    asignatures: ["Matemáticas", "Lengua", "Ciencias Sociales", "Ciencias Naturales", "Educación Física"],
    attendances: [
      {
        "id": 1,
        "type": "PRESENTE",
        "date": "2024-04-01"
      },
      {
        "id": 2,
        "type": "JUSTIFICADO",
        "date": "2024-04-02"
      },
      {
        "id": 3,
        "type": "INJUSTIFICADO",
        "date": "2024-04-03"
      },
      {
        "id": 4,
        "type": "NO_COMPUTABLE",
        "date": "2024-04-03"
      },
    ]
  },
  {
    id: 2,
    first_name: "Jocelyn",
    last_name: "Malinowski",
    dni: 45881805,
    edad: 16,
    email: "jmalinowski1@unblog.fr",
    userName: "jocelyn_malinowki",
    password: 123456,
    gender: "Female",
    asignatures: ["Matemáticas", "Lengua", "Ciencias Sociales", "Ciencias Naturales", "Educación Física", "Otra asignatura"],
    attendances: [
      {
        "id": 1,
        "type": "PRESENTE",
        "date": "2024-04-01"
      },
      {
        "id": 2,
        "type": "JUSTIFICADO",
        "date": "2024-04-02"
      },
      {
        "id": 3,
        "type": "NO_COMPUTABLE",
        "date": "2024-04-03"
      },
      {
        "id": 4,
        "type": "INJUSTIFICADO",
        "date": "2024-04-04"
      },
    ]
  }
];
export const PadresData = [
  {
    id: 1,
    first_name: "Marcia",
    last_name: "Cortin",
    dni: 35287645,
    hijos: [1, 2],
    email: "mcortin0@elegantthemes.com",
    userName: "marcia_cortin",
    password: 123456,
    phone: "748-375-9731",
  },

];

export const eventosColegio = [
  { 
      id: 1,
      title: "evento importante",
      date: "2024-04-22" 
  },
  { 
      id: 2,
      title: "evento destacado",
      date: "2024-04-16" 
  },
  { 
      id: 3,
      title: "conferencia anual",
      date: "2024-04-10" 
  },
  { 
      id: 4,
      title: "reunión de equipo",
      date: "2024-04-05" 
  },
  { 
      id: 5,
      title: "entrega de premios",
      date: "2024-04-20" 
  },
  { 
      id: 6,
      title: "seminario de desarrollo",
      date: "2024-04-15" 
  }
];


export const events = [
  {
    id: 1,
    title: 'Event 1',
    start: new Date(),
    end: new Date(),
  }
]