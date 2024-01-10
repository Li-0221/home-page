# nuxt 常见报错

## 1.Hydration text content mismatch in <span>: - Client: light - Server: dark

这个问题是由于服务端渲染和客户端渲染的结果不一致，可以使用 `<client-only> </client-only>` 包裹报错的组件

```vue
<template>
  <client-only>
    <el-switch
      v-model="colorMode"
      inline-prompt
      active-text="dark"
      inactive-text="light"
      size="large"
    ></el-switch>
  </client-only>
</template>
```
