import Bubble from "@/components/Bubble";

const bubbles = [
  {
    text: "세금환급 서비스를 만들고 싶어",
  },
  {
    text: "세금환급 서비스를 만들고 싶어22",
  },
];

export default function Page() {
  return (
    <div>
      <h1 className="text-2xl mb-10">세금 환금 서비스 만들기</h1>

      {bubbles.map((bubble) => (
        <div className="mb-2 relative flex rounded-lg bg-white shadow px-6 py-4 items-start ">
          {bubble.text}
        </div>
      ))}
    </div>
  );
}
