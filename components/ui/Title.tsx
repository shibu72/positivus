interface TitleMainProps {
  children: React.ReactNode;
  className: string;
}

interface TitleSubProps {
  children: React.ReactNode;
}

export default function TitleMain({ children, className }: TitleMainProps) {
  return (
    <h2
      className={` text-[2.5rem] bg-[var(--colorGreen)] rounded-lg px-1 font-semibold w-fit ${className}`}
    >
      {children}
    </h2>
  );
}

export function TitleSub({ children }: TitleSubProps) {
  return <p className="text-lg">{children}</p>;
}
