import { Developer } from "./developer.model";
import { Editor } from "./editor.model";

export interface gameForm {
    title: String,
    releaseDate: Date,
    genre: String,
    portage: String,
    getLicence: boolean,
    developer: Developer,
    editor: Editor
}