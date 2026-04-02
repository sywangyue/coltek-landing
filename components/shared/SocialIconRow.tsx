'use client';

import { useState } from 'react';
import { FaYoutube, FaXTwitter, FaInstagram, FaFacebookF, FaLinkedinIn } from 'react-icons/fa6';

type IconDef = {
  icon: React.ComponentType<{ size?: number }>;
  label: string;
  color: string;
  href: string;
};

const BASE_ICONS: IconDef[] = [
  { icon: FaYoutube,   label: 'YouTube',     color: '#FF0000', href: '#' },
  { icon: FaXTwitter,  label: 'X (Twitter)', color: '#000000', href: '#' },
  { icon: FaInstagram, label: 'Instagram',   color: '#E4405F', href: '#' },
  { icon: FaFacebookF, label: 'Facebook',    color: '#2477F2', href: '#' },
];

const LINKEDIN_ICON: IconDef = {
  icon: FaLinkedinIn, label: 'LinkedIn', color: '#0A66C2', href: '#',
};

function SocialIconLink({
  icon: Icon,
  label,
  color,
  href,
  dim,
  iconSize,
}: IconDef & { dim: number; iconSize: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width: dim,
        height: dim,
        color: hovered ? color : undefined,
        backgroundColor: hovered ? `${color}1A` : undefined,
        transform: hovered ? 'translateY(-2px)' : undefined,
      }}
      className="flex items-center justify-center rounded-full text-foreground-muted transition-all duration-200"
    >
      <Icon size={iconSize} />
    </a>
  );
}

interface Props {
  size?: 'sm' | 'md';
  withLinkedIn?: boolean;
}

export default function SocialIconRow({ size = 'md', withLinkedIn = false }: Props) {
  const dim = size === 'sm' ? 32 : 48;
  const iconSize = size === 'sm' ? 16 : 20;
  const icons = withLinkedIn ? [...BASE_ICONS, LINKEDIN_ICON] : BASE_ICONS;

  return (
    <div className="flex items-center gap-2">
      {icons.map((s) => (
        <SocialIconLink key={s.label} {...s} dim={dim} iconSize={iconSize} />
      ))}
    </div>
  );
}
