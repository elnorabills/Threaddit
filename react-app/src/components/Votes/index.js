
import { useDispatch } from "react-redux";
import { fetchCreateVote, fetchDeleteVote } from "../../store/questions";
import "./Votes.css";

const Votes = ({question, refreshQuestion}) => {
    const dispatch = useDispatch();
    const voteDirection = question?.Votes?.voteDirection;

    const handleClearVote = async (e) => {
      e.preventDefault();

      return dispatch(fetchDeleteVote(question?.Votes?.voteId))
        .then(refreshQuestion())
        .then(refreshQuestion())
        .then(
          document.querySelectorAll(
              "i.fa-solid"
            )
            .forEach((e) => {
              e.removeAttribute("disabled");
              e.style.setProperty("color", "gray")
              e.style.setProperty("backgroundColor", "white")
              e.style.setProperty("border", "none")
            })
        );
    };

    const handleUpVote = async (e) => {
      return dispatch(fetchCreateVote(question?.id, "Up"))
        .then(refreshQuestion())
        .then(refreshQuestion())
        .then(document.querySelectorAll("i.fa-arrow-up").forEach(
            e => {
                e.setAttribute("disabled", "")
                e.style.setProperty("color", "rgb(185, 3, 3)");
                e.style.setProperty("backgroundColor", "white");
                e.style.setProperty("border", "none");
            }
        ))
    };

    const handleDownVote = async (e) => {
      return dispatch(fetchCreateVote(question?.id, "Down"))
        .then(refreshQuestion())
        .then(refreshQuestion())
        .then(
          document.querySelectorAll("i.fa-arrow-down").forEach((e) => {
            e.setAttribute("disabled", "");
            e.style.setProperty("color", "rgb(185, 3, 3)");
            e.style.setProperty("backgroundColor", "white");
            e.style.setProperty("border", "none");
          })
        );
    };

    return (
      <div>
        {voteDirection === null && (
          <div className="votes-container">
            <button
              className="vote-button"
              disabled={question?.Votes?.hasVoted}
              style={{
                color: "gray",
                backgroundColor: "white",
                border: "none",
              }}
              onClick={handleUpVote}
            >
              <i className="fa-solid fa-arrow-up"></i>
            </button>
            <div className="vote-total">{question?.Votes?.total}</div>
            <button
              className="vote-button"
              disabled={question?.Votes?.hasVoted}
              style={{
                color: "gray",
                backgroundColor: "white",
                border: "none",
              }}
              onClick={handleDownVote}
            >
              <i class="fa-solid fa-arrow-down"></i>
            </button>
          </div>
        )}
        {voteDirection === "Up" && (
          <div className="votes-container">
            <button
              className="vote-button"
              disabled={question?.Votes?.hasVoted}
              style={{
                color: "rgb(185, 3, 3)",
                backgroundColor: "white",
                border: "none",
              }}
            >
              <i className="fa-solid fa-arrow-up"></i>
            </button>
            <div className="vote-total">{question?.Votes?.total}</div>
            <button
              className="vote-button"
              disabled={question?.Votes?.hasVoted}
              style={{
                color: "gray",
                backgroundColor: "white",
                border: "none",
              }}
            >
              <i class="fa-solid fa-arrow-down"></i>
            </button>
          </div>
        )}
        {voteDirection === "Down" && (
          <div className="votes-container">
            <button
              className="vote-button"
              disabled={question?.Votes?.hasVoted}
              style={{
                color: "gray",
                backgroundColor: "white",
                border: "none",
              }}
            >
              <i className="fa-solid fa-arrow-up"></i>
            </button>
            <div className="vote-total">{question?.Votes?.total}</div>
            <button
              className="vote-button"
              disabled={question?.Votes?.hasVoted}
              style={{
                color: "rgb(185, 3, 3)",
                backgroundColor: "white",
                border: "none",
              }}
            >
              <i class="fa-solid fa-arrow-down"></i>
            </button>
          </div>
        )}
        {question?.Votes?.hasVoted && (
          <a href="#" onClick={handleClearVote} className="clear-vote-link">
            Clear Vote
          </a>
        )}
      </div>
    );

}

export default Votes;
