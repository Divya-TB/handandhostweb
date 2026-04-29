"use client";

import { useEffect, useState } from "react";

export default function SizeSelect({ variant }) {
  const values = variant?.values || [];

  const [selectedSize, setSelectedSize] = useState("");

  // set default value when API loads
  useEffect(() => {
    if (values.length > 0 && !selectedSize) {
      setSelectedSize(values[0]);
    }
  }, [values]);

  return (
    <div className="variant-picker-item">
      
      {/* LABEL */}
      <div className="d-flex justify-content-between mb_12">
        <div className="variant-picker-label">
          {variant?.variant || "Variant"}:
          <span className="text-title variant-picker-label-value">
            {" "}{selectedSize}
          </span>
        </div>
      </div>

      {/* OPTIONS */}
      {/* <div className="variant-picker-values gap12">
        {values.map((value, index) => {
          const id = `variant-${index}`;

          return (
            <div key={id} onClick={() => setSelectedSize(value)}>
              <input
                type="radio"
                id={id}
                checked={selectedSize === value}
                readOnly
              />

              <label
                className={`style-text size-btn ${
                  !value ? "type-disable" : ""
                }`}
                htmlFor={id}
                data-value={value}
              >
                <span className="text-title">
                  {value || "Not Available"}
                </span>
              </label>
            </div>
          );
        })}
      </div> */}
    </div>
  );
}