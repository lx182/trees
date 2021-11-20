import InputNode from "./InputNode";
import DeleteNode from "./DeleteNode";
import { useChildren} from "../hooks/useChildren";

const TreeNode = ({ node, children = [] }) => {
  const { childrenToMap, setChildrenToMap } = useChildren(children);

  return (
    <>
      {node}
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
          <InputNode children={childrenToMap} setChildren={setChildrenToMap} />
        </>
      )}
    </>
  );
};

export default TreeNode;
