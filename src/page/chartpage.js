import React from "react";
import { Box, Card, CardContent, Typography, IconButton } from "@mui/material";
import { Pie, Line, Bar, Radar } from "react-chartjs-2";
import ShareIcon from "@mui/icons-material/Share";
import DownloadIcon from "@mui/icons-material/Download";
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    LineElement,
    BarElement,
    RadarController,
    CategoryScale,
    LinearScale,
    PointElement,
    RadialLinearScale,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
    ArcElement,
    Tooltip,
    Legend,
    LineElement,
    BarElement,
    RadarController,
    CategoryScale,
    LinearScale,
    PointElement,
    RadialLinearScale
);

// Dummy Data
const reports = [
    {
        week: "Week 18 (11/04/2024-18/04/2024)",
        user: "Nini",
        pieData: {
            labels: ["Success", "Missed"],
            datasets: [
                {
                    data: [75, 25],
                    backgroundColor: ["#4caf50", "#90EE90"],
                },
            ],
        },
        lineData: {
            labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            datasets: [
                {
                    label: "Feeling Rate",
                    data: [2, 3, 4, 5, 4, 3, 5],
                    fill: false,
                    borderColor: "#4caf50",
                    backgroundColor: "#4caf50",
                },
            ],
        },
        barData: {
            labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            datasets: [
                {
                    label: "Feeling Rate",
                    data: [2, 3, 4, 5, 4, 3, 5],
                    backgroundColor: "#4caf50",
                },
            ],
        },
        radarData: {
            labels: ["Mood", "Energy", "Stress", "Focus", "Happiness"],
            datasets: [
                {
                    label: "Feeling Metrics",
                    data: [4, 3, 2, 4, 5],
                    backgroundColor: "rgba(76, 175, 80, 0.4)",
                    borderColor: "#4caf50",
                    pointBackgroundColor: "#4caf50",
                    pointBorderColor: "#4caf50",
                },
            ],
        },
    },
];

const ChartPage = () => {
    return (
        <Box sx={{ padding: 2 }}>

            {/* Reports */}
            {reports.map((report, index) => (
                <Card key={index} sx={{ mb: 2, border: "1px solid #ccc" }}>
                    <CardContent>
                        <Typography
                            variant="subtitle1"
                            sx={{
                                backgroundColor: "#ffecb3",
                                padding: 1,
                                borderRadius: 1,
                                mb: 1,
                                fontWeight: "bold",
                            }}
                        >
                            {report.week} Report - Reported User: {report.user}
                        </Typography>

                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                mb: 1,
                            }}
                        >
                            <IconButton color="primary">
                                <ShareIcon />
                            </IconButton>
                            <IconButton color="primary">
                                <DownloadIcon />
                            </IconButton>
                        </Box>

                        {/* Charts */}
                        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, justifyContent: "space-between" }}>
                            <Box sx={{ flex: "1 1 200px" }}>
                                <Pie data={report.pieData} />
                                <Typography align="center" sx={{ mt: 1 }}>
                                    Intake Success Rate
                                </Typography>
                            </Box>
                            <Box sx={{ flex: "1 1 200px" }}>
                                <Line data={report.lineData} />
                            </Box>
                            <Box sx={{ flex: "1 1 200px" }}>
                                <Bar data={report.barData} />
                            </Box>
                            <Box sx={{ flex: "1 1 200px" }}>
                                <Radar data={report.radarData} />
                                <Typography align="center" sx={{ mt: 1 }}>
                                    Feeling Metrics
                                </Typography>
                            </Box>
                        </Box>
                    </CardContent>
                </Card>
            ))}
        </Box>
    );
};

export default ChartPage;
