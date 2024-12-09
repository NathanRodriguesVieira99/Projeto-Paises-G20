import './styles.css'

const NameFilter = ({ filterName, onFilterChange }) => {
  return (
    <div className="odinFilterName">
      <h4>Filter by Name</h4>
      <input
        type="text"
        value={filterName}
        onChange={(e) => onFilterChange(e.target.value)}
        placeholder="write the name country"
      />
    </div>
  );
};

export default NameFilter