import { Validators } from "@angular/forms";

export const GAME_INSERT_FORM = {
    'title': [ '', [Validators.required, Validators.minLength(1), Validators.maxLength(100)]] ,
    'date': [ undefined ],
    'genre': [ '', [Validators.minLength(1), Validators.maxLength(50)]],
    'portage': [  '', [Validators.minLength(1), Validators.maxLength(50)]],
    'licence': [ '', [Validators.minLength(1), Validators.maxLength(50)]]
}

export const EDITOR_INSERT_FORM = {
    'name': [ '', [Validators.required, Validators.minLength(1), Validators.maxLength(100)] ],
    'company': [ '', [Validators.minLength(1), Validators.maxLength(50)] ],
    'date': [ undefined ]
}

export const DEVELOPER_INSERT_FORM = {
    'name': [ '', [Validators.required, Validators.minLength(1), Validators.maxLength(100)] ],
    'company': [ '', [Validators.minLength(1), Validators.maxLength(50)] ],
    'date': [ undefined ]
}