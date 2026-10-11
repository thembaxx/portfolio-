import { logoPaths } from "@/lib/brand";

export function LogoMark({ size = 32 }: { size?: number }) {
  return (
    <svg className="logo-mark" width={size} height={size} viewBox="0 0 64 64" aria-hidden="true" focusable="false">
      <path d={logoPaths.tile} fill="var(--ink)" />
      <path d={logoPaths.t} fill="var(--bg)" />
      <path d={logoPaths.m} fill="var(--bg)" />
      <circle cx="53" cy="52" r="3" fill="var(--accent)" />
    </svg>
  );
}
