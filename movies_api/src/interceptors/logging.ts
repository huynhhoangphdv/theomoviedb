import { Injectable, NestInterceptor, ExecutionContext, CallHandler, Logger } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const {method, url} = context.switchToHttp().getRequest()
    const now = Date.now();

    Logger.log(`${method} ${url} ${Date.now() - now}ms`,context.getClass().name)
    return next.handle().pipe(tap(data => {
         Logger.log(`${method} ${url} ${Date.now() - now}ms ${JSON.stringify(data)}`,context.getClass().name)
        return data 
    }));
  }
}