import { TAuditorium } from "../../entities/auditorium/model/interface"
import { Side } from "../../shared/model/geometry"
import { GraphDestination, TGraph } from "../../entities/graph/model/interface"

const leftWing: TAuditorium[] = [
  {
    name: "РИ-201",
    height: 300,
    width: 100,
    coords: { x: 200, y: 0 },
    entry: Side.RIGHT,
    neighbors: ["Коридор РИ-201"],
    floor: 2,
    destination: GraphDestination.AUDITORIUM,
    section: "leftWing1",
  },
  {
    name: "Лестница",
    height: 70,
    width: 100,
    coords: { x: 350, y: 0 },
    entry: Side.LEFT,
    linkedAuditoriums: [{ floor: 2, id: "Лестница 2 этаж" }],
    neighbors: ["Коридор Лестница", "Коридор РИ-201", "Лестница 2 этаж"],
    floor: 2,
    destination: GraphDestination.LADDER,
    section: "leftWing1",
  },

  {
    name: "РИ-202",
    height: 40,
    width: 100,
    coords: { x: 350, y: 70 },
    entry: Side.LEFT,
    neighbors: ["Коридор РИ-203", "Коридор РИ-202"],
    floor: 2,
    destination: GraphDestination.AUDITORIUM,
    section: "leftWing1",
  },

  {
    name: "РИ-204",
    height: 90,
    width: 100,
    coords: { x: 350, y: 110 },
    entry: Side.LEFT,
    neighbors: ["Коридор РИ-205", "РИ-207", "Коридор РИ-207"],
    floor: 2,
    destination: GraphDestination.AUDITORIUM,
    section: "leftWing1",
  },

  {
    name: "РИ-206",
    height: 60,
    width: 100,
    coords: { x: 350, y: 200 },
    entry: Side.LEFT,
    neighbors: ["Коридор РИ-207", "РИ-209", "Коридор РИ-209"],
    floor: 2,
    destination: GraphDestination.AUDITORIUM,
    section: "leftWing1",
  },
  {
    name: "РИ-203",
    height: 250,
    width: 100,
    coords: { x: 200, y: 300 },
    entry: Side.RIGHT,
    neighbors: ["РИ-206", "Коридор РИ-207", "Коридор РИ-209"],
    floor: 2,
    destination: GraphDestination.AUDITORIUM,
    section: "leftWing1",
  },
  {
    name: "РИ-208",
    height: 100,
    width: 100,
    coords: { x: 350, y: 260 },
    entry: Side.LEFT,
    neighbors: ["Коридор РИ-211", "Коридор РИ-208"],
    floor: 2,
    destination: GraphDestination.AUDITORIUM,
    section: "leftWing1",
  },
  {
    name: "РИ-210",
    height: 50,
    width: 100,
    coords: { x: 350, y: 360 },
    entry: Side.LEFT,
    neighbors: ["Коридор РИ-213", "Коридор РИ-215", "РИ-215"],
    floor: 2,
    destination: GraphDestination.AUDITORIUM,
    section: "leftWing1",
  },
  {
    name: "РИ-207",
    height: 110,
    width: 100,
    coords: { x: 200, y: 550 },
    entry: Side.RIGHT,
    neighbors: ["Коридор РИ-213", "РИ-210", "Коридор РИ-215"],
    floor: 2,
    destination: GraphDestination.AUDITORIUM,
    section: "leftWing1",
  },
  {
    name: "РИ-209",
    height: 90,
    width: 100,
    coords: { x: 200, y: 660 },
    entry: Side.RIGHT,
    neighbors: ["Коридор РИ-212", "Коридор РИ-217"],
    floor: 2,
    destination: GraphDestination.AUDITORIUM,
    section: "leftWing1",
  },
  {
    name: "РИ-212",
    height: 50,
    width: 100,
    coords: { x: 350, y: 410 },
    entry: Side.LEFT,
    neighbors: ["Коридор РИ-215", "Коридор РИ-212"],
    floor: 2,
    destination: GraphDestination.AUDITORIUM,
    section: "leftWing1",
  },
  {
    name: "РИ-214",
    height: 90,
    width: 100,
    coords: { x: 350, y: 460 },
    entry: Side.LEFT,
    neighbors: ["Коридор РИ-214", "Коридор РИ-217"],
    floor: 2,
    destination: GraphDestination.AUDITORIUM,
    section: "leftWing1",
  },
  {
    name: "РИ-211",
    height: 250,
    width: 100,
    coords: { x: 200, y: 750 },
    entry: Side.RIGHT,
    neighbors: ["Коридор РИ-214", "Коридор РИ-219"],
    floor: 2,
    destination: GraphDestination.AUDITORIUM,
    section: "leftWing1",
    entryOffset: 5,
  },
  {
    name: "РИ-213",
    height: 50,
    width: 100,
    coords: { x: 200, y: 1000 },
    entry: Side.RIGHT,
    neighbors: ["Коридор РИ-214", "Коридор РИ-219"],
    floor: 2,
    destination: GraphDestination.AUDITORIUM,
    section: "leftWing1",
  },
  {
    name: "РИ-215",
    height: 200,
    width: 100,
    coords: { x: 200, y: 1050 },
    entry: Side.RIGHT,
    neighbors: ["Коридор РИ-221", "Коридор РИ-218"],
    floor: 2,
    destination: GraphDestination.AUDITORIUM,
    section: "leftWing1",
  },
  {
    name: "РИ-218",
    height: 200,
    width: 100,
    coords: { x: 350, y: 550 },
    entry: Side.LEFT,
    neighbors: ["Коридор РИ-216", "Коридор РИ-218"],
    floor: 2,
    destination: GraphDestination.AUDITORIUM,
    section: "leftWing1",
  },
  {
    name: "РИ-224",
    height: 250,
    width: 100,
    coords: { x: 350, y: 800 },
    entry: Side.LEFT,
    neighbors: ["РИ-223", "Коридор РИ-223", "Коридор РИ-220"],
    floor: 2,
    destination: GraphDestination.AUDITORIUM,
    section: "leftWing1",
  },
  {
    name: "РИ-222",
    height: 50,
    width: 100,
    coords: { x: 350, y: 750 },
    entry: Side.LEFT,
    neighbors: ["РИ-223", "Коридор РИ-223", "Коридор РИ-220"],
    floor: 2,
    destination: GraphDestination.AUDITORIUM,
    section: "leftWing1",
  },
  {
    name: "РИ-226",
    height: 50,
    width: 100,
    coords: { x: 350, y: 1050 },
    entry: Side.LEFT,
    neighbors: ["Коридор РИ-223", "Коридор РИ-222"],
    floor: 2,
    destination: GraphDestination.AUDITORIUM,
    section: "leftWing1",
  },
  {
    name: "Лестница 2",
    height: 50,
    width: 100,
    coords: { x: 350, y: 1100 },
    entry: Side.LEFT,
    neighbors: ["Коридор РИ-222", "РИ-225", "Коридор РИ-225", "Лестница 22"],
    floor: 2,
    destination: GraphDestination.LADDER,
    section: "leftWing1",
  },
]

