import { Validators } from "@angular/forms";

export const GAME_INSERT_FORM = {
    'title': [ '', [Validators.required, Validators.minLength(1), Validators.maxLength(100)]] ,
    'releaseDate': [ undefined ],
    'genre': [ '', [Validators.minLength(1), Validators.maxLength(50)]],
    'portage': [  '', [Validators.minLength(1), Validators.maxLength(50)]],
    'getLicence': [ '', [Validators.minLength(1), Validators.maxLength(50)]],
    'developer': [ undefined ],
    'editor': [ undefined ]
}

export const EDITOR_INSERT_FORM = {
    'name': [ '', [Validators.required, Validators.minLength(1), Validators.maxLength(100)] ],
    'parentCompany': [ '', [Validators.minLength(1), Validators.maxLength(50)] ],
    'creationDate': [ undefined ]
}

export const DEVELOPER_INSERT_FORM = {
    'name': [ '', [Validators.required, Validators.minLength(1), Validators.maxLength(100)] ],
    'parentCompany': [ '', [Validators.minLength(1), Validators.maxLength(50)] ],
    'creationDate': [ undefined ]
}