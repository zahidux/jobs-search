import {
  Legend,
  Line,
  LineChart,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const Statistics = () => {
  const markData = [
    {
      assignment: "Assignment 1",
      mark: 60,
    },
    {
      assignment: "Assignment 2",
      mark: 60,
    },
    {
      assignment: "Assignment 3",
      mark: 60,
    },
    {
      assignment: "Assignment 4",
      mark: 60,
    },
    {
      assignment: "Assignment 5",
      mark: 53,
    },
    {
      assignment: "Assignment 6",
      mark: 60,
    },
    {
      assignment: "Assignment 7",
      mark: 60,
    },
    {
      assignment: "Assignment 8",
      mark: 60,
    },
  ];
  return (
    <ResponsiveContainer width="100%" height={500}>
      <RadarChart
        outerRadius={200}
        width={900}
        height={700}
        data={markData}
        className="m-auto w-full"
      >
        <PolarGrid />
        <PolarAngleAxis dataKey="assignment" />
        <PolarRadiusAxis />
        <Tooltip />
        <Radar
          name="Mark"
          dataKey="mark"
          stroke="#7E90FE"
          fill="#9873FF"
          fillOpacity={0.6}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default Statistics;
