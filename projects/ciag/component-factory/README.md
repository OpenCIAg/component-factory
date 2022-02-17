# @ciag/component-factory
A angular Lib </br>
[![npm version](https://badge.fury.io/js/%40ciag%2Fcomponent-factory.svg)](https://badge.fury.io/js/%40ciag%2Fcomponent-factory)

Objective: a simplyfied way to generate dynamic angular components, that can also be used as plain DOM.
## [API](https://github.com/OpenCIAg/component-factory/blob/master/globals.md)

## Table of contents
1. [Installation](#installation)
1. [Usage](#usage)

## Installation
Intall the @ciag/component-factory via NPM

### NPM
```shell
    npm i @ciag/component-factory
```



## Usage
``` app.module.ts ```
```typescript

import { ComponentFactoryModule } from '@ciag/component-factory';



@NgModule({
  //...
  imports: [
    //...
    ComponentFactoryModule
  ],
  //...
})
export class AppModule { }
```


``` my.component.ts ```
```typescript
import { Component, OnInit } from '@angular/core';
import { ComponentFactoryService } from '@ciag/component-factory';

@Component({
    //...
})
export class AppComponent implements OnInit {
    //...
    
    constructor(private componentFactoryService: ComponentFactoryService) { }

    ngOnInit() { 
        this.componentFactoryService.create(MyComponent)
    }
}
```