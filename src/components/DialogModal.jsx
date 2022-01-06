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
  Fab,
} from "@material-ui/core";

import { Edit, Send, Close } from "@material-ui/icons";
import { sendMessage } from "../redux/globalReducerAction";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const StyledDialog = styled.div`
  opacity: 0.8;
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
      <Fab
        color="primary"
        aria-label="edit"
        style={{
          position: "fixed",
          right: 10,
          bottom: 10,
          backgroundColor: "#45413f",
        }}
        onClick={handleClickOpen}
      >
        <Edit className="text-white" />
      </Fab>
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
            <Button
              onClick={handleClose}
              color="error"
              autoFocus
              variant="outlined"
              style={{ width: 150 }}
            >
              {t("sendMessage.button.cancel")}
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </StyledDialog>
  );
}
