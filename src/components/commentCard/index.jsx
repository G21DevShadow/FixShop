import "./commentCard.css";

export function CommentCard({ UrlFace, userName, commentText }) {
  return (
    <section className="commentCard">
      <div className="commentContainer">
        <div className="commentUser">
          <img
            src={UrlFace}
            alt="Icono de cara seleccionada por el usuario"
            className="commentUserFace"
          />
          <p className="commentUserName">{userName}</p>
        </div>
        <p className="commentText">{commentText}</p>
      </div>
    </section>
  );
}
