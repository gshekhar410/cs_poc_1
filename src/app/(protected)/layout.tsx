import BackToHomeButton from "@/components/BackToHomeButton";

export const metadata = {
  title: "Claim Smart",
  description: "Place orders for your construction needs",
};

export default function ProtectedRoutesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full w-full shrink-0 flex flex-col items-center">
      <header className="shrink-0 flex items-center">
        <h5 className="text-center text-bold text-3xl p-0 m-0 underline underline-offset-2">
          Claim Smart
        </h5>
      </header>
      <article className="w-full max-w-[700px]">
        <BackToHomeButton />
        {children}
      </article>
    </div>
  );
}
