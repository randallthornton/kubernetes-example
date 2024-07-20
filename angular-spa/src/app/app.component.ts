import { HttpClient } from '@angular/common/http';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-spa';
  sidenav = false;
  form = this.fb.group({
    name: ['', Validators.required],
  });
  data = signal<Data[] | null>(null);

  constructor(private http: HttpClient, private fb: FormBuilder) {
    http.get<Data[]>('http://localhost:3000/data').subscribe((data) => {
      this.data.set(data);
    });
  }

  createData() {
    if (this.form.valid) {
      this.http
        .post('http://localhost:3000/data', this.form.value)
        .subscribe(() => {
          this.http
            .get<Data[]>('http://localhost:3000/data')
            .subscribe((data) => {
              this.data.set(data);
            });
        });
    }
  }
}

interface Data {
  id: number;
  name: string;
}
