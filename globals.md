<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Classes](#classes)
  - [Class: ComponentFactoryModule](#class-componentfactorymodule)
    - [Hierarchy](#hierarchy)
  - [Class: ComponentFactoryService](#class-componentfactoryservice)
    - [Hierarchy](#hierarchy-1)
    - [Index](#index)
    - [Constructors](#constructors)
    - [Properties](#properties)
    - [Methods](#methods)
- [ciag@component-factory](#ciagcomponent-factory)
  - [Index](#index-1)
    - [Classes](#classes-1)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# Classes


<a name="classescomponentfactorymodulemd"></a>

[ciag@component-factory](../README.md) › [Globals](#globalsmd) › [ComponentFactoryModule](#classescomponentfactorymodulemd)

## Class: ComponentFactoryModule

### Hierarchy

* **ComponentFactoryModule**


<a name="classescomponentfactoryservicemd"></a>

[ciag@component-factory](../README.md) › [Globals](#globalsmd) › [ComponentFactoryService](#classescomponentfactoryservicemd)

## Class: ComponentFactoryService

### Hierarchy

* **ComponentFactoryService**

### Index

#### Constructors

* [constructor](#constructor)

#### Properties

* [constRef](#optional-constref)

#### Methods

* [create](#create)
* [createCustomInjector](#createcustominjector)
* [createFactory](#createfactory)

### Constructors

####  constructor

\+ **new ComponentFactoryService**(`factoryResolver`: ComponentFactoryResolver, `injector`: Injector, `appRef`: ApplicationRef): *[ComponentFactoryService](#classescomponentfactoryservicemd)*

*Defined in [component-factory.service.ts:14](https://github.com/OpenCIAg/component-factory/blob/32737d3/projects/ciag/component-factory/src/lib/component-factory.service.ts#L14)*

**Parameters:**

Name | Type |
------ | ------ |
`factoryResolver` | ComponentFactoryResolver |
`injector` | Injector |
`appRef` | ApplicationRef |

**Returns:** *[ComponentFactoryService](#classescomponentfactoryservicemd)*

### Properties

#### `Optional` constRef

• **constRef**? : *ComponentRef‹unknown›*

*Defined in [component-factory.service.ts:14](https://github.com/OpenCIAg/component-factory/blob/32737d3/projects/ciag/component-factory/src/lib/component-factory.service.ts#L14)*

### Methods

####  create

▸ **create**<**T**>(`component`: Type‹T›, `instance?`: Partial‹T›, `options`: object): *ComponentRef‹T›*

*Defined in [component-factory.service.ts:46](https://github.com/OpenCIAg/component-factory/blob/32737d3/projects/ciag/component-factory/src/lib/component-factory.service.ts#L46)*

**Type parameters:**

▪ **T**

**Parameters:**

▪ **component**: *Type‹T›*

▪`Optional`  **instance**: *Partial‹T›*

▪`Default value`  **options**: *object*=  { attachView: true }

Name | Type |
------ | ------ |
`attachView?` | undefined &#124; false &#124; true |
`injector?` | Injector |

**Returns:** *ComponentRef‹T›*

___

####  createCustomInjector

▸ **createCustomInjector**(`providers`: StaticProvider[], `parentInjector`: Injector‹›): *Injector‹›*

*Defined in [component-factory.service.ts:42](https://github.com/OpenCIAg/component-factory/blob/32737d3/projects/ciag/component-factory/src/lib/component-factory.service.ts#L42)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`providers` | StaticProvider[] | - |
`parentInjector` | Injector‹› |  this.injector |

**Returns:** *Injector‹›*

___

####  createFactory

▸ **createFactory**<**T**>(`component`: Type‹T›): *ComponentFactory‹T›*

*Defined in [component-factory.service.ts:24](https://github.com/OpenCIAg/component-factory/blob/32737d3/projects/ciag/component-factory/src/lib/component-factory.service.ts#L24)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`component` | Type‹T› |

**Returns:** *ComponentFactory‹T›*


<a name="globalsmd"></a>

[ciag@component-factory](README.md) › [Globals](#globalsmd)

# ciag@component-factory

## Index

### Classes

* [ComponentFactoryModule](#classescomponentfactorymodulemd)
* [ComponentFactoryService](#classescomponentfactoryservicemd)
