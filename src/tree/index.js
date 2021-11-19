import "./index.css";

export default function Tree() {
  return (
    <div className="tree">
      <p>root</p>
      <ul>
        <li>ant</li>
        <li>bear</li>
        <li>
          <ul>
            <li>cat</li>
            <li>dog</li>
            <li>
              <ul>
                <li>elephant</li>
              </ul>
            </li>
          </ul>
        </li>
        <li>frog</li>
      </ul>
    </div>
  );
}
