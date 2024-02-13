import { AbstractControl, ValidationErrors, Validators } from "@angular/forms";

export const passwordMatchValidation: Validators = (control: AbstractControl): ValidationErrors  | null => {
    const password = control.get('password');
    const confirmPassword = control.get('comfirmpassword');

    if(!password || !confirmPassword) {
        return null;
    }
    return password.value == confirmPassword.value ? null : { passwordMisMatch: true }
}