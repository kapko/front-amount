import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { CommonHelper } from 'app/services/common.helper.service';

@Component({
    selector: 'app-new-post',
    templateUrl: './new-post.component.html',
    styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

    public form: FormGroup;

    public submitted: boolean;

    constructor(
        private commonHelper: CommonHelper,
        private fb: FormBuilder
    ) {
        this.form = this.fb.group({
            qrcode: [null],
            title: [null, [Validators.required]],
            amount: [null, [Validators.required]],
            price: [null, [Validators.required]],
            totalAmount: [null, [Validators.required]],
            totalPrice: [null, [Validators.required]],
            sold: [null],
            soldPrice: [null],
            soldAmount: [null],
            balanceAmount: [null],
            balancePrice: [null],
        });
    }


    public showError(controlName: string, error?: string, group?: AbstractControl): boolean {
        const form = this.form;
        const submitted = this.submitted;

        return this.commonHelper.showError({ controlName, error, group, form, submitted });
    }

    ngOnInit() {
    }

    public onSubmit(): void {

        console.log(this.form.value);

        if (this.form.valid) {

        }
    }

}