const mainSection: TAuditorium[] = [
  {
    name: "РИ-217",
    height: 140,
    width: 270,
    coords: { x: 30, y: 1250 },
    entry: Side.RIGHT,
    neighbors: ["Коридор РИ-227а", "Коридор РИ-227"],
    floor: 2,
    destination: GraphDestination.AUDITORIUM,
    section: "main_section",
    entryOffset: 55,
  },
  {
    name: "РИ-219",
    height: 110,
    width: 270,
    coords: { x: 30, y: 1390 },
    entry: Side.RIGHT,
    neighbors: ["Коридор РИ-227", "Коридор РадиоТочка", "turnoverMainToLeft"],
    floor: 2,
    destination: GraphDestination.AUDITORIUM,
    section: "main_section",
    entryOffset: -40,
  },
  {
    name: "РИ-228",
    height: 100,
    width: 70,
    coords: { x: 350, y: 1250 },
    entry: Side.BOTTOM,
    neighbors: ["Коридор РадиоТочка", "Коридор РИ-224а"],
    floor: 2,
    destination: GraphDestination.AUDITORIUM,
    section: "main_section",
    entryOffset: -5,
  },
  {
    name: "С/у",
    height: 100,
    width: 50,
    coords: { x: 420, y: 1250 },
    entry: Side.BOTTOM,
    neighbors: ["Коридор С/у", "Коридор РИ-224а"],
    floor: 2,
    destination: GraphDestination.AUDITORIUM,
    section: "main_section",
  },
  {
    name: "Лестница Слева",
    height: 100,
    width: 120,
    coords: { x: 350, y: 1400 },
    entry: Side.LEFT,
    neighbors: ["Коридор гардероб налево", "Коридор Лестница Слева"],
    floor: 2,
    destination: GraphDestination.LADDER,
    section: "main_section",
  },
  {
    name: "РИ-223",
    height: 100,
    width: 160,
    coords: { x: 470, y: 1400 },
    entry: Side.TOP,
    neighbors: ["Коридор РИ-224", "Коридор РИ-226"],
    floor: 2,
    destination: GraphDestination.AUDITORIUM,
    section: "main_section",
    entryOffset: -65,
  },
  {
    name: "РИ-225",
    height: 100,
    width: 40,
    coords: { x: 630, y: 1400 },
    entry: Side.TOP,
    neighbors: ["Коридор РИ-224", "Коридор РИ-226"],
    floor: 2,
    destination: GraphDestination.AUDITORIUM,
    section: "main_section",
  },
  {
    name: "РИ-227",
    height: 100,
    width: 100,
    coords: { x: 670, y: 1400 },
    entry: Side.TOP,
    neighbors: ["Коридор РИ-224", "Коридор РИ-226"],
    floor: 2,
    destination: GraphDestination.AUDITORIUM,
    section: "main_section",
    entryOffset: -30,
  },
  {
    name: "РИ-229",
    height: 100,
    width: 55,
    coords: { x: 770, y: 1400 },
    entry: Side.TOP,
    neighbors: ["Коридор РИ-224", "Коридор РИ-226"],
    floor: 2,
    destination: GraphDestination.AUDITORIUM,
    section: "main_section",
  },
  {
    name: "РИ-231",
    height: 100,
    width: 55,
    coords: { x: 825, y: 1400 },
    entry: Side.TOP,
    neighbors: ["Коридор РИ-224", "Коридор РИ-226"],
    floor: 2,
    destination: GraphDestination.AUDITORIUM,
    section: "main_section",
  },
  {
    name: "РИ-233",
    height: 100,
    width: 60,
    coords: { x: 880, y: 1400 },
    entry: Side.TOP,
    neighbors: ["Коридор РИ-224", "Коридор РИ-226"],
    floor: 2,
    destination: GraphDestination.AUDITORIUM,
    section: "main_section",
  },
  {
    name: "РИ-235",
    height: 100,
    width: 170,
    coords: { x: 940, y: 1400 },
    entry: Side.TOP,
    neighbors: ["Коридор РИ-224", "Коридор РИ-226"],
    floor: 2,
    destination: GraphDestination.AUDITORIUM,
    section: "main_section",
    entryOffset: -60,
  },
  {
    name: "РИ-230",
    height: 100,
    width: 200,
    coords: { x: 470, y: 1250 },
    entry: Side.BOTTOM,
    neighbors: ["Коридор РИ-224", "Коридор РИ-226"],
    floor: 2,
    destination: GraphDestination.AUDITORIUM,
    section: "main_section",
    entryOffset: 80,
  },

  {
    name: "РИ-232",
    height: 100,
    width: 100,
    coords: { x: 670, y: 1250 },
    entry: Side.BOTTOM,
    neighbors: ["Коридор РИ-232", "Коридор РИ-234"],
    floor: 2,
    destination: GraphDestination.AUDITORIUM,
    section: "main_section",
    entryOffset: -30,
  },
  {
    name: "РИ-234",
    height: 100,
    width: 170,
    coords: { x: 770, y: 1250 },
    entry: Side.BOTTOM,
    neighbors: ["Коридор РИ-236", "Коридор РИ-238"],
    floor: 2,
    destination: GraphDestination.AUDITORIUM,
    section: "main_section",
    entryOffset: 55,
  },
  {
    name: "РИ-236",
    height: 100,
    width: 170,
    coords: { x: 940, y: 1250 },
    entry: Side.BOTTOM,
    neighbors: ["Коридор РИ-238 направо", "Коридор РИ-238"],
    floor: 2,
    destination: GraphDestination.AUDITORIUM,
    section: "main_section",
    entryOffset: 70,
  },
  {
    name: "Лестница Справа",
    height: 100,
    width: 120,
    coords: { x: 1110, y: 1400 },
    entry: Side.RIGHT,
    neighbors: ["Коридор гардероб направо", "Коридор Лестница Справа"],
    floor: 2,
    destination: GraphDestination.LADDER,
    section: "main_section",
  },
]

