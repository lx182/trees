import TreeNode from "./TreeNode";
import ToggleAlphabetizes from "./ToggleAlphabetize/ToggleAlphabetizes";
import { useGetTree } from "../hooks/useGetTree";
import { useTreeContext } from "../providers/TreeProviders";
import { usePrevious } from "../hooks/usePrevious";
import { useDidUpdateEffect } from "../hooks/useDidUpdateEffect";
import { updateTree } from "../services/TreeService";

const TreeContainer = () => {
  const { loading, data } = useGetTree();
  const { tree } = useTreeContext();
  const prevTree = usePrevious(tree);

  const handleUpdateTree = async () => {
    try {
      await updateTree(tree);
    } catch (error) {
      console.error(error);
    }
  };

  useDidUpdateEffect(() => {
    if (prevTree && tree) {
      handleUpdateTree();
    }
  }, [tree]);

  return (
    data &&
    !loading && (
      <div className="tree">
        <ToggleAlphabetizes />
        <TreeNode node={data.node} children={data.children} />
      </div>
    )
  );
};

export default TreeContainer;
