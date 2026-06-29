export default function Divider({
  color = "#F8FAFC",
  flip = false,
}: {
  color?: string;
  flip?: boolean;
}) {
  return (
    <div
      aria-hidden
      className="relative w-full leading-[0] -mb-px"
      style={{ transform: flip ? "rotate(180deg)" : undefined }}
    >
      <svg
        viewBox="0 0 1440 90"
        preserveAspectRatio="none"
        className="block w-full h-[50px] sm:h-[70px] lg:h-[90px]"
      >
        <path
          fill={color}
          d="M0,40 C240,90 480,0 720,30 C960,60 1200,95 1440,50 L1440,90 L0,90 Z"
        />
      </svg>
    </div>
  );
}
