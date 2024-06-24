import Button from "@/components/Button";
import Chip from "@/components/Chip/Chip";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-y-2">
      <h3> Buttons </h3>
      <Button intent="primary" size="sm">
        primary
      </Button>
      <Button intent="primary" size="md">
        primary
      </Button>
      <Button intent="primary" size="lg">
        primary
      </Button>
      <Button intent="primary" size="lg" variant="outline">
        primary
      </Button>
      <Button intent="secondary" size="sm">
        secondary
      </Button>
      <Button intent="secondary" size="md">
        secondary
      </Button>
      <Button intent="secondary" size="lg">
        secondary
      </Button>
      <Button intent="secondary" size="lg" variant="outline">
        secondary
      </Button>
      <Button intent="danger" size="sm">
        danger
      </Button>
      <Button intent="danger" size="md">
        danger
      </Button>
      <Button intent="danger" size="lg">
        danger
      </Button>
      <Button intent="danger" size="lg" variant="outline">
        danger
      </Button>
      <hr />
      <h3> CHIP </h3>
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
