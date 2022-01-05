import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Edit } from "@material-ui/icons";
import Fab from "@material-ui/core/Fab";
import { TextField } from "@material-ui/core";
import { sendMessage } from "../redux/globalReducerAction";
import { useDispatch } from "react-redux";
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

  const [name, setName] = useState("");
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
          <DialogTitle id="alert-dialog-title" style={{ fontSize: 24 }}>
            {t("sendMessage.title")}
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
            />
            <TextField
              margin="dense"
              label={t("sendMessage.textField.email")}
              type="email"
              fullWidth
              variant="outlined"
              onChange={(e) => setEmail(e.target.value)}
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
            />
          </DialogContent>
          <DialogActions style={{ padding: 20 }}>
            <Button
              type="submit"
              color="inherit"
              variant="outlined"
              style={{ width: 120 }}
            >
              {t("sendMessage.button.send")}
            </Button>
            <Button
              onClick={handleClose}
              color="secondary"
              autoFocus
              variant="outlined"
              style={{ width: 120 }}
            >
              {t("sendMessage.button.cancel")}
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </StyledDialog>
  );
}
