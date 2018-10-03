import { action, computed, observable } from 'mobx';

export class MobX {
  @observable a: number = 1;
  @observable b: number = 2;
  
  @action updateA = (a: number) => {
    this.a = a;
  };
  
  @action updateB = (b: number) => {
    this.b = b;
  };
  
  @computed get c(): number {
    return this.a + this.b;
  }
}