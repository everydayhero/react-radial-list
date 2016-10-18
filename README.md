# React Radial List

If you've ever needed to arrange a list of items (links, buttons, elements) in a circular pattern,
you'll know that it's kind of a fiddly process. This style-agnostic component does exactly what it
says on the tin. Pass it an array of React-renderable nodes, and it will wrap them in an unordered
list with CSS transforms to arrange them radially inside a container.

## Installation

There are two ways to get `react-radial-list`: via the CDN, or via `npm`.

CDN:

```
<script type="application/javascript" src="https://d1ig6folwd6a9s.cloudfront.net/react-radial-list.1.0.0.js"></script>
```

NPM:

```
npm install react-radial-list
```

...and import into your file:

```js
import ReactRadialList from 'react-radial-list'

// Your code...
```

Since you're probably bundling your own javascript assets, I'd generally recommend using `npm`.

## Usage

In either case, you can create a radial list by passing the component a list of elements to render,
as well as the optional parameters you want to customise the output:

```js
const items = [
  <div id="item-1">Item One</div>,
  <div id="item-2">Item Two</div>,
  <div id="item-3">Item Three</div>,
  <div id="item-4">Item Four</div>,
  <div id="item-5">Item Five</div>
]

<ReactRadialList
  items={items} // Required
  diameter={240} // Diameter of the radial list, a number of pixels or a CSS value e.g. '50%'
  offsetDegrees={-90} // Rotation offset: -90 default puts the first item into 12 o'clock position
  listStyles={{}} // If
  itemStyles={{}}
/>
```

## Customising and Theming

Internally, `react-radial-list` uses the excellent [cxs](https://github.com/jxnblk/cxs) library for
creating a dynamic modular stylesheet from javascript objects. You can provide your own js style
object for the list itself and each item by passing an object as the `listStyles` and `itemStyles`
props respectively.

If you prefer to use a more traditional approach to styling, use the class hook `.radial-list` to
provide styles for the list, and `.radial-list-item` to style each list item.
