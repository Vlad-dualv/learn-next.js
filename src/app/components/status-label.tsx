import clsx from 'clsx';

export enum Status {
  Active = 'active',
  NotActive = 'notActive',
  Pending = 'pending',
  Suspended = 'suspended',
}

export interface StatusLabelProps {
  children: React.ReactNode;
  status: Status;
  disabled?: boolean;
}

export default function StatusLabel({
  children,
  status,
  disabled,
}: StatusLabelProps) {
  return (
    <span
      className={clsx(
        'inline-flex items-center py-1 px-3.5 rounded-3xl text-sm font-medium',
        {
          'opacity-75 cursor-not-allowed': disabled,
          'bg-green-100 text-green-700': status === Status.Active,
          'bg-gray-100 text-gray-700': status === Status.NotActive,
          'bg-yellow-100 text-yellow-700': status === Status.Pending,
          'bg-red-100 text-red-700': status === Status.Suspended,
        },
      )}
    >
      <div className="w-1 h-1 rounded-full bg-current"></div>
      {children}
    </span>
  );
}
