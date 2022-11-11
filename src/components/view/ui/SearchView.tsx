import React from 'react';

class SearchView extends React.Component<{ member: any}> {
  render() {
    let {member} = this.props;
    return member !== null ? (
        <>
          <ul>
            <li>Id : {member.id}</li>
            <li>Password : {member.password}</li>
            <li>Name : {member.name}</li>
            <li>Address : {member.address}</li>
            <li>Type : {member.type}</li>
          </ul>
        </>
    ) : (
        ""
    );
  }
}

export default SearchView;