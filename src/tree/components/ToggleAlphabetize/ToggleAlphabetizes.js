import { useTreeContext } from "../../providers/TreeProviders";
import "./ToggleAlphabetizes.css";

const ToggleAlphabetizes = () => {
  const { toggleAlp, setToggleAlp } = useTreeContext();
  return (
    <div className="toggle-alphabetizes">
      <label className="toggle-alphabetizes__content">
        <label class="toggle-alphabetizes__switch">
          <input type="checkbox" onChange={() => setToggleAlp(!toggleAlp)} />
          <span class="slider round"></span>
        </label>
        Alphabetizes
      </label>
    </div>
  );
};

export default ToggleAlphabetizes;
