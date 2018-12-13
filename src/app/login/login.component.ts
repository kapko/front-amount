import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'app/services/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    public form: FormGroup;

    constructor(
        private fb: FormBuilder,
        private router: Router,
        private authService: AuthService
    ) {
        this.form = this.fb.group({
            name: ['', [Validators.required]],
            phone: [null, [Validators.required]]
        });
    }

    ngOnInit() {
    }

    public submit(): void {
        if (this.form.valid) {
            this.authService
                .login(this.form.value)
                .subscribe(
                    token => {
                        localStorage.setItem('token', token);
                        this.router.navigate(['/list']);
                    },
                    err => {
                        console.log(err);
                    }
                )
        }
    }

}
