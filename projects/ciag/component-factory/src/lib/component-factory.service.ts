import {
  Injectable,
  ComponentFactoryResolver,
  Injector,
  ApplicationRef,
  Type,
  ComponentRef,
  StaticProvider,
  ComponentFactory
} from '@angular/core';

@Injectable()
export class ComponentFactoryService {
  constRef?: ComponentRef<unknown>;

  constructor(private factoryResolver: ComponentFactoryResolver, private injector: Injector, private appRef: ApplicationRef) {}
  /**
   * Cria uma fabrica para gerar **novas** instancias de um mesmo componente
   *
   * @template T
   * @param {Type<T>} component
   * @returns {ComponentFactory<T>}
   */
  createFactory<T>(component: Type<T>): ComponentFactory<T> {
    return this.factoryResolver.resolveComponentFactory(component);
  }

  /**
   * Possibilita o usuário criar serviços através de classes ou objetos passados manualmente
   * @example
   * class Greeter{
   * constructor(public name:string)
   *  hello(){
   *    return `hello ${this.name}`
   *  }
   * }
   *
   * this.componentFactoryService.createCustomInjector([{ provide: GreeterService, useValue: new GreeterService('john') }])
   * @param {StaticProvider[]} providers
   * @returns {Injector}
   */
  createCustomInjector(providers: StaticProvider[], parentInjector = this.injector) {
    return Injector.create({ providers, parent: parentInjector });
  }

  create<T>(
    component: Type<T>,
    instance?: Partial<T>,
    options: { injector?: Injector; attachView?: boolean } = { attachView: true }
  ): ComponentRef<T> {
    const componentFactory = this.createFactory(component);
    this.constRef = componentFactory.create(options.injector || this.injector);

    Object.assign(this.constRef.instance, instance);

    if (options.attachView) {
      this.appRef.attachView(this.constRef.hostView);
    }

    // this.constRef.onDestroy = () => { };
    return this.constRef as ComponentRef<T>;
  }
}
