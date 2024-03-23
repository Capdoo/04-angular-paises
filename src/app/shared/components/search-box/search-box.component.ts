import { Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: ``
})
export class SearchBoxComponent implements OnInit, OnDestroy{

  private debouncer: Subject<string> = new Subject<string>();
  private debouncerSubscription?: Subscription;

  @Input()
  public placeholder: string = '';

  @Output()
  public onTermino: EventEmitter<string> = new EventEmitter();

  @ViewChild('cualquierReferencia')
  public tagInput!: ElementRef<HTMLInputElement>;
  
  @Output()
  public onDebounce: EventEmitter<string> = new EventEmitter();

  @Input()
  public initialValue: string = '';

  ngOnInit(): void {

    this.debouncerSubscription = this.debouncer.pipe(
      debounceTime(500)
    )
    .subscribe(
      (value) => {
        this.onDebounce.emit(value);
      }
    )
  }

  ngOnDestroy(): void {
    // throw new Error('Method not implemented.');
    console.log('Destruido');
    this.debouncerSubscription?.unsubscribe();
  }


  emitTermino(): void {

    const newTag = this.tagInput.nativeElement.value;

    // console.log(newTag);

    this.onTermino.emit(newTag);
    this.tagInput.nativeElement.value = '';
  }

  onKeyPress(searchTerm: string) {
    // console.log(searchTerm);
    this.debouncer.next( searchTerm );
  }

}
