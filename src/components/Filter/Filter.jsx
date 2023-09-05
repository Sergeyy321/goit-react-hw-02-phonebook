import { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
 const Id = nanoid();
export class Filter extends Component {


    render() {
        return (
          <div>
            <h2>Find contacts by name</h2>
            <input
              id={this.Id}
              type="text"
              value={this.props.filter}
              onChange={this.props.onfilterChange}
              name="filter"
              pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </div>
        );
        

    }
    
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onfilterChange: PropTypes.func.isRequired,
};