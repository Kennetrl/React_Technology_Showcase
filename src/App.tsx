import UserCard from './components/UserCard/UserCard';
import type { User } from './types';

const mockUsers: User[] = [
  { id: 1, name: 'Rodney Andrade', role: 'DevOps', skills: ['React', 'TypeScript', 'Tailwind'], initials: 'AR' },
  { id: 2, name: 'Lenin Alomoto', role: 'Backend Dev', skills: ['Node.js', 'PostgreSQL'], initials: 'LA' },
  { id: 3, name: 'Vanesa Vela', role: 'Scrum Master', skills: ['Jira', 'Huly', 'UX'], initials: 'VV' },
  { id: 4, name: 'Kennet Rodriguez', role: 'Frontend Dev', skills: ['Figma', 'CSS', 'UX'], initials: 'KR' },
];

function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-2xl font-semibold text-gray-900 mb-6">Tailwind — UserCard</h1>
      <div className="flex flex-wrap gap-4">
        {mockUsers.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default App;