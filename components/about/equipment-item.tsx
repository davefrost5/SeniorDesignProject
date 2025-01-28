import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface EquipmentItemProps {
  name: string;
  icon: LucideIcon;
  description: string;
  specs: string[];
}

export function EquipmentItem({ name, icon: Icon, description, specs }: EquipmentItemProps) {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center space-x-4">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Icon className="h-6 w-6 text-primary" />
          </div>
          <CardTitle>{name}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4">{description}</p>
        <ul className="space-y-2">
          {specs.map((spec) => (
            <li key={spec} className="text-sm flex items-center">
              <span className="h-1.5 w-1.5 rounded-full bg-primary mr-2" />
              {spec}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}