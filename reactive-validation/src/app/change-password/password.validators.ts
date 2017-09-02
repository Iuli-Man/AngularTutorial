import { AbstractControl, ValidationErrors, ValidatorFn, FormGroup } from '@angular/forms';

export class PasswordValidators {

    static validOldPassword(control: AbstractControl) : Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (control.value != '1234')
                    resolve({ invalidOldPassword: true });
                else 
                    resolve(null);    
            }, 2000);
        });
    }

    static matchPasswords(group: FormGroup) : ValidationErrors | null {
        if (group.get('confirmPassword').value !== group.get('newPassword').value) {
            return {matchPasswords: true};
        }
        return null;
    }
}