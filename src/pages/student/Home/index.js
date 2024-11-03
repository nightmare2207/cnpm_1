import { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";
import "./index.css";

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [userInfo, setUserInfo] = useState({ name: "", img: "" });
  const [scores, setScores] = useState({});
  const [gpaData, setGpaData] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch("API_LOGIN_URL", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: "yourUsername",
            password: "yourPassword",
          }), // Thay thế theo yêu cầu
        });
        const data = await response.json();
        setUserInfo({ name: data.name, img: data.img });
        setScores(data.scores);
        setGpaData(data.gpaData);
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setIsLoading(false);
      }
    };
    setTimeout(() => {
      fetchUserData();
    }, 1000);
  }, []);

  const data = Object.entries(scores)
    .filter(([, value]) => value > 0)
    .map(([name, value]) => ({ name, value }));

  return (
    <>
      {isLoading ? (
        <h2 className="loading">Loading...</h2>
      ) : (
        <>
          <div className="home-header">
            <h2>
              Chào mừng sinh viên: <span>{userInfo.name}</span>
            </h2>
            {userInfo.img && <img src={userInfo.img} alt={userInfo.name} />}
          </div>

          <div className="chart">
            <h3>Biểu đồ phần trăm số môn được điểm A</h3>
            <BarChart width={600} height={300} data={data}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#8884d8" />
            </BarChart>

            <h3>Biểu đồ GPA qua các kỳ</h3>
            <LineChart width={600} height={300} data={gpaData}>
              <XAxis dataKey="semester" />
              <YAxis
                domain={[0, 4]}
                tickCount={5}
                interval="preserveStartEnd"
                allowDecimals={false}
              />
              <Tooltip />
              <Line type="monotone" dataKey="gpa" stroke="#8884d8" />
              <CartesianGrid strokeDasharray="3 3" />
            </LineChart>
          </div>
        </>
      )}
    </>
  );
}

export default Home;
