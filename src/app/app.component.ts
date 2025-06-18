import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,                // ✅ This is required if you're using standalone architecture
  imports: [RouterOutlet],        // ✅ RouterOutlet is used in the HTML
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // ✅ styleUrls (not styleUrl)
})
export class AppComponent {
  title = 'Bcardfront';
}
