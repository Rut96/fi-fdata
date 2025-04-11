import { useEffect, useState } from 'react';
import './Home.css'
import { userService } from '../../services/UserService';
import { UserCard } from '../../components/UserCard/UserCard';
import { Hero } from '../../components/Hero/Hero';

export function Home() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        (async () => {
            const fetchedUsers = await userService.getAllUsers()
            setUsers(fetchedUsers);
        })();

    }, []);

    return (
        <div className="Home">
            <Hero />

            <div className="users-container">
                {users && users.map(user => (
                    <UserCard key={user.id} user={user} />
                ))}
            </div>
        </div>
    );
}