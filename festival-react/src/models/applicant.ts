import type { Competence } from "./competence"
import type { Region } from "./region"
import type { User } from "./user"

export type Applicant = {
    id: number,

    userId: number,
    user: User,
    
    competenceId: number,
    competence: Competence

    regionId: number,
    region: Region
}