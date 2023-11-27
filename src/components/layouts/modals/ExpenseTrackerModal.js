import React from "react";

const ExpenseTackerModal = () => {
  return (
    <div
      className="modal fade"
      id="staticBackdrop2"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="staticBackdropLabel">
              Expense Tracker
            </h5>
            <button
              style={{ background: "none", border: "none" }}
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close">
              <i style={{ color: "red" }} className="far fa-times-circle"></i>
            </button>
          </div>
          <div class="modal-body">
            <p>
            Welcome to the Expense Tracker project! This web application helps users track their income and expenses, providing a clear overview of their financial situation.

            </p>
            { <p>
              It is built with HTML,CSS,BOOTSTRAP, JAVASCRIPT
            </p> }
            {/* <p>
              Chat connect supports both group and private chats among two
              different users.
            </p>
            <p>
              Group chats are done in pre-created rooms and each rooms has a
              unique topic from comedy, to politics, fashion etc
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
            </p> */} 
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal">
              Close
            </button>
            <a
              href="https://my-expensetracker.vercel.app/"
              className="btn btn-primary"
              type="button"
              target="_blank"
              rel="noreferrer">
              View Life Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpenseTackerModal;
