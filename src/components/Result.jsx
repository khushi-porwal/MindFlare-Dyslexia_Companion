import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { Link } from "react-router-dom";
import { Trophy, AlertTriangle } from "lucide-react";

ChartJS.register(ArcElement, Tooltip, Legend);

const Results = ({ score, total, onRetry }) => {
  const percentage = total > 0 ? (score / total) * 100 : 0;
  const wrong = total - score;

  const getDyslexiaRisk = (percentage) => {
    if (percentage <= 25) {
      return { level: "High Risk", description: "Professional evaluation is strongly recommended.", color: "text-red-600", bg: "bg-red-100" };
    } else if (percentage <= 50) {
      return { level: "Moderate Risk", description: "Further assessment may be beneficial.", color: "text-orange-500", bg: "bg-orange-100" };
    } else if (percentage <= 75) {
      return { level: "Low Risk", description: "Monitor progress.", color: "text-yellow-500", bg: "bg-yellow-100" };
    } else {
      return { level: "Minimal Risk", description: "Regular monitoring is enough.", color: "text-green-600", bg: "bg-green-100" };
    }
  };

  const riskAssessment = getDyslexiaRisk(percentage);

  const data = {
    labels: ["Positive Indicators", "Negative Indicators"],
    datasets: [
      {
        data: [score, wrong],
        backgroundColor: ["#36A2EB", "#FF6384"],
        borderColor: ["#ffffff", "#ffffff"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { position: "bottom" } },
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      {/* Header */}
      <div className="text-center mb-12 relative">
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-black"></div>
        <h2 className="text-3xl font-bold inline-block px-8 bg-white relative z-10 flex items-center gap-3">
          Assessment Results
        </h2>
      </div>

      {/* Risk Level Section */}
      <div className={`p-6 rounded-lg shadow-md ${riskAssessment.bg} mb-8 text-center`}>
        <h3 className={`text-2xl font-bold ${riskAssessment.color}`}>{riskAssessment.level}</h3>
        <p className="text-gray-700 text-lg">{riskAssessment.description}</p>
      </div>

      {/* Results Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white rounded-lg shadow-lg p-8 mb-8">
        <div className="text-center">
          <div className="w-48 h-48 mx-auto mb-4 relative">
            <Pie data={data} options={options} />
          </div>
          <div className="text-lg">
            <p className="font-semibold mb-2">Indicator Distribution</p>
            <p>✔ Positive Indicators: {score}</p>
            <p>❌ Negative Indicators: {wrong}</p>
          </div>
        </div>

        {/* Summary Section */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <h4 className="text-xl font-semibold mb-4">Assessment Summary</h4>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <AlertTriangle className="w-5 h-5 mt-1 flex-shrink-0 text-yellow-600" />
              <span>Total Questions Assessed: {total}</span>
            </li>
            <li className="flex items-start gap-2">
              <AlertTriangle className="w-5 h-5 mt-1 flex-shrink-0 text-yellow-600" />
              <span>Risk Score: {percentage.toFixed(1)}%</span>
            </li>
            <li className="flex items-start gap-2">
              <AlertTriangle className="w-5 h-5 mt-1 flex-shrink-0 text-yellow-600" />
              <span>Recommendation: {percentage <= 50 ? "Professional evaluation recommended" : "Continue monitoring"}</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Retry Button */}
      <div className="flex justify-center">
        <button
          onClick={onRetry}
          className="px-8 py-3 bg-black text-white text-lg font-medium rounded hover:bg-gray-800 transition-colors"
        ><Link to='/solution'>
        GO TO SOLUTION
        </Link>
          
        </button>
      </div>
    </div>
  );
};

export default Results;