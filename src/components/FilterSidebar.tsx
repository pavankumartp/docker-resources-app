'use client';

import { ResourceCategory } from '@/types';
import { ChevronDown } from 'lucide-react';

interface FilterSidebarProps {
  searchQuery: string;
  selectedYear: string;
  selectedTypes: ResourceCategory[];
  onSearchChange: (query: string) => void;
  onYearChange: (year: string) => void;
  onTypeToggle: (type: ResourceCategory) => void;
  onReset: () => void;
}

const availableTypes: ResourceCategory[] = [
  'Infographic',
  'White Paper',
  'Video',
  'Blog',
  'Guide',
  'Webinar',
];

const availableYears = ['2024', '2023', '2022', '2021'];

export default function FilterSidebar({
  searchQuery,
  selectedYear,
  selectedTypes,
  onSearchChange,
  onYearChange,
  onTypeToggle,
  onReset,
}: FilterSidebarProps) {
  return (
    <aside className="w-full lg:w-80 flex-shrink-0">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Filters</h2>
        <button
          onClick={onReset}
          className="text-primary hover:text-primary-dark font-medium text-sm"
        >
          Reset
        </button>
      </div>

      {/* Search */}
      <div className="mb-8">
        <label className="block text-base font-bold text-gray-900 mb-3">
          Search
        </label>
        <input
          type="text"
          placeholder="Looking for something specific?"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        />
      </div>

      {/* Date Filter */}
      <div className="mb-8">
        <label className="block text-base font-bold text-gray-900 mb-3">
          Date
        </label>
        <div className="relative">
          <select
            value={selectedYear}
            onChange={(e) => onYearChange(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-md text-base appearance-none bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          >
            <option value="">Select year</option>
            {availableYears.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
          <ChevronDown className="w-5 h-5 text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
        </div>
      </div>

      {/* Type Filter */}
      <div>
        <label className="block text-base font-bold text-gray-900 mb-3">
          Type
        </label>
        <div className="space-y-3">
          {availableTypes.map((type) => {
            const count = selectedTypes.includes(type) ? 1 : 0;
            return (
              <label
                key={type}
                className="flex items-center cursor-pointer group"
              >
                <input
                  type="checkbox"
                  checked={selectedTypes.includes(type)}
                  onChange={() => onTypeToggle(type)}
                  className="w-4 h-4 border-2 border-gray-300 rounded text-primary focus:ring-2 focus:ring-primary focus:ring-offset-0"
                />
                <span className="ml-3 text-base text-gray-700 group-hover:text-gray-900">
                  {type} ({count})
                </span>
              </label>
            );
          })}
        </div>
      </div>
    </aside>
  );
}
