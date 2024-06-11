import React, { useState } from 'react';

function EntitiesSelector() {
  const [entitiesCount, setEntitiesCount] = useState(10);

  return (
    <div>
      <div className="show-entities-label">Show Entities</div>
      <div className="show-entities-value">
        <select 
          value={entitiesCount} 
          onChange={(e) => setEntitiesCount(e.target.value)}
          className="entities-count"
        >
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
        </select>
        
      </div>
    </div>
  );
}

export default EntitiesSelector;