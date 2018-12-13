import { Injectable } from '@angular/core';
import { FormGroup, AbstractControl } from '@angular/forms';

export interface ErrorInterface {
    controlName: string;
    error: string;
    group: AbstractControl;
    form: FormGroup;
    submitted: boolean;
}

@Injectable({
    providedIn: 'root'
})
export class CommonHelper {

    constructor() { }

    public showError(errors: ErrorInterface) {
        const control = errors.group
            ? errors.group.get(errors.controlName)
            : errors.form.controls[errors.controlName];

        const showCondition = control && control.errors && Object.keys(control.errors).length ?
            control.dirty || control.touched || errors.submitted : false;

        return showCondition && (errors.error ? control.errors[errors.error] : true);
    }

    // public isSpaces(text: string): boolean {
    //     let show: boolean = false;
    //     if (text) {
    //         show = (text.match(/^\s+$/ig)) ? false : true;
    //     }
    //     return show;
    // }

}
