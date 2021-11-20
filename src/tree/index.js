import "./index.css";
import TreeNode from "./components/TreeNode";
import ToggleAlphabetizes from "./components/ToggleAlphabetize/ToggleAlphabetizes";
import TreeProvider from "./providers/TreeProviders";
const tree = require("./data.json");

export default function Tree() {
  const { node, children } = tree;

  return (
    <TreeProvider>
      <div className="tree">
        <ToggleAlphabetizes />
        <TreeNode node={node} children={children} />
      </div>
    </TreeProvider>
  );
}
