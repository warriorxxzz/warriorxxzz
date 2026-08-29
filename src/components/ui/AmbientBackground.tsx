export default function AmbientBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="bg-grid absolute inset-0 opacity-60" />
      <div className="orb orb-a h-[28rem] w-[28rem] -left-20 -top-20" />
      <div className="orb orb-b h-[26rem] w-[26rem] -right-24 top-1/3" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_50%_100%,rgba(0,0,0,0.6),transparent_60%)]" />
    </div>
  );
}
