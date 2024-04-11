import { faBell, faCircleQuestion } from "@fortawesome/free-solid-svg-icons";
import OtherLinks from "./OtherLinks";
import UserProfile from "./UserProfile";

export default function NavBarRight() {
    const otherLinks = [
        {
            icon: faBell,
            text: "Thông báo",
            className: "h-[2rem]",
            noti: true,
        },
        {
            icon: faCircleQuestion,
            text: "Trợ giúp",
            className: "h-[2rem]",
        },
    ];

    const userProfile = {
        imageURL:
            "https://occ-0-395-55.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABYNwAakf94HfoVx6gz2x8vcyNJa3tTYZPqdyGDJ93nPbawb7vDV7U60_-S5D6yxeDBw1LcQVb01i60Qpgtot-BiSKM179cXngQ.png?r=962",
        name: "Khoa Nguyễn",
    };

    return (
        <ul className="nav">
            {/* <div>Dark mode</div> */}
            <OtherLinks links={otherLinks} />
            <UserProfile userProfile={userProfile} />
        </ul>
    );
}
