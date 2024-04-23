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
    asignatures: "Matemáticas",
    students: ["Vyky Legier", "Jocelyn Malinowski"],
    curricular: true,
    no_curricular: false,
  },
  {
    id: 2,
    asignatures: "Lengua",
    curricular: true,
    no_curricular: false,
    students: ["Vyky Legier", "Jocelyn Malinowski"],
  },
  {
    id: 3,
    asignatures: "Ciencias Naturales",
    curricular: true,
    no_curricular: false,
    students: ["Vyky Legier", "Jocelyn Malinowski"],
  },
  {
    id: 4,
    asignatures: "Ciencias Sociales",
    curricular: true,
    no_curricular: false,
    students: ["Vyky Legier", "Jocelyn Malinowski"],
  },
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


export const events = [
  {
    id: 1,
    title: 'Event 1',
    start: new Date(),
    end: new Date(),
  }
]