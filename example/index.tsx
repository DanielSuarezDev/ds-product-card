import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProductCard, ProductImages, ProductTitle, ProductButtons } from '../.';

const product = {
  id: 1,
  title: 'Coffe Card',
  // img: './coffee-mug.png',
};

const App = () => {
  return (
    <div>
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
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
