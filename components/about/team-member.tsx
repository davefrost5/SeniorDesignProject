import Image, { StaticImageData } from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface TeamMemberProps {
  name: string;
  role: string;
  email: string;
  department: string;
  image: StaticImageData | string;
  description: string;
}

export type { TeamMemberProps };
export function TeamMember({ name, role, email, department, image, description }: TeamMemberProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-80 w-full">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
        />
      </div>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <p className="text-sm text-primary">{role}</p>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}