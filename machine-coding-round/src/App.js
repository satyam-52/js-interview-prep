import { useCallback, useState } from "react";
import MultiSelectDropdown from "./components/MultiSelectDropdown";
import "./App.css";
import Tabs from "./components/Tabs/Tabs";

const options = [
  {
    id: "1",
    name: "1",
    placeholder: "1",
    value: "one",
  },
  {
    id: "2",
    name: "2",
    placeholder: "2",
    value: "two",
  },
  {
    id: "3",
    name: "3",
    placeholder: "3",
    value: "three",
  },
];

const json = [
  {
    id: "one",
    placeholder: "One",
    content: <><div>This is One's content</div><img src="https://picsum.photos/id/1/200/300" alt="" /></>
  },
  {
    id: "two",
    placeholder: "Two",
    content: <><div>This is Two's content</div><img src="https://picsum.photos/id/2/200/300" alt="" /></>
  },
  {
    id: "three",
    placeholder: "Three",
    content: <><div>This is Three's content</div><img src="https://picsum.photos/id/3/200/300" alt="" /></>
  }
]

export default function App() {
  const [selectedOptions, setSelectedOptions] = useState(null);
  const onChange = useCallback((selectedOptions) => {
    console.log({ selectedOptions });
    setSelectedOptions(selectedOptions)
  }, []);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div>{selectedOptions && selectedOptions.join(", ")}</div>
      <MultiSelectDropdown options={options} onChange={onChange} />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Tabs tabs={json} />
    </div>
  );
}
