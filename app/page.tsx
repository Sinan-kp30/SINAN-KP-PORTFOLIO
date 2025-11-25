'use client';
import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  useEffect(() => {
    const lines = document.querySelectorAll('.vertical-line');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('grow');
          }
        });
      },
      { threshold: 0.1 }
    );

    lines.forEach((line) => observer.observe(line));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="portfolio-container">
      <div className="content-wrapper fade-in-startup">
        <header className="header-section">
          <div className="profile-info">
            <div className="name-title">
              <h1 className="designer-name">Sinan Kp</h1>
              <p className="designer-title">UI/Ux Designer</p>
            </div>
            <nav className="main-navigation">
              <Link href="/about" className="nav-link">About</Link>
              <Link href="/work" className="nav-link">Work</Link>
              <Link href="/contact" className="nav-link">Contact</Link>
            </nav>
          </div>
          <Image
            src="https://cdn.builder.io/api/v1/image/assets/647d0b2aee6840668ebafb7ca9655a0c/57048dc483a0243c0c02119fa25a8e1694e51c20?placeholderIfAbsent=true"
            alt="Sinan Kp Profile"
            className="profile-image"
            width={94}
            height={90}
          />
        </header>

        <section className="hero-section">
          <p className="hero-description">
            I design user experiences and build digital products for startups and personal projects.
          </p>
          <Link href="/contact"><button className="cta-button">Get in touch</button></Link>
        </section>

        <article className="project-showcase">
          <div className="project-layout">
            <div className="timeline-indicator">
              <Image
                src="https://cdn.builder.io/api/v1/image/assets/647d0b2aee6840668ebafb7ca9655a0c/98a9b5090b78e76fcaf96204fc0347df97caab27?placeholderIfAbsent=true"
                alt="Timeline marker"
                className="timeline-dot"
                width={40}
                height={40}
              />
              <div className="vertical-line"></div>
            </div>
            <div className="project-content">
              <div className="project-details">
                <h2 className="project-title">Memoire</h2>
                <p className="project-description">
                  Memoire is a digital time capsule designed to preserve emotions and meaningful moments.
                  <br /><br />
                  Users can create private or public capsules filled with memories, locked in time and opened by choice - a nostalgic, vintage-inspired space for personal reflection, connection, and storytelling.
                </p>
              </div>
              <div className="project-media">
                <Link href="/memoire">
                  <div className="project-image-container">
                    <Image
                      src="https://cdn.builder.io/api/v1/image/assets/647d0b2aee6840668ebafb7ca9655a0c/8956b2dce309fbff200b9196d4084c7bfd658302?placeholderIfAbsent=true"
                      alt="Memoire project preview"
                      className="project-image"
                      width={536}
                      height={301}
                    />
                  </div>
                </Link>
                <div className="project-tags">
                  <span className="tag">Emotion</span>
                  <span className="tag">Memory</span>
                </div>
              </div>
            </div>
          </div>
          <Link href="/memoire"><button className="project-cta-button">View Project</button></Link>
        </article>

        <article className="project-showcase">
          <div className="project-layout">
            <div className="timeline-indicator">
              <Image
                src="https://cdn.builder.io/api/v1/image/assets/647d0b2aee6840668ebafb7ca9655a0c/98a9b5090b78e76fcaf96204fc0347df97caab27?placeholderIfAbsent=true"
                alt="Timeline marker"
                className="timeline-dot"
                width={40}
                height={40}
              />
              <div className="vertical-line"></div>
            </div>
            <div className="project-content">
              <div className="project-details">
                <h2 className="project-title">Retro Shelf</h2>
                <p className="project-description">
                  Retro Shelf is a 90s-inspired mobile app that brings nostalgic vibes to modern content curation.
                  <br /><br />
                  Users can collect and organize favorite movies, games, and books-wrapped in retro aesthetics and a smooth UI-delivering a clean, timeless experience for lovers of classic design and storytelling.
                </p>
              </div>
              <div className="project-media">
                <Link href="/retro-shelf">
                  <div className="project-image-container">
                    <Image
                      src="https://cdn.builder.io/api/v1/image/assets/647d0b2aee6840668ebafb7ca9655a0c/360e443549c8447bc7a6583947630636423539cf?placeholderIfAbsent=true"
                      alt="Retro Shelf project preview"
                      className="project-image"
                      width={536}
                      height={301}
                    />
                  </div>
                </Link>
                <div className="project-tags">
                  <span className="tag">Movie</span>
                  <span className="tag">Entertainment</span>
                </div>
              </div>
            </div>
          </div>
          <Link href="/retro-shelf"><button className="project-cta-button">View Project</button></Link>
        </article>

        <article className="project-showcase">
          <div className="project-layout">
            <div className="timeline-indicator">
              <Image
                src="https://cdn.builder.io/api/v1/image/assets/647d0b2aee6840668ebafb7ca9655a0c/98a9b5090b78e76fcaf96204fc0347df97caab27?placeholderIfAbsent=true"
                alt="Timeline marker"
                className="timeline-dot"
                width={40}
                height={40}
              />
              <div className="vertical-line"></div>
            </div>
            <div className="project-content">
              <div className="project-details">
                <h2 className="project-title">BookBuddy</h2>
                <p className="project-description">
                  BookBuddy is a community-powered book sharing platform designed to connect readers offline.
                  <br /><br />
                  Users can borrow and lend books using profiles, lending history, and location-based discovery-creating a culture of trust and meaningful connections in a world increasingly driven by digital experiences.
                </p>
              </div>
              <div className="project-media">
                <Link href="/bookbuddy">
                  <div className="project-image-container">
                    <Image
                      src="https://cdn.builder.io/api/v1/image/assets/647d0b2aee6840668ebafb7ca9655a0c/f2e92a437ead5bd4f3d852d613c61c69e1e91bc7?placeholderIfAbsent=true"
                      alt="BookBuddy project preview"
                      className="project-image"
                      width={536}
                      height={301}
                    />
                  </div>
                </Link>
                <div className="project-tags">
                  <span className="tag">Book</span>
                  <span className="tag">Community</span>
                </div>
              </div>
            </div>
          </div>
          <Link href="/bookbuddy"><button className="project-cta-button">View Project</button></Link>
        </article>

        <footer className="footer-navigation">
          <Link href="/" className="footer-nav-link active">Home</Link>
          <Link href="/about" className="footer-nav-link">About</Link>
          <Link href="/work" className="footer-nav-link">Work</Link>
          <Link href="/contact" className="footer-nav-link">Contact</Link>
        </footer>
      </div>
    </main>
  );
}
