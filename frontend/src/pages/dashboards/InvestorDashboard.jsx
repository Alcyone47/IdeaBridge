import React, { useEffect } from 'react'
import CustomHeader from '../../components/common/CustomHeader'
import api from '../../api/axios'
import IdeaDeckCard from '../../components/common/IdeaDeckCard'


const InvestorDashboard = () => {
  const [ideas, setIdeas] = React.useState([])
  const [loading, setLoading] = React.useState(true); 
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    const fetchIdeas = async() => {
      try {
        const token = localStorage.getItem("token");
        const res = await api.get("api/ideas/all", {
          headers: { Authorization: `Bearer ${token}`}
        });
        setIdeas(res.data);
      }
      catch(err){
        console.error("Error fetching all ideas: ", err);
      } finally {
        setLoading(false);
      }
    };
    fetchIdeas();
  }, []);

  return (
    <div>
      <CustomHeader/>
      Investor Dashboard
    </div>
  )
}

export default InvestorDashboard