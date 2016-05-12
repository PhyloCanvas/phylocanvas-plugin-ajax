# Phylocanvas Ajax Plugin
Load tree format strings via Ajax.

## Usage

```
npm install phylovanvas phylocanvas-plugin-ajax
```

```javascript
import Phylocanvas from 'phylocanvas';
import ajaxPlugin from phyocanvas-plugin-ajax;

Phylocanvas.plugin(ajaxPlugin);

const tree = Phylocanvas.createTree(element);

tree.load('/url/to/tree-file');
```
