import { HttpClient } from '@angular/common/http';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatToolbarModule, MatButtonModule, MatIconModule],
  providers: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-spa';
  sidenav = false;

  data = signal<Data[] | null>(null);

  constructor(http: HttpClient) {
    http.get<Data[]>('http://localhost:3000/data').subscribe((data) => {
      this.data.set(data);
    });
  }
}

interface Data {
  id: number;
  name: string;
}
