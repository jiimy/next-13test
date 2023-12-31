import Location from '@/components/location/Location'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24`}
    >
      <Location/>
      메인
      <Link href="/map">지도</Link>
    </main>
  )
}
