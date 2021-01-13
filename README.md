# VouchersCodingTask

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## TASK:

Escribe un programa en Typescript para NodeJS, que al ejecutarse genere una lista de códigos/cupones de acuerdo a un
tipo de cupón especificado en una configuración. La configuración se debe proporcionar en un fichero separado en
cualquier formato de tu elección (xml, ini, json, ...).

Requisitos:

Cualquier tipo de implementación del generador de cupones es válida, pero deben usarse al menos dos algoritmos
distintos. Simplemente actualizando la configuración debería ser suficiente para obtener una lista diferente de cupones.

Ejemplo:

[cupones]
cantidad = 5
algoritmo = numerosSecuenciales

Salida:

000001
000002
000003
000004
000005

Todas las decisiones de diseño e implementación quedan a tu consideración, ya que como digo nos resulta útil para
conocer tu forma de priorizar y de aproximar un problema como el planteado.
