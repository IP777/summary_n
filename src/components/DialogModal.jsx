import React, { useState } from "react";
import {
  TextField,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  CircularProgress,
} from "@material-ui/core";

import { Edit, Send, Close } from "@material-ui/icons";
import { sendMessage } from "../redux/globalReducerAction";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const StyledDialog = styled.div`
  .contact_button {
    width: 150px;
    height: 40px;
    background-color: var(--color-orange);
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 4px;
    .icon {
      color: #fff;
    }
    .text {
      width: 100%;
      font-size: 16px;
      font-weight: 600;
      color: #fff;
    }
  }

  @media print {
    display: none;
  }
`;

export default function DialogModal() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const isSending = useSelector(
    (state) => state.summaryReducer.message.isSending
  );

  const [name, setName] = useState("Guest");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      sendMessage({ name, email: _.isEmpty(email) ? null : email, message })
    );
  };

  return (
    <StyledDialog>
      <button
        type="button"
        onClick={handleClickOpen}
        className="contact_button"
      >
        <Edit className="icon" />
        <div className="text">Contact me</div>
      </button>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <form onSubmit={handleSubmit}>
          <DialogTitle
            id="alert-dialog-title"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontSize: 24,
            }}
          >
            <div className="text">{t("sendMessage.title")}</div>
            <button type="button" onClick={handleClose}>
              <Close style={{ color: "gray" }} />
            </button>
          </DialogTitle>
          <DialogContent>
            <DialogContentText
              id="alert-dialog-description"
              style={{ marginBottom: 20 }}
            >
              {t("sendMessage.descriptionTitle")}
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              label={t("sendMessage.textField.name")}
              type="text"
              fullWidth
              required
              variant="outlined"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <TextField
              margin="dense"
              label={t("sendMessage.textField.email")}
              type="email"
              fullWidth
              variant="outlined"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <TextField
              margin="dense"
              label={t("sendMessage.textField.text")}
              type="text"
              fullWidth
              multiline
              minRows={3}
              required
              variant="outlined"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            />
          </DialogContent>
          <DialogActions style={{ padding: 20 }}>
            <Button
              onClick={handleClose}
              color="error"
              autoFocus
              variant="outlined"
              style={{ width: 150 }}
            >
              {t("sendMessage.button.cancel")}
            </Button>

            <Button
              type="submit"
              color="inherit"
              variant="outlined"
              style={{ width: 150 }}
              endIcon={
                isSending ? (
                  <CircularProgress color="inherit" size={17} />
                ) : (
                  <Send />
                )
              }
              disabled={isSending}
            >
              {isSending
                ? t("sendMessage.button.sending")
                : t("sendMessage.button.send")}
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </StyledDialog>
  );
}
