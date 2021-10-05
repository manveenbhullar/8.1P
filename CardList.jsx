import React from "react";
import Card from './Card'
import './CardList.css'
import StaffList from './StaffList'

const CardList = () => {
    return (
        <div className="card-container">
            <ul className="card-item">
                {StaffList.map((staff) =>
                    <li key={staff.key}>
                        <Card
                            avatar={staff.avatar}
                            name={staff.name}
                            position={staff.position}
                            rating={staff.rating}
                        />
                    </li>
                )}
            </ul>
        </div>
    )
}

export default CardList