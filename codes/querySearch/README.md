解析浏览器参数, 如果带第二个参数, 则为只返回某个参数. 否则返回参数对象

`依赖queryString函数`

```typescript
(search: string, key?: string): object | string | undefined
```