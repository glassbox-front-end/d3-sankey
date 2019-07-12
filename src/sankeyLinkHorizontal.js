import {linkHorizontal} from "d3-shape";

function horizontalSource(d) {
  return [d.source.x1, d.y0];
}

function horizontalTarget(d) {
  return [d.target.x0, d.y1];
}

export default function(source = horizontalSource, target = horizontalTarget) {
  return linkHorizontal()
      .source(source)
      .target(target);
}
