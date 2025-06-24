import { Button } from "./button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

interface Props {
  href?: string;
  text?: string;
}

export const BackButton = ({
  href = "/",
  text = "Вернуться на главную",
}: Props) => {
  return (
    <Link href={href}>
      <Button className="mt-4" variant="outline">
        <ArrowLeft className="w-4 h-4 mr-2" />
        {text}
      </Button>
    </Link>
  );
};
