import React from 'react';
import VisitCard from './VisitCard';

const VisitsNotification = ({ v_users }) => {
    return (
        <div>
            {
                v_users && v_users.map(view => {
                    return <VisitCard key={view.id} view={view}/>
                })
            }
        </div>
    )
}

export default VisitsNotification;