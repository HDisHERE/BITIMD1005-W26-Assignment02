export interface Project {
  id: string;
  name: string;
  description: string;
  icon: string;
  category: string;
  image: string;
  detailedDescription: string;
  technologies: string[];
  features: string[];
  demoUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    id: '1',
    name: 'E-Commerce Platform',
    description: 'Full-stack online shopping with payment integration.',
    icon: 'ShoppingCart',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1658297063569-162817482fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjBzaG9wcGluZyUyMGVjb21tZXJjZXxlbnwxfHx8fDE3NjkwOTk4NjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    detailedDescription: 'A comprehensive e-commerce platform built with modern web technologies. This project features a complete shopping experience including product browsing, cart management, secure checkout, and payment processing. The platform is designed to handle high traffic and provides a seamless user experience across all devices.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
    features: [
      'Secure payment processing with Stripe integration',
      'Real-time inventory management',
      'User authentication and profile management',
      'Advanced product search and filtering',
      'Responsive design for mobile and desktop',
      'Admin dashboard for order management'
    ]
  },
  {
    id: '2',
    name: 'Task Management App',
    description: 'Collaborative task tracking with real-time updates.',
    icon: 'CheckSquare',
    category: 'Productivity',
    image: 'https://images.unsplash.com/photo-1699570044128-b61ef113b72e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YXNrJTIwbWFuYWdlbWVudCUyMHByb2R1Y3Rpdml0eXxlbnwxfHx8fDE3NjkxMjk4MTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    detailedDescription: 'A powerful task management application that helps teams collaborate effectively. Features real-time synchronization, allowing team members to see updates instantly. Built with a focus on simplicity and productivity, making project management effortless.',
    technologies: ['React', 'Firebase', 'TypeScript', 'Material-UI'],
    features: [
      'Real-time task updates and notifications',
      'Team collaboration and task assignment',
      'Kanban board and list views',
      'Priority levels and due dates',
      'File attachments and comments',
      'Progress tracking and analytics'
    ]
  },
  {
    id: '3',
    name: 'Weather Dashboard',
    description: 'Interactive forecast app with data visualizations.',
    icon: 'Cloud',
    category: 'Data Visualization',
    image: 'https://images.unsplash.com/photo-1766203695519-f5b060b72d54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWF0aGVyJTIwZm9yZWNhc3QlMjBza3l8ZW58MXx8fHwxNzY5MDQ0ODE3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    detailedDescription: 'An elegant weather dashboard that provides comprehensive weather information with beautiful visualizations. Displays current conditions, hourly forecasts, and 7-day predictions with interactive charts and graphs.',
    technologies: ['React', 'D3.js', 'OpenWeather API', 'Recharts'],
    features: [
      'Current weather conditions and forecasts',
      'Interactive data visualizations',
      'Location-based weather detection',
      'Hourly and weekly forecasts',
      'Weather alerts and notifications',
      'Historical weather data analysis'
    ]
  },
  {
    id: '4',
    name: 'Fitness Tracker',
    description: 'Track workouts, nutrition, and health metrics.',
    icon: 'Activity',
    category: 'Health & Fitness',
    image: 'https://images.unsplash.com/photo-1584827386916-b5351d3ba34b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwd29ya291dCUyMGd5bXxlbnwxfHx8fDE3NjkwMDM3NDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    detailedDescription: 'A comprehensive fitness tracking application that helps users monitor their health and fitness journey. Track workouts, log meals, and monitor progress with detailed analytics and personalized insights.',
    technologies: ['React Native', 'Node.js', 'PostgreSQL', 'Chart.js'],
    features: [
      'Workout logging and exercise library',
      'Nutrition tracking and meal planning',
      'Progress photos and measurements',
      'Custom workout programs',
      'Health metrics dashboard',
      'Social features and challenges'
    ]
  },
  {
    id: '5',
    name: 'Recipe Finder',
    description: 'Discover recipes with smart ingredient search.',
    icon: 'Coffee',
    category: 'Lifestyle',
    image: 'https://images.unsplash.com/photo-1635661988046-306631057df3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwY29va2luZyUyMHJlY2lwZXN8ZW58MXx8fHwxNzY5MTI5ODE3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    detailedDescription: 'An intelligent recipe discovery platform that helps users find recipes based on available ingredients. Features smart search algorithms, nutritional information, and step-by-step cooking instructions.',
    technologies: ['React', 'Spoonacular API', 'Redux', 'Sass'],
    features: [
      'Smart ingredient-based search',
      'Nutritional information and dietary filters',
      'Step-by-step cooking instructions',
      'Save favorite recipes',
      'Shopping list generation',
      'User recipe submissions'
    ]
  },
  {
    id: '6',
    name: 'Portfolio CMS',
    description: 'Content management for creative professionals.',
    icon: 'Layout',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1742440710226-450e3b85c100?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHdvcmtzcGFjZSUyMGRlc2lnbnxlbnwxfHx8fDE3NjkxMjQ0NjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    detailedDescription: 'A powerful content management system designed specifically for creative professionals. Build and manage stunning portfolios with an intuitive drag-and-drop interface and customizable templates.',
    technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'AWS S3'],
    features: [
      'Drag-and-drop portfolio builder',
      'Customizable templates',
      'Image optimization and hosting',
      'SEO optimization tools',
      'Analytics and visitor insights',
      'Client project galleries'
    ]
  },
  {
    id: '7',
    name: 'Chat Application',
    description: 'Real-time messaging with file sharing and encryption.',
    icon: 'MessageCircle',
    category: 'Communication',
    image: 'https://images.unsplash.com/photo-1516210938721-0703012a297a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXNzYWdpbmclMjBjb21tdW5pY2F0aW9uJTIwcGhvbmV8ZW58MXx8fHwxNzY5MTI5ODE4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    detailedDescription: 'A secure real-time chat application with end-to-end encryption. Supports one-on-one and group conversations, file sharing, and rich media messages. Built with privacy and security as top priorities.',
    technologies: ['React', 'Socket.io', 'Node.js', 'MongoDB', 'WebRTC'],
    features: [
      'End-to-end encryption',
      'Real-time messaging',
      'File and media sharing',
      'Group chats and channels',
      'Voice and video calls',
      'Message search and history'
    ]
  },
  {
    id: '8',
    name: 'Music Player',
    description: 'Sleek music streaming with playlist management.',
    icon: 'Music',
    category: 'Entertainment',
    image: 'https://images.unsplash.com/photo-1572119244337-bcb4aae995af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMGhlYWRwaG9uZXMlMjBhdWRpb3xlbnwxfHx8fDE3NjkxMjk4MTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    detailedDescription: 'A modern music streaming application with a beautiful interface and powerful features. Create playlists, discover new music, and enjoy high-quality audio streaming with an intuitive user experience.',
    technologies: ['React', 'Web Audio API', 'Redux', 'Express'],
    features: [
      'High-quality audio streaming',
      'Playlist creation and management',
      'Music discovery and recommendations',
      'Offline playback support',
      'Audio equalizer and effects',
      'Social sharing features'
    ]
  },
  {
    id: '9',
    name: 'Budget Planner',
    description: 'Track expenses and analyze spending habits.',
    icon: 'DollarSign',
    category: 'Finance',
    image: 'https://images.unsplash.com/photo-1764407395696-495d7fb7fc71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNlJTIwbW9uZXklMjBidWRnZXR8ZW58MXx8fHwxNzY5MTI5ODE5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    detailedDescription: 'A comprehensive budget planning tool that helps users take control of their finances. Track expenses, set savings goals, and gain insights into spending patterns with detailed analytics and reports.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Plaid API', 'Chart.js'],
    features: [
      'Expense tracking and categorization',
      'Budget goals and alerts',
      'Bank account integration',
      'Spending analytics and insights',
      'Bill reminders and recurring payments',
      'Financial reports and export'
    ]
  }
];
