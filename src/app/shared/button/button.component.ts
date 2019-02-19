import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() text: string;
  @Input() type = 'button';
  @Input() kind = 'primary';
  @Input() disabled?: boolean;
  @Input() fullWidth?: boolean;
  @Output() clicked = new EventEmitter<void>();

  constructor() { }

  onClick() {
    this.clicked.emit();
  }

}
