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
    count: 0,
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
