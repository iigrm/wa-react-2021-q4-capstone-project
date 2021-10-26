import { useRouterContext } from "../components/Router/Router.context";

export const useNavigation = () => {
  const { route, changeRoute } = useRouterContext();

  const navigateTo = (route: string) => {
    if (changeRoute) {
      changeRoute(route);
    }
  };

  return {
    navigateTo,
    route,
  };
};
