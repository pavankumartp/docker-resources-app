'use client';

import { useState, useMemo } from 'react';
import { Resource, FilterState, ResourceCategory } from '@/types';

export function useResourceFilters(resources: Resource[]) {
  const [filters, setFilters] = useState<FilterState>({
    searchQuery: '',
    selectedYear: '',
    selectedTypes: [],
    sortBy: 'date',
  });

  const filteredResources = useMemo(() => {
    let filtered = [...resources];

    // Apply search filter
    if (filters.searchQuery) {
      const query = filters.searchQuery.toLowerCase();
      filtered = filtered.filter(
        (resource) =>
          resource.title.toLowerCase().includes(query) ||
          resource.description.toLowerCase().includes(query)
      );
    }

    // Apply year filter
    if (filters.selectedYear) {
      const year = parseInt(filters.selectedYear);
      filtered = filtered.filter((resource) => resource.year === year);
    }

    // Apply type filters
    if (filters.selectedTypes.length > 0) {
      filtered = filtered.filter((resource) =>
        filters.selectedTypes.includes(resource.category)
      );
    }

    // Apply sorting
    if (filters.sortBy === 'date') {
      filtered.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    } else if (filters.sortBy === 'title') {
      filtered.sort((a, b) => a.title.localeCompare(b.title));
    }

    return filtered;
  }, [resources, filters]);

  const setSearchQuery = (query: string) => {
    setFilters((prev) => ({ ...prev, searchQuery: query }));
  };

  const setSelectedYear = (year: string) => {
    setFilters((prev) => ({ ...prev, selectedYear: year }));
  };

  const toggleType = (type: ResourceCategory) => {
    setFilters((prev) => {
      const isSelected = prev.selectedTypes.includes(type);
      return {
        ...prev,
        selectedTypes: isSelected
          ? prev.selectedTypes.filter((t) => t !== type)
          : [...prev.selectedTypes, type],
      };
    });
  };

  const setSortBy = (sortBy: 'date' | 'title') => {
    setFilters((prev) => ({ ...prev, sortBy }));
  };

  const resetFilters = () => {
    setFilters({
      searchQuery: '',
      selectedYear: '',
      selectedTypes: [],
      sortBy: 'date',
    });
  };

  return {
    filters,
    filteredResources,
    setSearchQuery,
    setSelectedYear,
    toggleType,
    setSortBy,
    resetFilters,
  };
}
