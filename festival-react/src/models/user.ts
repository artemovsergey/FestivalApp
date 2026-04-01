import type { Region } from "./region"

export type User = {
    id: number,
    name: string,
    email: string,
    login: string
    password: string
    education: string,
    institut: string,

    regionId: number
    region?: Region,
    
    photo: string
}