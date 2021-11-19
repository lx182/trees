import { useState } from "react";
import InputNode from "./InputNode";
import DeleteNode from "./DeleteNode";

const TreeNode = ({ node, children = [] }) => {
  const [childrenState, setChildrenState] = useState(children);
  return (
    <>
      {node}
      {childrenState && (
        <>
          {childrenState.map((node) => (
            <div key={node.node} className="indent">
              <TreeNode {...node} />
              <DeleteNode
                node={node}
                children={childrenState}
                setChildren={setChildrenState}
              />
            </div>
          ))}
          <InputNode children={childrenState} setChildren={setChildrenState} />
        </>
      )}
    </>
  );
};

export default TreeNode;
