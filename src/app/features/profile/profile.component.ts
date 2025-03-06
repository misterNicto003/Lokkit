import { Component, inject, Input, OnInit } from '@angular/core';

import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
  imports: [RouterOutlet, RouterLink],
})
export class ProfileComponent implements OnInit {
  public profileId: string | null = null;
  private route = inject(ActivatedRoute);

  ngOnInit() {
    this.profileId = this.route.snapshot.paramMap.get('id');
    console.log('User ID:', this.profileId);
  }
}
