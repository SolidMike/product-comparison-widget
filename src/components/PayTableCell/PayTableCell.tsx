import React from "react";
import { IPay } from "../../types";

import { PaySegment, PayList } from "./PayTableCell.styles";

const PayTableCell: React.FC<IPay> = (pay) => {
  const { period, pay_count, total_count } = pay;

  const percentageCalculator = (pay_count: number, total_count: number) => {
    return Math.floor((pay_count * 100) / total_count);
  };

  const paymentPercentage = percentageCalculator(pay_count, total_count);

  const monthProgressBar = (pay_count: number, total_count: number) => {
    const filledSegment = (12 * paymentPercentage) / 100;
    return Array(12)
      .fill(0)
      .map((_, i) => (
        <PaySegment
          filled={filledSegment >= i ? "green" : "lightgrey"}
        ></PaySegment>
      ));
  };

  const quarterProgressBar = (pay_count: number, total_count: number) => {
    console.log(paymentPercentage);
    const filledSegment = (4 * paymentPercentage) / 100;
    return Array(4)
      .fill(0)
      .map((_, i) => (
        <PaySegment
          filled={filledSegment >= i ? "green" : "lightgrey"}
        ></PaySegment>
      ));
  };

  return (
    <td>
      <div>
        <PayList>
          {period === "Ежемесячно"
            ? monthProgressBar(pay_count, total_count)
            : quarterProgressBar(pay_count, total_count)}
        </PayList>
      </div>
      <div>
        {pay_count} из {total_count}
      </div>
    </td>
  );
};

export default PayTableCell;
