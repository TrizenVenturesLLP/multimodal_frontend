import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

interface EmotionData {
  name: string;
  value: number;
}

interface ChartCardProps {
  data: EmotionData[];
  title?: string;
}

const COLORS = [
  "hsl(221, 83%, 53%)",
  "hsl(142, 71%, 45%)",
  "hsl(38, 92%, 50%)",
  "hsl(0, 84%, 60%)",
  "hsl(199, 89%, 48%)",
  "hsl(280, 67%, 50%)",
  "hsl(160, 60%, 45%)",
];

const ChartCard = ({ data, title = "Emotion Distribution" }: ChartCardProps) => {
  return (
    <div className="rounded-2xl bg-card p-6 shadow-lg border">
      <h3 className="text-lg font-semibold text-foreground mb-6">
        {title}
      </h3>
      <div className="h-[500px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 120 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} opacity={0.4} />
            <XAxis
              dataKey="name"
              tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 10 }}
              axisLine={false}
              tickLine={false}
              interval={0}
              angle={-90}
              textAnchor="end"
              height={120}
            />
            <YAxis
              tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 11 }}
              axisLine={false}
              tickLine={false}
              domain={[0, 100]}
              tickCount={6}
            />
            <Tooltip
              cursor={{ fill: 'transparent' }}
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "0.75rem",
                fontSize: 12,
              }}
            />
            <Bar dataKey="value" radius={[8, 8, 0, 0]} barSize={40}>
              {data.map((_, i) => (
                <Cell key={i} fill={COLORS[i % COLORS.length]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ChartCard;
