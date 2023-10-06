import React from 'react';
import Link from 'next/link';

const HomePage = () => {
  return <div>
    <h1>HomePage</h1>
    <ul>
      <li><Link href="/">Home</Link></li>
      <li><Link href="/about">About</Link></li>
      <li><Link href="/contact">Contacts</Link></li>
    </ul>
  </div>
  
}

export default HomePage