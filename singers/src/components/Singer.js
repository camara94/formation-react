import React from 'react';

class Singer extends React.Component { 
    
    render() {
        const { name, age } = this.props;
        return (
            <div>
                Chanteur: {name +  ' ' + age}
            </div>
        )
    }
    
}

export default Singer;