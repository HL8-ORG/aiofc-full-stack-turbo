# Biome config

我们使用Biome V2，从V1升级到V2可以通过命令
```
pnpm exec biome migrate --write
```
[在大型项目中使用Biome](https://biomejs.dev/zh-cn/guides/big-projects/)

参考：
https://github.com/NedcloarBR/biome-config/blob/master/package.json

If you're in a NextJS Project
You will need to disable eslint checking since NextJS doesn't support Biome natively yet

# next.config.js
+  eslint: {
+    ignoreDuringBuilds: true,
+  }