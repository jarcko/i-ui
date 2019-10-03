import { Component, Input } from '@angular/core';

@Component({
  selector: 'error-notification',
  templateUrl: './error-notification.component.html',
  styleUrls: ['./error-notification.component.scss'],
})
export class ErrorNotificationComponent {
  @Input() message: string;
  genericErrorMessage = 'Unknown error occurred';
}
