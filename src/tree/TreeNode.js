import { addDots } from "./addDots.js";

const TreeNode = ({ node, children, level = 0 }) => {
  const nodeName = addDots(node, level);
  return (
    <>
      {nodeName}
      {children &&
        children.map((node) => (
          <div key={node.node} className="indent">
            <TreeNode {...node} level={level + 1} />
          </div>
        ))}
    </>
  );
};

export default TreeNode;
