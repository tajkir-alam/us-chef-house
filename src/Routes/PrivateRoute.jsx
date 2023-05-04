import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders';
import { Navigate, useLocation } from 'react-router-dom';
import { HashLoader } from 'react-spinners';


const PrivateRoute = ({ children }) => {
    const { user, loader } = useContext(AuthContext);
    const location = useLocation();

    if (loader) {
        return (
            <>
                {loader &&
                    <div>
                        <div className='hidden lg:block absolute left-1/3 top-2/4'>
                            <HashLoader
                                color="#5b31d2"
                                size={400}
                            ></HashLoader>
                        </div>
                        <div className='lg:hidden absolute left-1/4 top-1/4'>
                            <HashLoader
                                color="#5b31d2"
                                size={200}
                            ></HashLoader>
                        </div>
                    </div>
                }
            </>
        )
    }

    if (!user) {
        return <Navigate to={'/login'} state={{ from: location }} replace ></Navigate>
    }

    return (
        children
    );
};

export default PrivateRoute;