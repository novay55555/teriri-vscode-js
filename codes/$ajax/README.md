$.ajax封装

`新增retry参数`

```typescript
(settings: extendJqueryAjaxOptions): $ajax

interface extendJqueryAjaxOptions extends jqueryAjaxOptions {
  retry: {
    times: number;
    delay: number;
  }
}

interface $ajax {
  get(url, jqueryAjaxOptions): Promise<any>;
  post(url, data, jqueryAjaxOptions): Promise<any>;
}
```