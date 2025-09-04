// utils.js

/**
 * createPageUrl
 * Generates a URL path for a given page name.
 * Example: "Home" => "/"
 *          "About" => "/about"
 */
export function createPageUrl(pageName) {
  switch (pageName.toLowerCase()) {
    case "home":
      return "/";
    case "about":
      return "/about";
    case "portfolio":
      return "/portfolio";
    case "services":
      return "/services";
    case "contact":
      return "/contact";
    default:
      return "/";
  }
}
