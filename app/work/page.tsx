'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

export default function Work() {
  const router = useRouter();

  const goBack = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push('/');
    }
  };

  useEffect(() => {
    const lines1 = document.querySelectorAll('.vertical-line-small-1');
    const lines2 = document.querySelectorAll('.vertical-line-small-2');
    
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

    lines1.forEach((line) => observer.observe(line));
    lines2.forEach((line) => observer.observe(line));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="portfolio-container">
      <div className="content-wrapper fade-in-startup">
        <a href="#" onClick={(e) => { e.preventDefault(); goBack(); }} className="back-link">&lt; Back</a>

        <h1 className="about-heading">
          Take a look at some projects I&apos;ve worked on.
        </h1>
        <h1 className="about-heading" style={{ color: '#b2b5b8' }}>
          Feel free to reach out with any questions.
        </h1>

        <article className="project-showcase">
        <div className="project-layout">
          <div className="timeline-indicator">
            <Image src="https://cdn.builder.io/api/v1/image/assets/647d0b2aee6840668ebafb7ca9655a0c/98a9b5090b78e76fcaf96204fc0347df97caab27?placeholderIfAbsent=true" alt="Timeline marker" className="timeline-dot" width={40} height={40} />
            <div className="vertical-line-small-1"></div>
          </div>
          <div className="project-content">
            <div className="project-details">
              <h2 className="project-title">Memoire</h2>
              <p className="project-description">
                Capture emotions, preserve memories, and relive your story - Memoire is a digital time capsule crafted to hold life&apos;s most meaningful moments.
              </p>
            </div>
            <div className="project-media">
              <Link href="/memoire">
                <div className="project-image-container">
                  <Image src="https://cdn.builder.io/api/v1/image/assets/647d0b2aee6840668ebafb7ca9655a0c/8956b2dce309fbff200b9196d4084c7bfd658302?placeholderIfAbsent=true" alt="Memoire project preview" className="project-image" width={536} height={301} />
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
            <Image src="https://cdn.builder.io/api/v1/image/assets/647d0b2aee6840668ebafb7ca9655a0c/98a9b5090b78e76fcaf96204fc0347df97caab27?placeholderIfAbsent=true" alt="Timeline marker" className="timeline-dot" width={40} height={40} />
            <div className="vertical-line-small-2"></div>
          </div>
          <div className="project-content">
            <div className="project-details">
              <h2 className="project-title">Retro Shelf</h2>
              <p className="project-description">
                Retro Shelf is a 90s-inspired mobile app designed to bring nostalgic vibes to modern streaming and content organization.
              </p>
            </div>
            <div className="project-media">
              <Link href="/retro-shelf">
                <div className="project-image-container">
                  <Image src="https://cdn.builder.io/api/v1/image/assets/647d0b2aee6840668ebafb7ca9655a0c/360e443549c8447bc7a6583947630636423539cf?placeholderIfAbsent=true" alt="Retro Shelf project preview" className="project-image" width={536} height={301} />
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
            <Image src="https://cdn.builder.io/api/v1/image/assets/647d0b2aee6840668ebafb7ca9655a0c/98a9b5090b78e76fcaf96204fc0347df97caab27?placeholderIfAbsent=true" alt="Timeline marker" className="timeline-dot" width={40} height={40} />
            <div className="vertical-line-small-2"></div>
          </div>
          <div className="project-content">
            <div className="project-details">
              <h2 className="project-title">BookBuddy</h2>
              <p className="project-description">
                BookBuddy is a community-driven book lending platform that connects readers through sharing.
              </p>
            </div>
            <div className="project-media">
              <Link href="/bookbuddy">
                <div className="project-image-container">
                  <Image src="https://cdn.builder.io/api/v1/image/assets/647d0b2aee6840668ebafb7ca9655a0c/f2e92a437ead5bd4f3d852d613c61c69e1e91bc7?placeholderIfAbsent=true" alt="BookBuddy project preview" className="project-image" width={536} height={301} />
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

      <article className="project-showcase">
        <div className="project-layout">
          <div className="timeline-indicator">
            <Image src="https://cdn.builder.io/api/v1/image/assets/647d0b2aee6840668ebafb7ca9655a0c/98a9b5090b78e76fcaf96204fc0347df97caab27?placeholderIfAbsent=true" alt="Timeline marker" className="timeline-dot" width={40} height={40} />
            <div className="vertical-line-small-2"></div>
          </div>
          <div className="project-content">
            <div className="project-details">
              <h2 className="project-title">Evento</h2>
              <p className="project-description">
                Evento is a modern event and concert booking platform designed to make discovering and attending live experiences effortless.
              </p>
            </div>
            <div className="project-media">
              <Link href="/evento">
                <div className="project-image-container">
                  <Image src="/Event Booking  2.png" alt="Evento project preview" className="project-image" width={536} height={301} />
                </div>
              </Link>
              <div className="project-tags">
                <span className="tag">Event</span>
                <span className="tag">Concert</span>
              </div>
            </div>
          </div>
        </div>
        <Link href="/evento"><button className="project-cta-button">View Project</button></Link>
      </article>

      <article className="project-showcase">
        <div className="project-layout">
          <div className="timeline-indicator">
            <Image src="https://cdn.builder.io/api/v1/image/assets/647d0b2aee6840668ebafb7ca9655a0c/98a9b5090b78e76fcaf96204fc0347df97caab27?placeholderIfAbsent=true" alt="Timeline marker" className="timeline-dot" width={40} height={40} />
          </div>
          <div className="project-content">
            <div className="project-details">
              <h2 className="project-title">Coffee</h2>
              <p className="project-description">
                Coffee is a minimal, inviting website crafted for a cozy neighborhood café, blending modern design with classic warmth.
              </p>
            </div>
            <div className="project-media">
              <Link href="/coffee">
                <div className="project-image-container">
                  <Image src="/Coffee 1.png" alt="Coffee project preview" className="project-image" width={536} height={301} />
                </div>
              </Link>
              <div className="project-tags">
                <span className="tag">Coffee</span>
                <span className="tag">Caffe</span>
              </div>
            </div>
          </div>
        </div>
        <Link href="/coffee"><button className="project-cta-button">View Project</button></Link>
      </article>

        <footer className="footer-navigation">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/work" className="footer-nav-link active">Work</Link>
          <Link href="/contact">Contact</Link>
        </footer>
      </div>
    </main>
  );
}
