import { TAuditorium } from "../../entities/auditorium/model/interface"
import { Side } from "../../shared/model/geometry"
import { GraphDestination, TGraph } from "../../entities/graph/model/interface"

export const auditoriumsConfig: TAuditorium[] = [
  {
    name: "РИ-101",
    height: 200,
    width: 150,
    coords: { x: 350, y: 250 },
    entry: Side.BOTTOM,
    neighbors: ["cor_1", "РИ-105"],
    floor: 1,
    section: "sec1",
  },
  {
    name: "РИ-102",
    height: 200,
    width: 150,
    coords: { x: 500, y: 250 },
    entry: Side.BOTTOM,
    neighbors: ["cor_1", "РИ-106", "cor_2"],
    floor: 1,
    section: "sec1",
  },
  {
    name: "РИ-103",
    height: 200,
    width: 150,
    coords: { x: 650, y: 250 },
    entry: Side.BOTTOM,
    neighbors: ["cor_2", "РИ-107", "cor_3"],
    floor: 1,
    section: "sec1",
  },
  {
    name: "РИ-104",
    height: 200,
    width: 150,
    coords: { x: 800, y: 250 },
    entry: Side.BOTTOM,
    neighbors: ["cor_3", "РИ-108", "turnover1to2"],
    floor: 1,
    section: "sec1",
  },
  {
    name: "РИ-105",
    height: 200,
    width: 150,
    coords: { x: 350, y: 500 },
    entry: Side.TOP,
    neighbors: ["cor_1", "РИ-101"],
    floor: 1,
    section: "sec1",
  },
  {
    name: "РИ-106",
    height: 200,
    width: 150,
    coords: { x: 500, y: 500 },
    entry: Side.TOP,
    neighbors: ["cor_1", "РИ-102", "cor_2"],
    floor: 1,
    section: "sec1",
  },
  {
    name: "РИ-107",
    height: 200,
    width: 150,
    coords: { x: 650, y: 500 },
    entry: Side.TOP,
    neighbors: ["cor_2", "РИ-103", "cor_3"],
    floor: 1,
    section: "sec1",
  },
  {
    name: "РИ-108",
    height: 200,
    width: 150,
    coords: { x: 800, y: 500 },
    entry: Side.TOP,
    neighbors: ["cor_3", "РИ-104", "turnover1to2"],
    floor: 1,
    section: "sec1",
  },
  {
    name: "РИ-109",
    height: 100,
    width: 150,
    coords: { x: 1025, y: 150 },
    entry: Side.RIGHT,
    neighbors: ["turnover2to1", "РИ-110"],
    floor: 1,
    section: "sec2",
  },
  {
    name: "РИ-110",
    height: 100,
    width: 150,
    coords: { x: 1225, y: 150 },
    entry: Side.LEFT,
    neighbors: ["turnover2to1", "РИ-109"],
    floor: 1,
    section: "sec2",
  },
]

export const neighborsGraph: TGraph[] = [
  {
    id: "turnover1to2",
    destination: GraphDestination.TURN_OVER,
    height: 150,
    neighbors: ["РИ-108", "cor_3", "РИ-104"],
    direction: Side.RIGHT,
    points: [875, 475, 1200, 475],
    section: "sec1",
    floor: 1,
    linkedSection: "sec2",
  },

  {
    id: "turnover2to1",
    destination: GraphDestination.TURN_OVER,
    height: 150,
    neighbors: ["РИ-109", "РИ-110"],
    direction: Side.RIGHT,
    points: [1200, 200, 1200, 475],
    section: "sec2",
    floor: 1,
    linkedSection: "sec1",
  },
  {
    id: "cor_1",
    destination: GraphDestination.CORRIDOR,
    height: 150,
    neighbors: ["РИ-102", "РИ-101", "РИ-105", "РИ-106", "cor_2"],
    direction: Side.RIGHT,
    points: [425, 475, 575, 475],
    section: "sec1",
    floor: 1,
  },
  {
    id: "cor_2",
    destination: GraphDestination.CORRIDOR,
    height: 150,
    neighbors: ["РИ-103", "РИ-102", "РИ-107", "РИ-106", "cor_1", "cor_3"],
    direction: Side.RIGHT,
    points: [575, 475, 725, 475],
    section: "sec1",
    floor: 1,
  },
  {
    id: "cor_3",
    destination: GraphDestination.CORRIDOR,
    height: 150,
    neighbors: ["РИ-108", "РИ-103", "РИ-107", "РИ-104", "turnover1to2"],
    direction: Side.RIGHT,
    points: [725, 475, 875, 475],
    section: "sec1",
    floor: 1,
  },
]

// Массив графов секций
export const sectionsGraph: TGraph[] = [
  {
    id: "sec1",
    destination: GraphDestination.SECTION,
    height: 0,
    neighbors: ["sec2"],
    direction: Side.RIGHT,
    points: [0, 0, 0, 0],
    section: "sec1",
    floor: 1,
  },
  {
    id: "sec2",
    destination: GraphDestination.SECTION,
    height: 0,
    neighbors: ["sec1"],
    direction: Side.RIGHT,
    points: [0, 0, 0, 0],
    section: "sec2",
    floor: 1,
  },
]
