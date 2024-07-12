export default function Talk({
  renderBubble,
}: {
  renderBubble: () => JSX.Element;
}) {
  return <div>{renderBubble()}</div>;
}
