import { Game } from "./game.model"

export interface User{
    id: number
    username: String,
    password: String,
    email: String,
    games: Game[]
}