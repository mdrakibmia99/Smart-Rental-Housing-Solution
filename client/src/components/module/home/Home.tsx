import { useUser } from '@/userContextApi/userProvider';
import React from 'react';

const Home = () => {
    const {isLoading}=useUser()
    return (
        <div>
            <p>hello: {isLoading}</p>
        </div>
    );
};

export default Home;