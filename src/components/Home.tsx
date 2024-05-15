import React from "react";
import { Col, Row, Statistic, Typography, Button, Flex } from "antd";
import { useGetCryptosQuery } from "../services/cryptoAPI";
import millify from "millify";
import Cryptocurrencies from "./Cryptocurrencies";
import News from "./News";
import { Link } from "react-router-dom";
import { useGetCryptoNewsQuery } from "../services/cryptoNewsAPI";
const { Title } = Typography;

const Home: React.FC = () => {
  const { data, error, isLoading } = useGetCryptosQuery(12);
  

  if (isLoading) return <p>Loading...</p>;
  if (error instanceof Error) return <p>Error: {error.message}</p>;

  const globalStats = data?.data?.stats;

  console.log(globalStats);

  return (
    <div>
      <Title
        style={{
          textAlign: "center",
          fontSize: "2rem",
          marginTop: "2rem",
        }}
        level={2}
      >
        GLOBAL CRYPTO STATS
      </Title>

      <Row justify="center" align="middle">
        <Col span={12}>
          <Statistic title="Total Cryptocurrencies" value={globalStats.total} />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Exchanges"
            value={millify(globalStats.totalExchanges)}
          />
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <Statistic
            title="Total Markets"
            value={millify(globalStats.totalMarkets)}
          />
        </Col>

        <Col span={12}>
          <Statistic
            title="Total marketCap"
            value={millify(globalStats.totalMarketCap)}
          />
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <Statistic
            title="Total 24h Volume"
            value={millify(globalStats.total24hVolume)}
          />
        </Col>
      </Row>

      <Flex justify="space-between" align="center">
        <Title level={2}>Top 10 Crypto Currencies in the World</Title>
        <Button size="large" type="link">
          <Link to="/cryptocurrencies">Show More</Link>
        </Button>
      </Flex>
      <Cryptocurrencies simplified />
      <Flex justify="space-between" align="center">
        <Title level={2}>Latest News on Cryptocurrencies</Title>
        <Button size="large" href="/news" type="link">
          <Link to="/news">Show More</Link>
        </Button>
      </Flex>
       <News simplified/>
    </div>
  );
};
export default Home;
