import { TAuditorium } from "../../entities/auditorium/model/interface"
import { Side } from "../../shared/model/geometry"
import { GraphDestination, TGraph } from "../../entities/graph/model/interface"

const leftWing4: TAuditorium[] = [
  {
    name: "РИ-401",
    height: 200,
    width: 100,
    coords: {
      x: 200,
      y: 0,
    },
    entry: Side.RIGHT,
    neighbors: ["Коридор Лестница 4floor", "Коридор РИ-401"],
    floor: 4,
    destination: GraphDestination.AUDITORIUM,
    section: "leftWing4",
    entryOffset: -25,
    id: "РИ-401",
  },
  {
    name: "Лестница",
    height: 70,
    width: 100,
    coords: {
      x: 350,
      y: 0,
    },
    entry: Side.LEFT,
    linkedAuditoriums: [
      {
        floor: 1,
        id: "Лестница 1floor",
      },
      {
        floor: 2,
        id: "Лестница 2floor",
      },
      {
        floor: 3,
        id: "Лестница 3floor",
      },
    ],
    neighbors: ["Коридор Лестница 4floor"],
    floor: 4,
    destination: GraphDestination.LADDER,
    section: "leftWing4",
    id: "Лестница 4floor",
  },
  {
    name: "РИ-402",
    height: 180,
    width: 100,
    coords: {
      x: 350,
      y: 70,
    },
    entry: Side.LEFT,
    neighbors: ["Коридор РИ-402", "Коридор РИ-401"],
    floor: 4,
    destination: GraphDestination.AUDITORIUM,
    section: "leftWing4",
    id: "РИ-402",
  },
  {
    name: "РИ-404",
    height: 100,
    width: 100,
    coords: {
      x: 350,
      y: 250,
    },
    entry: Side.LEFT,
    neighbors: ["РИ-403", "Коридор РИ-402", "Коридор РИ-403"],
    floor: 4,
    destination: GraphDestination.AUDITORIUM,
    section: "leftWing4",
    entryOffset: 0,
    id: "РИ-404",
  },
  {
    name: "РИ-406",
    height: 200,
    width: 100,
    coords: {
      x: 350,
      y: 350,
    },
    entry: Side.LEFT,
    neighbors: ["Коридор РИ-405", "Коридор РИ-406"],
    floor: 4,
    destination: GraphDestination.AUDITORIUM,
    section: "leftWing4",
    entryOffset: 0,
    id: "РИ-406",
  },
  {
    name: "РИ-403",
    height: 200,
    width: 100,
    coords: {
      x: 200,
      y: 200,
    },
    entry: Side.RIGHT,
    neighbors: ["Коридор РИ-402", "Коридор РИ-403", "РИ-404"],
    floor: 4,
    destination: GraphDestination.AUDITORIUM,
    section: "leftWing4",
    entryOffset: 0,
    id: "РИ-403",
  },
  {
    name: "РИ-405",
    height: 50,
    width: 100,
    coords: {
      x: 200,
      y: 400,
    },
    entry: Side.RIGHT,
    neighbors: ["Коридор РИ-403", "Коридор РИ-405"],
    floor: 4,
    destination: GraphDestination.AUDITORIUM,
    section: "leftWing4",
    id: "РИ-405",
  },
  {
    name: "РИ-407",
    height: 50,
    width: 100,
    coords: {
      x: 200,
      y: 450,
    },
    entry: Side.RIGHT,
    neighbors: ["Коридор РИ-406", "Коридор РИ-407"],
    floor: 4,
    destination: GraphDestination.AUDITORIUM,
    section: "leftWing4",
    entryOffset: 0,
    id: "РИ-407",
  },
  {
    name: "РИ-409",
    height: 50,
    width: 100,
    coords: {
      x: 200,
      y: 500,
    },
    entry: Side.RIGHT,
    neighbors: ["Коридор РИ-407", "Коридор РИ-409"],
    floor: 4,
    destination: GraphDestination.AUDITORIUM,
    section: "leftWing4",
    entryOffset: 0,
    id: "РИ-409",
  },
  {
    name: "РИ-411",
    height: 200,
    width: 100,
    coords: {
      x: 200,
      y: 550,
    },
    entry: Side.RIGHT,
    neighbors: ["Коридор РИ-409", "Коридор РИ-411"],
    floor: 4,
    destination: GraphDestination.AUDITORIUM,
    section: "leftWing4",
    entryOffset: 0,
    id: "РИ-411",
  },
  {
    name: "РИ-413",
    height: 100,
    width: 100,
    coords: {
      x: 200,
      y: 750,
    },
    entry: Side.RIGHT,
    neighbors: ["Коридор РИ-413", "Коридор РИ-408а"],
    floor: 4,
    destination: GraphDestination.AUDITORIUM,
    section: "leftWing4",
    entryOffset: 0,
    id: "РИ-413",
  },
  {
    name: "РИ-415",
    height: 100,
    width: 100,
    coords: {
      x: 200,
      y: 850,
    },
    entry: Side.RIGHT,
    neighbors: ["Коридор РИ-408", "Коридор РИ-415"],
    floor: 4,
    destination: GraphDestination.AUDITORIUM,
    section: "leftWing4",
    entryOffset: 0,
    id: "РИ-415",
  },
  {
    name: "РИ-417",
    height: 100,
    width: 100,
    coords: {
      x: 200,
      y: 950,
    },
    entry: Side.RIGHT,
    neighbors: ["Коридор РИ-410", "Коридор РИ-417"],
    floor: 4,
    destination: GraphDestination.AUDITORIUM,
    section: "leftWing4",
    entryOffset: 0,
    id: "РИ-417",
  },
  {
    name: "РИ-419",
    height: 50,
    width: 100,
    coords: {
      x: 200,
      y: 1050,
    },
    entry: Side.RIGHT,
    neighbors: ["Коридор РИ-412", "Коридор РИ-419", "РИ-414"],
    floor: 4,
    destination: GraphDestination.AUDITORIUM,
    section: "leftWing4",
    entryOffset: 0,
    id: "РИ-419",
  },
  {
    name: "РИ-421",
    height: 150,
    width: 100,
    coords: {
      x: 200,
      y: 1100,
    },
    entry: Side.RIGHT,
    neighbors: ["Коридор Лестница 2 4floor", "Коридор РИ-421"],
    floor: 4,
    destination: GraphDestination.AUDITORIUM,
    section: "leftWing4",
    entryOffset: 0,
    id: "РИ-421",
  },
  {
    name: "РИ-408а",
    height: 250,
    width: 100,
    coords: {
      x: 350,
      y: 550,
    },
    entry: Side.LEFT,
    neighbors: ["Коридор РИ-411", "Коридор РИ-408а"],
    floor: 4,
    destination: GraphDestination.AUDITORIUM,
    section: "leftWing4",
    id: "РИ-408а",
  },
  {
    name: "РИ-408",
    height: 50,
    width: 100,
    coords: {
      x: 350,
      y: 800,
    },
    entry: Side.LEFT,
    neighbors: ["Коридор РИ-413", "Коридор РИ-408"],
    floor: 4,
    destination: GraphDestination.AUDITORIUM,
    section: "leftWing4",
    entryOffset: 0,
    id: "РИ-408",
  },
  {
    name: "РИ-410",
    height: 150,
    width: 100,
    coords: {
      x: 350,
      y: 850,
    },
    entry: Side.LEFT,
    neighbors: ["Коридор РИ-415", "Коридор РИ-410"],
    floor: 4,
    destination: GraphDestination.AUDITORIUM,
    section: "leftWing4",
    id: "РИ-410",
  },
  {
    name: "РИ-412",
    height: 50,
    width: 100,
    coords: {
      x: 350,
      y: 1000,
    },
    entry: Side.LEFT,
    neighbors: ["Коридор РИ-417", "Коридор РИ-412"],
    floor: 4,
    destination: GraphDestination.AUDITORIUM,
    section: "leftWing4",
    entryOffset: 0,
    id: "РИ-412",
  },
  {
    name: "РИ-414",
    height: 50,
    width: 100,
    coords: {
      x: 350,
      y: 1050,
    },
    entry: Side.LEFT,
    neighbors: ["РИ-419", "Коридор РИ-412", "Коридор РИ-419"],
    floor: 4,
    destination: GraphDestination.AUDITORIUM,
    section: "leftWing4",
    entryOffset: 0,
    id: "РИ-414",
  },
  {
    name: "Лестница 2",
    height: 50,
    width: 100,
    coords: {
      x: 350,
      y: 1100,
    },
    entry: Side.LEFT,
    linkedAuditoriums: [
      { floor: 1, id: "Лестница 2 1floor" },
      { floor: 2, id: "Лестница 2 2floor" },
      { floor: 3, id: "Лестница 2 3floor" },
    ],
    neighbors: ["Коридор РИ-419", "Коридор Лестница 2 4floor"],
    floor: 4,
    destination: GraphDestination.LADDER,
    section: "leftWing4",
    id: "Лестница 2 4floor",
  },
  {
    name: "РИ-423",
    height: 125,
    width: 50,
    coords: {
      x: 250,
      y: 1250,
    },
    entry: Side.RIGHT,
    neighbors: ["Коридор РИ-421", "Коридор РИ-423"],
    floor: 4,
    entryOffset: 3,
    destination: GraphDestination.AUDITORIUM,
    section: "leftWing4",
    id: "РИ-423",
  },
  {
    name: "РИ-425",
    height: 125,
    width: 50,
    coords: {
      x: 250,
      y: 1375,
    },
    entry: Side.RIGHT,
    neighbors: ["Коридор РИ-425", "Коридор Лестница Слева 4floor"],
    floor: 4,
    destination: GraphDestination.AUDITORIUM,
    section: "leftWing4",
    id: "РИ-425",
  },
  {
    name: "Лестница Слева",
    height: 100,
    width: 120,
    coords: {
      x: 350,
      y: 1400,
    },
    entry: Side.LEFT,
    linkedAuditoriums: [
      { floor: 1, id: "Лестница Слева 1floor" },
      { floor: 2, id: "Лестница Слева 2floor" },
      { floor: 3, id: "Лестница Слева 3floor" },
    ],
    neighbors: ["Коридор Лестница Слева 4floor"],
    floor: 4,
    destination: GraphDestination.LADDER,
    section: "leftWing4",
    id: "Лестница Слева 4floor",
  },
]

