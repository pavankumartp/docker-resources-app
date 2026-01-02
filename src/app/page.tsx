'use client';

import HeroSection from '@/components/HeroSection';
import FilterSidebar from '@/components/FilterSidebar';
import ResourceGrid from '@/components/ResourceGrid';
import { mockResources } from '@/data/mockResources';
import { useResourceFilters } from '@/hooks/useResourceFilters';
import { ChevronDown } from 'lucide-react';

export default function Home() {
  const {
    filters,
    filteredResources,
    setSearchQuery,
    setSelectedYear,
    toggleType,
    setSortBy,
    resetFilters,
  } = useResourceFilters(mockResources);

  return (
    <main className="min-h-screen">
      <HeroSection />
      
      <div className="border-b border-gray-200" />
      
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          <FilterSidebar
            searchQuery={filters.searchQuery}
            selectedYear={filters.selectedYear}
            selectedTypes={filters.selectedTypes}
            onSearchChange={setSearchQuery}
            onYearChange={setSelectedYear}
            onTypeToggle={toggleType}
            onReset={resetFilters}
          />
          
          <div className="flex-1">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-gray-900">
                All resources
              </h2>
              
              <div className="relative">
                <select
                  value={filters.sortBy}
                  onChange={(e) => setSortBy(e.target.value as 'date' | 'title')}
                  className="px-4 py-2 pr-10 border border-gray-300 rounded-md text-base appearance-none bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="date">Sort by date</option>
                  <option value="title">Sort by title</option>
                </select>
                <ChevronDown className="w-5 h-5 text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
              </div>
            </div>
            
            <ResourceGrid resources={filteredResources} />
          </div>
        </div>
      </div>
    </main>
  );
}
