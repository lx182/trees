import TreeNode from "./TreeNode";
import ToggleAlphabetizes from "./ToggleAlphabetize/ToggleAlphabetizes";
import { useGetTree } from "../hooks/useGetTree";

const TreeContainer = () => {
  const { loading, data } = useGetTree();

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