const mainSection4: TAuditorium[] = [
  {
    name: "РИ-416",
    height: 100,
    width: 70,
    coords: {
      x: 350,
      y: 1250,
    },
    entry: Side.BOTTOM,
    neighbors: ["Коридор РИ-438", "Коридор РИ-443"],
    floor: 4,
    destination: GraphDestination.AUDITORIUM,
    section: "mainSection4",
    entryOffset: 20,
    id: "РИ-416",
  },
  {
    name: "С/у",
    height: 100,
    width: 50,
    coords: {
      x: 420,
      y: 1250,
    },
    entry: Side.BOTTOM,
    neighbors: ["Коридор РИ-428", "Коридор C/у 4floor"],
    floor: 4,
    destination: GraphDestination.AUDITORIUM,
    section: "mainSection4",
    id: "С/у 4floor",
  },
  {
    name: "РИ-418",
    height: 100,
    width: 150,
    coords: {
      x: 470,
      y: 1250,
    },
    entry: Side.BOTTOM,
    neighbors: ["Коридор РИ-423", "РИ-425", "Коридор РИ-430"],
    floor: 4,
    destination: GraphDestination.AUDITORIUM,
    section: "mainSection4",
    entryOffset: -60,
    id: "РИ-418",
  },
  {
    name: "РИ-418а",
    height: 100,
    width: 100,
    coords: {
      x: 620,
      y: 1250,
    },
    entry: Side.BOTTOM,
    neighbors: ["Коридор РИ-430", "КРИ-427", "Коридор РИ-432", "РИ-427"],
    floor: 4,
    destination: GraphDestination.AUDITORIUM,
    section: "mainSection4",
    entryOffset: 30,
    id: "РИ-418а",
  },
  {
    name: "РИ-420",
    height: 100,
    width: 50,
    coords: {
      x: 720,
      y: 1250,
    },
    entry: Side.BOTTOM,
    neighbors: ["Коридор РИ-431", "Коридор РИ-434", "РИ-433"],
    floor: 4,
    destination: GraphDestination.AUDITORIUM,
    section: "mainSection4",
    entryOffset: 0,
    id: "РИ-420",
  },
  {
    name: "РИ-422",
    height: 100,
    width: 50,
    coords: {
      x: 770,
      y: 1250,
    },
    entry: Side.BOTTOM,
    neighbors: ["Коридор РИ-435", "Коридор РИ-436"],
    floor: 4,
    destination: GraphDestination.AUDITORIUM,
    section: "mainSection4",
    entryOffset: 0,
    id: "РИ-422",
  },
  {
    name: "РИ-424",
    height: 100,
    width: 50,
    coords: {
      x: 820,
      y: 1250,
    },
    entry: Side.BOTTOM,
    neighbors: ["Коридор РИ-428", "Коридор C/у 4floor"],
    floor: 4,
    destination: GraphDestination.AUDITORIUM,
    section: "mainSection4",
    id: "РИ-424",
  },
  {
    name: "РИ-426а",
    height: 100,
    width: 50,
    coords: {
      x: 870,
      y: 1250,
    },
    entry: Side.BOTTOM,
    neighbors: ["Коридор РИ-428", "Коридор C/у 4floor"],
    floor: 4,
    destination: GraphDestination.AUDITORIUM,
    section: "mainSection4",
    id: "РИ-426а",
  },
  {
    name: "РИ-426",
    height: 100,
    width: 190,
    coords: {
      x: 920,
      y: 1250,
    },
    entry: Side.BOTTOM,
    neighbors: ["Коридор РИ-428", "Коридор C/у 4floor"],
    floor: 4,
    destination: GraphDestination.AUDITORIUM,
    entryOffset: 70,
    section: "mainSection4",
    id: "РИ-426",
  },
  {
    name: "С/у (Ж)\nчетвертый этаж",
    height: 100,
    width: 50,
    coords: {
      x: 1110,
      y: 1250,
    },
    entry: Side.BOTTOM,
    neighbors: ["Коридор РИ-436", "Коридор С/у (ж) четвертый этаж 4floor"],
    floor: 4,
    destination: GraphDestination.AUDITORIUM,
    section: "mainSection4",
    id: "С/у (Ж) четвертый этаж 4floor",
  },
  {
    name: "РИ-428",
    height: 100,
    width: 70,
    coords: {
      x: 1160,
      y: 1250,
    },
    entry: Side.BOTTOM,
    neighbors: ["Коридор С/у (ж) четвертый этаж 4floor", "Коридор РИ-438"],
    floor: 4,
    destination: GraphDestination.AUDITORIUM,
    section: "mainSection4",
    id: "РИ-428",
  },
  {
    name: "РИ-430",
    height: 100,
    width: 50,
    coords: {
      x: 1230,
      y: 1250,
    },
    entry: Side.RIGHT,
    neighbors: ["Коридор С/у (ж) четвертый этаж 4floor", "Коридор РИ-438"],
    floor: 4,
    destination: GraphDestination.AUDITORIUM,
    section: "mainSection4",
    id: "РИ-430",
  },
  {
    name: "РИ-427",
    height: 100,
    width: 100,
    coords: {
      x: 470,
      y: 1400,
    },
    entry: Side.TOP,
    neighbors: ["Коридор C/у 4floor"],
    floor: 4,
    destination: GraphDestination.AUDITORIUM,
    section: "mainSection4",
    entryOffset: -30,
    id: "РИ-427",
  },
  {
    name: "РИ-427а",
    height: 100,
    width: 150,
    coords: {
      x: 570,
      y: 1400,
    },
    entry: Side.TOP,
    neighbors: ["Коридор РИ-423", "РИ-430", "Коридор РИ-430"],
    floor: 4,
    destination: GraphDestination.AUDITORIUM,
    section: "mainSection4",
    entryOffset: 50,
    id: "РИ-427а",
  },
  {
    name: "РИ-429",
    height: 100,
    width: 55,
    coords: {
      x: 720,
      y: 1400,
    },
    entry: Side.TOP,
    neighbors: ["Коридор РИ-430", "РИ-432", "Коридор РИ-432"],
    floor: 4,
    destination: GraphDestination.AUDITORIUM,
    section: "mainSection4",
    entryOffset: 0,
    id: "РИ-429",
  },
  {
    name: "РИ-431",
    height: 100,
    width: 165,
    coords: {
      x: 775,
      y: 1400,
    },
    entry: Side.TOP,
    neighbors: ["Коридор РИ-432", "Коридор РИ-429"],
    floor: 4,
    destination: GraphDestination.AUDITORIUM,
    section: "mainSection4",
    entryOffset: -60,
    id: "РИ-431",
  },
  {
    name: "РИ-433",
    height: 100,
    width: 170,
    coords: {
      x: 940,
      y: 1400,
    },
    entry: Side.TOP,
    neighbors: ["Коридор РИ-434", "Коридор РИ-435"],
    floor: 4,
    destination: GraphDestination.AUDITORIUM,
    section: "mainSection4",
    entryOffset: 60,
    id: "РИ-433",
  },
  {
    name: "РИ-435",
    height: 100,
    width: 50,
    coords: {
      x: 1280,
      y: 1400,
    },
    entry: Side.LEFT,
    neighbors: ["Коридор РИ-434", "Коридор РИ-435"],
    floor: 4,
    destination: GraphDestination.AUDITORIUM,
    section: "mainSection4",
    entryOffset: 0,
    id: "РИ-435",
  },
  {
    name: "Лестница Справа",
    height: 100,
    width: 120,
    coords: {
      x: 1110,
      y: 1400,
    },
    entry: Side.RIGHT,
    linkedAuditoriums: [{ floor: 1, id: "Лестница Справа 1floor" }],
    neighbors: ["Коридор Лестница Справа 4floor"],
    floor: 4,
    destination: GraphDestination.LADDER,
    section: "mainSection4",
    id: "Лестница Справа 4floor",
  },
]