const rightWing: TAuditorium[] = [
  {
    name: "РИ-238",
    height: 100,
    width: 70,
    coords: { x: 1160, y: 1250 },
    entry: Side.BOTTOM,
    neighbors: ["Коридор РИ-238а"],
    floor: 2,
    destination: GraphDestination.AUDITORIUM,
    section: "rightWing1",
  },
  {
    name: "С/у (Ж)\nвторой этаж",
    height: 100,
    width: 50,
    coords: { x: 1110, y: 1250 },
    entry: Side.BOTTOM,
    neighbors: ["Коридор РИ-238а"],
    floor: 2,
    destination: GraphDestination.AUDITORIUM,
    section: "rightWing1",
  },
  {
    name: "РИ-237",
    height: 150,
    width: 200,
    coords: { x: 1330, y: 1350 },
    entry: Side.LEFT,
    neighbors: ["Коридор РИ-235"],
    floor: 2,
    destination: GraphDestination.AUDITORIUM,
    section: "rightWing1",
  },
  {
    name: "РИ-239",
    height: 100,
    width: 200,
    coords: { x: 1330, y: 1250 },
    entry: Side.LEFT,
    neighbors: ["Коридор РИ-238а", "Коридор РИ-237", "Коридор РИ-240"],
    floor: 2,
    destination: GraphDestination.AUDITORIUM,
    section: "rightWing1",
  },
  {
    name: "РИ-238а",
    height: 100,
    width: 60,
    coords: { x: 1220, y: 1150 },
    entry: Side.RIGHT,
    neighbors: ["Коридор РИ-242", "Коридор РИ-240", "РИ-239"],
    floor: 2,
    destination: GraphDestination.AUDITORIUM,
    section: "rightWing1",
  },
  {
    name: "РИ-239а",
    height: 100,
    width: 60,
    coords: { x: 1330, y: 1150 },
    entry: Side.LEFT,
    neighbors: ["Коридор РИ-242", "Коридор РИ-240", "РИ-240"],
    floor: 2,
    destination: GraphDestination.AUDITORIUM,
    section: "rightWing1",
  },
  {
    name: "РИ-240",
    height: 50,
    width: 100,
    coords: { x: 1180, y: 1100 },
    entry: Side.RIGHT,
    neighbors: ["Коридор РИ-242", "Коридор РИ-241"],
    floor: 2,
    destination: GraphDestination.AUDITORIUM,
    section: "rightWing1",
  },
  {
    name: "РИ-241",
    height: 50,
    width: 100,
    coords: { x: 1330, y: 1100 },
    entry: Side.LEFT,
    neighbors: ["Коридор РИ-241", "Коридор РИ-244"],
    floor: 2,
    destination: GraphDestination.AUDITORIUM,
    section: "rightWing1",
  },
  {
    name: "РИ-242",
    height: 50,
    width: 100,
    coords: { x: 1180, y: 1050 },
    entry: Side.RIGHT,
    neighbors: ["Коридор РИ-244", "Коридор РИ-243"],
    floor: 2,
    destination: GraphDestination.AUDITORIUM,
    section: "rightWing1",
  },
  {
    name: "РИ-250",
    height: 125,
    width: 100,
    coords: { x: 1180, y: 700 },
    entry: Side.RIGHT,
    neighbors: ["Коридор РИ-246", "Коридор РИ-245"],
    floor: 2,
    destination: GraphDestination.AUDITORIUM,
    section: "rightWing1",
  },
  {
    name: "РИ-248",
    height: 125,
    width: 100,
    coords: { x: 1180, y: 825 },
    entry: Side.RIGHT,
    neighbors: ["Коридор РИ-246", "Коридор РИ-245"],
    floor: 2,
    destination: GraphDestination.AUDITORIUM,
    section: "rightWing1",
  },
  {
    name: "РИ-246",
    height: 50,
    width: 100,
    coords: { x: 1180, y: 950 },
    entry: Side.RIGHT,
    neighbors: ["Коридор РИ-246", "Коридор РИ-245"],
    floor: 2,
    destination: GraphDestination.AUDITORIUM,
    section: "rightWing1",
  },
  {
    name: "РИ-244",
    height: 50,
    width: 100,
    coords: { x: 1180, y: 1000 },
    entry: Side.RIGHT,
    neighbors: ["Коридор РИ-246", "Коридор РИ-245"],
    floor: 2,
    destination: GraphDestination.AUDITORIUM,
    section: "rightWing1",
  },
  {
    name: "РИ-243",
    height: 150,
    width: 100,
    coords: { x: 1330, y: 950 },
    entry: Side.LEFT,
    neighbors: ["Коридор РИ-246", "Коридор РИ-243"],
    floor: 2,
    destination: GraphDestination.AUDITORIUM,
    section: "rightWing1",
  },
  {
    name: "РИ-247",
    height: 100,
    width: 100,
    coords: { x: 1330, y: 750 },
    entry: Side.LEFT,
    neighbors: ["Коридор РИ-245"],
    floor: 2,
    destination: GraphDestination.AUDITORIUM,
    section: "rightWing1",
  },
  {
    name: "РИ-245",
    height: 100,
    width: 100,
    coords: { x: 1330, y: 850 },
    entry: Side.LEFT,
    neighbors: ["Коридор РИ-245"],
    floor: 2,
    destination: GraphDestination.AUDITORIUM,
    section: "rightWing1",
  },
  {
    name: "Лестница 2",
    height: 50,
    width: 100,
    coords: { x: 1330, y: 700 },
    entry: Side.LEFT,
    neighbors: ["Коридор РИ-245"],
    floor: 2,
    destination: GraphDestination.AUDITORIUM,
    section: "rightWing1",
  },
]
export const neighborsGraphSecond: TGraph[] = [
  {
    id: "turnoverLeftToMain",
    destination: GraphDestination.TURN_OVER,
    height: 0,
    neighbors: ["РИ-225а", "Коридор РИ-225"],
    direction: Side.RIGHT,
    points: [325, 1225, 325, 1300],
    section: "leftWing1",
    floor: 2,
    linkedSection: ["main_section"],
  },

  {
    id: "turnoverMainToLeft",
    destination: GraphDestination.TURN_OVER,
    height: 0,
    neighbors: [],
    direction: Side.RIGHT,
    points: [325, 1300, 325, 1375],
    section: "main_section2",
    floor: 2,
    linkedSection: ["leftWing2"],
  },
  {
    id: "turnoverLeftToMain",
    destination: GraphDestination.TURN_OVER,
    height: 0,
    neighbors: ["РИ-225а", "Коридор РИ-225"],
    direction: Side.RIGHT,
    points: [325, 1225, 325, 1300],
    section: "leftWing1",
    floor: 2,
    linkedSection: ["main_section"],
  },
  {
    id: "Коридор РИ-228",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: ["РИ-246", "РИ-243", "Коридор РИ-245", "Коридор РИ-243"],
    direction: Side.RIGHT,
    points: [1805, 925, 1305, 975],
    section: "rightWing1",
    floor: 2,
  },
  {
    id: "Коридор РИ-245",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: ["РИ-246", "РИ-245", "Коридор РИ-246"],
    direction: Side.RIGHT,
    points: [1305, 875, 1305, 925],
    section: "rightWing1",
    floor: 2,
  },
  {
    id: "Коридор РИ-246",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: ["РИ-246", "РИ-243", "Коридор РИ-245", "Коридор РИ-243"],
    direction: Side.RIGHT,
    points: [1305, 925, 1305, 975],
    section: "rightWing1",
    floor: 2,
  },
  {
    id: "Коридор РИ-243",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: ["РИ-243", "РИ-244", "Коридор РИ-246", "Коридор РИ-244"],
    direction: Side.RIGHT,
    points: [1305, 975, 1305, 1050],
    section: "rightWing1",
    floor: 2,
  },
  {
    id: "Коридор РИ-244",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: ["РИ-241", "РИ-244", "Коридор РИ-243", "Коридор РИ-241"],
    direction: Side.RIGHT,
    points: [1305, 1050, 1305, 1100],
    section: "rightWing1",
    floor: 2,
  },
  {
    id: "Коридор РИ-241",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: ["РИ-241", "РИ-242", "Коридор РИ-244", "Коридор РИ-242"],
    direction: Side.RIGHT,
    points: [1305, 1100, 1305, 1125],
    section: "rightWing1",
    floor: 2,
  },
  {
    id: "Коридор РИ-242",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: [
      "РИ-240",
      "РИ-239",
      "РИ-242",
      "Коридор РИ-241",
      "Коридор РИ-240",
    ],
    direction: Side.RIGHT,
    points: [1305, 1125, 1305, 1200],
    section: "rightWing1",
    floor: 2,
  },
  {
    id: "Коридор РИ-240",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: [
      "РИ-240",
      "РИ-239",
      "РИ-237",
      "Коридор РИ-242",
      "Коридор РИ-237",
    ],
    direction: Side.RIGHT,
    points: [1305, 1200, 1305, 1300],
    section: "rightWing1",
    floor: 2,
  },
  {
    id: "Коридор РИ-237",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: [
      "РИ-237",
      "turnoverRightToMain",
      "Коридор РИ-238а",
      "Коридор РИ-240",
    ],
    direction: Side.RIGHT,
    points: [1305, 1300, 1305, 1375],
    section: "rightWing1",
    floor: 2,
  },
  {
    id: "Коридор РИ-238а",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: ["РИ-238а", "РИ-237", "Коридор РИ-240", "Коридор РИ-237"],
    direction: Side.RIGHT,
    points: [1255, 1300, 1305, 1300],
    section: "rightWing1",
    floor: 2,
  },
  {
    id: "Коридор РИ-235",
    destination: GraphDestination.CORRIDOR,
    height: 0,
    neighbors: ["РИ-235", "turnoverRightToMain", "Коридор РИ-237"],
    direction: Side.RIGHT,
    points: [1305, 1375, 1305, 1425],
    section: "rightWing1",
    floor: 2,
  },
]

