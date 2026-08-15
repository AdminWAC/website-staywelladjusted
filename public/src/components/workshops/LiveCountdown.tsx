interface LiveCountdownProps {
  label: string;
  msRemaining: number;
}

const pad = (n: number) => String(Math.max(0, n)).padStart(2, "0");

const LiveCountdown = ({ label, msRemaining }: LiveCountdownProps) => {
  const total = Math.max(0, Math.floor(msRemaining / 1000));
  const days = Math.floor(total / 86400);
  const hours = Math.floor((total % 86400) / 3600);
  const minutes = Math.floor((total % 3600) / 60);
  const seconds = total % 60;

  const units = [
    { value: days, label: "Days" },
    { value: hours, label: "Hours" },
    { value: minutes, label: "Minutes" },
    { value: seconds, label: "Seconds" },
  ];

  return (
    <div className="text-center">
      <p className="font-body text-sm uppercase tracking-[0.2em] text-muted-foreground">
        {label} begins in
      </p>
      <div
        className="mt-4 flex items-stretch justify-center gap-2 sm:gap-4"
        role="timer"
        aria-live="off"
      >
        {units.map((unit) => (
          <div
            key={unit.label}
            className="min-w-[68px] sm:min-w-[92px] rounded-lg border border-primary/25 bg-card px-3 py-3 sm:px-5 sm:py-4"
          >
            <div className="font-heading text-2xl sm:text-4xl text-secondary tabular-nums">
              {pad(unit.value)}
            </div>
            <div className="mt-1 font-body text-[10px] sm:text-xs uppercase tracking-widest text-muted-foreground">
              {unit.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LiveCountdown;