const rightWing4: TAuditorium[] = [
  {
    name: "РИ-442",
    height: 200,
    width: 100,
    coords: {
      x: 1180,
      y: 550,
    },
    entry: Side.RIGHT,
    neighbors: ["Коридор РИ-442 влево", "Коридор РИ-442 вправо"],
    floor: 4,
    destination: GraphDestination.AUDITORIUM,
    section: "rightWing4",
    entryOffset: 70,
    id: "РИ-442",
  },
  {
    name: "РИ-440",
    height: 150,
    width: 100,
    coords: {
      x: 1180,
      y: 750,
    },
    entry: Side.RIGHT,
    neighbors: ["Коридор РИ-442 вправо", "Коридор РИ-440"],
    floor: 4,
    destination: GraphDestination.AUDITORIUM,
    section: "rightWing4",
    entryOffset: -50,
    id: "РИ-440",
  },
  {
    name: "РИ-438",
    height: 150,
    width: 100,
    coords: {
      x: 1180,
      y: 900,
    },
    entry: Side.RIGHT,
    neighbors: ["Коридор РИ-443", "Коридор РИ-438"],
    floor: 4,
    destination: GraphDestination.AUDITORIUM,
    section: "rightWing4",
    entryOffset: -60,
    id: "РИ-438",
  },
  {
    name: "РИ-436",
    height: 50,
    width: 100,
    coords: {
      x: 1180,
      y: 1050,
    },
    entry: Side.RIGHT,
    neighbors: ["Коридор РИ-441", "Коридор РИ-436", "РИ-439"],
    floor: 4,
    destination: GraphDestination.AUDITORIUM,
    section: "rightWing4",
    entryOffset: 0,
    id: "РИ-436",
  },
  {
    name: "РИ-434",
    height: 50,
    width: 100,
    coords: {
      x: 1180,
      y: 1100,
    },
    entry: Side.RIGHT,
    neighbors: ["Коридор РИ-436", "Коридор РИ-437", "РИ-437"],
    floor: 4,
    destination: GraphDestination.AUDITORIUM,
    section: "rightWing4",
    entryOffset: 0,
    id: "РИ-434",
  },
  {
    name: "РИ-432",
    height: 100,
    width: 50,
    coords: {
      x: 1230,
      y: 1150,
    },
    entry: Side.RIGHT,
    neighbors: ["Коридор РИ-437", "РИ-435а"],
    floor: 4,
    destination: GraphDestination.AUDITORIUM,
    section: "rightWing4",
    entryOffset: -30,
    id: "РИ-432",
  },
  {
    name: "Лестница 3",
    height: 50,
    width: 100,
    coords: {
      x: 1330,
      y: 550,
    },
    entry: Side.LEFT,
    neighbors: ["Коридор Лестница 3"],
    floor: 4,
    destination: GraphDestination.AUDITORIUM,
    section: "rightWing4",
    id: "Лестница 3 4floor",
  },
  {
    name: "РИ-445",
    height: 200,
    width: 100,
    coords: {
      x: 1330,
      y: 600,
    },
    entry: Side.LEFT,
    neighbors: ["Коридор Лестница 3", "Коридор РИ-442 влево"],
    floor: 4,
    destination: GraphDestination.AUDITORIUM,
    entryOffset: -70,
    section: "rightWing4",
    id: "РИ-445",
  },
  {
    name: "РИ-443",
    height: 100,
    width: 100,
    coords: {
      x: 1330,
      y: 800,
    },
    entry: Side.LEFT,
    neighbors: ["Коридор РИ-440", "Коридор РИ-443"],
    floor: 4,
    destination: GraphDestination.AUDITORIUM,
    section: "rightWing4",
    entryOffset: 20,
    id: "РИ-443",
  },
  {
    name: "РИ-441",
    height: 150,
    width: 100,
    coords: {
      x: 1330,
      y: 900,
    },
    entry: Side.LEFT,
    neighbors: ["Коридор РИ-438", "Коридор РИ-441"],
    floor: 4,
    entryOffset: 60,
    destination: GraphDestination.AUDITORIUM,
    section: "rightWing4",
    id: "РИ-441",
  },
  {
    name: "РИ-439",
    height: 50,
    width: 100,
    coords: {
      x: 1330,
      y: 1050,
    },
    entry: Side.LEFT,
    neighbors: ["Коридор РИ-441", "Коридор РИ-436", "РИ-436"],
    floor: 4,
    destination: GraphDestination.AUDITORIUM,
    section: "rightWing4",
    id: "РИ-439",
  },
  {
    name: "РИ-437",
    height: 50,
    width: 100,
    coords: {
      x: 1330,
      y: 1100,
    },
    entry: Side.LEFT,
    neighbors: ["Коридор РИ-436", "РИ-434", "Коридор РИ-437"],
    floor: 4,
    destination: GraphDestination.AUDITORIUM,
    section: "rightWing4",
    entryOffset: 0,
    id: "РИ-437",
  },
  {
    name: "РИ-435а",
    height: 100,
    width: 50,
    coords: {
      x: 1330,
      y: 1150,
    },
    entry: Side.LEFT,
    neighbors: ["Коридор РИ-437", "РИ-432"],
    floor: 4,
    destination: GraphDestination.AUDITORIUM,
    section: "rightWing4",
    entryOffset: -30,
    id: "РИ-435а",
  },
]