export const wallsSecond = [
  { x: 300, y: 0, width: 50, height: 0, floor: 2 },
  { x: 300, y: 1500, width: 50, height: 0, floor: 2 },
  { x: 350, y: 1150, width: 0, height: 100, floor: 2 },
  { x: 470, y: 1500, width: 700, height: 0, floor: 2 },
  { x: 1230, y: 1500, width: 100, height: 0, floor: 2 },
  { x: 1280, y: 700, width: 50, height: 0, floor: 2 },
]

export const configSectionsGraphSecond: TGraph[] = [
  {
    id: "leftWing1",
    destination: GraphDestination.SECTION,
    height: 0,
    neighbors: ["main_section"],
    direction: Side.RIGHT,
    points: [0, 0, 0, 0],
    section: "leftWing1",
    floor: 2,
  },
  {
    id: "main_section",
    destination: GraphDestination.SECTION,
    height: 0,
    neighbors: ["leftWing1", "rightWing1"],
    direction: Side.RIGHT,
    points: [0, 0, 0, 0],
    section: "main_section",
    floor: 2,
  },
  {
    id: "rightWing1",
    destination: GraphDestination.SECTION,
    height: 0,
    neighbors: ["main_section"],
    direction: Side.RIGHT,
    points: [0, 0, 0, 0],
    section: "rightWing1",
    floor: 2,
  },
]

export const auditoriumsConfigSecond = [
  ...leftWing,
  ...mainSection,
  ...rightWing,
]
