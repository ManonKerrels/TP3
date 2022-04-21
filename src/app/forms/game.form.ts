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

export const USER_INSERT_FORM = {
    'username': [ '', [Validators.required, Validators.minLength(1), Validators.maxLength(20)] ],
    'password': [ '', [Validators.required, Validators.minLength(1), Validators.maxLength(10)] ],
    'email': [ '', [Validators.minLength(5), Validators.maxLength(50)] ]
}

export const USER_CONNEXION_FORM = {
    'username': [ '', [Validators.required] ],
    'password': [ '', [Validators.required] ]
}