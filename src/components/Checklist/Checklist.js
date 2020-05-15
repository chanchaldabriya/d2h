import React, { useState } from "react";
import "./Checklist.css";
import "../../common/Common.css";
import _ from "lodash";

const Checklist = ({
  items,
  submitLabel = "Submit",
  onSubmit,
  alreadyChecked=[],
}) => {
  let [checkedItems, setCheckedItems] = useState([]);

  const handleChange = (event) => {
    if (event.target.checked) {
      // Checked
      setCheckedItems([...checkedItems, event.target.name]);
    } else {
      // Unchecked
      setCheckedItems(
        checkedItems.filter((item) => item !== event.target.name)
      );
    }
  };

  const onChecklistSubmit = () => {
    if (checkedItems.length > 0) onSubmit(checkedItems);
  };

  return (
    <div className="Checklist">
      <ul className="Checklist-list">
        {_.toArray(items).map((item) => (
          <li className="Checklist-list-item" key={item.name}>
            <label>
              <input
                type="checkbox"
                name={item.id}
                checked={
                  (checkedItems.length > 0 &&
                    checkedItems.indexOf(item.id) >= 0) ||
                  (alreadyChecked.length > 0 &&
                    alreadyChecked.indexOf(item.id) >= 0)
                }
                onChange={handleChange}
                disabled={alreadyChecked.indexOf(item.id) >= 0}
              />
              {item.name} - ₹ {item.price}
            </label>
          </li>
        ))}
      </ul>

      <button
        className="Checklist-btn subscribe-btn"
        onClick={onChecklistSubmit}
      >
        {submitLabel}
      </button>
    </div>
  );
};

export default Checklist;
