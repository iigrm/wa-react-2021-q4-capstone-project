import React from "react";
import { CategoryType } from "../../models/CategoryType";
import { Card } from "../Card/Card";
import { Typography } from "../Typogrphy/Typography";
import { useNavigation } from "../../hooks/useNavigation";
import * as S from "./CategoryCard.style";
import { Link } from "react-router-dom";

type Props = {
  category: CategoryType;
};

export const CategoryCard = (props: Props) => {
  return (
    <Card height={100} width={200}>
      <Link to={`/products?category=${props.category.name}`}>
        <S.CategoryCardImage src={props.category.imageUrl} loading="lazy" />
        <Typography variant="h4" align="center">
          {props.category.name}
        </Typography>
      </Link>
    </Card>
  );
};
