import { Resource } from '@/types';
import { ChevronRight } from 'lucide-react';

interface ResourceCardProps {
  resource: Resource;
}

export default function ResourceCard({ resource }: ResourceCardProps) {
  return (
    <article className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
      <span className="text-sm text-primary font-medium">{resource.category}</span>
      
      <h3 className="text-xl font-bold text-gray-900 mt-3 mb-2">
        {resource.title}
      </h3>
      
      <p className="text-gray-600 text-base leading-relaxed mb-4">
        {resource.description}
      </p>
      
      <a
        href={resource.link}
        className="inline-flex items-center text-primary hover:text-primary-dark font-medium text-sm group"
      >
        Read now
        <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
      </a>
    </article>
  );
}
