const DeleteNode = ({ node, children = [], setChildren = () => {} }) => {
  const handleDeleteNode = () => {
    //Creates a copy of the state
    const newChildren = [...children];
    //use filter to remove the node by its name
    setChildren(newChildren.filter((n) => n.node !== node.node));
  };
  return (
    !node?.children && (
      <span className="delete-node" onClick={() => handleDeleteNode()}>
        ❌
      </span>
    )
  );
};

export default DeleteNode;
