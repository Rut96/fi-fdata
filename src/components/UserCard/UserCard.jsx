import './UserCard.css'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LanguageIcon from '@mui/icons-material/Language';

export function UserCard({ user }) {

    const randomRotation = Math.floor(Math.random() * 25) - 12;

    return (
        <div className="UserCard">

            <div className="card-header">
                <div className="card-username" style={{ transform: `rotate(${randomRotation}deg)` }}>
                    @{user.username}
                </div>

                <div className="card-name">
                    {user.name}
                </div>

                <div className="card-links">
                    <div className="link-phone">
                        <LocalPhoneIcon />
                        <span className='popup phone-popup'>{user.phone}</span>
                    </div>

                    <div className="link-site">
                        <LanguageIcon />
                        <span className='popup site-popup'>{user.website}</span>
                    </div>
                </div>
            </div>

            <div className="card-info">
                <div className="card-address">
                    <h3>Address</h3>
                    <p>{user.address.street}, {user.address.city}</p>
                </div>
                <div className="card-company">
                    <h3>Company</h3> 
                    <span>{user.company.name}</span>
                    <p>"{user.company.catchPhrase}"</p>
                </div>
            </div>

        </div>
    );
}