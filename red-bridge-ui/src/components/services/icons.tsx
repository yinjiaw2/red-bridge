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

export function LayersIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="m12 3 9 4.5-9 4.5L3 7.5 12 3Z" />
      <path d="m3 12 9 4.5 9-4.5" />
      <path d="m3 16.5 9 4.5 9-4.5" />
    </BaseIcon>
  );
}

export function RocketIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M5 19c1.5-.4 3-.8 4-1.8l7.8-7.8A6 6 0 0 0 18 4l-5.4 1.2L4.8 13C3.8 14 3.4 15.5 3 17l2 2Z" />
      <path d="m11 13 2 2" />
      <path d="M7 17 5 19" />
      <circle cx="14.5" cy="8.5" r="1.2" />
    </BaseIcon>
  );
}

export function StarIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2L12 17.2 6.4 20.2l1.1-6.2L3 9.6l6.2-.9L12 3Z" />
    </BaseIcon>
  );
}

export function MapPinIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M12 21s6-5.5 6-11a6 6 0 1 0-12 0c0 5.5 6 11 6 11Z" />
      <circle cx="12" cy="10" r="2.2" />
    </BaseIcon>
  );
}

export function SproutIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M12 21v-7" />
      <path d="M12 14c0-3 1.5-5.5 4.5-7 1.5-.8 3-.9 4.5-1-.1 1.5-.2 3-1 4.5-1.5 3-4 4.5-7 4.5Z" />
      <path d="M12 14c0-2.6-1.2-4.8-3.7-6.2C6.8 7 5.4 6.7 4 6.6c.1 1.4.4 2.8 1.2 4.1 1.4 2.5 3.6 3.3 6.8 3.3Z" />
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

export function GraduationCapIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="m3 9 9-5 9 5-9 5-9-5Z" />
      <path d="M7 11v4c0 1.7 2.2 3 5 3s5-1.3 5-3v-4" />
    </BaseIcon>
  );
}

export function QuestionIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M9.1 9a3 3 0 1 1 5.2 2c-.8.8-1.8 1.3-1.8 2.5" />
      <path d="M12 17h.01" />
      <circle cx="12" cy="12" r="9" />
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

export function PhoneIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 11.2 19a19.3 19.3 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7l.5 3.2a2 2 0 0 1-.6 1.8l-1.4 1.4a16 16 0 0 0 6 6l1.4-1.4a2 2 0 0 1 1.8-.6l3.2.5A2 2 0 0 1 22 16.9Z" />
    </BaseIcon>
  );
}
