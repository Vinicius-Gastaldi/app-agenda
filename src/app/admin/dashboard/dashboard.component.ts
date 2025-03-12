import { Component } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { CommonModule } from'@angular/common';
@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  constructor(public authService: AuthService) {}

}
