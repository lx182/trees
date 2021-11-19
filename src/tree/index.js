import "./index.css";
import TreeNode from "./TreeNode";
const tree = require("./data.json");

export default function Tree() {
  const { node, children } = tree;

  return (
    <div className="tree">
      <TreeNode node={node} children={children} />
    </div>
  );
}
