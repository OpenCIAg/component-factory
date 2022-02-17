[ciag@component-factory](../README.md) › [Globals](../globals.md) › [ComponentFactoryService](componentfactoryservice.md)

# Class: ComponentFactoryService

## Hierarchy

* **ComponentFactoryService**

## Index

### Constructors

* [constructor](componentfactoryservice.md#constructor)

### Properties

* [constRef](componentfactoryservice.md#optional-constref)

### Methods

* [create](componentfactoryservice.md#create)
* [createCustomInjector](componentfactoryservice.md#createcustominjector)
* [createFactory](componentfactoryservice.md#createfactory)

## Constructors

###  constructor

\+ **new ComponentFactoryService**(`factoryResolver`: ComponentFactoryResolver, `injector`: Injector, `appRef`: ApplicationRef): *[ComponentFactoryService](componentfactoryservice.md)*

Defined in component-factory.service.ts:14

**Parameters:**

Name | Type |
------ | ------ |
`factoryResolver` | ComponentFactoryResolver |
`injector` | Injector |
`appRef` | ApplicationRef |

**Returns:** *[ComponentFactoryService](componentfactoryservice.md)*

## Properties

### `Optional` constRef

• **constRef**? : *ComponentRef‹unknown›*

Defined in component-factory.service.ts:14

## Methods

###  create

▸ **create**<**T**>(`component`: Type‹T›, `instance?`: Partial‹T›, `options`: object): *ComponentRef‹T›*

Defined in component-factory.service.ts:46

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

###  createCustomInjector

▸ **createCustomInjector**(`providers`: StaticProvider[], `parentInjector`: Injector‹›): *Injector‹›*

Defined in component-factory.service.ts:42

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`providers` | StaticProvider[] | - |
`parentInjector` | Injector‹› |  this.injector |

**Returns:** *Injector‹›*

___

###  createFactory

▸ **createFactory**<**T**>(`component`: Type‹T›): *ComponentFactory‹T›*

Defined in component-factory.service.ts:24

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`component` | Type‹T› |

**Returns:** *ComponentFactory‹T›*
