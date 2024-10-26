// // SearchBar.jsx
// import React from "react";

// const SearchBar = ({ setFilter, setSortBy }) => {
//   const handleFilterChange = (event) => {
//     setFilter(event.target.value);
//   };

//   const handleSortChange = (event) => {
//     setSortBy(event.target.value);
//   };

//   return (
//     <div className="flex gap-4">
//       <select onChange={handleFilterChange} className="border p-2 rounded">
//         <option value="All">All</option>
//         <option value="Completed">Completed</option>
//         <option value="Pending">Pending</option>
//       </select>
//       <select onChange={handleSortChange} className="border p-2 rounded">
//         <option value="title">Sort by Title</option>
//         <option value="date">Sort by Date</option>
//       </select>
//     </div>
//   );
// };

// export default SearchBar;
