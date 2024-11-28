import React, { useState } from "react";

function Stats({ items }) {
    const total = items.length;
    const packedCount = items.filter((item) => item.packed).length;
    const percentagePacked = total > 0 ? Math.round((packedCount / total) * 100) : 0;
    return (
      <footer className="stats">
        {percentagePacked === 100 ? (
          <em>You got everything!</em>
        ) : (
          <em>
            You have {total} item{total !== 1 ? "s" : ""} in the list. You already packed{" "}
            {packedCount} ({percentagePacked}%).
          </em>
        )}
      </footer>
    );
  }
  export default Stats;