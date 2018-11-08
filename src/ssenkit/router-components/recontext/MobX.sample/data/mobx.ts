import { action, computed, observable } from 'mobx';

export class MobX {
  @observable.ref a: number = 1;
  @observable.ref b: number = 2;
  @observable.ref arr: string[] = [];
  
  @action updateA = (a: number) => {
    this.a = a;
  };
  
  @action updateB = (b: number) => {
    this.b = b;
  };
  
  @action updateArr = (arr: string[]) => {
    this.arr = arr;
  };
  
  @computed get c(): number {
    return this.a + this.b;
  }
}