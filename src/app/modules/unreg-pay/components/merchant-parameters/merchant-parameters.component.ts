import {
  AfterViewInit, ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnInit,
  ViewChild
} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {catchError, switchMap, tap} from 'rxjs/operators';
import {BillingData} from '../../data-access/interfaces/billing-merchant.interface';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UnregPayDataService} from '../../data-access/services/unreg-pay-data.service';
import {UnregPayStoreService} from '../../data-access/services/unreg-pay-store.service';
import {EMPTY, Observable, throwError} from 'rxjs';

@Component({
  selector: 'app-merchant-parameters',
  templateUrl: './merchant-parameters.component.html',
  styleUrls: ['./merchant-parameters.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class MerchantParametersComponent implements OnInit, AfterViewInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private unregPayDataService: UnregPayDataService,
    private unregPayStore: UnregPayStoreService,
  ) {
  }
  parameters$: Observable<BillingData>;
  form = new FormGroup({});
  @ViewChild('parametersWrapper', {static: false}) parametersWrapper: ElementRef;
  errorTypes = ['required', 'pattern', 'minlength', 'maxlength'];
  activeIndex: number | null = 0;
  errorMessage = '';
  protected readonly window = window;

  ngOnInit() {
    this.initForm();
  }

  ngAfterViewInit() {
  }

  isFirstError(errorType: string, name: string): boolean {
    const control = this.form.controls[name];
    if (!control || !control.errors) {
      return false;
    }
    const currentErrors = Object.keys(control.errors);
    return currentErrors.length > 0 && currentErrors[0] === errorType;
  }

  initForm() {
    this.parameters$ = this.route.params.pipe(
      switchMap((res: { merchantType: string }) => {
        return this.unregPayDataService.getParams(res.merchantType);
      }),
      tap((bData: BillingData) => {
        this.unregPayStore.merchantParameters$.next(bData.billingMerchant.merchantName);
        bData.parameter.forEach(el => {
          this.form.setControl(el.name, new FormControl(el.selectOption ? el.selectOption[0].value : '', setValidators(el.name, el.regex)));
        });
      }),
      catchError((err: any) => {
        alert(err.userMessage);
        return throwError(err);
      }),
    );

    const setValidators = (name: string, regex?: string) => {
      switch (name) {
        default:
          return [Validators.required, Validators.pattern(regex || ''), Validators.maxLength(60)];
      }
    };
  }

  submit() {
    if (this.form.valid && !this.errorMessage) {
      this.unregPayDataService.getBillingInfo('azercell', this.form.value).pipe(
        catchError(() => {
          return EMPTY;
        }),
        tap(res => {
          this.unregPayStore.singleBillingData$.next(res);
          this.router.navigate(['unreg-payment/single-billing']);
        })
      ).subscribe();
    }
  }

  activeTabEvent(fieldName, value, index) {
    console.log(fieldName);
    console.log(value);
    this.form.controls[fieldName].setValue(value);
    this.activeIndex = index;
  }

  checkBackendFullMistake(condition: { parameterName: string, parameterValue: string }) {
    if (condition) {
      return this.form.controls[condition.parameterName].value === condition.parameterValue;
    }
    return true;
  }
}
