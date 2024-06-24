import Chip from "@/components/Chip/Chip";

export default function Home() {
  return (
    <div>
      <Chip intent="primary" label="primary" />
      <Chip intent="secondary" label="secondary" />
      <Chip intent="danger" label="danger" />
      <Chip intent="warning" label="warning" />
      <Chip intent="info" label="info" />
      <Chip intent="default" label="default" />
      <Chip label="nothing" />
    </div>
  );
}
