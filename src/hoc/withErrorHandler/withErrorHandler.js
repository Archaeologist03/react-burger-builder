import React, { Component } from 'react';

import Modal from '../../components/UI/Modal/Modal';
import Auxy from '../Auxy/Auxy';

const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    state = {
      error: null,
    };
    componentWillMount() {
      this.reqInterceptor = axios.interceptors.request.use(req => {
        this.setState({ error: null });
        return req;
      });
      this.resInterceptor = axios.interceptors.response.use(res => res, error => {
        this.setState({ error: error });
      });
    }

    componentWillUnmount() {
      axios.interceptors.request.eject(this.reqInterceptor);
      axios.interceptors.request.eject(this.resInterceptor);
    }

    errorConfiredHandler = () => {
      this.setState({ error: null });
    };

    render() {
      return (
        <Auxy>
          <Modal show={this.state.error} modalClosed={this.errorConfiredHandler}>

            {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrappedComponent {...this.props} />
        </Auxy>
      );
    }
  };
};

export default withErrorHandler;
