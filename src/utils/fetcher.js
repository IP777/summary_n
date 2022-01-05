import { isArray } from "lodash";

export default async function fetcher(to, method = "GET", props) {
  class HTTPError extends Error {
    // eslint-disable-next-line no-useless-constructor
    constructor(message, status, to) {
      super(message);
      this.status = status;
      this.to = to;
    }
  }

  const res = await fetch(to, {
    method,
    ...props,
  });

  if (!res.ok) {
    let errMsg;
    try {
      const response = await res.json();
      if (isArray(response.error.message)) {
        errMsg = response.error.message
          .map((i) => `${i.param}: ${i.msg}`)
          .join("; ");
      } else {
        errMsg = response.error.message;
      }
    } catch (e) {
      errMsg = "Server Connection lost";
    }

    throw new HTTPError(errMsg, res.status || 500, to);
  }

  let parsed;

  try {
    if (props.type === "buffer") {
      parsed = await res.arrayBuffer();
    } else {
      parsed = await res.json();
    }
  } catch (e) {
    parsed = res;
  }
  return parsed;
}
