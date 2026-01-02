import { Resource } from '@/types';
import ResourceCard from './ResourceCard';

interface ResourceGridProps {
  resources: Resource[];
}

export default function ResourceGrid({ resources }: ResourceGridProps) {
  if (resources.length === 0) {
    return (
      <div className="flex-1 flex items-center justify-center py-20">
        <div className="text-center">
          <p className="text-xl text-gray-600 mb-2">No resources found</p>
          <p className="text-base text-gray-500">
            Try adjusting your filters or search query
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {resources.map((resource) => (
          <ResourceCard key={resource.id} resource={resource} />
        ))}
      </div>
    </div>
  );
}
