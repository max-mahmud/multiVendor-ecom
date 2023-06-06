import React from "react";

const Search = ({ setParPage, setSearchValue, searchValue }) => {
    return (
        <div className="flex justify-between items-center">
            <select
                onChange={(e) => setParPage(parseInt(e.target.value))}
                className="bg-[#283046] border border-slate-700 px-4 py-2 rounded-md focus:outline-none focus:border-indigo-600 text-[#d0d2d6]"
            >
                <option value="5">5</option>
                <option value="15">15</option>
                <option value="25">25</option>
            </select>
            <input onChange={(e) => setSearchValue(e.target.value)} value={searchValue}
                className="bg-[#283046] border border-slate-700 px-4 py-2 rounded-md focus:outline-none focus:border-indigo-600 text-[#d0d2d6]"
                type="text"
                placeholder="Search..."
            />
        </div>
    );
};

export default Search;
