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
      className={`${className} text-[2.5rem] bg-[var(--colorGreen)] rounded-lg px-1 font-semibold w-fit `}
    >
      {children}
    </h2>
  );
}

export function TitleSub({ children }: TitleSubProps) {
  return <p className="text-lg">{children}</p>;
}
