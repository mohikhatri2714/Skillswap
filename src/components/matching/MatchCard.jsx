import React, { useState } from 'react';
import { MapPin, ChevronDown, ChevronUp, Star, MessageSquare } from 'lucide-react';

const MatchCard = ({ match }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200 hover:shadow-md transition-shadow duration-300">
      <div className="p-6">
        <div className="flex items-start justify-between">
          <div className="flex items-start space-x-4">
            <img
              src={match.user.avatar}
              alt={match.user.name}
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <h3 className="text-lg font-medium text-gray-900">{match.user.name}</h3>
              <div className="flex items-center text-gray-500 text-sm mt-1">
                <MapPin size={14} className="mr-1" />
                <span>{match.user.location}</span>
              </div>
              
              <div className="flex items-center mt-2">
                <div className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded-full flex items-center">
                  <Star size={12} className="mr-1" fill="currentColor" />
                  <span>{match.matchScore}% Match</span>
                </div>
              </div>
            </div>
          </div>
          
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-gray-400 hover:text-gray-500"
          >
            {expanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>
        </div>
        
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="text-sm font-medium text-gray-700 mb-2">Skills Offered:</h4>
            <div className="flex flex-wrap gap-2">
              {match.skillsOffered.map((skill, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-teal-100 text-teal-800"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-medium text-gray-700 mb-2">Skills Wanted:</h4>
            <div className="flex flex-wrap gap-2">
              {match.skillsWanted.map((skill, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        {expanded && (
          <div className="mt-6 border-t border-gray-200 pt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-3">Skills Offered (Detailed)</h4>
                <ul className="space-y-2">
                  {match.skillsOffered.map((skill, index) => (
                    <li key={index} className="text-sm">
                      <div className="font-medium">{skill.name}</div>
                      <div className="text-gray-500 flex items-center mt-1">
                        <span className="text-xs px-2 py-0.5 bg-gray-100 rounded-full">
                          {skill.category}
                        </span>
                        <span className="ml-2 text-xs px-2 py-0.5 bg-gray-100 rounded-full capitalize">
                          {skill.level}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-3">Skills Wanted (Detailed)</h4>
                <ul className="space-y-2">
                  {match.skillsWanted.map((skill, index) => (
                    <li key={index} className="text-sm">
                      <div className="font-medium">{skill.name}</div>
                      <div className="text-gray-500 flex items-center mt-1">
                        <span className="text-xs px-2 py-0.5 bg-gray-100 rounded-full">
                          {skill.category}
                        </span>
                        <span className="ml-2 text-xs px-2 py-0.5 bg-gray-100 rounded-full capitalize">
                          {skill.level}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="mt-6 flex justify-end">
              <button className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-colors duration-200">
                <MessageSquare size={16} className="mr-2" />
                Contact for Skill Swap
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MatchCard;