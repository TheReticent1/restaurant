import React from 'react';

//defined modal popup context
const ModalContext = React.createContext();

class ModalProvider extends React.Component {

  state = {
    openModal: false,
    switches: true,
    heading: "SignUp"
  }

  handleModal = () => {
    this.setState({ openModal: !this.state.openModal, switches: true });
  }

  handleForm = () => {
    this.setState({ switches: false, heading: "SignIn" });
  }

  render() {
    return (
      <ModalContext.Provider value={{
        ...this.state,
        handleModal: this.handleModal,
        handleForm: this.handleForm
      }}
      >
        {this.props.children}
      </ModalContext.Provider>
    )
  }
}

export { ModalProvider, ModalContext }