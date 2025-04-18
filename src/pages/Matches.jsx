import React, { useState } from 'react';
import MatchesList from '../components/matching/MatchesList';
import MatchFilters from '../components/matching/MatchFilters';

// Mock data - in a real app this would come from an API
const MOCK_MATCHES = [
  {
    id: '1',
    user: {
      id: '101',
      name: 'Emma Wilson',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      location: 'Seattle, WA'
    },
    skillsOffered: [
      { name: 'JavaScript', category: 'Programming', level: 'expert' },
      { name: 'React', category: 'Programming', level: 'advanced' }
    ],
    skillsWanted: [
      { name: 'Spanish', category: 'Language', level: 'beginner' },
      { name: 'Photography', category: 'Photography', level: 'intermediate' }
    ],
    matchScore: 92
  },
  {
    id: '2',
    user: {
      id: '102',
      name: 'Michael Chen',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      location: 'Portland, OR'
    },
    skillsOffered: [
      { name: 'French', category: 'Language', level: 'expert' },
      { name: 'Piano', category: 'Music', level: 'advanced' }
    ],
    skillsWanted: [
      { name: 'Python', category: 'Programming', level: 'beginner' },
      { name: 'Web Design', category: 'Design', level: 'intermediate' }
    ],
    matchScore: 87
  },
  {
    id: '3',
    user: {
      id: '103',
      name: 'Sophie Taylor',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      location: 'Chicago, IL'
    },
    skillsOffered: [
      { name: 'Graphic Design', category: 'Design', level: 'expert' },
      { name: 'Illustrator', category: 'Design', level: 'advanced' }
    ],
    skillsWanted: [
      { name: 'Public Speaking', category: 'Business', level: 'intermediate' },
      { name: 'Video Editing', category: 'Design', level: 'beginner' }
    ],
    matchScore: 85
  },
  {
    id: '4',
    user: {
      id: '104',
      name: 'David Kim',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      location: 'Austin, TX'
    },
    skillsOffered: [
      { name: 'Digital Marketing', category: 'Marketing', level: 'expert' },
      { name: 'SEO', category: 'Marketing', level: 'advanced' }
    ],
    skillsWanted: [
      { name: 'Guitar', category: 'Music', level: 'beginner' },
      { name: 'Italian Cooking', category: 'Cooking', level: 'intermediate' }
    ],
    matchScore: 80
  },
  {
    id: '5',
    user: {
      id: '105',
      name: 'Olivia Martinez',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      location: 'Denver, CO'
    },
    skillsOffered: [
      { name: 'Yoga Instruction', category: 'Fitness', level: 'expert' },
      { name: 'Meditation', category: 'Fitness', level: 'advanced' }
    ],
    skillsWanted: [
      { name: 'Data Analysis', category: 'Programming', level: 'beginner' },
      { name: 'Social Media Strategy', category: 'Marketing', level: 'intermediate' }
    ],
    matchScore: 78
  }
];

const Matches = () => {
  const [filters, setFilters] = useState({
    skillCategory: '',
    skillLevel: '',
    location: '',
    matchScore: 0
  });
  
  const [matches, setMatches] = useState(MOCK_MATCHES);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    
    // In a real app, this would be a server call
    // For now, we'll just filter the mock data client-side
    let filteredMatches = [...MOCK_MATCHES];
    
    if (newFilters.skillCategory) {
      filteredMatches = filteredMatches.filter(match => 
        match.skillsOffered.some(skill => skill.category === newFilters.skillCategory) ||
        match.skillsWanted.some(skill => skill.category === newFilters.skillCategory)
      );
    }
    
    if (newFilters.location) {
      filteredMatches = filteredMatches.filter(match => 
        match.user.location.toLowerCase().includes(newFilters.location.toLowerCase())
      );
    }
    
    if (newFilters.matchScore > 0) {
      filteredMatches = filteredMatches.filter(match => 
        match.matchScore >= newFilters.matchScore
      );
    }
    
    setMatches(filteredMatches);
  };

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-64 flex-shrink-0 md:mr-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">Find Matches</h1>
            <MatchFilters filters={filters} onFilterChange={handleFilterChange} />
          </div>
          
          <div className="flex-1 mt-8 md:mt-0">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-800">Potential Skill Matches</h2>
              <p className="text-sm text-gray-600">{matches.length} matches found</p>
            </div>
            <MatchesList matches={matches} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Matches;