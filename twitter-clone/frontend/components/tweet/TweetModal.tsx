"use client";

import Modal from "../ui/Modal";
import TweetComposer from "./TweetComposer";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function TweetModal({
  open,
  onClose,
}: Props) {
  return (
    <Modal open={open} onClose={onClose}>
      <div className="p-2">
        <button
          onClick={onClose}
          className="px-3 py-2"
        >
          ✕
        </button>

        <TweetComposer
          onCreated={onClose}
        />
      </div>
    </Modal>
  );
}