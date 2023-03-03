import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'summary',
  templateUrl: './summary.template.html',
})
export class SummaryComponent {
  @Output('on-summary-close') onSummaryCloseEvent: EventEmitter<any> = new EventEmitter();

  onSummaryClose(): void {
    this.onSummaryCloseEvent.emit();
  }
}
