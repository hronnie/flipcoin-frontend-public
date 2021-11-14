import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AbstractControl, AsyncValidatorFn } from '@angular/forms';
import { Observable, timer } from 'rxjs';
import { map, switchMap  } from 'rxjs/operators';
import {StrategyService} from "../service/strategy.service";

@Injectable({
    providedIn: 'root'
})
export class StrategyValidators {
    constructor(private http: HttpClient,
                private strategyService: StrategyService) {}

    searchStrategy(strategyId) {
        return timer(500)
            .pipe(
                switchMap(() => {
                    return this.strategyService.getStrategy(strategyId);
                })
            );
    }

    strategyIdValidator(isEdit: boolean): AsyncValidatorFn {
        return (control: AbstractControl): Observable<{ [key: string]: any } | null> => {
            return this.searchStrategy(control.value)
                .pipe(
                    map(res => {
                        if (res.strategyId !== "" && !isEdit) {
                            return {srategyIdExists: true};
                        }
                    })
                );
        };

    }

}
