import { Component } from '@angular/core';
import { Router,  } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgClass, NgIf } from '@angular/common';
import { AuthService } from '../services/auth.service'; // Update path as per your structure

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NgIf, FormsModule, NgClass],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  showSignInAlert: boolean = false;
  email: string = '';
  password: string = '';
  rememberMe: boolean = false;
  registrationMode: boolean = false;

  private userDatabase: { email: string; passwordHash: string }[] = [
    { email: 'assassin@creed.com', passwordHash: 'assassin123' },
    { email: 'daga@ubisoft.com', passwordHash: 'assassin123' },
  ];

  constructor(private router: Router, private authService: AuthService) {}

  toggleRegistration() {
    this.registrationMode = !this.registrationMode;
    this.email = '';
    this.password = '';
  }

  async hashPassword(password: string): Promise<string> {
    const encoder = new TextEncoder();
    const data = encoder.encode(password);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    return Array.from(new Uint8Array(hashBuffer))
      .map(byte => byte.toString(16).padStart(2, '0'))
      .join('');
  }

  async signIn() {
    if (this.email && this.password) {
      const hashedPassword = await this.hashPassword(this.password);
      const validCredentials = this.validateCredentials(this.email, hashedPassword);

      if (validCredentials) {
        this.authService.setLoggedIn(true);
        this.showSignInAlert = true;

        if (this.rememberMe) {
          localStorage.setItem('userSession', JSON.stringify({ email: this.email }));
        }

        setTimeout(() => {
          this.showSignInAlert = false;
          this.router.navigate(['#']);
        }, 1000);
      } else {
        alert('Login failed. Please check your credentials.');
      }
    } else {
      alert('Please enter valid credentials.');
    }
  }

  async register() {
    if (this.email && this.password) {
      const emailExists = this.userDatabase.some(user => user.email === this.email);
      if (emailExists) {
        alert('Email already exists. Please use a different email.');
        return;
      }

      const hashedPassword = await this.hashPassword(this.password);
      this.userDatabase.push({ email: this.email, passwordHash: hashedPassword });
      alert('Registration successful! Please sign in.');
      this.toggleRegistration();
    } else {
      alert('Please fill out all fields.');
    }
  }

  validateCredentials(email: string, hashedPassword: string): boolean {
    return this.userDatabase.some(
      user => user.email === email && user.passwordHash === hashedPassword
    );
  }
}
