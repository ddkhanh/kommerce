
import { Catch, ArgumentsHost, RpcExceptionFilter } from '@nestjs/common';
import { Observable, throwError } from 'rxjs';
import { KommerceException } from '@kommerce/common'
/**
 * This class tend to cach gRPC error model to response to client a right things.
 * By default, nestjs will filter to reponse to client only Unknow code along with the detailed error.
 * To get over this, we need to have custom exception filter to handel and response to client a native gRPC error
 * @see [Exception filters](https://docs.nestjs.com/microservices/exception-filters)
 */
@Catch(KommerceException)
export class KexeptionFilter implements RpcExceptionFilter<KommerceException> {
  /**
   * Catch and filter KrpcException to return to client the right error model
   * @param exception KrpcException throw by the bussiness code
   * @param host 
   * @returns 
   */
  catch(exception: KommerceException, host: ArgumentsHost): Observable<KommerceException> {
    return throwError(() => exception);
  }
}