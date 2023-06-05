import { HttpErrorResponse } from '@angular/common/http';
/**
 * Description: Function para el tratamiento de errores retornados desde el servidor, en cada petición realizada a los endpoints del sistema
 * @param {HttpErrorResponse} err
 * @returns {any}
 *  */
export function handlerResponseError(err: HttpErrorResponse): void {
  1;
  if (err.error instanceof Error) {
    //A client-side or network error occurred.
    console.log('An error occurred:', err.error.message);
    //   Swal.fire({
    //     title: '¡Ha ocurrido el siguiente error!',
    //     html: ` ${err.error.message} `,
    //     icon: 'error',
    //     confirmButtonText: 'Aceptar',
    //     ...commonConfig,
    //   });
  } else {
    //Backend returns unsuccessful response codes such as 404, 500 etc.
    console.log('Backend returned status code: ', err.status);
    console.log('Response body:', err.error);
    //   Swal.fire({
    //     title: '¡Ha ocurrido el siguiente error!',
    //     // html: `Código de error: ${err.status}, ${err.error.errorMessage} `,
    //     html: `Error: <strong>${err.status}</strong>: <div style="text-align: justify;">${err.error.errorMessage}</div>. `,
    //     icon: 'error',
    //     confirmButtonText: 'Aceptar',
    //     ...commonConfig,
    //   });
  }
}
