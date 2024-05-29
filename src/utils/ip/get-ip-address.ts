type GetIPAddressFunction = () => Promise<string>;

/**
 * Fetches the IP address of the current client from the ipify API.
 */
export const getIPAddress: GetIPAddressFunction = async () => {
  /**
   * Attempt to fetch the IP address from the ipify API.
   */
  const response = await fetch("https://api.ipify.org?format=json");

  /**
   * Attempt to parse the response data.
   */
  const data: unknown = await response.json();

  /**
   * Validate that the response data contains an IP address.
   */
  if (
    data !== null &&
    typeof data === "object" &&
    "ip" in data &&
    typeof data.ip === "string"
  ) {
    /**
     * Return the IP address.
     */
    return data.ip;
  }

  /**
   * Throw an error instead of returning if the IP address was not included in
   * the response data.
   */
  throw new Error("IP address was not included in response data from ipify.");
};
