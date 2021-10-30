import { useHistory } from "react-router";

export const useNavigation = () => {
  const history = useHistory();

  const navigateTo = (route: string) => {
    history.push(route);
  };

  return {
    navigateTo,
  };
};
