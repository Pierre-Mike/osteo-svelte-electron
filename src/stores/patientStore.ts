
import { writable } from "svelte/store"
import type { Patient } from "../types/Patient"
import uuid from "uuid"
import { Gender } from "../types/Gender";
export type JsonPatient = { [key: string]: Patient };

const init: JsonPatient = {
  "7aa49c0b-cbf9-41d2-bf80-fdfab06a626a": {
    "name": "test",
    "gender": Gender.Boy,
    "id": "7aa49c0b-cbf9-41d2-bf80-fdfab06a626a",
    "phone": "0248313521"
  },
  "7aa49c0b-cbf9-41d2-bf80-fdfab06a626b": {
    "name": "test2",
    "gender": Gender.Boy,
    "id": "7aa49c0b-cbf9-41d2-bf80-fdfab06a626b",
    "phone": "0248313521"
  },
  "7aa49c0b-cbf9-41d2-bf80-fdfab06a626c": {
    "name": "test3",
    "gender": Gender.Boy,
    "id": "7aa49c0b-cbf9-41d2-bf80-fdfab06a626c",
    "phone": "0248313521"
  },
  "7aa49c0b-cbf9-41d2-bf80-fdfab06a626d": {
    "name": "test4",
    "gender": Gender.Boy,
    "id": "7aa49c0b-cbf9-41d2-bf80-fdfab06a626d",
    "phone": "0248313521"
  },
  "7aa49c0b-cbf9-41d2-bf80-fdfab06a626e": {
    "name": "test5",
    "gender": Gender.Boy,
    "id": "7aa49c0b-cbf9-41d2-bf80-fdfab06a626e",
    "phone": "0248313521"
  },
  "7aa49c0b-cbf9-41d2-bf80-fdfab06a626f": {
    "name": "test6",
    "gender": Gender.Boy,
    "id": "7aa49c0b-cbf9-41d2-bf80-fdfab06a626f",
    "phone": "0248313521"
  },
  "7aa49c0b-cbf9-41d2-bf80-fdfab06a626g": {
    "name": "test7",
    "gender": Gender.Boy,
    "id": "7aa49c0b-cbf9-41d2-bf80-fdfab06a626g",
    "phone": "0248313521"
  },
  "7aa49c0b-cbf9-41d2-bf80-fdfab06a626h": {
    "name": "test8",
    "gender": Gender.Boy,
    "id": "7aa49c0b-cbf9-41d2-bf80-fdfab06a626h",
    "phone": "0248313521"
  },
  "7aa49c0b-cbf9-41d2-bf80-fdfab06a626i": {
    "name": "test9",
    "gender": Gender.Boy,
    "id": "7aa49c0b-cbf9-41d2-bf80-fdfab06a626i",
    "phone": "0248313521"
  },
  "7aa49c0b-cbf9-41d2-bf80-fdfab06a626j": {
    "name": "test10",
    "gender": Gender.Boy,
    "id": "7aa49c0b-cbf9-41d2-bf80-fdfab06a626j",
    "phone": "0248313521"
  },
}

let { update, subscribe } = writable(init)

const addPatient = (patient: Patient): Patient => {
  console.log(`adding patient ${patient.name}`)
  let newPatientID: string = uuid.v4();
  let newPatient: Patient = { ...patient, id: newPatientID };
  update(c => {
    c[newPatientID] = newPatient
    console.log(c)
    return c
  })
  return newPatient
}

function updatePatient(patient: Patient) {
    update(c => {
      console.log(`update patient : ${patient.id}`)
      c[patient.id] = { ...c[patient.id], ...patient }
      return c
    })
}

const removePatient = (id: string): void => {
  update(c => {
    delete c[id];
    return c
  })
}

export default {
  subscribe,
  addPatient, removePatient, updatePatient
}