export const neighborsGraphFourth: TGraph[] = [
  {
    id: "Коридор Лестница 4floor",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: ["Лестница 4floor", "РИ-401", "Коридор РИ-401"],
    direction: Side.RIGHT,
    points: [325, 35, 325, 75],
    section: "leftWing4",
    floor: 4,
  },
  {
    id: "Коридор РИ-401",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: [
      "Коридор Лестница 4floor",
      "РИ-401",
      "Коридор РИ-402",
      "РИ-402",
    ],
    direction: Side.RIGHT,
    points: [325, 75, 325, 160],
    section: "leftWing4",
    floor: 4,
  },
  {
    id: "Коридор РИ-402",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: [
      "Коридор РИ-401",
      "РИ-402",
      "РИ-403",
      "РИ-404",
      "Коридор РИ-403",
    ],
    direction: Side.RIGHT,
    points: [325, 160, 325, 300],
    section: "leftWing4",
    floor: 4,
  },
  {
    id: "Коридор РИ-403",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: [
      "РИ-403",
      "РИ-404",
      "Коридор РИ-402",
      "РИ-405",
      "Коридор РИ-405",
    ],
    direction: Side.RIGHT,
    points: [325, 300, 325, 425],
    section: "leftWing4",
    floor: 4,
  },
  {
    id: "Коридор РИ-405",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: ["РИ-405", "РИ-406", "Коридор РИ-403", "Коридор РИ-406"],
    direction: Side.RIGHT,
    points: [325, 425, 325, 450],
    section: "leftWing4",
    floor: 4,
  },
  {
    id: "Коридор РИ-406",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: ["РИ-406", "РИ-407", "Коридор РИ-405", "Коридор РИ-407"],
    direction: Side.RIGHT,
    points: [325, 450, 325, 475],
    section: "leftWing4",
    floor: 4,
  },
  {
    id: "Коридор РИ-407",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: ["РИ-407", "Коридор РИ-406", "РИ-409", "Коридор РИ-409"],
    direction: Side.RIGHT,
    points: [325, 475, 325, 525],
    section: "leftWing4",
    floor: 4,
  },
  {
    id: "Коридор РИ-409",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: ["РИ-409", "Коридор РИ-407", "РИ-411", "Коридор РИ-411"],
    direction: Side.RIGHT,
    points: [325, 525, 325, 650],
    section: "leftWing4",
    floor: 4,
  },
  {
    id: "Коридор РИ-411",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: ["РИ-411", "Коридор РИ-409", "РИ-408а", "Коридор РИ-408а"],
    direction: Side.RIGHT,
    points: [325, 650, 325, 675],
    section: "leftWing4",
    floor: 4,
  },
  {
    id: "Коридор РИ-408а",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: ["РИ-413", "Коридор РИ-411", "Коридор РИ-413", "РИ-408а"],
    direction: Side.RIGHT,
    points: [325, 675, 325, 800],
    section: "leftWing4",
    floor: 4,
  },
  {
    id: "Коридор РИ-413",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: ["РИ-413", "Коридор РИ-408а", "РИ-408", "Коридор РИ-408"],
    direction: Side.RIGHT,
    points: [325, 800, 325, 825],
    section: "leftWing4",
    floor: 4,
  },
  {
    id: "Коридор РИ-408",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: ["РИ-408", "Коридор РИ-413", "РИ-415", "Коридор РИ-415"],
    direction: Side.RIGHT,
    points: [325, 825, 325, 900],
    section: "leftWing4",
    floor: 4,
  },
  {
    id: "Коридор РИ-415",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: ["РИ-415", "Коридор РИ-408", "РИ-410", "Коридор РИ-410"],
    direction: Side.RIGHT,
    points: [325, 900, 325, 925],
    section: "leftWing4",
    floor: 4,
  },
  {
    id: "Коридор РИ-410",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: ["РИ-417", "Коридор РИ-417", "РИ-410", "Коридор РИ-415"],
    direction: Side.RIGHT,
    points: [325, 925, 325, 1000],
    section: "leftWing4",
    floor: 4,
  },
  {
    id: "Коридор РИ-417",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: ["РИ-417", "Коридор РИ-410", "РИ-412", "Коридор РИ-412"],
    direction: Side.RIGHT,
    points: [325, 1000, 325, 1025],
    section: "leftWing4",
    floor: 4,
  },
  {
    id: "Коридор РИ-412",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: [
      "РИ-412",
      "Коридор РИ-417",
      "РИ-419",
      "РИ-414",
      "Коридор РИ-419",
    ],
    direction: Side.RIGHT,
    points: [325, 1025, 325, 1075],
    section: "leftWing4",
    floor: 4,
  },
  {
    id: "Коридор РИ-419",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: [
      "РИ-419",
      "РИ-414",
      "Лестница 2 4floor",
      "Коридор РИ-412",
      "Коридор Лестница 2 4floor",
    ],
    direction: Side.RIGHT,
    points: [325, 1075, 325, 1125],
    section: "leftWing4",
    floor: 4,
  },
  {
    id: "Коридор Лестница 2 4floor",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: [
      "РИ-421",
      "Лестница 2 4floor",
      "Коридор РИ-419",
      "Коридор РИ-421",
    ],
    direction: Side.RIGHT,
    points: [325, 1125, 325, 1175],
    section: "leftWing4",
    floor: 4,
  },
  {
    id: "Коридор РИ-421",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: [
      "РИ-421",
      "Коридор Лестница 2 4floor",
      "РИ-423",
      "Коридор РИ-423",
    ],
    direction: Side.RIGHT,
    points: [325, 1175, 325, 1315],
    section: "leftWing4",
    floor: 4,
  },
  {
    id: "turnoverMain4ToLeft4",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: ["РИ-416", "Коридор РИ-416"],
    direction: Side.RIGHT,
    points: [350, 1375, 385, 1375],
    section: "mainSection4",
    linkedSection: ["leftWing4"],
    floor: 4,
  },
  {
    id: "turnoverLeft4ToMain4",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: ["Коридор РИ-423", "Коридор РИ-425"],
    direction: Side.RIGHT,
    points: [325, 1375, 350, 1375],
    section: "leftWing4",
    linkedSection: ["mainSection4"],
    floor: 4,
  },
  {
    id: "Коридор РИ-423",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: [
      "РИ-423",
      "Коридор РИ-421",
      "turnoverLeft4ToMain4",
      "Коридор РИ-425",
    ],
    direction: Side.RIGHT,
    points: [325, 1315, 325, 1375],
    section: "leftWing4",
    floor: 4,
  },
  {
    id: "Коридор РИ-425",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: [
      "РИ-425",
      "Коридор РИ-423",
      "turnoverLeft4ToMain4",
      "Коридор Лестница Слева 4floor",
    ],
    direction: Side.RIGHT,
    points: [325, 1375, 325, 1440],
    section: "leftWing4",
    floor: 4,
  },
  {
    id: "Коридор Лестница Слева 4floor",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: ["РИ-425", "Лестница Слева 4floor", "Коридор РИ-425"],
    direction: Side.RIGHT,
    points: [325, 1440, 325, 1450],
    section: "leftWing4",
    floor: 4,
  },
  {
    id: "Коридор С/у (ж) четвертый этаж 4floor",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: [
      "Коридор РИ-436",
      "С/у (Ж) четвертый этаж 2 floor",
      "РИ-438",
      "Коридор РИ-438",
    ],
    direction: Side.RIGHT,
    points: [1135, 1375, 1195, 1375],
    section: "mainSection4",
    floor: 4,
  },

  // {
  //   id: "Коридор РИ-438",
  //   destination: GraphDestination.CORRIDOR,
  //   height: 0,
  //   neighbors: [
  //     "РИ-438",
  //     "Коридор С/у (ж) четвертый этаж 4floor",
  //     "РИ-437",
  //     "Коридор РИ-437",
  //     "TurnoverMain4ToRight4",
  //   ],
  //   direction: Side.RIGHT,
  //   points: [1195, 1375, 1305, 1375],
  //   section: "mainSection4",
  //   floor: 4,
  // },
  // {
  //   id: "Коридор С/у (ж) четвертый этаж 4floor",
  //   destination: GraphDestination.CORRIDOR,
  //   height: 0,
  //   neighbors: [
  //     "Коридор РИ-436",
  //     "С/у (Ж) четвертый этаж 2 floor",
  //     "РИ-438",
  //     "Коридор РИ-438",
  //   ],
  //   direction: Side.RIGHT,
  //   points: [1135, 1375, 1195, 1375],
  //   section: "mainSection4",
  //   floor: 4,
  // },

  {
    id: "Коридор Лестница 3",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: ["Лестница 3 4floor", "РИ-445"],
    direction: Side.RIGHT,
    points: [1305, 575, 1305, 630],
    section: "rightWing4",
    floor: 4,
  },
  {
    id: "Коридор РИ-442 влево",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: [
      "РИ-445",
      "Коридор Лестница 3",
      "Коридор РИ-442 вправо",
      "РИ-442",
    ],
    direction: Side.RIGHT,
    points: [1305, 630, 1305, 720],
    section: "rightWing4",
    floor: 4,
  },
  {
    id: "Коридор РИ-442 вправо",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: ["Коридор РИ-442 влево", "РИ-442", "РИ-440", "Коридор РИ-440"],
    direction: Side.RIGHT,
    points: [1305, 720, 1305, 775],
    section: "rightWing4",
    floor: 4,
  },
  {
    id: "Коридор РИ-440",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: [
      "РИ-440",
      "Коридор РИ-442 вправо",
      "Коридор РИ-443",
      "РИ-443",
      "РИ-438",
      "Коридор РИ-438",
    ],
    direction: Side.RIGHT,
    points: [1305, 775, 1305, 870],
    section: "rightWing4",
    floor: 4,
  },
  {
    id: "Коридор РИ-443",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: ["Коридор РИ-440", "РИ-443", "РИ-438", "Коридор РИ-438"],
    direction: Side.RIGHT,
    points: [1305, 870, 1305, 915],
    section: "rightWing4",
    floor: 4,
  },
  {
    id: "Коридор РИ-438",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: ["Коридор РИ-443", "РИ-438", "РИ-441", "Коридор РИ-441"],
    direction: Side.RIGHT,
    points: [1305, 915, 1305, 1035],
    section: "rightWing4",
    floor: 4,
  },
  {
    id: "Коридор РИ-441",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: [
      "Коридор РИ-438",
      "РИ-441",
      "РИ-436",
      "РИ-439",
      "Коридор РИ-436",
    ],
    direction: Side.RIGHT,
    points: [1305, 1035, 1305, 1075],
    section: "rightWing4",
    floor: 4,
  },
  {
    id: "Коридор РИ-436",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: [
      "Коридор РИ-441",
      "РИ-436",
      "РИ-439",
      "РИ-434",
      "РИ-437",
      "Коридор РИ-437",
    ],
    direction: Side.RIGHT,
    points: [1305, 1075, 1305, 1125],
    section: "rightWing4",
    floor: 4,
  },
  {
    id: "Коридор РИ-437",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: ["Коридор РИ-436", "РИ-434", "РИ-437", "РИ-432", "РИ-435а"],
    direction: Side.RIGHT,
    points: [1305, 1125, 1305, 1170],
    section: "rightWing4",
    floor: 4,
  },
]

