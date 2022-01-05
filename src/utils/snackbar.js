let snackbarS;

export function setSnackbar(s) {
  snackbarS = s;
}

export function snackbar() {
  return snackbarS;
}

export const snackbarTemplate = (
  text,
  variant = "info",
  duration = 3000,
  Component = false
) => {
  const action = (key) => {
    if (duration) {
      setTimeout(() => {
        snackbar().closeSnackbar(key);
      }, duration);
    }
    return (
      <>
        {Component && <Component />}
        <button
          type="button"
          onClick={() => {
            snackbar().closeSnackbar(key);
          }}
        >
          X
        </button>
      </>
    );
  };

  snackbar().enqueueSnackbar(text, {
    variant,
    // autoHideDuration: 3000,
    action,
    persist: true,
  });
};
