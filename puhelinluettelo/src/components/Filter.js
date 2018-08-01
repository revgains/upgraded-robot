import React from 'react';

const Filter = () => {
    return (
        <div>
          etsi nimellä: <input
                          value={this.state.filter}
                          onChange={this.handleFilterChange} />
        </div>
    )
}

export default Filter;