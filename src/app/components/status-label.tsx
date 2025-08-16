export enum Status {
  Active = 'active',
  NotActive = 'notActive',
  Pending = 'pending',
  Suspended = 'suspended',
}

export interface StatusLabelProps {
  children: React.ReactNode;
  status: Status;
}

export default function StatusLabel({ children, status }: StatusLabelProps) {
  return (
    <span
      className={`inline-flex items-center py-1 px-3.5 rounded-3xl text-sm font-medium 
    ${
      (status === Status.Active && 'bg-green-100 text-green-700') ||
      (status === Status.NotActive && 'bg-gray-100 text-gray-700') ||
      (status === Status.Pending && 'bg-yellow-100 text-yellow-700') ||
      (status === Status.Suspended && 'bg-red-100 text-red-700') ||
      ''
    }`}
    >
      <div className="w-1 h-1 rounded-full bg-current"></div>
      {children}
    </span>
  );
}
