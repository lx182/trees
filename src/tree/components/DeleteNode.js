import { useTreeContext } from "../providers/TreeProviders";
import { removeNodeTree } from "../utils/utils";

const DeleteNode = ({
  parent,
  name,
  children = [],
  setChildren = () => {},
}) => {
  const { tree, setTree } = useTreeContext();

  const handleDeleteNode = async() => {
    const newChildren = [...children];
    setChildren(newChildren.filter((n) => n.node !== name));
    // Remove node on the tree and save PUT the new tree
    const newTree = removeNodeTree(tree, parent, name);
    setTree(newTree);
  };
  return (
    name !== "root" && (
      <span
        title={`Delete '${name}' node`}
        className="delete-node"
        onClick={() => handleDeleteNode()}
      >
        ❌
      </span>
    )
  );
};

export default DeleteNode;
