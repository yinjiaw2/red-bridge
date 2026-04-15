import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function BaseIcon(props: IconProps) {
  return (
    <svg
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    />
  );
}

export function EyeIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z" />
      <circle cx="12" cy="12" r="2.8" />
    </BaseIcon>
  );
}

export function ShieldIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M12 3 5 6v5c0 5 3.5 8.5 7 10 3.5-1.5 7-5 7-10V6l-7-3Z" />
      <path d="m9.5 12 1.8 1.8L15 10" />
    </BaseIcon>
  );
}

export function ScaleIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M12 4v15" />
      <path d="M7 7h10" />
      <path d="M5 7 2.5 12h5L5 7Z" />
      <path d="M19 7 16.5 12h5L19 7Z" />
      <path d="M8 20h8" />
    </BaseIcon>
  );
}

export function HandshakeIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M8.5 11.5 5 8a2.4 2.4 0 0 0-3.4 3.4l3.2 3.2a2.5 2.5 0 0 0 3.5 0l2.1-2.1" />
      <path d="m15.5 11.5 3.5-3.5a2.4 2.4 0 1 1 3.4 3.4l-3.2 3.2a2.5 2.5 0 0 1-3.5 0l-2.1-2.1" />
      <path d="m8.5 11.5 2.2 2.2a1.8 1.8 0 0 0 2.6 0l2.2-2.2" />
      <path d="m10 9 1.2-1.2a2.4 2.4 0 0 1 3.4 0L16 9" />
    </BaseIcon>
  );
}

export function CertificateIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <circle cx="12" cy="9" r="4.5" />
      <path d="m9.5 13.2-1.2 6 3.7-2.4 3.7 2.4-1.2-6" />
    </BaseIcon>
  );
}

export function ExternalLinkIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M14 5h5v5" />
      <path d="m10 14 9-9" />
      <path d="M19 14v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h4" />
    </BaseIcon>
  );
}
