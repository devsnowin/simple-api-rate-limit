import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
    return (
        <main className={styles.main}>
            <h1>Test Redis</h1>
            <Link href='/api/hello'>Go to /api/hello</Link>
        </main>
    );
}
