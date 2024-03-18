import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: ``
})
export class SearchBoxComponent {

  @Input()
  public placeholder: string = '';

  @Output()
  public onTermino: EventEmitter<string> = new EventEmitter();

  @ViewChild('cualquierReferencia')
  public tagInput!: ElementRef<HTMLInputElement>;

  emitTermino(): void {

    const newTag = this.tagInput.nativeElement.value;

    // console.log(newTag);

    this.onTermino.emit(newTag);
    this.tagInput.nativeElement.value = '';
  }

}
