import _ from "lodash";
import fetcher from "../utils/fetcher";
import { snackbarTemplate } from "../utils/snackbar";

// const baseHost = "https://murmuring-headland-47233.herokuapp.com";
const baseHost = "http://localhost:3010";

const initialState = {
  message: {
    isSending: false,
  },
};

export default function summaryReducer(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    case "message.isSending":
      return {
        ...state,
        message: {
          ...state.message,
          isSending: payload,
        },
      };

    default:
      return state;
  }
}

export const setIsSending = (payload) => ({
  type: "message.isSending",
  payload,
});

export const sendMessage = (data) => async (dispatch) => {
  try {
    dispatch(setIsSending(true));

    const telegramResponse = fetcher(
      `${baseHost}/telegram/send/`,
      "POST",
      {
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(data),
      }
    );
    let allResponse = await Promise.all([telegramResponse]);

    if (!_.isNull(data.email)) {
      const mailResponse = fetcher(
        `${baseHost}/mail/send/piter`,
        "POST",
        {
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
          body: JSON.stringify(data),
        }
      );

      allResponse = await Promise.all([telegramResponse, mailResponse]);
    }

    const findErrors = allResponse.filter(iter=>iter.status !== 200)

    if (_.isEmpty(findErrors)) {
        snackbarTemplate(`Сообщение успешно доставлено.`, "info");
        dispatch(setIsSending(false));
    }
    if (!_.isEmpty(findErrors)) {
        snackbarTemplate(`Сообщение не отправлено попробуйте еще раз.`, "error");
        dispatch(setIsSending(false));
    }

  } catch (error) {
    console.error(error);
    snackbarTemplate(`Сообщение не отправлено попробуйте еще раз.`, "error");
  }
};

// if (!_.isNull(data.email)) {
//   const resp = await fetcher(`${baseHost}/mail/send/piter`, "POST", {
//     headers: {
//       "Content-Type": "application/json;charset=utf-8",
//     },
//     body: JSON.stringify(data),
//   });

//   if (resp.status === 200)
//     snackbarTemplate(`Сообщение успешно доставлено.`, "info");
// }

// const resp = await fetcher(`${baseHost}/telegram/send/`, "POST", {
//   headers: {
//     "Content-Type": "application/json;charset=utf-8",
//   },
//   body: JSON.stringify(data),
// });

// if (resp.status === 200)
//   snackbarTemplate(`Сообщение успешно доставлено.`, "info");
