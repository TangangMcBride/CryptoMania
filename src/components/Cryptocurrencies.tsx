import millify from "millify";
import { Link } from "react-router-dom";
import { Card, Row, Col, Input } from "antd";
import { useGetCryptosQuery } from "../services/cryptoAPI";
import { useState, useEffect } from "react";

interface CryptocurrenciesProps {
  simplified: boolean;
}
const Cryptocurrencies: React.FC<CryptocurrenciesProps> = ({ simplified }) => {
  const count = simplified ? 12 : 100;
  const { data, error, isLoading } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    
    const filteredData = data?.data?.coins.filter((coin: { name: any }) =>
      coin.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setCryptos(filteredData);
  }, [data, searchTerm]);


  if (isLoading) return <p>...Loading</p>;
  if (error instanceof Error) return <p>{error.message}</p>;

  return (
    <div>
      {!simplified && (<Input
        placeholder="input search text"
        allowClear
        addonAfter="Search"
        size="large"
        onChange={(e) => setSearchTerm(e.target.value)}
      />)}
      
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
};

export default Cryptocurrencies;
