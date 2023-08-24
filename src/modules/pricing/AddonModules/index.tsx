import React from "react";
import * as Styled from "./add.stylest";
import * as Data from "./data";

export const AddonModules: React.FC = () => {
  const { addModules } = Data;
  return (
    <Styled.AddModulesWrapper>
      <h1>Add on Modules</h1>
      <Styled.AddModuleTableWrapper>
        <Styled.AddModuleTableHeader>
          <div className="row1">Ad-On</div>
          <div className="row2">Price</div>
          <div className="row3">Add</div>
        </Styled.AddModuleTableHeader>
        <Styled.AddModuleTableBody>
          {addModules.map((row, index) => (
            <Styled.AddModuleTableRow key={index}>
              <div className="row1">
                <h3>
                  {row.icon} {row.title}
                </h3>
                <p>{row.desc}</p>
                <span>Learn More</span>
              </div>
              <div className="row2">
                <h4>{row.price}</h4>
                <p>{row.priceDesc}</p>
              </div>
              <div className="row3">
                <div className="add-button">Add</div>
              </div>
              <div className="row4">
                <span>Learn More</span>
              </div>
            </Styled.AddModuleTableRow>
          ))}
        </Styled.AddModuleTableBody>
      </Styled.AddModuleTableWrapper>
    </Styled.AddModulesWrapper>
  );
};
