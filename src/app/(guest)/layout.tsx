export const metadata = {
  title: "Claim Smart",
  description: "Places order for your construction needs",
};

export default function GuestRoutesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <article className="w-full h-full max-w-[700px]">{children}</article>
    </>
  );
}
