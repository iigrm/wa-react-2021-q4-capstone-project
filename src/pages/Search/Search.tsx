import { useHistory, useLocation } from "react-router";
import { Layout } from "../../components/Layout/Layout";
import { LoadingView } from "../../components/LoadingView/LoadingView";
import { ProductsGrid } from "../../components/ProductsGrid/ProductsGrid";
import { Typography } from "../../components/Typogrphy/Typography";
import { useSearch } from "../../hooks/useSearch";
import NotResultsImage from "../../assets/noresults.jpg";

export const Search = () => {
  const search = useLocation().search;
  const searchParam = new URLSearchParams(search);
  const searchTerm = searchParam.get("q") || "";
  const page = parseInt(searchParam.get("page") || "1");
  const history = useHistory();

  const handleSetPage = (page: number) => {
    history.push({
      pathname: "/search",
      search: `?q=${searchTerm}&page=${page}`,
    });
  };
  const { data, isLoading } = useSearch(searchTerm, page);

  if (!data && isLoading) return <LoadingView />;

  return (
    <Layout>
      <div style={{ padding: "16px" }}>
        {data && data?.products.length > 0 && !isLoading && (
          <>
            <br />
            <Typography variant="h4">{`Showing ${data.pagination.totalResults} results for search: "${searchTerm}"`}</Typography>
            <br />
            <ProductsGrid
              products={data.products}
              pagination={data.pagination}
              onSetPage={handleSetPage}
              showPagination={true}
            />
          </>
        )}
        {data?.products.length === 0 && !isLoading && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginTop: "20px",
            }}
          >
            <Typography align="center">{`Not results found for search: "${searchTerm}"`}</Typography>
            <img
              src={NotResultsImage}
              width="300"
              height="300"
              alt="no results"
            />
          </div>
        )}
      </div>
    </Layout>
  );
};
