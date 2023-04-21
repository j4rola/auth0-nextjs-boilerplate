import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Profile from '../components/Profile';
import { useUser } from '@auth0/nextjs-auth0/client';


 




export default function Home() {

  const { user, error, isLoading } = useUser();

  return (
    <div className={styles.container}>
      <div className={styles.flex}>
        <h2>Welcome to My App</h2>
        { user ? <a href="/api/auth/logout">Logout</a> : <a href="/api/auth/login">Login</a>}
        
        <Profile/>    
      </div>
    </div>
  )
}
