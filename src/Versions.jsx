import React from "react";

const Versions = (props) =>{
  const { versions } = props;
  return (
    <div>
      <label className="checkbox-label">
        <input type="checkbox" className="checkbox-input" name="checkbox" value="Red" />
          {versions}
      </label>
    </div>
  );
}

export default Versions;