import "./index.css";

export default function Tree() {
  return (
    <div className="tree">
      <ol>
        <li>root
          <ol>
            <li>ant</li>
            <li>bear
              <ol>
                <li>cat</li>
                <li>dog
                  <ol>
                    <li>elephant</li>
                  </ol>
                </li>
              </ol>
            </li>
            <li>frog</li>
          </ol>
        </li>
      </ol>
    </div>
  );
}
