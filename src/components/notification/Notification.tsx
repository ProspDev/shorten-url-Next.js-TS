import React from "react";
import toast from "react-hot-toast";
import classNames from "classnames";
import styles from "./Notification.module.css";
import { Delete } from "baseui/icon";

interface NotificationType {
  text: string;
  notificationType?: "success" | "error" | "info" | "warning";
}

const notify = ({
  text = "",
  notificationType = "success",
}: NotificationType) =>
  toast.custom(
    (t) => (
      <div
        className={classNames([
          styles.notificationWrapper,
          t.visible ? styles.visible : styles.invisible,
          styles[notificationType],
        ])}
      >
        <div className={styles.contentWrapper}>{text}</div>
        <div className={styles.close} onClick={() => toast.dismiss()}>
          <Delete size="24px" color="white" />
        </div>
      </div>
    ),
    { id: "unique-notification", position: "top-right", duration: 5000 }
  );

export default notify;
