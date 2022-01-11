import React from "react";
import { Risks } from "../../types";

import { RisksList, RisksSegment } from "./RisksTableCell.styles";

interface IRisksTableCell {
  risks: Risks;
}

const RisksTableCell: React.FC<IRisksTableCell> = ({ risks }) => {
  return (
    <td>
      <RisksList>
        {Array(risks)
          .fill(0)
          .map((_, i) => (
            <RisksSegment>
              <svg
                version="1.1"
                id="Layer_1"
                x="0px"
                y="0px"
                viewBox="0 0 400 400"
              >
                <g>
                  <polygon
                    points="157.055,0 90.798,196.319 164.417,196.319 88.344,400 289.571,159.509 218.405,159.509
		311.656,0 	"
                    fill={
                      risks < 3 ? "green" : risks === 3 ? "yellow" : "orange"
                    }
                  />
                </g>
              </svg>
            </RisksSegment>
          ))}
      </RisksList>
    </td>
  );
};

export default RisksTableCell;
