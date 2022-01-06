import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { LoadBeaches } from '../store/actions/BeachActions';

const mapStateToProps = ({ beachState }) => {
  return { beachState };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBeaches: () => dispatch(LoadBeaches())
  };
};

const Beaches = (props) => {
  useEffect(() => {
    props.fetchBeaches();
  }, []);

  return (
    <div>
      {props.beachState.beaches.map((beach) => (
        <ul key={beach._id}>
          <div>{beach.beachName}</div>
          <div>{beach.address}</div>
          <img src={beach.image} alt="beach" />
          <div>{beach.review}</div>
          <div>{beach.comments}</div>
          <div>{beach.likes}</div>
          <Link to={`/beaches/${beach._id}`}>Review Comments</Link>
        </ul>
      ))}
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Beaches);
