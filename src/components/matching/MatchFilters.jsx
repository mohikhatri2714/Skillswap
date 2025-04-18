import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';

// These are just samples, in a real application these would be fetched from an API
const SKILL_CATEGORIES = [
  "Programming",
  "Design",
  "Language",
  "Music",
  "Cooking",
  "Business",
  "Marketing",
  "Photography",
  "Fitness",
  "Writing"
];

const MatchFilters = ({ filters, onFilterChange }) => {
  const [localFilters, setLocalFilters] = useState(filters);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedFilters = { ...localFilters, [name]: value };
    setLocalFilters(updatedFilters);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    onFilterChange(localFilters);
  };
  
  const handleReset = () => {
    const resetFilters = {
      skillCategory: '',
      skillLevel: '',
      location: '',
      matchScore: 0
    };
    setLocalFilters(resetFilters);
    onFilterChange(resetFilters);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
      <div className="flex items-center mb-5">
        <Filter size={18} className="text-gray-400 mr-2" />
        <h3 className="text-gray-700 font-medium">Filters</h3>
      </div>
      
      <div className="space-y-4">
        <div>
          <label htmlFor="skill-category" className="block text-sm font-medium text-gray-700 mb-1">
            Skill Category
          </label>
          <select
            id="skill-category"
            name="skillCategory"
            value={localFilters.skillCategory}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
          >
            <option value="">All Categories</option>
            {SKILL_CATEGORIES.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        
        <div>
          <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
            Location
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={16} className="text-gray-400" />
            </div>
            <input
              type="text"
              id="location"
              name="location"
              value={localFilters.location}
              onChange={handleChange}
              className="w-full pl-10 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
              placeholder="City, State"
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="match-score" className="block text-sm font-medium text-gray-700 mb-1">
            Minimum Match Score: {localFilters.matchScore}%
          </label>
          <input
            type="range"
            id="match-score"
            name="matchScore"
            min="0"
            max="100"
            step="5"
            value={localFilters.matchScore}
            onChange={handleChange}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
        </div>
        
        <div className="pt-4 flex flex-col space-y-2">
          <button
            type="submit"
            className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
          >
            Apply Filters
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="w-full inline-flex justify-center items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
          >
            Reset
          </button>
        </div>
      </div>
    </form>
  );
};

export default MatchFilters;