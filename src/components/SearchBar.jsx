export default function SearchBar({ search, setSearch }) {
  return (
    <input
      type="text"
      placeholder="Search by course or category..."
      value={search}
      onChange={e => setSearch(e.target.value)}
      className="search"
    />
  );
}
