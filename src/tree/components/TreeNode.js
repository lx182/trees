import InputNode from "./InputNode";
import DeleteNode from "./DeleteNode";
import { useChildren } from "../hooks/useChildren";

const TreeNode = ({ node: parent, children = [] }) => {
  const { childrenToMap, setChildrenToMap } = useChildren(children);

  return (
    <>
      {parent}
      <InputNode
        parent={parent}
        children={childrenToMap}
        setChildren={setChildrenToMap}
      />

      {childrenToMap && (
        <>
          {childrenToMap.map((node) => (
            <div key={node.node} className="indent">
              <DeleteNode
                parent={parent}
                name={node.node}
                children={childrenToMap}
                setChildren={setChildrenToMap}
              />
              <TreeNode {...node} />
              
            </div>
          ))}
        </>
      )}
    </>
  );
};

export default TreeNode;
