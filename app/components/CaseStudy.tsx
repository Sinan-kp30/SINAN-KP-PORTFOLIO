'use client';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

interface CaseStudyProps {
  title: string;
  imageSrc: string;
  imageAlt: string;
}

export default function CaseStudy({ title, imageSrc, imageAlt }: CaseStudyProps) {
  const router = useRouter();

  const goBack = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push('/');
    }
  };

  return (
    <div className="fade-in-startup" style={{ padding: '80px 80px 98px', maxWidth: '100%' }}>
      <a href="#" onClick={(e) => { e.preventDefault(); goBack(); }} style={{ color: '#b2b5b8', textDecoration: 'none', fontSize: '16px', display: 'inline-block', marginBottom: '40px' }}>&lt; Back</a>
      <h1 style={{ fontSize: '32px', fontFamily: 'Poppins, sans-serif', marginBottom: '40px' }}>{title}</h1>
      <div style={{ width: '100%' }}>
        <Image src={imageSrc} alt={imageAlt} style={{ width: '100%', height: 'auto', borderRadius: '16px', marginBottom: '64px' }} width={1200} height={800} />
      </div>
    </div>
  );
}
