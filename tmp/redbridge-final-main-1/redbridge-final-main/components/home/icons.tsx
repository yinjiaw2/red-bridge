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

export function ArrowRightIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </BaseIcon>
  );
}

export function ChevronDownIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="m6 9 6 6 6-6" />
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

export function BriefcaseIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
      <path d="M4 8h16v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8Z" />
      <path d="M4 12h16" />
    </BaseIcon>
  );
}

export function CompassIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="m14.7 9.3-4 1.6-1.4 4 4-1.6 1.4-4Z" />
    </BaseIcon>
  );
}

export function ClockIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </BaseIcon>
  );
}

export function GraduationCapIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="m3 9 9-5 9 5-9 5-9-5Z" />
      <path d="M7 11v4c0 1.7 2.2 3 5 3s5-1.3 5-3v-4" />
    </BaseIcon>
  );
}

export function UsersIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M16 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
      <circle cx="9.5" cy="8" r="3" />
      <path d="M20 21v-2.2a3.5 3.5 0 0 0-2.5-3.4" />
      <path d="M14.5 5.2a3 3 0 0 1 0 5.6" />
    </BaseIcon>
  );
}

export function ClipboardCheckIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M9 4h6" />
      <path d="M9 2h6v4H9z" />
      <path d="M8 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-2" />
      <path d="m9 14 2 2 4-4" />
    </BaseIcon>
  );
}

export function HeartHandshakeIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M10.5 11.5 8 9a2.8 2.8 0 0 0-4 4l5.5 5.2a1.7 1.7 0 0 0 2.3 0L14 16" />
      <path d="m13.5 11.5 2.5-2.5a2.8 2.8 0 0 1 4 4l-5.5 5.2a1.7 1.7 0 0 1-2.3 0L10 16" />
      <path d="m8.5 13 2 2 5-5" />
    </BaseIcon>
  );
}

export function FileWarningIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M14 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v5h5" />
      <path d="M12 11v4" />
      <path d="M12 18h.01" />
    </BaseIcon>
  );
}

export function CreditCardIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 10h18" />
      <path d="M7 15h3" />
    </BaseIcon>
  );
}

export function UserOffIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="m3 3 18 18" />
      <path d="M10.5 10.5A4 4 0 1 1 15 6" />
      <path d="M6 20v-1a5 5 0 0 1 7.1-4.6" />
      <circle cx="18" cy="18" r="3" />
      <path d="m16.8 16.8 2.4 2.4" />
    </BaseIcon>
  );
}

export function ClipboardListIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M9 4h6" />
      <path d="M9 2h6v4H9z" />
      <path d="M8 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-2" />
      <path d="M9 12h6" />
      <path d="M9 16h4" />
    </BaseIcon>
  );
}

export function RouteIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <circle cx="6" cy="18" r="2" />
      <circle cx="18" cy="6" r="2" />
      <path d="M8 18h4a4 4 0 0 0 4-4V8" />
      <path d="m10 10 4-4" />
      <path d="m14 10-4-4" />
    </BaseIcon>
  );
}

export function HeadsetIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M4 13a8 8 0 1 1 16 0" />
      <rect x="3" y="12" width="4" height="7" rx="1.5" />
      <rect x="17" y="12" width="4" height="7" rx="1.5" />
      <path d="M7 19a3 3 0 0 0 3 3h4" />
    </BaseIcon>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="m5 12 4 4L19 6" />
    </BaseIcon>
  );
}

export function XIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M6 6 18 18" />
      <path d="M18 6 6 18" />
    </BaseIcon>
  );
}

export function MedalIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <circle cx="12" cy="10" r="4" />
      <path d="m8.5 14.5-1.2 6L12 18l4.7 2.5-1.2-6" />
      <path d="m10.5 10 1 1 2-2" />
    </BaseIcon>
  );
}

export function LockIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <rect x="5" y="10" width="14" height="10" rx="2" />
      <path d="M8 10V7a4 4 0 1 1 8 0v3" />
      <path d="M12 14v2" />
    </BaseIcon>
  );
}

export function LaptopCodeIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <rect x="3" y="5" width="18" height="12" rx="2" />
      <path d="M2 19h20" />
      <path d="m9 10-2 2 2 2" />
      <path d="m15 10 2 2-2 2" />
    </BaseIcon>
  );
}

export function CalculatorIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <rect x="6" y="3" width="12" height="18" rx="2" />
      <path d="M9 7h6" />
      <path d="M9 12h.01" />
      <path d="M12 12h.01" />
      <path d="M15 12h.01" />
      <path d="M9 16h.01" />
      <path d="M12 16h.01" />
      <path d="M15 16h.01" />
    </BaseIcon>
  );
}

export function MegaphoneIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M3 11v2" />
      <path d="M7 10v4" />
      <path d="M20 6v12l-10-4H5a2 2 0 0 1-2-2v0a2 2 0 0 1 2-2h5l10-4Z" />
    </BaseIcon>
  );
}

export function HardHatIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M6 14a6 6 0 0 1 12 0" />
      <path d="M4 14h16v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2Z" />
      <path d="M12 8v6" />
    </BaseIcon>
  );
}

export function HeartbeatIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M3 12h4l2-3 3 6 2-4h7" />
      <path d="M5.5 6.5a4 4 0 0 1 5.7 0L12 7.3l.8-.8a4 4 0 1 1 5.7 5.6L12 18.5l-6.5-6.4a4 4 0 0 1 0-5.6Z" />
    </BaseIcon>
  );
}

export function BuildingIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M4 21V7l8-4 8 4v14" />
      <path d="M9 21v-4h6v4" />
      <path d="M8 10h.01" />
      <path d="M12 10h.01" />
      <path d="M16 10h.01" />
      <path d="M8 14h.01" />
      <path d="M12 14h.01" />
      <path d="M16 14h.01" />
    </BaseIcon>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </BaseIcon>
  );
}

export function MapPinIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M12 21s-6-5.3-6-11a6 6 0 1 1 12 0c0 5.7-6 11-6 11Z" />
      <circle cx="12" cy="10" r="2.2" />
    </BaseIcon>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.7l.5 3a2 2 0 0 1-.6 1.8l-1.3 1.3a16 16 0 0 0 6.5 6.5l1.3-1.3a2 2 0 0 1 1.8-.6l3 .5A2 2 0 0 1 22 16.9Z" />
    </BaseIcon>
  );
}

export function PlayIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="m9 7 8 5-8 5V7Z" fill="currentColor" stroke="none" />
    </BaseIcon>
  );
}

export function ExternalLinkIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M14 5h5v5" />
      <path d="M10 14 19 5" />
      <path d="M19 13v4a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h4" />
    </BaseIcon>
  );
}
