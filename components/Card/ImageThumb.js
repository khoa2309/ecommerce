export default function ImageComponent({ link }) {
    return (
        <div
            className="card_img group-hover:scale-110 card_hover_animation"
            style={{ backgroundImage: `url(${link})` }}
        ></div>
    );
}
