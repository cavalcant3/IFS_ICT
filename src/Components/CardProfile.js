import './CardProfile.css'

function CardProfile(props) {
  return (
    <div className="CardProfile">
      <img src={props.profileImageUrl} alt="Profile" />
      <h1>{props.name}</h1>
      <p>{props.bio}</p>
    </div>
  );

}
export default CardProfile;