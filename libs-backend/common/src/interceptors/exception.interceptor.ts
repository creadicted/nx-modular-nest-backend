import {ExecutionContext, HttpException, HttpStatus, Injectable, NestInterceptor} from '@nestjs/common';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable()
export class ErrorsInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    call$: Observable<any>,
  ): Observable<any> {
    return call$.pipe(
      catchError(err =>
        throwError(new HttpException('Message', HttpStatus.BAD_GATEWAY)),
      ),
    );
  }
}
