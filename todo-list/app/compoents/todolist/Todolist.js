import React from 'react';
import css from './Todolist.css';
import Listheader from './listheader/Listheader';
import Listbody from './listbody/Listbody';

/**
 * @props
 *  group {obj}
 *   keys
 *    id
 *    groupName
 *    todoList
 *   commitTodoName (function)
 *   deleteGroup (function)
 *   finishTodo (function)
 *   cancelFinishTodo (function)
 *   removeTodo (function)
 */

class Todolist extends React.Component {

  render() {
    const group = this.props.group;

    console.log(this.props.todoList)

    return (
      <div className={css.todolist}>
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h3 className="panel-title">
              { group.groupName }
            </h3>
            <small>{ group.createTime.string }</small>
          </div>
          <div className="panel-body">
            <Listheader groupId={ group.id }
                        commitTodoName={ this.props.commitTodoName }
                        deleteGroup={ this.props.deleteGroup }/>
            <Listbody todoList={ this.props.todoList }
                      finishTodo={ this.props.finishTodo }
                      cancelFinishTodo={ this.props.cancelFinishTodo }
                      removeTodo={ this.props.removeTodo }/>
          </div>
        </div>
      </div>
    )
  }

}

export default Todolist