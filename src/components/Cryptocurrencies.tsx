import millify from "millify";
import { Link } from "react-router-dom";
import { Card, Row, Col, Input } from "antd";
import { useGetCryptosQuery } from "../services/cryptoAPI";
import { useState } from "react";

function Cryptocurrencies() {
  const { data, error, isLoading } = useGetCryptosQuery(10);
  const [cryptos, setCryptos] = useState(data?.data?.coins);

  if (isLoading) return <p>...Loading</p>;
  if (error instanceof Error) return <p>{error.message}</p>;

  console.log(cryptos);

  return (
    <div>
      <Row gutter={[32, 32]}>
        {cryptos?.map((crypto: any) => (
          <Col xs={24} sm={12} lg={6} className="crypto-card" key={crypto.id}>
            <Link to={`/crypto/${crypto.id}`}>
              <Card
                title={`${crypto.rank}. ${crypto.name}`}
                extra={
                  <img
                    style={{
                      width: "40px",
                      height: "40px",
                      // borderRadius: "50%",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    src={crypto.iconUrl}
                    alt={crypto.name}
                  />
                }
                hoverable
              >
                <p>Price: {millify(crypto.price)}</p>
                <p>Market Cap: {millify(crypto.marketCap)}</p>
                <p>Daily Change: {millify(crypto.change)}%</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Cryptocurrencies;
