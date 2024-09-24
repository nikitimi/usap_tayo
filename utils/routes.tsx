import { Ionicons } from "@expo/vector-icons";
import { type ComponentProps } from "react";

/**
 * This type will ensure that all index name passed will be converted to "/".
 */
type Route = {
  [K in (typeof rawRoutes)[number]]: K extends typeof defaultTabName
    ? typeof defaultRoute
    : `${typeof defaultRoute}${K}`;
}[(typeof rawRoutes)[number]];

/**
 * Check the custom routes below.
 */
export type RouteDetails = {
  targetFile: (typeof rawRoutes)[number];
  route: Route;
  icon: {
    default: ComponentProps<typeof Ionicons>["name"];
    active: ComponentProps<typeof Ionicons>["name"];
  };
};

/**
 * This is the default file name for default tab in Tab.Navigator.
 */

const defaultTabName = "index";
/**
 * This is a prefix for routes.
 */
export const defaultRoute = "/";

/**
 * This is the list of routes for the app.
 */
const rawRoutes = [defaultTabName, "explore"] as const;

/**
 * Custom routes
 */
const home = {
  targetFile: "index",
  route: "/",
  icon: {
    default: "home",
    active: "home-outline",
  },
} as const;
const explore = {
  targetFile: "explore",
  route: "/explore",
  icon: {
    default: "code-slash",
    active: "code-slash-outline",
  },
} as const;

/**
 * Collection of custom routes.
 */
export const routes: RouteDetails[] = [home, explore];
