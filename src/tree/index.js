import "./index.css";

export default function Tree() {
  return (
    <div className="tree">
      {Array(4)
        .fill()
        .map((_, index) => (
          <div className={`tree__rule--level-${index + 1}`}></div>
        ))}
      <p>root</p>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;ant</p>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;bear</p>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cat</p>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;dog</p>
      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;elephant
      </p>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;frog</p>
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
