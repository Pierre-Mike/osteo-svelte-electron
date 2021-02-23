import type { Gender } from './Gender'




export type Patient = {
  id?: string,
  name: string,
  birthday?: Date,
  gender?: Gender,
  phone?: string,
  email?: string,
  note?: string,
  smoke?: boolean,
  address?: string,
}

export const schema = {
  type: "object",
  properties: {
    id: { type: "string" },
    name: { type: "string", minLength: 2 },
    phone: { type: "string" },
    birthday: { type: "string" },
    email: { type: "string" },
    note: { type: "string" },
    address: { type: "string" },
    smoke: { type: "boolean" }
  },
  "required": ["name"]
}