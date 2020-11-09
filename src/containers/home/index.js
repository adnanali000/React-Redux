import React from 'react';
import './style.css';
import {connect} from 'react-redux';
import{set_data} from '../../store/action';

class Home extends React.Component {
    render(){
        console.log('Props:',this.props);
        return(
            <div>
                <h1>Home</h1>
                <button onClick={()=>this.props.set_data()}>Set Data</button>
            </div>

        )
    }
}

const mapStateToProps = (state)=>({
    name: state.users
})

const mapDispatchToProps = (dispatch) =>({
    set_data:(data)=> dispatch(set_data(data))
})

export default connect(mapStateToProps,mapDispatchToProps)(Home);