export default function Bubble({
  children,
  avatarPosition,
}: {
  children: React.ReactNode;
  avatarPosition: "left" | "right";
}) {
  return (
    <div className="">
      <div className="relative flex rounded-lg bg-white shadow px-6 py-4 mx-10 items-start ">
        {children}
      </div>
    </div>
  );
}
