import { PieChart, Pie, Cell, Legend } from 'recharts';

const data = [
  { name: 'Buồng đạt', value: 91.5 },
  { name: 'Còn lại', value: 8.5 },
];

const COLORS = ['#2ecc71', '#d9d9d9'];

const DonutChart = () => {
  return (
    <PieChart width={180} height={180}>
      <Pie
        data={data}
        cx="50%" cy="50%"
        innerRadius={40}
        outerRadius={60}
        paddingAngle={3}
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <text
        x="50%" y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        fill="#2ecc71"
        fontSize={16}
      >
        91.5%
      </text>
      <Legend 
  payload={[
    {
      value: 'Buồng đạt',
      type: 'square',
      color: '#2ecc71',
    }
  ]}
/>

    </PieChart>
  );
};

export default DonutChart;
