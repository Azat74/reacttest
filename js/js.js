"use strict";

const renderhere = document.getElementById("renderhere");
  class Task extends React.Component {
    constructor(props){
      super(props);
      this.state = {edit:false};
      this.edit = this.edit.bind(this);
      this.save = this.save.bind(this);
    }
    // getInitialState () {
    //   return {
    //     edit: false
    //   };
    // }
    edit () {
      this.setState ({edit: true});
    }
    save () {
      this.setState ({edit: false});
      this.props.name = this.refs.txt.value;
    }
    rendNorm () {
      return (
        <div>
          {this.props.name}
          <div onClick={this.edit} className='btn btn_edit'>Редактировать</div>
        </div>
      );
    }
    rendEdit () {
      return (
        <div>
          <textarea ref='txt'>{this.props.name}</textarea>
          <div onClick={this.save} className='btn btn_save'>Сохранить</div>
        </div>
      );
    }
    render () {
        if (this.state.edit) {
          return this.rendEdit ();
        } else {
          return this.rendNorm ();
        }
    }


  }
  ReactDOM.render (
    <div>
      <Task name="Azat" />
      <Task name="Azat1" />
      <Task name="Azat2" />
      <Task name="Azat3" />
      <Task name="Azat4" />
    </div>,
    renderhere
  );
