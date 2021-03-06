import React, { Component } from 'react';
import {
    IonItem,
    IonLabel,
    IonIcon
} from '@ionic/react';
import { TodoListItemModel } from '../../../models/TodoListItem';

interface ITodoListItemModel {
    item: TodoListItemModel,
    onFavorite: Function
}

class TodoListItem extends Component<ITodoListItemModel, ITodoListItemModel> {

    render() {
        return (
            <IonItem key={this.props.item.id} onClick={() => this.props.onFavorite(this.props.item)}>
                <IonLabel>
                    {this.props.item.name}
                </IonLabel>
                {this.props.item.isFavorite ?
                    <IonIcon name="heart" slot="end" ></IonIcon> : <IonIcon name="heart-empty"></IonIcon>}
            </IonItem>
        );
    }

}
export default TodoListItem;