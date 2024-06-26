import React, {useState} from 'react';
import FormModal from './FormModal.jsx';

const AddReview = ({metaData, fetchReviewsList, currentProduct}) => {

  const [FormOpen, setFormOpen] = useState(false);

  const handleAddReviewClick = (event) => {
    event.preventDefault();
    setFormOpen(true);
  };

  const handleCloseForm = () => {
    event.preventDefault();
    setFormOpen(false); //To do:  add - resetting of values once form is closed
  }

  return (
    <div className="add-review-button">
    <button data-testid="add-review-btn" onClick={handleAddReviewClick}>Add a Review  &#43;</button>
    {FormOpen ? <FormModal handleCloseForm={handleCloseForm} metaData={metaData} fetchReviewsList={fetchReviewsList} currentProduct={currentProduct}/> : null}
    </div>
  )

};

export default AddReview;