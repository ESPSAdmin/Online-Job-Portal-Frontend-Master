import React from 'react';
import { useJobContext } from '../context';

const CategoryCard = () => {
    const { allJobCategories } = useJobContext();

    return (
        <div className="container-fluid">
            <div className="container-sm">
                <div className="row">
                   <p className='py-2'><h2 className='text-primary hr-bar'>Positions you can apply</h2></p>
                    {allJobCategories.map((category) => (
                        <div key={category.id} className="col-lg-3 mb-3 border py-2">
                            <h6 className='text-center'>{category.name}</h6>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default CategoryCard;
