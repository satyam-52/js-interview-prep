import { useCallback, useEffect, useState } from "react";

export default function MultiSelectDropdown({
  options,
  onChange,
  useDebounce = true,
  debounceTime = 500,
}) {
  const [active, setActive] = useState(false);
  const [filters, setFilters] = useState([]);

  const triggerDropdown = useCallback(() => {
    setActive((prevState) => !prevState);
  }, []);

  const handleItemsClick = (e) => {
    if (e.target.type === "checkbox") {
      if (e.target.checked)
        setFilters((prevFilters) => [...prevFilters, e.target.value]);
      else
        setFilters((prevFilters) =>
          prevFilters.filter((filter) => filter !== e.target.value)
        );
    }
  };

  useEffect(() => {
    let timeoutId;
    if (useDebounce) {
      timeoutId = setTimeout(() => {
        onChange(filters);
      }, debounceTime);
    } else {
      onChange(filters);
    }
    return () => {
      if (useDebounce) clearTimeout(timeoutId);
    };
  }, [filters, onChange, useDebounce, debounceTime]);

  return (
    <div className="dropdown--container">
      <button className="dropdown--button" onClick={triggerDropdown}>
        Select Items
      </button>
      <div
        className={`dropdown--items ${active ? "active" : ""}`}
        onClick={handleItemsClick}
      >
        {options.map((option) => (
          <div className="dropdown--item" key={option.id}>
            <label htmlFor={option.id}>
              <input
                name={option.name}
                id={option.id}
                type="checkbox"
                value={option.value}
              />
              {option.placeholder}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}
