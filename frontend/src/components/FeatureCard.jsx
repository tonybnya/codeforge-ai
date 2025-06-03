import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const FeatureCard = ({ icon, title, description = "" }) => {
  return (
    <Card className="bg-zinc-900 border-zinc-800 hover:border-green-500/50 transition-all duration-300 h-full">
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-md bg-green-500/10 text-green-500">
            {icon}
          </div>
          <CardTitle className="text-xl text-white">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-zinc-400 text-justify tracking-tight">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
