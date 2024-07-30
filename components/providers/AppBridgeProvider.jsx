const AppBridgeProvider = ({ children }) => {
  if (typeof window !== "undefined") {
    const shop = window?.shopify?.config?.shop;

    if (!shop) {
     return <>No Shop Provided</>;
    }
  }

  return <>{children}</>;
};

export default AppBridgeProvider;
