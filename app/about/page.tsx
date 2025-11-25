'use client';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

export default function About() {
  const router = useRouter();

  const goBack = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push('/');
    }
  };

  return (
    <section className="about-section fade-in-startup" style={{ padding: '80px 20px 124px' }}>
      <a href="#" onClick={(e) => { e.preventDefault(); goBack(); }} className="back-link">&lt; Back</a>

      <h1 className="about-heading">
        Designing experiences that blend creativity with purpose.
      </h1>

      <Image
        src="/About Hero image.JPG"
        alt="Sinan KP"
        className="about-image"
        width={315}
        height={387}
      />

      <div className="about-text">
        <p>
          Hey there! I&apos;m Sinan KP, a UI/UX designer with a passion for crafting digital experiences that are both functional and visually compelling. I believe good design should feel effortless - intuitive, clean, and purposeful.
        </p>
        <p>
          My journey began with curiosity and a love for problem-solving through design. Over time, I&apos;ve refined my process to focus on user needs, thoughtful interactions, and modern aesthetics. Whether it&apos;s a mobile app, web platform, or brand identity, I aim to create work that resonates with people and makes their lives a little easier.
        </p>
        <p>
          When I&apos;m not designing, you&apos;ll find me exploring new design trends, experimenting with side projects, or just enjoying good music and coffee. Let&apos;s build something meaningful together.
        </p>
      </div>

      <hr className="divider" />

      <div className="work-with-me">
        <h2>Interested in working together?</h2>
        <p>I&apos;m always open to discussing new projects, creative ideas, or opportunities to contribute to your vision.</p>
        <Link href="/contact"><button className="cta-button">Get in touch</button></Link>
      </div>

      <footer className="footer-navigation">
        <Link href="/">Home</Link>
        <Link href="/about" className="footer-nav-link active">About</Link>
        <Link href="/work">Work</Link>
        <Link href="/contact">Contact</Link>
      </footer>
    </section>
  );
}
