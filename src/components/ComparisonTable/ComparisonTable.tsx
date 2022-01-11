import React from "react";
import { IProduct } from "../../types";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import PayTableCell from "../PayTableCell/PayTableCell";
import RisksTableCell from "../RisksTableCell/RisksTableCell";

import { Link } from "react-router-dom";

import { Table, StyledChart } from "./ComparsionTable.styles";

interface IComparisonTable {
  selectedFilters: string[];
  selectedItems: IProduct[];
  removeFromComparison: (product: IProduct) => void;
}

const ComparisonTable: React.FC<IComparisonTable> = ({
  selectedFilters,
  selectedItems,
  removeFromComparison,
}) => {
  return (
    <>
      <Link to="/">Назад</Link>
      <Table>
        <thead>
          <tr>
            <th>Attributes</th>
            {selectedItems.map((item) => (
              <th key={item.id}>
                <div>
                  <button onClick={() => removeFromComparison(item)}>
                    &#10006;
                  </button>
                </div>
                {item.name}{" "}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {selectedFilters &&
            selectedFilters.map((filter) => {
              return (
                <tr>
                  <td>{filter}</td>
                  {selectedItems.map((row) => {
                    if (filter === "risks") {
                      return <RisksTableCell risks={row.risks} />;
                    }
                    if (filter === "pay") {
                      return (
                        <PayTableCell
                          period={row.pay.period}
                          pay_count={row.pay.pay_count}
                          total_count={row.pay.total_count}
                        />
                      );
                    }
                    if (filter === "dynamics") {
                      return (
                        <StyledChart>
                          <ResponsiveContainer width="100%" height="100%">
                            <LineChart
                              width={500}
                              height={300}
                              data={row.dynamics}
                              margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                              }}
                            >
                              <CartesianGrid strokeDasharray="3 3" />
                              <XAxis dataKey="name" />
                              <YAxis />
                              <Tooltip />
                              <Legend />
                              <Line
                                type="monotone"
                                dataKey="pv"
                                stroke="#8884d8"
                                activeDot={{ r: 8 }}
                              />
                              <Line
                                type="monotone"
                                dataKey="uv"
                                stroke="#82ca9d"
                              />
                            </LineChart>
                          </ResponsiveContainer>
                        </StyledChart>
                      );
                    } else {
                      return <td>{row[filter as keyof IProduct]}</td>;
                    }
                  })}
                </tr>
              );
            })}
        </tbody>
      </Table>
    </>
  );
};

export default ComparisonTable;
