import React, { useState } from "react";
function Logo({ journeyType, handleJourneyChange }) {
    return(
    <div class="logo">
    <h1>My Travel List</h1>
    <text>Journey </text>
    <select value={journeyType} onChange={handleJourneyChange}>
    <option value="General">General</option>
    <option value="Beach">Beach</option>
    <option value="Hiking">Hiking</option>
    <option value="Business">Business</option>
    <option value="International">International</option>
    </select>
    </div>
    )
  }

  export default Logo;