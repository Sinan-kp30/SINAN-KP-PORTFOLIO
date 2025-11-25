'use client';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

export default function Contact() {
  const router = useRouter();

  const goBack = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push('/');
    }
  };

  return (
    <section className="contact-section fade-in-startup">
      <div className="contact-container">
        <a href="#" onClick={(e) => { e.preventDefault(); goBack(); }} className="back-link">&lt; Back</a>
        <header className="contact-header">
          <p className="intro-text">
            I&apos;m here to craft great digital experiences.
            <span className="intro-subtext">Get in touch if you&apos;ve got an idea in mind</span>
          </p>
        </header>

        <div className="contact-form-section">
          <h2 className="form-title">Let&apos;s chat</h2>
          <form className="contact-form" action="https://formspree.io/f/xblyanzn" method="POST">
            <div className="form-row">
              <input type="text" name="name" placeholder="Name" className="form-input" required />
              <input type="email" name="email" placeholder="Email" className="form-input" required />
            </div>
            <textarea name="message" placeholder="Message" className="message-input" required></textarea>
            <button type="submit" className="submit-button">Send</button>
          </form>
        </div>

        <nav className="social-section">
          <h3 className="social-title">Follow me</h3>
          <div className="social-links">
            <a href="https://www.behance.net/fsbeats"><div className="social-item">
              <span>Behance</span>
              <Image src="/arrow-up-filled.png" alt="arrow" className="arrow-icon" width={16} height={16} />
            </div></a>
            <a href="https://www.instagram.com/si.__nan"><div className="social-item">
              <span>Instagram</span>
              <Image src="/arrow-up-filled.png" alt="arrow" className="arrow-icon" width={16} height={16} />
            </div></a> 
            <a href="https://www.linkedin.com/in/sinan-kp-06ba5b265"><div className="social-item">
              <span>Linkedin</span>
              <Image src="/arrow-up-filled.png" alt="arrow" className="arrow-icon" width={16} height={16} />
            </div></a>
            <a href="https://www.fiverr.com/sinan_kp"><div className="social-item">
              <span>Fiverr</span>
              <Image src="/arrow-up-filled.png" alt="arrow" className="arrow-icon" width={16} height={16} />
            </div></a>
          </div>
        </nav>

        <footer className="footer-navigation">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/work">Work</Link>
          <Link href="/contact" className="nav-link-active">Contact</Link>
        </footer>
      </div>
    </section>
  );
}
