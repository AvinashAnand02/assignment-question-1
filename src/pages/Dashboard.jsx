import { useState, useEffect } from "react";

// Data
import mockData from "../assets/data.json";
import timestamps from "../assets/timeStamps.json";

// Components
import Dropdown from "../component/dropdown/Dropdown";
import HeaderTitle from "../component/header-title/HeaderTitle";
import Search from "../component/search/Search";
import List from "../component/list/List";

// Styles
import styles from "./Dashboard.module.css";
import Card from "../component/card/Card";

const Dashboard = () => {
  const [currency, setCurrency] = useState("EUR");
  const [searchText, setSearchText] = useState("");
  const [selectedOrderDetails, setSelectedOrderDetails] = useState({});
  const [selectedOrderTimeStamps, setSelectedOrderTimeStamps] = useState({});
  const [totalOrders, setTotalOrders] = useState(0);

  useEffect(() => {
    setTotalOrders(mockData.results.length);
  }, [mockData]);

  function orderDetail(data)
  {
    setSelectedOrderDetails(data);
  }

  function orderTime(data)
  {
    setSelectedOrderTimeStamps(data);
  }
  const filrows=mockData.results.filter((row) => {
    return(
      row['&id'].toString().includes(searchText)
    );
    
  }
  );
  

  return (
    <div>
      <div className={styles.header}>
        <HeaderTitle primaryTitle="Orders" secondaryTitle={`${totalOrders} orders`} />
        <div className={styles.actionBox}>
          <Search
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <Dropdown
            options={["GBP", "USD", "JPY", "EUR"]}
            onChange={(e) => setCurrency(e.target.value)}
            selectedItem={currency}
          />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.section}>
          <Card
            cardData={selectedOrderDetails}
            title="Selected Order Details"
          />
          <Card
            cardData={selectedOrderTimeStamps}
            title="Selected Order Timestamps"
          />
        </div>
        <List rows={filrows} timeStamp={timestamps.results} curr={currency} orderdetail={orderDetail} ordertime={orderTime}/>
      </div>
    </div>
  );
};

export default Dashboard;