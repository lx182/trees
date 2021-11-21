import "./index.css";
import TreeProvider from "./providers/TreeProviders";
import TreeContainer from "./components/TreeContainer";

export default function Tree() {
  return (
    <TreeProvider>
      <TreeContainer />
    </TreeProvider>
  );
}
