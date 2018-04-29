# Online-Outfitters
Front-end of an e-commerce site built with React, Redux &amp; CSS-Grid.

## Why CSS-Grid?
While support for CSS-Grid isn't yet universal, it is a powerful tool that is set to eliminate the need for frameworks like bootstrap for fast and easy responsive layouts. At the time of writing this, browser support is at 87.4% globally.

## React
React is currently the hottest front-end framework, and with good reason. It's one-way data binding and virtual DOM are amazing. It will almost certainly eventually be replaced as the hottest framework but I believe the paradigms that make up it's core are here to stay.

## Redux
Redux pairs very well with React. It creates one source of truth for the entire application, which in this case was what was needed. Instead of storing state in the highest level and passing it down to the header, shop and cart, I could use the store to create smart components anywhere in my application.
