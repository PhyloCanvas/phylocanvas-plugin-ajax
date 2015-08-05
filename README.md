# PhyloCanvas Ajax Plugin
Load tree format strings via Ajax.

## Usage

```
npm install PhyloCanvas phylocanvas-plugin-ajax
```

```javascript
import PhyloCanvas from 'PhyloCanvas';
import ajaxPlugin from phyocanvas-plugin-ajax;

PhyloCanvas.plugin(ajaxPlugin);

const tree = PhyloCanvas.createTree(element);

tree.load('/url/to/tree-file');
```
