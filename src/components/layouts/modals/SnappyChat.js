import React from "react";

const SnappyChat = () => {
  return (
    <div
      className="modal fade"
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="staticBackdropLabel">
              Snappy Chat
            </h5>
            <button
              style={{ background: "none", border: "none" }}
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <i style={{ color: "red" }} className="far fa-times-circle"></i>
            </button>
          </div>
          <div class="modal-body">
            <p>
              Snappy Chat is a simple web application developed to help
              connect and chat
            </p>
            * <p>
              Snappy Chat supports both group and private chats among two
              different users.
            </p>
            <p>
              Group chats are done in pre-created rooms and each rooms has a
              way
            </p>
            <p>
              Private chats can be carried out on the condition that both users
              are friends. Therefore, the application adopts a functionality
              that allow users send friend request to each other, and they
              become friends on the condition that the other party accepts the
              request
            </p>
            <p>
              The application supports user registeration (Authentication /
              Authorization), a userprofile section that shows users information
              and each user have the option to decide who can and who can not
              view their profile details
            </p> 
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <a
              href="https://chatapp-theta-lyart.vercel.app/login"
              className="btn btn-primary"
              type="button"
              target="_blank"
              rel="noreferrer"
            >
              View Life Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SnappyChat;
