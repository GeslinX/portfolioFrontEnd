import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Tab from './Tab';

class Tabs extends Component {
  static propTypes = {
    children: PropTypes.instanceOf(Array).isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {
      activeTab: this.props.children[0].props.label,
    };
  }

  onClickTabItem = (tab) => {
    this.setState({ activeTab: tab });
  }

  render() {
    const {
      onClickTabItem,
      props: {
        children,
      },
      state: {
        activeTab,
      }
    } = this;

    return (
      <div className="tabs">
        <ol className="tab-list py-10 border-lightGrey-gx border-b-2 flex flex-col md:flex-row gap-12">
          {children.map((child) => {
            const { label } = child.props;
            const { count } = child.props;

            return (
              <Tab
                activeTab={activeTab}
                key={label}
                label={label}
                count={count}
                onClick={onClickTabItem}
              />
            );
          })}
        </ol>
        <div className="tab-content py-5 sm:py-14 flex flex-col items-center sm:flex-row gap-10">
          {children.map((child) => {
            if (child.props.label !== activeTab) return undefined;
            return child.props.children;
          })}
        </div>
      </div>
    );
  }
}

export default Tabs;