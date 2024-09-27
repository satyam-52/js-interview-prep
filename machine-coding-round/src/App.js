import { useCallback, useState } from "react";
import MultiSelectDropdown from "./components/MultiSelectDropdown/MultiSelectDropdown";
import "./App.css";
import Tabs from "./components/Tabs/Tabs";
import Accordion from "./components/Accordion/Accordion";
import Pagination from "./components/Pagination/Pagination";
import CustomHooks from "./components/CustomHooks/CustomHooks";
import useWindowConfirm from "./hooks/useWindowConfirm/useWindowConfirm";
import Autocomplete from "./components/Autocomplete/Autocomplete";

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
    content: (
      <>
        <div>This is One's content</div>
        <img src="https://picsum.photos/id/1/200/300" alt="" />
      </>
    ),
  },
  {
    id: "two",
    placeholder: "Two",
    content: (
      <>
        <div>This is Two's content</div>
        <img src="https://picsum.photos/id/2/200/300" alt="" />
      </>
    ),
  },
  {
    id: "three",
    placeholder: "Three",
    content: (
      <>
        <div>This is Three's content</div>
        <img src="https://picsum.photos/id/3/200/300" alt="" />
      </>
    ),
  },
];

const accordionData = [
  {
    id: "one",
    title: "One",
    content: <p>This is One's Content</p>,
  },
  {
    id: "two",
    title: "Two",
    content: <p>This is Two's Content</p>,
  },
  {
    id: "three",
    title: "Three",
    content: <p>This is Three's Content</p>,
  },
];

export default function App() {
  const [selectedOptions, setSelectedOptions] = useState(null);
  const { isConfirmed, Component } = useWindowConfirm();
  const [chips, setChips] = useState([]);

  const onChange = useCallback((selectedOptions) => {
    setSelectedOptions(selectedOptions);
  }, []);

  const handleAlert = async () => {
    const confirmed = await isConfirmed("Are you able to see all products?");
    if (confirmed) alert("Yes!!");
    else alert("No!!");
  };

  return (
    <div className="App">
      <div>{selectedOptions && selectedOptions.join(", ")}</div>
      <MultiSelectDropdown options={options} onChange={onChange} />
      <div className="seperator" />
      <Tabs tabs={json} />
      <div className="seperator" />
      <Accordion accordionData={accordionData} />
      <div className="seperator" />
      <Pagination />
      <div className="seperator" />
      <CustomHooks />
      <div className="seperator" />
      <Component />
      <button onClick={handleAlert}>(Alert)</button>
      <div className="seperator" />
      <Autocomplete chips={chips} setChips={setChips} />
      <div className="seperator" />
    </div>
  );
}
