'use client'
 
import { useRouter } from 'next/navigation'
import Icon from '@/components/Icon';
import Link from 'next/link';

export default function Home() {
  const router = useRouter()
  const clientPageHandler = () => {
    router.push('/client')
  }
  const docsPageHandler = () => {
    router.push('/docs')
  }
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-linear-to-b from-strawberry-milk to-cotton-candy">

      <div className="flex flex-col items-center justify-center px-20 py-10 bg-berry-mauve text-white rounded-lg mb-4">
        <Icon name="kawaii/kawaii-bunny" size={64} className="mb-4" />

        <h1 className="text-4xl font-bold font-display mb-2">🐰 Welcome to FluffyMail 🐰</h1>
        <p className="berry-mauve mb-6">
          Your cozy, secure, bunny-themed mail server provisioned by Ansible!
        </p>
        <div className="space-x-4">
          <a href="/docs"
            className="bg-blueberry-sky text-white px-4 py-2 rounded shadow hover:bg-night-sky">
            📖 Docs
          </a>
          <a onClick={clientPageHandler}
            className="bg-bunny-blush text-gray-800 px-4 py-2 rounded shadow hover:bg-strawberry-milk">
            ✉️ Webmail (Coming Soon)
          </a>
        </div>
      </div>
      </main>

  );
}
