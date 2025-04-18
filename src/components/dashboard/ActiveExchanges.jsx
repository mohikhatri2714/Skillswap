import React from 'react';
import { Calendar, Clock, Video, MessageSquare } from 'lucide-react';

// Mock data - in a real app this would come from an API
const MOCK_EXCHANGES = [
  {
    id: '1',
    partner: {
      id: '101',
      name: 'Emma Wilson',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    youTeach: 'Python Programming',
    theyTeach: 'Spanish Language',
    nextSession: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000), // 2 days from now
    status: 'active'
  },
  {
    id: '2',
    partner: {
      id: '103',
      name: 'Sophie Taylor',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    youTeach: 'Yoga',
    theyTeach: 'Graphic Design',
    nextSession: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000), // 5 days from now
    status: 'active'
  }
];

const ActiveExchanges = () => {
  if (MOCK_EXCHANGES.length === 0) {
    return (
      <div className="text-center py-6">
        <h3 className="text-lg font-medium text-gray-900">No active exchanges</h3>
        <p className="mt-2 text-sm text-gray-500">
          When you start swapping skills with others, they will appear here.
        </p>
      </div>
    );
  }

  const formatDate = (date) => {
    return new Intl.DateTimeFormat('en-US', {
      weekday: 'long',
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric'
    }).format(date);
  };

  return (
    <div>
      <h2 className="text-lg font-medium text-gray-900 mb-4">Your Skill Exchanges</h2>
      <div className="space-y-6">
        {MOCK_EXCHANGES.map((exchange) => (
          <div
            key={exchange.id}
            className="border border-gray-200 rounded-lg p-5 transition-all duration-200 hover:shadow-md"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <img
                  src={exchange.partner.avatar}
                  alt={exchange.partner.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="text-lg font-medium text-gray-900">{exchange.partner.name}</h3>
                  <div className="text-sm text-gray-500">
                    <span className="font-medium text-teal-600">You teach:</span> {exchange.youTeach}
                    {' • '}
                    <span className="font-medium text-purple-600">They teach:</span> {exchange.theyTeach}
                  </div>
                </div>
              </div>
              <div>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  Active
                </span>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 flex items-start">
              <Calendar className="h-5 w-5 text-gray-400 mr-2 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-gray-700">Next Session</p>
                <p className="text-sm text-gray-500">{formatDate(exchange.nextSession)}</p>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-colors duration-200">
                <Video size={16} className="mr-2" />
                Start Session
              </button>
              <button className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-colors duration-200">
                <MessageSquare size={16} className="mr-2" />
                Message
              </button>
              <button className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-colors duration-200">
                <Clock size={16} className="mr-2" />
                Reschedule
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActiveExchanges;