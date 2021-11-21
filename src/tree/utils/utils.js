export const processChildren = (unsortedChildren, sortedChildren) => {
  const unsortedLength = unsortedChildren.length;
  const sortedLength = sortedChildren.length;
  let missing = [],
    toRemove = [];

  // Get the nodes to add
  if (sortedLength > unsortedLength || sortedLength === unsortedLength)
    missing = sortedChildren.filter(
      (child) => !unsortedChildren.includes(child)
    );
  // Get the nodes to remove
  if (sortedLength === unsortedLength || sortedLength < unsortedLength)
    toRemove = unsortedChildren.filter(
      (child) => !sortedChildren.includes(child)
    );
  // If the user add more node when is sorted
  if (sortedLength > unsortedLength) {
    return [...unsortedChildren, ...missing];
  }
  // If the user do some change but the length of the nodes are the same
  if (sortedLength === unsortedLength) {
    if (!missing.length && !toRemove.length) return unsortedChildren;
    return [
      ...unsortedChildren.filter((child) => !toRemove.includes(child)),
      ...missing,
    ];
  }
  // If remove more element when is sorted we remove them from the original list of children
  if (sortedLength < unsortedLength) {
    return unsortedChildren.filter((child) => !toRemove.includes(child));
  }

  return unsortedChildren; // if no condition is met we return the original list
};

export const findANode = (root, name) => {
  const stack = [];

  stack.push(root);

  while (stack.length > 0) {
    const node = stack.pop();
    if (node.node === name) {
      return node;
    } else if (node.children && node.children.length) {
      node.children.forEach((child) => stack.push(child));
    }
  }
  return null;
};

export const addNodeTree = (tree, parent, newNode) => {
  const nodeToModify = findANode(tree, parent);
  const newChildren = [...nodeToModify.children];

  newChildren.push(newNode);
  nodeToModify.children = newChildren;
  const newTree = { ...tree };

  return newTree;
};

export const removeNodeTree = (tree, parent, nodeName) => {
  const nodeToModify = findANode(tree, parent);
  const filterChildren = nodeToModify.children.filter(
    (n) => n.node !== nodeName
  );
  nodeToModify.children = filterChildren;
  const newTree = { ...tree };
  return newTree;
};
