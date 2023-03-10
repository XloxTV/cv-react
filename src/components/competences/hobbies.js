import React from 'react'

const Hobbies = () => {
    return (
        <div className='hobbies'>
            <h3>Intérêts</h3>
            <ul>
                <li className='hobby'>
                    <i className='fas fa-running'></i>
                    <span>Course à pied</span>
                </li>
                <li className='hobby'>
                    <i className='fas fa-rocket'></i>
                    <span>L'espace</span>
                </li>
                <li className='hobby'>
                    <i className='fas fa-bitcoin'></i>
                    <span>Cryto-monnaies</span>
                </li>
            </ul>
        </div>
    )
}

export default Hobbies