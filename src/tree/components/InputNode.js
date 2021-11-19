const InputNode = ({ children = [], setChildren = () => {} }) => {
  const handleAddChild = (el) => {
    if (el && el.key === "Enter" && el.target.value) {
      //Creates a copy of the state
      const newChildren = [...children];
      newChildren.push({ node: el.target.value });
      setChildren(newChildren);
      el.target.value = "";
    }
  };
  return (
    children.length > 0 && (
      <div className="indent">
        <input type="text" onKeyDown={(el) => handleAddChild(el)} />
      </div>
    )
  );
};

export default InputNode;
