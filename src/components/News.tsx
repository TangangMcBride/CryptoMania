import { useState } from "react";
import { Select, Typography, Row, Col, Avatar, Card } from "antd";
import { useGetCryptoNewsQuery } from "../services/cryptoNewsAPI";
interface NewsProps {
  simplified: boolean;
}
const { Text, Title } = Typography;
const { Option } = Select;

const News: React.FC<NewsProps> = ({ simplified }) => {
  const count = simplified ? 10 : 100;
  const {
    data: cryptoNews,
    error,
    isLoading,
  } = useGetCryptoNewsQuery({
    count: { count },
  });

  if (isLoading) return <p>...Loading</p>;
  if (error instanceof Error) return <p>{error.message}</p>;

  console.log(cryptoNews);
  const { Meta } = Card;
  return (
    <Row gutter={[24, 24]}>
      {cryptoNews.data.map((article) => (
        <Col xs={24} sm={12} lg={8}>
          <a href={article.url} target="_blank" rel="noreferrer">
         <Card
            style={{ width: 300 }}
            cover={
              <img
                alt="example"
                src={article.thumbnail}
              />
            }
            
          >
            <Meta
              avatar={
                <Avatar src={article.thumbnail} />
              }
              description={article.createdAts}
              title={article.title}
              description={article.description}
            />
          </Card>
          </a>
          
        </Col>
      ))}
    </Row>
  );
};

export default News;
