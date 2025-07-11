# TSConfig

基于https://github.com/tsconfig/bases开始配置项目的tsconifg.json

我们的项目配置实际上基于`@tsconfig/node20`继承和扩展

具体如下：
```
{
  "$schema": "https://json.schemastore.org/tsconfig",
  "_version": "20.1.0",

  "compilerOptions": {
    "lib": ["es2023"],
    "module": "nodenext",
    "target": "es2022",

    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "moduleResolution": "node16"
  }
}
```
扩展为`base.json`

```
{
  "$schema": "https://json.schemastore.org/tsconfig",
  "compilerOptions": {
    "lib": ["dom", "dom.iterable", "esnext"],
    "module": "ESNext",
    "moduleResolution": "Bundler",
    "strict": true,
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "target": "es2022",
    "skipLibCheck": true
  }
}
```
