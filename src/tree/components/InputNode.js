import { useTreeContext } from "../providers/TreeProviders";
import { addNodeTree } from "../services/TreeService";

const InputNode = ({ parent, children = [], setChildren = () => {} }) => {
  const { toggleAlp, tree, setTree } = useTreeContext();

  const handleAddChild = async (el) => {
    if (el && el.key === "Enter" && el.target.value) {
      //Creates a copy of the state
      const newChildren = [...children];
      const newNode = {
        node: el.target.value,
        children: [],
      };
      newChildren.push(newNode);
      //Sort array of node if the toggle is active.
      if (toggleAlp) newChildren.sort((a, b) => a.node.localeCompare(b.node));

      setChildren(newChildren);
      el.target.value = "";
      // Added the node on the Tree structure and save
      const newTree = await addNodeTree(tree, parent, newNode);
      setTree(newTree);

    }
  };
  return (
    <input
      className="input-text-node"
      type="text"
      onKeyDown={(el) => handleAddChild(el)}
    />
  );
};

export default InputNode;