export const wallsFourth = [
  { x: 300, y: 0, width: 50, height: 0, floor: 4 },
  { x: 300, y: 1500, width: 50, height: 0, floor: 4 },
  { x: 350, y: 1150, width: 0, height: 100, floor: 4 },
  { x: 470, y: 1500, width: 700, height: 0, floor: 4 },
  { x: 1230, y: 1500, width: 100, height: 0, floor: 4 },
  { x: 1280, y: 550, width: 50, height: 0, floor: 4 },
  { x: 1330, y: 1250, width: 0, height: 150, floor: 4 },
]

export const configSectionsGraphFourth: TGraph[] = [
  {
    id: "leftWing4",
    destination: GraphDestination.SECTION,
    height: 0,
    neighbors: ["mainSection4"],
    direction: Side.RIGHT,
    points: [0, 0, 0, 0],
    section: "leftWing4",
    floor: 4,
  },
  {
    id: "mainSection4",
    destination: GraphDestination.SECTION,
    height: 0,
    neighbors: ["leftWing4", "rightWing4"],
    direction: Side.RIGHT,
    points: [0, 0, 0, 0],
    section: "mainSection4",
    floor: 4,
  },
  {
    id: "rightWing4",
    destination: GraphDestination.SECTION,
    height: 0,
    neighbors: ["mainSection4"],
    direction: Side.RIGHT,
    points: [0, 0, 0, 0],
    section: "rightWing4",
    floor: 4,
  },
]

export const auditoriumsConfigFourth = [
  ...leftWing4,
  ...mainSection4,
  ...rightWing4,
]
