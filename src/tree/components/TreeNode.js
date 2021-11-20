import InputNode from "./InputNode";
import DeleteNode from "./DeleteNode";
import { useChildren} from "../hooks/useChildren";

const TreeNode = ({ node, children = [] }) => {
  const { childrenToMap, setChildrenToMap } = useChildren(children);

  return (
    <>
      {node}
      <InputNode children={childrenToMap} setChildren={setChildrenToMap} />
      {childrenToMap && (
        <>
          {childrenToMap.map((node) => (
            <div key={node.node} className="indent">
              <TreeNode {...node} />
              <DeleteNode
                node={node}
                children={childrenToMap}
                setChildren={setChildrenToMap}
              />
            </div>
          ))}
        </>
      )}
    </>
  );
};

export default TreeNode;
