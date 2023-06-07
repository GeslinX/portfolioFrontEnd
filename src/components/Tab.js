import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Tab extends Component {
    static propTypes = {
      activeTab: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      count: PropTypes.string.isRequired,
      onClick: PropTypes.func.isRequired,
    };
  
    onClick = () => {
      const { label, onClick } = this.props;
      onClick(label);
    }
  
    render() {
      const {
        onClick,
        props: {
          activeTab,
          count,
          label,
        },
      } = this;
  
      let className = 'opacity-50 cursor-pointer transition-all ease-in-out duration-500 hover:opacity-100';
  
      if (activeTab === label) {
        className = ' opacity-100 transition-all ease-in-out duration-500';
      }
  
      return (
        <li
          className={className}
          onClick={onClick}
        >
          <span className='font-title text-4xl text-orange-gx'>{count} </span>
          <span className='font-body text-3xl font-bold text-white  uppercase'>{label}</span>
          
        </li>
      );
    }
  }
  
  export default Tab;