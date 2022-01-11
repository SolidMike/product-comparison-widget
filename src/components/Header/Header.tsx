import React, { useEffect, useState } from "react";
import useModal from "../Modal/useModal";
import Modal from "../Modal/Modal";
import AdditionalFiltersForm from "../AdditionalFiltersForm/additionalFiltersForm";

import { SHeader } from "./Header";

interface IHeader {
  title: string;
  filters: string[];
  saveFilters: (filters: string[]) => void;
}

const Header: React.FC<IHeader> = ({ title, filters, saveFilters }) => {
  const { isShown, toggle } = useModal();
  const [checked, setChecked] = useState(filters);

  const handleFiltersChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setChecked((prev) =>
      checked.includes(value)
        ? prev.filter((cur) => cur !== value)
        : [...prev, event.target.value]
    );
  };

  const handleSubmit = (checked: string[]) => {
    saveFilters(checked);
  };

  useEffect(() => {
    console.log("checked", checked);
  }, [checked]);

  return (
    <SHeader>
      <div>{title}</div>
      <button onClick={toggle}>Выбрать фильтры</button>
      {/*<AdditionalFiltersForm handleChange={handleFiltersChange}/>*/}
      <Modal
        isShown={isShown}
        hide={toggle}
        submit={() => handleSubmit(checked)}
        headerText="Выбирете фильтры"
      >
        {filters.map((filter) => (
          <div key={filter as string}>
            <input
              type="checkbox"
              name={filter}
              id={filter}
              onChange={handleFiltersChange}
              value={filter}
              checked={checked.includes(filter) || false}
            />
            <label htmlFor={filter}>{filter}</label>
          </div>
        ))}
      </Modal>
    </SHeader>
  );
};

export default Header;
