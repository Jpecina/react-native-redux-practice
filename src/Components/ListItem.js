import React, { Component } from "react";
import { CardSection } from "./Common";
import { connect } from "react-redux";
import { Text, TouchableWithoutFeedback, View } from "react-native";
import * as actions from "../actions";

class ListItem extends Component {
  renderDescription() {
    const { library, expanded } = this.props;
    if (expanded) {
      return <Text>{library.description}</Text>;
    }
  }
  render() {
    const { titleStyle } = styles;
    const { id, title } = this.props.library;

    return (
      <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
        <View>
          <CardSection>
            <Text style={titleStyle}>{title}</Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};
const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.library.id;
  return { expanded: expanded };
};

export default connect(mapStateToProps, actions)(ListItem);
