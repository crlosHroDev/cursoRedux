import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Media from '../components/media';
import * as actions from '../../actions/index';

class MediaContainer extends Component {
    openModal=(id)=>{
        this.props.actions.openModal(id)
    }
    render(){
        return(
            <Media openModal={this.openModal} {...this.props.data.toJS()}/>
        )
    }
}

function mapStateToProps(state,props){
    return{
        data:state.get('data').get('entities').get('media').get(props.id)
    }
}

function mapDispathToProps(dispatch){
    return{
      actions:bindActionCreators(actions,dispatch)
    }
  }
export default connect(mapStateToProps,mapDispathToProps)(MediaContainer);