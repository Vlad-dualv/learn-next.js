import { headers } from 'next/headers';
import AddCompanyButton from './components/add-company-button';

export default function Home() {
  console.log(headers());
  return (
    <main>
      <h1 className="text-2xl">{new Date().toTimeString()}</h1>
      <AddCompanyButton />
    </main>
  );
}
