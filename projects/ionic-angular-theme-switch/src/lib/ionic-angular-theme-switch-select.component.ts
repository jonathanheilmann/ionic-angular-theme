import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IonicAngularThemeSwitchService, IonicColors } from './ionic-angular-theme-switch.service';

// IonSelect and IonSelectOption is not required as module, but used by tslint in component template
import { IonSelect, IonSelectOption } from '@ionic/angular';

@Component({
  selector: 'theme-switch-select',
  template: `
    <ng-container *ngIf="themes">
      <ion-select (ionBlur)="onIonBlur($event)"
                  (ionCancel)="ionIonCancel($event)"
                  (ionChange)="onIonChange($event)"
                  (ionFocus)="onIonFocus($event)"
                  [cancelText]="cancelText"
                  [disabled]="disabled"
                  [interface]="interface"
                  [interfaceOptions]="interfaceOptions"
                  [mode]="mode"
                  [okText]="okText"
                  [selectedText]="selectedText"
                  [value]="selectedTheme">
        <ion-select-option *ngFor="let theme of themes" [value]="theme">{{theme.label || theme.key}}</ion-select-option>
      </ion-select>
    </ng-container>
  `,
  styles: [ 'ion-select { max-width: 100%; width: 100%; }' ]
})
export class IonicAngularThemeSwitchSelectComponent implements OnInit {
  @Input() cancelText: string;
  @Input() disabled = false;
  @Input() interface: 'action-sheet' | 'alert' | 'popover';
  @Input() interfaceOptions;
  @Input() mode: 'ios' | 'md';
  @Input() okText: string;
  @Input() selectedText: null | string | undefined;
  @Input() themes: SelectTheme[] = [];

  @Output() ionBlur: EventEmitter<CustomEvent> = new EventEmitter();
  @Output() ionCancel: EventEmitter<CustomEvent> = new EventEmitter();
  @Output() ionChange: EventEmitter<CustomEvent> = new EventEmitter();
  @Output() ionFocus: EventEmitter<CustomEvent> = new EventEmitter();

  public selectedTheme;
  private isInitialized = false;

  /**
   * Constructor detaches ChangeDetectorRef, as otherwise ion-toggle styles are missing.
   * ChangeDetectorRef should be reattached after initializing component in ngOnInit().
   *
   * @param changeDetectorRef
   * @param ionicAngularThemeSwitchService
   */
  constructor(
    protected changeDetectorRef: ChangeDetectorRef,
    protected ionicAngularThemeSwitchService: IonicAngularThemeSwitchService
  ) {
    this.changeDetectorRef.detach();
  }

  /**
   * Initialize component by setting toggle check state and reattach ChangeDetectorRef.
   */
  async ngOnInit() {
    const storedThemeName = await this.ionicAngularThemeSwitchService.getStoredThemeName();

    if (!storedThemeName) {
      const theme: SelectTheme = this.themes[ 0 ] ? this.themes[ 0 ] : { key: '', theme: {} };
      this.selectedTheme = theme.key;
      this.ionicAngularThemeSwitchService.setTheme(theme.theme, this.selectedTheme);
    } else {
      this.selectedTheme = storedThemeName;
    }

    this.changeDetectorRef.reattach();

    this.isInitialized = true;
  }

  /**
   * Pass ionBlur event to parent.
   *
   * @param event
   */
  public onIonBlur(event: CustomEvent) {
    this.ionBlur.emit(event);
  }

  /**
   * Pass ionCancel event to parent.
   *
   * @param event
   */
  public ionIonCancel(event: CustomEvent) {
    this.ionCancel.emit(event);
  }

  /**
   * Handle select changes by changing theme and pass ionChange event to parent.
   *
   * @param event
   */
  public onIonChange(event: CustomEvent) {
    console.log(event);
    this.ionChange.emit(event);

    if (this.isInitialized === false) {
      return;
    }

    const selectTheme: SelectTheme = event.detail.value;
    this.selectedTheme = selectTheme.key;

    this.ionicAngularThemeSwitchService.setTheme(
      selectTheme.theme,
      this.selectedTheme
    );
  }

  /**
   * Pass ionFocus event to parent.
   *
   * @param event
   */
  public onIonFocus(event: CustomEvent) {
    this.ionFocus.emit(event);
  }

}

export interface SelectTheme {
  key: string;
  label?: string;
  theme: IonicColors;
}
