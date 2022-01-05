import _ from "lodash";
import fetcher from "../utils/fetcher";
import { snackbarTemplate } from "../utils/snackbar";

const baseHost = "https://murmuring-headland-47233.herokuapp.com";
// const baseHost = "http://localhost:3010";

export const sendMessage = (data) => async (dispatch) => {
  if (!_.isNull(data.email)) {
    try {
      const resp = await fetcher(`${baseHost}/mail/send/piter`, "POST", {
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(data),
      });

      if (resp.status === 200)
        snackbarTemplate(`Сообщение успешно доставлено.`, "info");
    } catch (error) {
      console.error(error);
      snackbarTemplate(`Сообщение не отправлено попробуйте еще раз.`, "error");
    }
  }
  try {
    const resp = await fetcher(`${baseHost}/telegram/send/`, "POST", {
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(data),
    });

    if (resp.status === 200)
      snackbarTemplate(`Сообщение успешно доставлено.`, "info");
  } catch (error) {
    console.error(error);
    snackbarTemplate(`Сообщение не отправлено попробуйте еще раз.`, "error");
  }
};
