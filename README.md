# NxModularNestBackend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) using [Nrwl Nx](https://nrwl.io/nx).
This is a minimal demo that shows how to use multiple backends and share modules between them. 

## New modules

You can create a new backend module by creating a new folder in `libs-backend`. In there add a `tsconfig.json` and a `tslint.json` file that are pointing to your main ones

``` json
# tsconfig.json	
{
  "extends": "../../tsconfig.json",
  "compilerOptions": {
    "outDir": "./dist",
    "target": "es6",
    "module": "commonjs",
    "moduleResolution": "node",
    "declaration": true,
    "sourceMap": true,
    "inlineSources": true,
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "importHelpers": true,
    "types": ["node"]
  },
  "include": ["./src/**.ts"],
  "exclude": ["node_modules", "**/*.spec.ts"]
}

# tslint.json
{
  "extends": "../../tslint.json"
}
```

Then update the `tsconfig.json` file in your root by adding your new module: 

``` json
{
  "compileOnSave": false,
  "compilerOptions": {
  ...
    "paths": {
      "@lib-backend/cats": ["libs-backend/cats/src"],
      "@lib-backend/cats/*": ["libs-backend/cats/src/*"],
     
      "@lib-backend/new-module": ["libs-backend/new-module/src"],
      "@lib-backend/new-module/*": ["libs-backend/new-module/src/*"],
     
    },
    "module": "es2015"
  },
  "exclude": ["node_modules", "tmp"]
}
```
