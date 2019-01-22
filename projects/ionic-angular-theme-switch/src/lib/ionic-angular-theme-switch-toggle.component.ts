import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IonicAngularThemeSwitchService, IonicColors } from './ionic-angular-theme-switch.service';

// IonToggle is not required as module, but used by tslint in component template
import { IonToggle } from '@ionic/angular';

@Component({
  selector: 'theme-switch-toggle',
  // changeDetection: 0,
  template: `
    <ng-container *ngIf="themes">
      <ion-toggle (ionChange)="onIonChange($event)"
                  (ionFocus)="onIonFocus($event)"
                  (ionBlur)="onIonBlur($event)"
                  [checked]="isToggleChecked"
                  [color]="color"
                  [disabled]="disabled"
                  [mode]="mode">
      </ion-toggle>
    </ng-container>
  `
})
export class IonicAngularThemeSwitchToggleComponent implements OnInit {
  @Input() color: string;
  @Input() disabled = false;
  @Input() mode: 'ios' | 'md';
  @Input() themes: ToggleThemes = {
    default: {},
    alternative: {}
  };

  @Output() ionChange: EventEmitter<CustomEvent> = new EventEmitter();
  @Output() ionFocus: EventEmitter<CustomEvent> = new EventEmitter();
  @Output() ionBlur: EventEmitter<CustomEvent> = new EventEmitter();

  public isToggleChecked = false;
  protected isInitialized = false;

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
    changeDetectorRef.detach();
  }

  /**
   * Initialize component by setting toggle check state and reattach ChangeDetectorRef.
   */
  async ngOnInit() {
    const storedThemeName = await this.ionicAngularThemeSwitchService.getStoredThemeName();

    if (!storedThemeName || (storedThemeName !== 'default' && storedThemeName !== 'alternative')) {
      this.ionicAngularThemeSwitchService.setTheme(this.themes.default, 'default');
    } else {
      this.isToggleChecked = storedThemeName === 'alternative';
    }

    this.changeDetectorRef.reattach();

    this.isInitialized = true;
  }

  /**
   * Handle toggle changes by changing theme and pass ionChange event to parent.
   *
   * @param event
   */
  public onIonChange(event: CustomEvent) {
    this.ionChange.emit(event);

    if (this.isInitialized === false) {
      return;
    }

    this.isToggleChecked = event.detail.checked;

    this.ionicAngularThemeSwitchService.setTheme(
      this.isToggleChecked ? this.themes.alternative : this.themes.default,
      this.isToggleChecked ? 'alternative' : 'default'
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

  /**
   * Pass ionBlur event to parent.
   *
   * @param event
   */
  public onIonBlur(event: CustomEvent) {
    this.ionBlur.emit(event);
  }

}

export interface ToggleThemes {
  default: IonicColors;
  alternative: IonicColors;
}
