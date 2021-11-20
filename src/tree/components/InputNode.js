import { useTreeContext } from "../providers/TreeProviders";

const InputNode = ({ children = [], setChildren = () => {} }) => {
  const { toggleAlp } = useTreeContext();
  const handleAddChild = (el) => {
    if (el && el.key === "Enter" && el.target.value) {
      //Creates a copy of the state
      const newChildren = [...children];
      newChildren.push({ node: el.target.value });
      //Sort array of node if the toggle is active.
      if (toggleAlp) newChildren.sort((a, b) => a.node.localeCompare(b.node));

      setChildren(newChildren);
      el.target.value = "";
    }
  };
  return <input className="input-text-node" type="text" onKeyDown={(el) => handleAddChild(el)} />;
};

export default InputNode;
