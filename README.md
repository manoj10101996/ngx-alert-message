<img src="https://image.flaticon.com/icons/svg/2959/2959590.svg" width="150px" title="STAR RATING" alt="STAR">

# Ngx-star-rating

> Alert component for angular 8+ projects (ng9)

> Creative alert message with mutiple color variance

# Preview demo

This preview was generated with [Stackblitz](https://stackblitz.com/edit/ngx-alert-message)
<img src="https://github.com/manoj10101996/ngx-alert-message/blob/master/ss.png?raw=true" width="100%" title="STAR RATING" alt="STAR">


# Angular version

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.9.

## Code integration

To use this package as a service `npm i ngx-alert-message` install this on the root angular project .

> Note: Don't forget to run this commend `npm i ngx-alert-message`   on root folder or else it will throw error.

## Import

Import the module on your `app.module.ts` file as follow.

> import { NgxAlertMessageModule } from "ngx-alert-message";

Then import the module as follow on imports array

>NgxAlertMessageModule

## Using

After importing this library with `npm  install ngx-alert-message`, go to the component which is declared under `app.module.ts` and integrate as below.

## just alert module


> `<ngx-just-alert [close]="close" [mode]="mode" [bold]="bold"  [disabled]="'true'" [text]="text"></ngx-just-alert>`

> close : (required) value shoule be `true | false`

> mode : (required) value shoule be `primary | success | danger | info | warning`

> bold : (optional) value shoule be `true | false`

> text : (required) value shoule be `anything...`

> disabled : (optional) value shoule be `true | false`


## Alert module

> `<ngx-alert [close]="close" [mode]="mode" [bold]="bold"  [disabled]="'true'" [text]="text"></ngx-alert>`

> close : (required) value shoule be `true | false`

> mode : (required) value shoule be `primary | success | danger | info | warning`

> bold : (optional) value shoule be `true | false`

> text : (required) value shoule be `anything...`

> disabled : (optional) value shoule be `true | false`

## Further help

To get more help on the usage  check out the [Ngx rating star README](https://github.com/manoj10101996/ngx-star-rating/blob/master/README.md).


