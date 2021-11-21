import { useState } from "react";
import { processChildren } from "../utils/utils";
import { useDidUpdateEffect } from "./useDidUpdateEffect";
import { useTreeContext } from "../providers/TreeProviders";

export const useChildren = (children) => {
  const [childrenToMap, setChildrenToMap] = useState(children);
  const [unsortedChildren, setUnSortChildren] = useState(children);
  const { toggleAlp } = useTreeContext();

  useDidUpdateEffect(() => {
    if (childrenToMap.length > 0) {
      if (toggleAlp) {
        setUnSortChildren([...childrenToMap]);
        const sortedChildren = [...childrenToMap];
        sortedChildren.sort((a, b) => a.node.localeCompare(b.node));
        setChildrenToMap(sortedChildren);
      } else {
        const childrenToRender = processChildren(
          [...unsortedChildren],
          [...childrenToMap]
        );
        setChildrenToMap(childrenToRender);
      }
    }
  }, [toggleAlp]);

  return {
    childrenToMap,
    setChildrenToMap,
    unsortedChildren,
  };
};
