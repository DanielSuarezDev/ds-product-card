# DS product Card

Este es un paquete de pruebas de despliegue en NPM

## Daniel Suarez

## Ejemplo

```javascript
import {
ProductImages
ProductTitle
ProductButtons
} from 'ds-product-card'
```

```javascript
<ProductCard
  product={product}
  initialValue={{
    count: 5, //desde donde empieza
    maxCount: 10,
  }}
>
  {() => (
    <>
      <ProductImages />
      <ProductTitle />
      <ProductButtons />
    </>
  )}
</ProductCard>
```
