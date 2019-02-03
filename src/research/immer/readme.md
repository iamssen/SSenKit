# immer

1. `object`, `array`의 경우 완벽하게 작동한다
2. `Set`, `Map`은 제대로 동작하지 않는다. `new Set(originSet)`과 같이 사용하는게 더 낫다
3. `mobx`의 경우 `@observable.ref`를 사용해서 `Observable Array`로 전환되지 않게 처리하면 문제 없다