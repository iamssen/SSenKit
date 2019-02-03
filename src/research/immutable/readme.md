# immutable

1. API의 구조가 예전과 다르다 (`List.merge()`가 Overwrite가 아니라 Concat처럼 동작한다거나 `List.merge(Map)`의 기준이 `V`만 뽑아내는게 아니라 `[K, V]`를 뽑아낸다거나...)
2. API 변화가 불안정하고, 오랫동안 작업되지 않고 있고... 사용하지 않는게 좋겠다. (`immer`로 대체)