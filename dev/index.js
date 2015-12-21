import PhyloCanvas from 'phylocanvas';
import ajaxPlugin from '../src/index';

PhyloCanvas.plugin(ajaxPlugin);

const tree = PhyloCanvas.createTree('phylocanvas');

tree.showLabels = true;
tree.hoverLabel = true;

tree.on('error', function (event) { throw event.error; });

tree.on('loaded', function () {
  console.log('loaded');
});

tree.load('/dev/SPARC.nwk');
