import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  @Input({ required: true }) buttonIcon!: { src: string; alt: string };
  @Input({ required: true }) buttonLabel!: string;

  @Input() buttonColor: string = '#374151';
  @Input() buttonBackgroundColor: string = '#ffffff';

  @Output() buttonClick = new EventEmitter<MouseEvent>();

  protected get buttonColors() {
    return {
      'background-color': this.buttonBackgroundColor,
      color: this.buttonColor,
    };
  }

  protected onClickButton(event: MouseEvent) {
    this.buttonClick.emit(event);
  }
}
