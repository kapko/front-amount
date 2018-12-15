import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { CommonHelper } from 'app/services/common.helper.service';
import { PostsService } from 'app/services/posts.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-new-post',
    templateUrl: './new-post.component.html',
    styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {
    public paramsId: string;

    public form: FormGroup;

    public submitted: boolean;

    public note: string;

    constructor(
        private commonHelper: CommonHelper,
        private fb: FormBuilder,
        private router: Router,
        private postService: PostsService,
        private route: ActivatedRoute
    ) {
        if (this.route.snapshot && this.route.snapshot.params && this.route.snapshot.params.id) {
            this.paramsId = this.route.snapshot.params.id;

            this.postService
                .getPost(this.route.snapshot.params.id)
                .subscribe(post => {

                    Object.keys(post).forEach(p => {
                            if (p === '_id' || p === '__v') { return; }

                            this.form.get(p).setValue(post[p]);
                        });
                })
        }

        this.form = this.fb.group({
            qrcode: [null],
            title: [null, [Validators.required]],
            price: [null, [Validators.required]],
            amount: [null, [Validators.required]],
            soldAmount: [null],
            // todo amount * price
            // totalPrice: [null],
            // todo sell by seller
            // todo balance amount - soldAmount
            // balanceAmount: [null],
            // todo продано ед * цена = проданная цена
            // balancePrice: [null],

            // totalAmount: [null],
            // sold: [null],
            // soldPrice: [null],
            created: [Date.now()],
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
        if (this.form.valid) {
            if (this.paramsId) {
                this.updatePost();
            } else {
                this.createNew();
            }
        }
    }

    private updatePost(): void {
        this.postService
            .updatePost(this.paramsId, this.form.value)
            .subscribe(
                res => {
                    if (res['errors']) {
                        this.note = res['message'];
                    } else {
                        this.router.navigate(['/posts']);
                    }
                },
                err => {
                    this.note = err.message;
                }
            )
    }

    private createNew(): void {
        this.postService
            .createPost(this.form.value)
            .subscribe(
                res => {
                    if (res['errors']) {
                        this.note = res['message'];
                    } else {
                        this.router.navigate(['/posts']);
                    }
                },
                err => {
                    this.note = err.message;
                }
            );
    }

    public hideNote(): void {
        this.note = null;
    }

}
