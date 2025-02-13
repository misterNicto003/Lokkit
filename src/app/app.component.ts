import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { FeatureFeedComponent } from './features/feature/pages/feature-feed/feature-feed.component';
import { FeatureProfileComponent } from './features/feature/pages/feature-profile/feature-profile.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeaderComponent,
    FeatureFeedComponent,
    FeatureProfileComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Lokkit';
}
