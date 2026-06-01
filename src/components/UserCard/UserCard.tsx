import type { User } from '../../types';

interface UserCardProps {
  user: User;
}

const UserCard = ({ user }: UserCardProps) => {
  return (
    <div className="rounded-xl border border-gray-200 p-4 bg-white shadow-sm hover:shadow-md transition-shadow w-64">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center font-medium text-sm">
          {user.initials}
        </div>
        <div>
          <p className="font-medium text-gray-900 text-sm">{user.name}</p>
          <p className="text-xs text-gray-500">{user.role}</p>
        </div>
      </div>
      <div className="flex flex-wrap gap-1">
        {user.skills.map((skill) => (
          <span key={skill} className="text-xs px-2 py-0.5 bg-gray-100 text-gray-600 rounded-full">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default UserCard;